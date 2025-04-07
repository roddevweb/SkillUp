import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RegisterPage.css';
// Remplacer l'image locale par une URL externe
// import learnImage from '../assets/images/love-to-learn.jpg';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
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
    // Ici, vous implémenteriez la logique d'inscription
    console.log('Données du formulaire soumises:', formData);
  };

  return (
    <div className="register-page py-5">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col lg={5} md={6}>
            <Card className="border-0 shadow-sm p-4">
              <Card.Body>
                <h2 className="text-center mb-3">Créer votre compte</h2>
                <p className="text-center text-muted mb-4">
                  Rejoignez SkillUp et commencez votre voyage linguistique
                </p>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Nom complet"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="py-2"
                    />
                  </Form.Group>

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

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="password"
                      placeholder="Confirmer le mot de passe"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="py-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Check
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      required
                      label="J'accepte les conditions d'utilisation"
                      className="terms-checkbox"
                    />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="btn-action py-2"
                      disabled={!formData.acceptTerms}
                    >
                      S'inscrire
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
                    Déjà un compte ? <Link to="/login" className="text-primary">Se connecter</Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={5} className="d-none d-md-block">
            <div className="register-image-container">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Love to Learn" 
                className="img-fluid rounded register-image" 
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage; 