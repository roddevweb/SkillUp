import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Alert, Form } from 'react-bootstrap';

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [deletingId, setDeletingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [addForm, setAddForm] = useState({ nom: '', email: '', motDePasse: '' });
  const [editForm, setEditForm] = useState({ id: null, nom: '', email: '' });
  const [formError, setFormError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  // Récupère la liste des utilisateurs depuis le backend
  const fetchUsers = () => {
    setLoading(true);
    axios.get('http://localhost:5223/api/utilisateurs')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Erreur lors du chargement des utilisateurs");
        setLoading(false);
      });
  };

  // Ouvre le modal de confirmation
  const handleShowModal = (user) => {
    setUserToDelete(user);
    setShowModal(true);
  };

  // Ferme le modal
  const handleCloseModal = () => {
    setShowModal(false);
    setUserToDelete(null);
  };

  // Supprime un utilisateur après confirmation
  const handleDelete = () => {
    if (!userToDelete) return;
    setDeletingId(userToDelete.id);
    axios.delete(`http://localhost:5223/api/utilisateur/${userToDelete.id}`)
      .then(() => {
        setSuccess(`Utilisateur "${userToDelete.nom}" supprimé avec succès !`);
        setError('');
        fetchUsers();
        setDeletingId(null);
        handleCloseModal();
        setTimeout(() => setSuccess(''), 2500);
      })
      .catch(() => {
        setError("Erreur lors de la suppression de l'utilisateur");
        setSuccess('');
        setDeletingId(null);
        handleCloseModal();
      });
  };

  // Ouvre le modal d'ajout
  const handleShowAddModal = () => {
    setAddForm({ nom: '', email: '', motDePasse: '' });
    setFormError('');
    setShowAddModal(true);
  };

  // Ouvre le modal d'édition
  const handleShowEditModal = (user) => {
    setEditForm({ id: user.id, nom: user.nom, email: user.email });
    setFormError('');
    setShowEditModal(true);
  };

  // Ajoute un utilisateur
  const handleAddUser = async () => {
    if (!addForm.nom.trim() || !addForm.email.trim() || !addForm.motDePasse.trim()) {
      setFormError('Tous les champs sont obligatoires.');
      return;
    }
    try {
      await axios.post('http://localhost:5223/api/Auth/register', {
        fullName: addForm.nom,
        email: addForm.email,
        password: addForm.motDePasse,
        confirmPassword: addForm.motDePasse,
        acceptTerms: true
      });
      setShowAddModal(false);
      setSuccess('Utilisateur ajouté avec succès !');
      fetchUsers();
      setTimeout(() => setSuccess(''), 2500);
    } catch (err) {
      setFormError("Erreur lors de l'ajout de l'utilisateur.");
    }
  };

  // Édite un utilisateur
  const handleEditUser = async () => {
    if (!editForm.nom.trim() || !editForm.email.trim()) {
      setFormError('Nom et email sont obligatoires.');
      return;
    }
    try {
      await axios.put(`http://localhost:5223/api/utilisateur/${editForm.id}`, {
        nom: editForm.nom,
        email: editForm.email
      });
      setShowEditModal(false);
      setSuccess('Utilisateur modifié avec succès !');
      fetchUsers();
      setTimeout(() => setSuccess(''), 2500);
    } catch (err) {
      setFormError("Erreur lors de la modification de l'utilisateur.");
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #f7fafd 60%, #e3f2fd 100%)', padding: '60px 0' }}>
      <div style={{ maxWidth: 950, margin: '40px auto', background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px rgba(7,145,163,0.10)', padding: '2.5rem 2.5rem', position: 'relative' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 32, fontWeight: 800, fontSize: 34, letterSpacing: 0.5, color: '#0791A3' }}>Espace d'administration</h2>
        <div style={{ display: 'flex', gap: 16, marginBottom: 36, justifyContent: 'center' }}>
          <button
            style={{
              background: '#0791A3',
              color: '#fff',
              border: 'none',
              borderRadius: 10,
              padding: '12px 36px',
              fontWeight: 700,
              fontSize: 18,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(7,145,163,0.08)',
              transition: 'all 0.2s',
            }}
            disabled
          >
            Utilisateurs
          </button>
        </div>
        <div style={{ marginBottom: 18, fontWeight: 600, fontSize: 18, color: '#232323' }}>Utilisateurs</div>
        {success && <Alert variant="success">{success}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        {loading ? (
          <div>Chargement...</div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 18, background: '#fafdff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 8px rgba(7,145,163,0.04)' }}>
              <thead>
                <tr style={{ background: '#e3f2fd' }}>
                  <th style={{ padding: 12, border: 'none', fontWeight: 700, fontSize: 17, color: '#0791A3', textAlign: 'left' }}>Nom</th>
                  <th style={{ padding: 12, border: 'none', fontWeight: 700, fontSize: 17, color: '#0791A3', textAlign: 'left' }}>Email</th>
                  <th style={{ padding: 12, border: 'none', fontWeight: 700, fontSize: 17, color: '#0791A3', textAlign: 'left' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, idx) => (
                  <tr key={u.id} style={{ background: idx % 2 === 0 ? '#fff' : '#f7fafd' }}>
                    <td style={{ padding: 12, border: 'none', fontSize: 16 }}>{u.nom}</td>
                    <td style={{ padding: 12, border: 'none', fontSize: 16 }}>{u.email}</td>
                    <td style={{ padding: 12, border: 'none' }}>
                      <button style={{
                        marginRight: 8,
                        background: 'none',
                        border: 'none',
                        color: '#0791A3',
                        fontWeight: 700,
                        fontSize: 16,
                        padding: '6px 12px',
                        borderRadius: 6,
                        cursor: 'pointer',
                        transition: 'text-decoration 0.2s',
                      }}
                        onMouseOver={e => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseOut={e => e.currentTarget.style.textDecoration = 'none'}
                        onClick={() => handleShowEditModal(u)}
                      >Éditer</button>
                      <button style={{
                        background: 'none',
                        border: 'none',
                        color: '#d32f2f',
                        fontWeight: 700,
                        fontSize: 16,
                        padding: '6px 12px',
                        borderRadius: 6,
                        cursor: 'pointer',
                        transition: 'text-decoration 0.2s',
                        opacity: deletingId === u.id ? 0.5 : 1
                      }}
                        onClick={() => handleShowModal(u)}
                        disabled={deletingId === u.id}
                        onMouseOver={e => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseOut={e => e.currentTarget.style.textDecoration = 'none'}
                      >{deletingId === u.id ? 'Suppression...' : 'Supprimer'}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 18 }}>
          <Button style={{ background: '#0791A3', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 700, fontSize: 17, boxShadow: '0 2px 8px rgba(7,145,163,0.08)' }} onClick={handleShowAddModal}>
            Ajouter un utilisateur
          </Button>
        </div>
        {/* Modal de confirmation de suppression */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {userToDelete && (
              <span>Êtes-vous sûr de vouloir supprimer l'utilisateur <b>"{userToDelete.nom}"</b> ?<br/>Cette action est irréversible.</span>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Annuler
            </Button>
            <Button variant="danger" onClick={handleDelete} disabled={deletingId === (userToDelete && userToDelete.id)}>
              {deletingId === (userToDelete && userToDelete.id) ? 'Suppression...' : 'Supprimer'}
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Modal d'ajout d'utilisateur */}
        <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter un utilisateur</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" value={addForm.nom} onChange={e => setAddForm({ ...addForm, nom: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={addForm.email} onChange={e => setAddForm({ ...addForm, email: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" value={addForm.motDePasse} onChange={e => setAddForm({ ...addForm, motDePasse: e.target.value })} />
              </Form.Group>
              {formError && <Alert variant="danger">{formError}</Alert>}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowAddModal(false)}>Annuler</Button>
            <Button variant="primary" onClick={handleAddUser}>Ajouter</Button>
          </Modal.Footer>
        </Modal>
        {/* Modal d'édition d'utilisateur */}
        <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Éditer l'utilisateur</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" value={editForm.nom} onChange={e => setEditForm({ ...editForm, nom: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={editForm.email} onChange={e => setEditForm({ ...editForm, email: e.target.value })} />
              </Form.Group>
              {formError && <Alert variant="danger">{formError}</Alert>}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowEditModal(false)}>Annuler</Button>
            <Button variant="primary" onClick={handleEditUser}>Enregistrer</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
} 