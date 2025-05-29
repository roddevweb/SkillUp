using SkillUp.Models;

namespace Skillup.Backend.Models
{
    public class Profil
    {
        public int Id { get; set; }
        public int utilisateur_Id { get; set; }
        public string infoPersonnel { get; set; }
        public string progression { get; set; }

    }
}
