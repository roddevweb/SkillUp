import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Modal } from 'react-bootstrap';
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
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMessage('Le nom complet est requis');
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage("Veuillez inclure un '@' dans l'adresse courriel");
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas');
      return;
    }

    if (!formData.acceptTerms) {
      setErrorMessage("Veuillez accepter les conditions d'utilisation");
      return;
    }

      try {
    const response = await fetch('http://localhost:5223/api/Auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        acceptTerms: formData.acceptTerms
      }),
    });

    const result = await response.json();
    if (!response.ok) {
      setErrorMessage(result.message || 'Erreur lors de l’inscription');
    } else {
      setShowSuccess(true);
      // Redirection vers la page de connexion (à compléter si nécessaire)
      // window.location.href = '/login'; 
    }
  } catch (err) {
    setErrorMessage('Erreur serveur');
  }
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

                {errorMessage && (
                  <Alert variant="danger" className="mb-3">
                    {errorMessage}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit} noValidate>
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

        {/* Modal de sucesso */}
        <Modal show={showSuccess} onHide={() => { setShowSuccess(false); window.location.href = '/login'; }} centered>
          <Modal.Header closeButton>
            <Modal.Title>Inscription réussie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Votre compte a été créé avec succès !<br/>Vous pouvez maintenant vous connecter.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => { setShowSuccess(false); window.location.href = '/login'; }}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default RegisterPage; 