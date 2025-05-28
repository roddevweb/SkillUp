import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FiSettings } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const languages = [
  { name: 'Anglais', icon: <span style={{fontSize: 28}}>🇬🇧</span> },
  { name: 'Espagnol', icon: <span style={{fontSize: 28}}>🇪🇸</span> },
  { name: 'Allemand', icon: <span style={{fontSize: 28}}>🇩🇪</span> },
  { name: 'Italien', icon: <span style={{fontSize: 28}}>🇮🇹</span> },
  { name: 'Japonais', icon: <span style={{fontSize: 28}}>🇯🇵</span> },
  { name: 'Chinois', icon: <span style={{fontSize: 28}}>🇨🇳</span> },
];

const levels = [
  { name: 'Parfait pour commencer', icon: <span style={{fontSize: 36, marginRight: 12}}>⭐</span> },
  { name: 'Pour progresser', icon: <span style={{fontSize: 36, marginRight: 12}}>🏆</span> },
  { name: 'Pour se perfectionner', icon: <span style={{fontSize: 36, marginRight: 12}}>🎓</span> },
];

const DashboardPage = () => {
  // TODO: Récupérer le nom de l'utilisateur connecté depuis l'API backend (Utilisateur.nom)
  // Exemple : const userName = userContext.nom;
  const [userName, setUserName] = useState('');

useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await axios.get('http://localhost:5223/api/utilisateur/1') 
      setUserName(response.data.nom);
    } catch (error) {
      console.error('Erreur lors de la récupération du nom:', error);
    }
  };

  fetchUser();
}, []);


  // TODO: Récupérer la liste des langues disponibles depuis l'API backend (CoursLangue.langue)
  // const languages = ...

  // TODO: Récupérer le niveau sélectionné et la langue depuis l'API backend ou le contexte utilisateur (CoursLangue.niveau)
  const [selectedLang, setSelectedLang] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const navigate = useNavigate();

  const handleStart = () => {
    if (selectedLang === 'Anglais' && selectedLevel === 'Parfait pour commencer') {
      navigate('/course/anglais-debutant');
    }
   
  };


  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: '40px 0' }}>
      <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
        <div style={{ width: '100%', maxWidth: 800, background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '2.5rem 2rem', position: 'relative' }}>
          {/* Header Dashboard */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
            <div style={{ fontWeight: 600, color: '#888', fontSize: 18 }}>Dashboard</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontWeight: 500, color: '#232323', fontSize: 16 }}><i className="bi bi-person"></i> {userName}</span>
              <Button variant="link" style={{ color: '#232323', fontSize: 22, padding: 0 }} href="/settings">
                <FiSettings />
              </Button>
            </div>
          </div>
          {/* Contenu principal*/}
          <div className="text-center mb-4" style={{ fontSize: 32, fontWeight: 700 }}>Bienvenue {userName || '[Nom de l\'utilisateur]'} !</div>
          <div className="text-center mb-4" style={{ fontSize: 18, color: '#555' }}>Choisissez la langue que vous souhaitez apprendre pour débuter votre parcours.</div>
          <Row className="justify-content-center mb-4" style={{ gap: 0 }}>
            {languages.map((lang, idx) => (
              <Col xs={6} md={2} key={lang.name} className="mb-3 d-flex justify-content-center">
                <div
                  onClick={() => setSelectedLang(lang.name)}
                  style={{
                    border: selectedLang === lang.name ? '2px solid #0791A3' : '2px solid #eaeaea',
                    borderRadius: 12,
                    background: '#f7fafd',
                    padding: 18,
                    cursor: 'pointer',
                    width: 90,
                    height: 90,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: selectedLang === lang.name ? '0 0 0 2px #0791A3' : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ color: '#0791A3', fontSize: 32, marginBottom: 6 }}>{lang.icon}</div>
                  <div style={{ fontSize: 15, color: '#232323', fontWeight: 500 }}>{lang.name}</div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mb-4" style={{ fontSize: 18, color: '#555' }}>Choisissez votre niveau pour commencer votre apprentissage</div>
          <Row className="justify-content-center mb-4 gx-4">
            {levels.map((level, idx) => (
              <Col xs={12} md={4} key={level.name} className="mb-3 d-flex justify-content-center">
                <div
                  onClick={() => setSelectedLevel(level.name)}
                  style={{
                    border: selectedLevel === level.name ? '2px solid #0791A3' : '2px solid #eaeaea',
                    borderRadius: 16,
                    background: '#f7fafd',
                    padding: '22px 18px',
                    cursor: 'pointer',
                    width: 220,
                    minHeight: 70,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: selectedLevel === level.name ? '0 0 0 2px #0791A3, 0 4px 16px rgba(7,145,163,0.08)' : '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'all 0.2s',
                    overflow: 'hidden',
                    gap: 4,
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(7,145,163,0.12)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = selectedLevel === level.name ? '0 0 0 2px #0791A3, 0 4px 16px rgba(7,145,163,0.08)' : '0 2px 8px rgba(0,0,0,0.04)'}
                >
                  <div style={{ color: '#ffb300', fontSize: 32, display: 'flex', alignItems: 'center' }}>{level.icon}</div>
                  <div style={{ fontSize: 15, color: '#232323', fontWeight: 500, whiteSpace: 'normal', display: 'flex', alignItems: 'center', textAlign: 'left' }}>{level.name}</div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button 
              variant="warning" 
              size="lg" 
              disabled={!selectedLang || !selectedLevel}
              style={{ minWidth: 300, fontSize: 20, fontWeight: 600, background: '#ffb300', border: 'none', borderRadius: 8, color: '#232323' }}
              onClick={handleStart}
            >
              Commencer à étudier →
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DashboardPage; 