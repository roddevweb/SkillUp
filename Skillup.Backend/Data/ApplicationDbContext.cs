using Microsoft.EntityFrameworkCore;
using Skillup.Backend.Models;
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

        public DbSet<Profil> Profil { get; set; }

        public DbSet<CoursLangue> CoursLangue { get; set; }

        public DbSet<Administrateur> Administrateur { get; set; }

    }
}
