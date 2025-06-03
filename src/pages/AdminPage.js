import React from 'react';

export default function AdminPage() {
  // TODO: Remplacer les données mockées par des appels à l'API backend
  const users = [
    { id: 1, nom: 'Alice', email: 'alice@email.com' },
    { id: 2, nom: 'Bob', email: 'bob@email.com' },
  ];

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '2.5rem 2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Espace d'administration</h2>
      <div style={{ display: 'flex', gap: 16, marginBottom: 32, justifyContent: 'center' }}>
        <button
          style={{
            background: '#0791A3',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 28px',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          disabled
        >
          Utilisateurs
        </button>
      </div>
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
                <button style={{
                  marginRight: 8,
                  background: 'none',
                  border: 'none',
                  color: '#0791A3',
                  fontWeight: 600,
                  fontSize: 15,
                  padding: '6px 12px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  transition: 'text-decoration 0.2s',
                }}
                onMouseOver={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseOut={e => e.currentTarget.style.textDecoration = 'none'}
                >Éditer</button>
                <button style={{
                  background: 'none',
                  border: 'none',
                  color: '#d32f2f',
                  fontWeight: 600,
                  fontSize: 15,
                  padding: '6px 12px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  transition: 'text-decoration 0.2s',
                }}
                onMouseOver={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseOut={e => e.currentTarget.style.textDecoration = 'none'}
                >Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button style={{ background: '#0791A3', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontWeight: 600, fontSize: 15 }}>Ajouter un utilisateur</button>
    </div>
  );
} 