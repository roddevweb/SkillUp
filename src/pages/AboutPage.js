import React from 'react';

export default function AboutPage() {
  return (
    <div style={{
      maxWidth: 800,
      margin: '40px auto',
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 4px 32px rgba(7,145,163,0.08)',
      padding: '2.5rem 2.5rem'
    }}>
      <h1 style={{ textAlign: 'center', color: '#0791A3', fontWeight: 800, marginBottom: 12 }}>
        À propos de <span style={{ color: '#ffb300' }}>SkillUp</span>
      </h1>
      <p style={{ textAlign: 'center', color: '#232323', fontSize: 20, marginBottom: 32 }}>
        SkillUp est une plateforme web moderne dédiée à l'apprentissage des langues, conçue pour rendre l'acquisition linguistique accessible, efficace et engageante.
      </p>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 32,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 32
      }}>
        <div style={{
          flex: 1,
          minWidth: 260,
          background: '#f7fafd',
          borderRadius: 12,
          padding: '1.5rem',
          boxShadow: '0 2px 8px rgba(7,145,163,0.04)'
        }}>
          <h3 style={{ color: '#0791A3', fontWeight: 700, marginBottom: 8 }}>Des cours variés</h3>
          <p>Du niveau débutant (A1) au niveau avancé (C2), nous proposons des formations structurées dans plusieurs langues : anglais, français, espagnol, mandarin, allemand, et bien d'autres.</p>
        </div>
        <div style={{
          flex: 1,
          minWidth: 260,
          background: '#f7fafd',
          borderRadius: 12,
          padding: '1.5rem',
          boxShadow: '0 2px 8px rgba(7,145,163,0.04)'
        }}>
          <h3 style={{ color: '#0791A3', fontWeight: 700, marginBottom: 8 }}>Contenu interactif</h3>
          <p>Chaque cours est conçu avec du contenu riche : vidéos, dialogues, exercices pratiques et évaluations progressives.</p>
        </div>
        <div style={{
          flex: 1,
          minWidth: 260,
          background: '#f7fafd',
          borderRadius: 12,
          padding: '1.5rem',
          boxShadow: '0 2px 8px rgba(7,145,163,0.04)'
        }}>
          <h3 style={{ color: '#0791A3', fontWeight: 700, marginBottom: 8 }}>Flexibilité totale</h3>
          <p>Apprenez à votre rythme, depuis n'importe quel appareil. Commencez un cours, mettez-le en pause, reprenez quand vous êtes prêt.</p>
        </div>
        <div style={{
          flex: 1,
          minWidth: 260,
          background: '#f7fafd',
          borderRadius: 12,
          padding: '1.5rem',
          boxShadow: '0 2px 8px rgba(7,145,163,0.04)'
        }}>
          <h3 style={{ color: '#0791A3', fontWeight: 700, marginBottom: 8 }}>Suivi personnalisé</h3>
          <p>Une fois connecté, vous avez accès à votre tableau de bord personnel pour suivre vos progrès, vos cours en cours, vos cours terminés, et vos recommandations.</p>
        </div>
      </div>
      <div style={{
        background: '#ffb300',
        borderRadius: 10,
        padding: '1.5rem',
        marginBottom: 32,
        color: '#232323',
        fontWeight: 600,
        fontSize: 18,
        boxShadow: '0 2px 8px rgba(255,179,0,0.08)'
      }}>
        <h2 style={{ color: '#232323', fontWeight: 800, marginBottom: 8 }}>Notre mission</h2>
        <p>
          Favoriser l'apprentissage des langues en ligne par une approche centrée sur l'utilisateur, structurée et inclusive. Nous croyons que chaque apprenant mérite un accompagnement intelligent, clair, et motivant.
        </p>
      </div>
      <div style={{
        background: '#f7fafd',
        borderRadius: 10,
        padding: '1.2rem',
        color: '#0791A3',
        fontWeight: 600,
        fontSize: 17,
        textAlign: 'center'
      }}>
        SkillUp est sécurisé, fiable, et respecte votre vie privée. Vous pouvez vous inscrire gratuitement, suivre des cours gratuits ou payants, et accéder à votre contenu 24/7.
      </div>
    </div>
  );
} 