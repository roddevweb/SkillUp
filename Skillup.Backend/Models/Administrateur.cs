using System.ComponentModel.DataAnnotations;

namespace SkillUp.Models
{
    public class Administrateur
    {
        [Key]
        public int idAdmin { get; set; }
        [Required]
        public string nom { get; set; }
        [Required]
        public string email { get; set; }
        [Required]
        public string motDePass { get; set; }
    }
} 