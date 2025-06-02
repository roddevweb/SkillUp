import React, { useState } from 'react';

const TABS = [
  { key: 'users', label: 'Utilisateurs' },
  { key: 'courses', label: 'Cours' },
  { key: 'quizzes', label: 'Quizz' },
];

export default function AdminPage() {
  const [tab, setTab] = useState('users');

  // TODO: Remplacer les données mockées par des appels à l'API backend
  const users = [
    { id: 1, nom: 'Alice', email: 'alice@email.com' },
    { id: 2, nom: 'Bob', email: 'bob@email.com' },
  ];
  const courses = [
    { id: 1, nom: 'Anglais Débutant', langue: 'Anglais', niveau: 'Débutant' },
    { id: 2, nom: 'Français Intermédiaire', langue: 'Français', niveau: 'Intermédiaire' },
  ];
  const quizzes = [
    { id: 1, course: 'Anglais Débutant', question: "Comment dit-on 'Bonjour' en anglais ?" },
    { id: 2, course: 'Français Intermédiaire', question: "Traduisez 'Hello' en français." },
  ];

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '2.5rem 2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Espace d'administration</h2>
      <div style={{ display: 'flex', gap: 16, marginBottom: 32, justifyContent: 'center' }}>
        {TABS.map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            style={{
              background: tab === t.key ? '#0791A3' : '#f7fafd',
              color: tab === t.key ? '#fff' : '#0791A3',
              border: 'none',
              borderRadius: 8,
              padding: '10px 28px',
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tab === 'users' && (
        <>
          {/* TODO: Remplacer ce tableau par les données réelles des utilisateurs depuis l'API backend */}
          <div style={{ marginBottom: 16, fontWeight: 500 }}>Utilisateurs</div>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 16 }}>
            <thead>
              <tr style={{ background: '#f7fafd' }}>
                <th style={{ padding: 8, border: '1px solid #eee' }}>Nom</th>
                <th style={{ padding: 8, border: '1px solid #eee' }}>Email</th>
                <th style={{ padding: 8, border: '1px solid #eee' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td style={{ padding: 8, border: '1px solid #eee' }}>{u.nom}</td>
                  <td style={{ padding: 8, border: '1px solid #eee' }}>{u.email}</td>
                  <td style={{ padding: 8, border: '1px solid #eee' }}>
                    <button style={{ marginRight: 8 }}>Éditer</button>
                    <button style={{ color: '#d32f2f' }}>Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button style={{ background: '#0791A3', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontWeight: 600, fontSize: 15 }}>Ajouter un utilisateur</button>
        </>
      )}
      {tab === 'courses' && (
        <>
          {/* TODO: Remplacer ce tableau par les données réelles des cours depuis l'API backend */}
          <div style={{ marginBottom: 16, fontWeight: 500 }}>Cours</div>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 16 }}>
            <thead>
              <tr style={{ background: '#f7fafd' }}>
                <th style={{ padding: 8, border: '1px solid #eee' }}>Nom</th>
                <th style={{ padding: 8, border: '1px solid #eee' }}>Langue</th>
                <th style={{ padding: 8, border: '1px solid #eee' }}>Niveau</th>
                <th style={{ padding: 8, border: '1px solid #eee' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(c => (
                <tr key={c.id}>
                  <td style={{ padding: 8, border: '1px solid #eee' }}>{c.nom}</td>
                  <td style={{ padding: 8, border: '1px solid #eee' }}>{c.langue}</td>
                  <td style={{ padding: 8, border: '1px solid #eee' }}>{c.niveau}</td>
                  <td style={{ padding: 8, border: '1px solid #eee' }}>
                    <button style={{ marginRight: 8 }}>Éditer</button>
                    <button style={{ color: '#d32f2f' }}>Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button style={{ background: '#0791A3', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontWeight: 600, fontSize: 15 }}>Ajouter un cours</button>
        </>
      )}
      {tab === 'quizzes' && (
        <>
          {/* TODO: Remplacer ce tableau par les données réelles des quizz depuis l'API backend */}
          <div style={{ marginBottom: 16, fontWeight: 500 }}>Quizz</div>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 16 }}>
            <thead>
              <tr style={{ background: '#f7fafd' }}>
                <th style={{ padding: 8, border: '1px solid #eee' }}>Cours</th>
                <th style={{ padding: 8, border: '1px solid #eee' }}>Question</th>
                <th style={{ padding: 8, border: '1px solid #eee' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {quizzes.map(q => (
                <tr key={q.id}>
                  <td style={{ padding: 8, border: '1px solid #eee' }}>{q.course}</td>
                  <td style={{ padding: 8, border: '1px solid #eee' }}>{q.question}</td>
                  <td style={{ padding: 8, border: '1px solid #eee' }}>
                    <button style={{ marginRight: 8 }}>Éditer</button>
                    <button style={{ color: '#d32f2f' }}>Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button style={{ background: '#0791A3', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontWeight: 600, fontSize: 15 }}>Ajouter un quizz</button>
        </>
      )}
    </div>
  );
} 