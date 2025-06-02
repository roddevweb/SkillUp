using System.Collections.Generic;

public class ListeCours
{
	private List<CoursLangue> _cours;

	public ListeCours()
	{
		_cours = new List<CoursLangue>();
	}

	public void AjouterCours(CoursLangue cours)
	{
		_cours.Add(cours);
	}

	public void SupprimerCours(CoursLangue cours)
	{
		_cours.Remove(cours);
	}

	public IEnumerable<CoursLangue> ObtenirCours()
	{
		return _cours;
	}
}
