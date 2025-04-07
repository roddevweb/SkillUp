import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation simple
    if (!email || !email.includes('@')) {
      setErrorMessage('Veuillez entrer une adresse email valide');
      return;
    }
    
    // Ici, vous implémenteriez la logique d'envoi du lien de réinitialisation
    console.log('Demande de réinitialisation pour:', email);
    
    // Simuler une demande réussie
    setSubmitted(true);
    setErrorMessage('');
  };

  return (
    <div className="forgot-password-page py-5">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col lg={5} md={6}>
            <Card className="border-0 shadow-sm p-4">
              <Card.Body>
                <h2 className="text-center mb-3">Mot de passe oublié</h2>
                
                {!submitted ? (
                  <>
                    <p className="text-center text-muted mb-4">
                      Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe
                    </p>

                    {errorMessage && (
                      <Alert variant="danger" className="mb-3">
                        {errorMessage}
                      </Alert>
                    )}

                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-4">
                        <Form.Control
                          type="email"
                          placeholder="Adresse email"
                          name="email"
                          value={email}
                          onChange={handleChange}
                          required
                          className="py-2"
                        />
                      </Form.Group>

                      <div className="d-grid gap-2">
                        <Button 
                          variant="primary" 
                          type="submit" 
                          className="btn-action py-2"
                        >
                          Envoyer le lien
                        </Button>
                      </div>
                    </Form>
                  </>
                ) : (
                  <>
                    <Alert variant="success" className="mb-4">
                      Si un compte existe avec l'adresse {email}, un email contenant les instructions de réinitialisation a été envoyé.
                    </Alert>
                    <div className="text-center">
                      <p className="mb-0">
                        Vérifiez votre boîte de réception et suivez les instructions.
                      </p>
                    </div>
                  </>
                )}

                <div className="text-center mt-4">
                  <p className="mb-0">
                    <Link to="/login" className="text-primary">
                      Retour à la connexion
                    </Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={6} md={5} className="d-none d-md-block">
            <div className="forgot-password-image-container">
              <img 
                src="https://images.unsplash.com/photo-1616531770192-6eaea74c2456?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Sécurité en ligne" 
                className="img-fluid rounded forgot-password-image" 
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForgotPasswordPage; 