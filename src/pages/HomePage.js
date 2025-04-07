import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FeatureIcon from '../components/common/FeatureIcon';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Section Héro */}
      <section className="hero-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="mb-3">Maîtrisez de nouvelles langues, ouvrez-vous au monde</h1>
              <p className="mb-4">Des leçons interactives, une communauté active, votre progression assurée</p>
              <Button className="btn-action" onClick={() => navigate('/register')}>Commencer gratuitement</Button>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                alt="Étudiants apprenant des langues ensemble" 
                className="img-fluid rounded shadow" 
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section Langues */}
      <section className="languages-section py-5">
        <Container className="text-center">
          <h2 className="mb-5">Plus de 10 langues à découvrir</h2>
          <Row className="justify-content-center">
            {[
              { name: 'Anglais', flag: '🇬🇧' },
              { name: 'Espagnol', flag: '🇪🇸' },
              { name: 'Allemand', flag: '🇩🇪' },
              { name: 'Italien', flag: '🇮🇹' },
              { name: 'Japonais', flag: '🇯🇵' },
              { name: 'Chinois', flag: '🇨🇳' }
            ].map((language, index) => (
              <Col key={index} xs={6} md={2} className="mb-4">
                <div className="language-icon mb-2">
                  <span>{language.flag}</span>
                </div>
                <p>{language.name}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Section Caractéristiques */}
      <section className="features-section py-5 bg-light">
        <Container className="text-center">
          <Row className="justify-content-center">
            <Col md={4} className="mb-4">
              <div className="feature-icon mb-3">
                <FeatureIcon type="lessons" />
              </div>
              <h3>Leçons interactives</h3>
              <p>Apprenez à votre rythme avec des exercices personnalisés</p>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-icon mb-3">
                <FeatureIcon type="progress" />
              </div>
              <h3>Suivi de progression</h3>
              <p>Visualisez vos progrès et votre évolution</p>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-icon mb-3">
                <FeatureIcon type="community" />
              </div>
              <h3>Communauté active</h3>
              <p>Échangez avec des apprenants du monde entier</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section Témoignages */}
      <section className="testimonials-section py-5">
        <Container className="text-center">
          <h2 className="mb-5">Ce que disent nos utilisateurs</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="user-avatar mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                      alt="Marie L." 
                      className="rounded-circle" 
                    />
                  </div>
                  <Card.Title>Marie L.</Card.Title>
                  <Card.Text>SkillUp m'a permis d'apprendre l'espagnol en seulement 6 mois !</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="user-avatar mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                      alt="Thomas R." 
                      className="rounded-circle" 
                    />
                  </div>
                  <Card.Title>Thomas R.</Card.Title>
                  <Card.Text>Une méthode efficace et motivante pour progresser</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="user-avatar mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                      alt="Julie M." 
                      className="rounded-circle" 
                    />
                  </div>
                  <Card.Title>Julie M.</Card.Title>
                  <Card.Text>J'adore la communauté et les échanges culturels</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage; 