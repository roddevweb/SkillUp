using Microsoft.AspNetCore.Mvc;
using SkillUp.Models;
using System.Threading.Tasks;
using System.Linq;
using Skillup.Backend.Data;

namespace SkillUp.Controllers
{
    public class AccountController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AccountController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("api/login")]
        public async Task<IActionResult> Login([FromBody] LoginViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var utilisateur = _context.Utilisateur
                .FirstOrDefault(u => u.Email == model.Email);

            if (utilisateur == null || utilisateur.MotDePasse != model.Password)
            {
                return Unauthorized(new { message = "Email ou mot de passe incorrect." });
            }

            return Ok(new
            {
                id = utilisateur.Id,
                nom = utilisateur.Nom,
                email = utilisateur.Email
            });
        }
    }
}
