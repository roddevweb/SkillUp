using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using static System.Net.Mime.MediaTypeNames;
using System.Data.SqlTypes;

public class CoursLangue
{
	[Key]
	public int Id { get; set; }

	[Required]
	public string Langue { get; set; }

	[Required]
	public string Niveau { get; set; }

	public string Contenu { get; set; }

    // Olga : 
    // CoursLangue entity has properties (EnCours, Termine) that do not exist in your MySQL table.
    //Your table only has:
    //•	id(int, PK, auto-increment)
    //•	langue(varchar)
    //•	niveau(varchar, nullable)
    //•	contenu(text, nullable)

    //public bool EnCours { get; set; } = false;
    //public bool Termine { get; set; } = false;

    //public void CommencerCours()
    //{
    //	if (Termine)
    //		throw new InvalidOperationException("Le cours est déjà terminé.");
    //	EnCours = true;
    //}

    //   public void TerminerCours()
    //{
    //	if (!EnCours)
    //		throw new InvalidOperationException("Le cours n’a pas encore commencé.");
    //	EnCours = false;
    //	Termine = true;
    //}
}
