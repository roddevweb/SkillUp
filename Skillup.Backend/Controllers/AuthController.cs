using Microsoft.AspNetCore.Mvc; 
using Microsoft.EntityFrameworkCore;
using Skillup.Backend.Data;
using SkillUp.DTOs;
using SkillUp.Models;
using System.Net.Mail;
using System.Net;
using System.Security.Cryptography;
using System.Text;

namespace SkillUp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;

        public AuthController(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            if (!dto.AcceptTerms)
                return BadRequest(new { message = "Les conditions doivent être acceptées." });

            if (await _context.Utilisateur.AnyAsync(u => u.Email == dto.Email))
                return BadRequest(new { message = "Cet email est déjà utilisé." });

            var utilisateur = new Utilisateur
            {
                Nom = dto.FullName,
                Email = dto.Email,
                MotDePasse = dto.Password 
            };

            _context.Utilisateur.Add(utilisateur);
            await _context.SaveChangesAsync();
            await SendRegistrationEmailAsync(utilisateur.Email, utilisateur.Nom);
            return Ok(new { message = "Inscription réussie." });
        }

        private async Task SendRegistrationEmailAsync(string toEmail, string userName)
        {
            var emailSettings = new
            {
                SmtpServer = _configuration["EmailSettings:SmtpServer"],
                SmtpPort = int.Parse(_configuration["EmailSettings:SmtpPort"]),
                SenderName = _configuration["EmailSettings:SenderName"],
                SenderEmail = _configuration["EmailSettings:SenderEmail"],
                SenderPassword = _configuration["EmailSettings:SenderPassword"]
            };

            using var client = new SmtpClient(emailSettings.SmtpServer, emailSettings.SmtpPort)
            {
                Credentials = new NetworkCredential(emailSettings.SenderEmail, emailSettings.SenderPassword),
                EnableSsl = true
            };

            var mail = new MailMessage
            {
                From = new MailAddress(emailSettings.SenderEmail, emailSettings.SenderName),
                Subject = "Inscription réussie",
                Body = $"Bonjour {userName},\n\nVotre inscription a réussi !\n\nMerci d'avoir rejoint SkillUp.",
                IsBodyHtml = false
            };
            mail.To.Add(toEmail);

            await client.SendMailAsync(mail);
        }

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");
            return Ok(new { message = "Déconnexion réussie." });
        }
    }
}
