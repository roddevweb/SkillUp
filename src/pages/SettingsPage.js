import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const tabs = [
  { key: 'compte', label: 'Compte', icon: '👤' },
  { key: 'apprentissage', label: 'Apprentissage', icon: '📘' },
  { key: 'notifications', label: 'Notifications', icon: '🔔' },
  { key: 'confidentialite', label: 'Confidentialité', icon: '🔒' },
  { key: 'abonnement', label: 'Abonnement', icon: '💳' },
];

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('compte');
  const navigate = useNavigate();

  // Mock user data
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh', padding: '40px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container style={{ background: '#fff', borderRadius: 16, padding: 0, maxWidth: 1000, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', position: 'relative' }}>
        <Button
          variant="outline-secondary"
          style={{ position: 'absolute', top: 24, right: 24, zIndex: 2 }}
          onClick={() => {
            localStorage.removeItem('authToken');
            navigate('/login');
          }}
        >
          Se déconnecter
        </Button>
        <Row className="g-0">
          <Col md={3} className="border-end p-4">
            <h4 className="mb-2">Paramètres</h4>
            <div className="text-muted mb-4" style={{ fontSize: 14 }}>Personnalisez votre expérience d'apprentissage</div>
            <Nav className="flex-column">
              {tabs.map(tab => (
                <Nav.Link
                  key={tab.key}
                  active={activeTab === tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`mb-2 ${activeTab === tab.key ? 'bg-teal text-white rounded' : ''}`}
                  style={{ fontWeight: 500, display: 'flex', alignItems: 'center' }}
                >
                  <span style={{ fontSize: 18, marginRight: 8 }}>{tab.icon}</span> {tab.label}
                </Nav.Link>
              ))}
            </Nav>
            <Button variant="outline-secondary" className="mt-4" onClick={() => navigate(-1)}>
              ← Retour
            </Button>
          </Col>
          <Col md={9} className="p-4">
            {activeTab === 'compte' && (
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <h5 className="mb-4">Informations personnelles</h5>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Nom d'utilisateur</Form.Label>
                      <Form.Control type="text" value={user.username} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" value={user.email} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Mot de passe</Form.Label>
                      <Form.Control type="password" value={user.password} readOnly />
                    </Form.Group>
                  </Form>
                  <hr />
                  <Button variant="outline-danger" size="sm">Supprimer le compte</Button>
                </Card.Body>
              </Card>
            )}
            {/* Outras abas podem ser implementadas aqui */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SettingsPage; 