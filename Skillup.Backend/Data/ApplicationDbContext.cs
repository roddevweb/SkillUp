using Microsoft.EntityFrameworkCore;
using SkillUp.Models;

namespace Skillup.Backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Utilisateur> Utilisateur { get; set; }
    }
}
