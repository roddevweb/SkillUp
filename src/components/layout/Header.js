import React from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../../assets/images/logo-skillup.png';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

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
            <Nav.Link as={Link} to="/courses" className="nav-link px-3">Cours</Nav.Link>
            <Nav.Link as={Link} to="/languages" className="nav-link px-3">Langues</Nav.Link>
            <Nav.Link as={Link} to="/pricing" className="nav-link px-3">Tarifs</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link px-3">À propos</Nav.Link>
          </Nav>
          <div className="ms-auto">
            <Button className="btn-action" onClick={() => navigate('/login')}>Se connecter</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header; 