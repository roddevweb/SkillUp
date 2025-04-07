import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous implémenteriez la logique de connexion
    console.log('Données de connexion soumises:', formData);
  };

  return (
    <div className="login-page py-5">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col lg={5} md={6}>
            <Card className="border-0 shadow-sm p-4">
              <Card.Body>
                <h2 className="text-center mb-3">Connexion</h2>
                <p className="text-center text-muted mb-4">
                  Bienvenue sur SkillUp, connectez-vous pour continuer
                </p>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Adresse email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="py-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Mot de passe"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="py-2"
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      label="Se souvenir de moi"
                    />
                    <Link to="/forgot-password" className="text-primary small">
                      Mot de passe oublié?
                    </Link>
                  </div>

                  <div className="d-grid gap-2">
                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="btn-action py-2"
                    >
                      Se connecter
                    </Button>
                  </div>
                </Form>

                <div className="text-center mt-3 mb-3">
                  <span className="divider-text">ou</span>
                </div>

                <div className="social-login">
                  <Button variant="outline-secondary" className="w-100 mb-2 d-flex align-items-center justify-content-center">
                    <i className="bi bi-google me-2"></i> Continuer avec Google
                  </Button>
                  <Button variant="outline-secondary" className="w-100 d-flex align-items-center justify-content-center">
                    <i className="bi bi-facebook me-2"></i> Continuer avec Facebook
                  </Button>
                </div>

                <div className="text-center mt-4">
                  <p className="mb-0">
                    Pas encore de compte ? <Link to="/register" className="text-primary">S'inscrire</Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={5} className="d-none d-md-block">
            <div className="login-image-container">
              <img 
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
                alt="Apprendre en ligne" 
                className="img-fluid rounded login-image" 
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage; 