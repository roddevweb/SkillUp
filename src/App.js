import './App.css';
import { Container, Navbar, Nav, Button, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SkillUp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Accueil</Nav.Link>
              <Nav.Link href="#features">Fonctionnalités</Nav.Link>
              <Nav.Link href="#pricing">Tarifs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Row>
          <Col>
            <h1>Bienvenue sur SkillUp</h1>
            <p>Votre plateforme d'apprentissage personnalisée</p>
            <Button variant="primary">Commencer</Button>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Développement Web</Card.Title>
                <Card.Text>
                  Apprenez les bases du développement web avec HTML, CSS et JavaScript.
                </Card.Text>
                <Button variant="outline-primary">En savoir plus</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>React</Card.Title>
                <Card.Text>
                  Créez des applications web dynamiques avec React.
                </Card.Text>
                <Button variant="outline-primary">En savoir plus</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Design UX/UI</Card.Title>
                <Card.Text>
                  Apprenez à concevoir des interfaces utilisateur intuitives.
                </Card.Text>
                <Button variant="outline-primary">En savoir plus</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
