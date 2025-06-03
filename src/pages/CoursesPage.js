import React from 'react';

export default function CoursesPage() {
  return (
    <div style={{
      maxWidth: 900,
      margin: '40px auto',
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 4px 32px rgba(7,145,163,0.08)',
      padding: '2.5rem 2.5rem'
    }}>
      <h1 style={{ textAlign: 'center', color: '#0791A3', fontWeight: 800, marginBottom: 24 }}>
        Nos cours
      </h1>
      <p style={{ textAlign: 'center', color: '#232323', fontSize: 20, marginBottom: 32 }}>
        Découvrez notre catalogue de cours par niveau et par langue. Chaque parcours est structuré pour vous accompagner du niveau débutant au niveau avancé.
      </p>
      {/* TODO: Remplacer par la liste dynamique des cours depuis l'API backend */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 32
      }}>
        <div style={{
          background: '#f7fafd',
          borderRadius: 12,
          padding: '1.7rem 1.2rem',
          boxShadow: '0 2px 8px rgba(7,145,163,0.04)'
        }}>
          <h3 style={{ color: '#0791A3', fontWeight: 700 }}>Anglais Débutant</h3>
          <p>Commencez à apprendre l'anglais avec des vidéos, des exercices et des quiz interactifs.</p>
        </div>
        <div style={{
          background: '#f7fafd',
          borderRadius: 12,
          padding: '1.7rem 1.2rem',
          boxShadow: '0 2px 8px rgba(7,145,163,0.04)'
        }}>
          <h3 style={{ color: '#0791A3', fontWeight: 700 }}>Français Intermédiaire</h3>
          <p>Perfectionnez votre français avec des dialogues, de la grammaire appliquée et des mises en situation.</p>
        </div>
        <div style={{
          background: '#f7fafd',
          borderRadius: 12,
          padding: '1.7rem 1.2rem',
          boxShadow: '0 2px 8px rgba(7,145,163,0.04)'
        }}>
          <h3 style={{ color: '#0791A3', fontWeight: 700 }}>Espagnol Avancé</h3>
          <p>Atteignez un niveau professionnel en espagnol avec des simulations et des analyses de texte.</p>
        </div>
      </div>
    </div>
  );
} 