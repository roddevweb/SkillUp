using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class CoursController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public CoursController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetCours()
    {
        var cours = await _context.CoursLangues.ToListAsync();
        return Ok(cours);
    }

    [HttpPost]
    public async Task<IActionResult> AddCours([FromBody] CoursLangue cours)
    {
        _context.CoursLangues.Add(cours);
        await _context.SaveChangesAsync();
        return Ok(cours);
    }

    [HttpPut("{id}/commencer")]
    public async Task<IActionResult> CommencerCours(int id)
    {
        var cours = await _context.CoursLangues.FindAsync(id);
        if (cours == null) return NotFound();

        cours.CommencerCours();
        await _context.SaveChangesAsync();

        return Ok(cours);
    }

    [HttpPut("{id}/terminer")]
    public async Task<IActionResult> TerminerCours(int id)
    {
        var cours = await _context.CoursLangues.FindAsync(id);
        if (cours == null) return NotFound();

        cours.TerminerCours();
        await _context.SaveChangesAsync();

        return Ok(cours);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCours(int id)
    {
        var cours = await _context.CoursLangues.FindAsync(id);
        if (cours == null) return NotFound();

        _context.CoursLangues.Remove(cours);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
