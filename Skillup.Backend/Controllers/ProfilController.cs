namespace Skillup.Backend.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using SkillUp.Models;
    using Microsoft.EntityFrameworkCore;
    using global::Skillup.Backend.Models;
    using System;
    using global::Skillup.Backend.Data;

    namespace Skillup.Backend.Controllers
    {
        [ApiController]
        [Route("api/[controller]")]
        public class ProfilController : ControllerBase
        {
            private readonly ApplicationDbContext _context;

            public ProfilController(ApplicationDbContext context)
            {
                _context = context;
            }

            // GET: api/Profil
            [HttpGet]
            public async Task<ActionResult<IEnumerable<Profil>>> GetProfils()
            {
                return await _context.Profil.ToListAsync();
            }

            // GET: api/Profil/5
            [HttpGet("{id}")]
            public async Task<ActionResult<Profil>> GetProfil(int id)
            {
                var profil = await _context.Profil.FindAsync(id);
                if (profil == null)
                {
                    return NotFound();
                }

                return profil;
            }

            // POST: api/Profil
            [HttpPost]
            public async Task<ActionResult<Profil>> PostProfil(Profil profil)
            {
                _context.Profil.Add(profil);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetProfil), new { id = profil.Id }, profil);
            }

            // PUT: api/Profil/5
            [HttpPut("{id}")]
            public async Task<IActionResult> PutProfil(int id, Profil profil)
            {
                if (id != profil.Id)
                    return BadRequest();

                _context.Entry(profil).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!_context.Profil.Any(e => e.Id == id))
                        return NotFound();
                    else
                        throw;
                }

                return NoContent();
            }

            // DELETE: api/Profil/5
            [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteProfil(int id)
            {
                var profil = await _context.Profil.FindAsync(id);
                if (profil == null)
                    return NotFound();

                _context.Profil.Remove(profil);
                await _context.SaveChangesAsync();

                return NoContent();
            }
        }
    }

}
