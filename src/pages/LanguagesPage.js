import React from 'react';

const languages = [
  { name: 'Anglais', flag: '🇬🇧' },
  { name: 'Français', flag: '🇫🇷' },
  { name: 'Espagnol', flag: '🇪🇸' },
  { name: 'Allemand', flag: '🇩🇪' },
  { name: 'Italien', flag: '🇮🇹' },
  { name: 'Mandarin', flag: '🇨🇳' },
];

export default function LanguagesPage() {
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
        Langues disponibles
      </h1>
      <p style={{ textAlign: 'center', color: '#232323', fontSize: 20, marginBottom: 32 }}>
        Apprenez la langue de votre choix parmi notre sélection. D'autres langues seront ajoutées prochainement !
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 24
      }}>
        {languages.map(lang => (
          <div key={lang.name} style={{
            background: '#f7fafd',
            borderRadius: 12,
            padding: '1.2rem',
            textAlign: 'center',
            fontWeight: 600,
            color: '#0791A3',
            fontSize: 18,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: 38, marginBottom: 8 }}>{lang.flag}</span>
            {lang.name}
          </div>
        ))}
      </div>
    </div>
  );
} 