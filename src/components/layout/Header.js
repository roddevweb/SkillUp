import React from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../../assets/images/logo-skillup.png';
import './Header.css';
import { useUser } from '../../context/UserContext';
import { FiSettings } from 'react-icons/fi';

const Header = ({ minimal }) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const userName = user?.nom || '';

  if (minimal) {
    return (
      <Navbar bg="white" expand="lg" className="py-3 border-bottom">
        <Container>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button variant="link" style={{ color: '#232323', fontSize: 22, padding: 0, display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => navigate('/dashboard')}>
              <i className="bi bi-house-door"></i>
              <span style={{ fontSize: 15, fontWeight: 500 }}>Retour au Dashboard</span>
            </Button>
            <div style={{ fontWeight: 600, color: '#888', fontSize: 18, textAlign: 'center', flex: 1 }}>Cours</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontWeight: 500, color: '#232323', fontSize: 16 }}><i className="bi bi-person"></i> {userName || '[Nom de l\'utilisateur]'}</span>
              <Button variant="link" style={{ color: '#232323', fontSize: 22, padding: 0 }} onClick={() => navigate('/settings')}>
                <i className="bi bi-gear"></i>
              </Button>
            </div>
          </div>
        </Container>
      </Navbar>
    );
  }

  return (
    <Navbar bg="white" expand="lg" className="py-3 border-bottom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img 
            src={logoImage} 
            alt="SkillUp Logo" 
            className="logo-image" 
            height="75" 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="nav-link px-3">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/languages" className="nav-link px-3">Langues</Nav.Link>
            <Nav.Link as={Link} to="/tarifs" className="nav-link px-3">Tarifs</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link px-3">À propos</Nav.Link>
          </Nav>
          <div className="ms-auto" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {user && user.id ? (
              <>
                <span style={{ fontWeight: 500, color: '#232323', fontSize: 16 }}><i className="bi bi-person"></i> {userName}</span>
                <Button variant="link" style={{ color: '#232323', fontSize: 22, padding: 0 }} onClick={() => navigate('/settings')} title="Paramètres">
                  <FiSettings />
                </Button>
              </>
            ) : (
              <Button className="btn-action" onClick={() => navigate('/login')}>Se connecter</Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header; 