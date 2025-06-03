import React, { useState } from 'react';
// TODO: Remplacer l'importation locale par une récupération via API backend (ex: /api/courses/anglais/debutant)
import courseContent from '../data/courseContent.json';

const CoursePage = () => {
  const [step, setStep] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // TODO: Récupérer dynamiquement la langue et le niveau sélectionnés (ex: via params ou contexte utilisateur)
  // Ici, on suppose anglais-débutant pour l'exemple
  const course = courseContent.find(c => c.langue === 'anglais' && c.niveau === 'débutant');
  const etapes = course ? course.etapes : [];
  const currentEtape = etapes[step] || {};

  const handleNext = () => {
    setShowQuiz(false);
    setStep((prev) => prev + 1);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const handleOptionClick = (idx) => {
    setSelectedOption(idx);
    if (currentEtape.quiz && idx === currentEtape.quiz.answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '2.5rem 2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Cours d'anglais - Niveau débutant</h2>
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <strong>Étape {step + 1} / {etapes.length}</strong>
      </div>
      {step > 0 && (
        <div style={{ textAlign: 'left', marginBottom: 16 }}>
          <button
            style={{ background: 'transparent', color: '#0791A3', border: 'none', fontSize: 16, fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
            onClick={() => {
              setStep((prev) => prev - 1);
              setShowQuiz(false);
              setSelectedOption(null);
              setIsCorrect(null);
            }}
          >
            <i className="bi bi-arrow-left"></i> Étape précédente
          </button>
        </div>
      )}
      {!showQuiz ? (
        <>
          {/* TODO: L'URL de la vidéo doit venir du backend (etape.videoUrl) */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <iframe
              width="560"
              height="315"
              src={currentEtape.videoUrl}
              title={`Vidéo ${step + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button
              style={{ background: '#0791A3', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 32px', fontSize: 18, fontWeight: 600, cursor: 'pointer' }}
              onClick={() => setShowQuiz(true)}
            >
              J'ai terminé la vidéo, passer au quiz
            </button>
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center' }}>
          {currentEtape.quiz ? (
            <>
              <h4 style={{ marginBottom: 16 }}>{currentEtape.quiz.question}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                {currentEtape.quiz.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    disabled={selectedOption !== null}
                    style={{
                      minWidth: 220,
                      padding: '10px 18px',
                      borderRadius: 8,
                      border: '1px solid #ccc',
                      background: selectedOption === idx ? (isCorrect && idx === currentEtape.quiz.answer ? '#d4edda' : '#f8d7da') : '#fff',
                      color: '#232323',
                      fontWeight: 500,
                      fontSize: 16,
                      cursor: selectedOption === null ? 'pointer' : 'default',
                      transition: 'background 0.2s',
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {selectedOption !== null && (
                <div style={{ marginBottom: 16, color: isCorrect ? '#388e3c' : '#d32f2f', fontWeight: 500 }}>
                  {isCorrect ? 'Bonne réponse !' : 'Mauvaise réponse.'}
                  <div style={{ color: '#555', fontWeight: 400, marginTop: 4 }}>{currentEtape.quiz.explanation}</div>
                </div>
              )}
              <button
                style={{ background: '#ffb300', color: '#232323', border: 'none', borderRadius: 8, padding: '10px 28px', fontSize: 16, fontWeight: 600, cursor: isCorrect ? 'pointer' : 'not-allowed', opacity: isCorrect ? 1 : 0.6 }}
                onClick={handleNext}
                disabled={!isCorrect}
              >
                Vidéo suivante
              </button>
            </>
          ) : (
            <>
              <h4>Quiz (placeholder)</h4>
              <p>Le quiz pour cette vidéo sera ici.</p>
              <button
                style={{ background: '#ffb300', color: '#232323', border: 'none', borderRadius: 8, padding: '10px 28px', fontSize: 16, fontWeight: 600, cursor: 'pointer' }}
                onClick={handleNext}
                disabled={step === etapes.length - 1 ? true : false}
              >
                {step === etapes.length - 1 ? 'Cours terminé' : 'Vidéo suivante'}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CoursePage; 