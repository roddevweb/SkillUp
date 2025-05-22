using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Skillup.Backend.Data;
using SkillUp.DTOs;
using SkillUp.Models;
using System.Security.Cryptography;
using System.Text;

namespace SkillUp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
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

            return Ok(new { message = "Inscription réussie." });
        }

    }
}
