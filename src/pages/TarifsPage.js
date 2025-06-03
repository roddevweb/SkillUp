import React from 'react';

export default function TarifsPage() {
  return (
    <div style={{
      maxWidth: 900,
      margin: '40px auto',
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 4px 32px rgba(7,145,163,0.08)',
      padding: '2.5rem 2.5rem'
    }}>
      <h1 style={{ textAlign: 'center', color: '#0791A3', fontWeight: 800, marginBottom: 12 }}>
        Tarifs
      </h1>
      <p style={{ textAlign: 'center', color: '#232323', fontSize: 20, marginBottom: 32 }}>
        Sur SkillUp, chaque langue dispose de son propre catalogue de cours, structurés par niveau (A1 à C2). Vous ne payez que pour ce que vous suivez, avec la possibilité de tester gratuitement avant de vous engager. Tous les cours de langues suivent la même logique tarifaire :
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 32,
        marginBottom: 40
      }}>
        <div style={{
          background: '#f7fafd',
          borderRadius: 12,
          padding: '1.7rem 1.2rem',
          boxShadow: '0 2px 8px rgba(7,145,163,0.04)',
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 180
        }}>
          <h3 style={{ color: '#0791A3', fontWeight: 700, marginBottom: 8, fontSize: 22 }}>Introduction (A1) <span style={{ color: '#388e3c', fontWeight: 600, fontSize: 20 }}>&mdash; gratuit</span></h3>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>Des leçons de base + exercices interactifs</li>
          </ul>
        </div>
        <div style={{
          background: '#f7fafd',
          borderRadius: 12,
          padding: '1.7rem 1.2rem',
          boxShadow: '0 2px 8px rgba(7,145,163,0.04)',
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 180
        }}>
          <h3 style={{ color: '#0791A3', fontWeight: 700, marginBottom: 8, fontSize: 22 }}>Collection Débutant (A1–A2) <span style={{ color: '#ffb300', fontWeight: 700, fontSize: 20 }}>19 $</span></h3>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>Plusieurs leçons + quiz</li>
            <li>Vocabulaire essentiel, prononciation</li>
          </ul>
        </div>
        <div style={{
          background: '#f7fafd',
          borderRadius: 12,
          padding: '1.7rem 1.2rem',
          boxShadow: '0 2px 8px rgba(7,145,163,0.04)',
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 180
        }}>
          <h3 style={{ color: '#0791A3', fontWeight: 700, marginBottom: 8, fontSize: 22 }}>Collection Intermédiaire (B1–B2) <span style={{ color: '#ffb300', fontWeight: 700, fontSize: 20 }}>29 $</span></h3>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>Dialogue structuré, compréhension orale</li>
            <li>Grammaire appliquée</li>
          </ul>
        </div>
        <div style={{
          background: '#f7fafd',
          borderRadius: 12,
          padding: '1.7rem 1.2rem',
          boxShadow: '0 2px 8px rgba(7,145,163,0.04)',
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 180
        }}>
          <h3 style={{ color: '#0791A3', fontWeight: 700, marginBottom: 8, fontSize: 22 }}>Collection Avancé (C1–C2) <span style={{ color: '#ffb300', fontWeight: 700, fontSize: 20 }}>39 $</span></h3>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>Simulation professionnelle, analyse de texte</li>
            <li>Expression orale fluide</li>
          </ul>
        </div>
      </div>
      <div style={{
        background: '#e3f2fd',
        borderRadius: 10,
        padding: '1.5rem',
        marginBottom: 32,
        color: '#0791A3',
        fontWeight: 600,
        fontSize: 18,
        boxShadow: '0 2px 8px rgba(7,145,163,0.08)'
      }}>
        <h2 style={{ color: '#0791A3', fontWeight: 800, marginBottom: 8 }}>Option Premium <span style={{ color: '#ffb300' }}>29 $/mois</span></h2>
        <ul>
          <li>Accès à un tuteur</li>
          <li>Groupe de conversation</li>
          <li>Révisions guidées</li>
        </ul>
      </div>
      <div style={{
        background: '#f7fafd',
        borderRadius: 10,
        padding: '1.5rem',
        marginBottom: 32,
        color: '#232323',
        fontWeight: 600,
        fontSize: 18,
        boxShadow: '0 2px 8px rgba(7,145,163,0.04)'
      }}>
        <h2 style={{ color: '#0791A3', fontWeight: 800, marginBottom: 8 }}>Formule Multi-langues</h2>
        <ul>
          <li><b>Standard Multi-langues</b> — <span style={{ color: '#ffb300' }}>49 $/mois</span><br />Accès à tous les cours, toutes langues</li>
          <li><b>Premium Multi-langues</b> — <span style={{ color: '#ffb300' }}>69 $/mois</span><br />Ajoute des sessions de tutorat + support prioritaire</li>
        </ul>
      </div>
      <div style={{
        background: '#fffde7',
        borderRadius: 10,
        padding: '1.2rem',
        color: '#232323',
        fontWeight: 500,
        fontSize: 16,
        textAlign: 'left',
        boxShadow: '0 2px 8px rgba(255,179,0,0.08)'
      }}>
        <h3 style={{ color: '#ffb300', fontWeight: 700, marginBottom: 8 }}>Modalités</h3>
        <ul>
          <li>Paiement unique par collection, ou abonnement mensuel</li>
          <li>Contenu disponible à vie pour les collections achetés</li>
          <li>Certificat à la fin de chaque niveau</li>
          <li>Garantie 14 jours satisfait ou remboursé</li>
        </ul>
      </div>
    </div>
  );
} 