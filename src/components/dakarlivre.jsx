import { Container, Row, Col,Button } from 'react-bootstrap';
import { motion ,} from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

import dakar from '../assets/dakarlivres.jpg'
import '../css/dakar.css'

function DakarLivre() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');

  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

  useEffect(() => {
    const audio = audioRef.current;
    const onLoaded = () => setDuration(fmt(audio.duration));
    const onTime = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
      setCurrentTime(fmt(audio.currentTime));
    };
    const onEnd = () => setPlaying(false);
    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('ended', onEnd);
    return () => {
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('ended', onEnd);
    };
  }, []);

  const togglePlay = () => {
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  const skip = (s) => {
    audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime + s);
  };

  const onSeek = (e) => {
    const t = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = t;
  };

  const bars = 40;
  const threshold = Math.floor((progress / 100) * bars);

  return (
    <motion.section
      className="event-premium py-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container>
        {/* Header */}
        <motion.div
          className="dakar-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="dakar-eyebrow">Événement International</span>
          <h2 className="dakar-title">Dakar-Livres</h2>
          <p className="dakar-subtitle">
            4ème Salon International du Livre de Jeunesse et pour Enfants
          </p>
        </motion.div>

        {/* Main Content */}
        <Row className="align-items-center">
          <Col lg={5} className="mb-4 mb-lg-0">
            <motion.img
              src={dakar}
              alt="Salon Dakar-Livres"
              className="dakar-image"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </Col>

          <Col lg={7} className="dakar-col-content">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="dakar-details-wrapper"
            >
              <div className="dakar-cards-grid">
                <div className="dakar-info-card">
                  <p className="dakar-card-label">DATES</p>
                  <p className="dakar-card-value">10 - 14 novembre 2026</p>
                </div>
                <div className="dakar-info-card">
                  <p className="dakar-card-label">LIEU</p>
                  <p className="dakar-card-value">Centre Blaise Senghor de Dakar-Sénégal</p>
                </div>
              </div>

              <div className="dakar-about-box">
                <h3 className="dakar-about-title">À propos du salon</h3>
                <p className="dakar-about-text">
                  Un grand rendez-vous international réunissant enfants, adolescents et
                  professionnels du livre. Maisons d'édition du Sénégal, d'Afrique, d'Europe
                  et d'Amérique vous invitent à découvrir la richesse de la littérature jeunesse.
                </p>
              </div>

              <div className="dakar-activities-grid">
                <div>
                  <h4 className="dakar-activity-title">Activités principales</h4>
                  <ul className="dakar-activity-list">
                    <li>✓ Promotion de la lecture</li>
                    <li>✓ Découverte d'auteurs</li>
                    <li>✓ Exposition de livres</li>
                    <li>✓ Panels-Dédicaces</li>
                    <li>✓ Ateliers d'écriture, de conte, de poésie</li>
                    <li>✓ Lecture, Dictée, Récitation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="dakar-activity-title">Points forts</h4>
                  <ul className="dakar-activity-list">
                    <li>✓ Éducation inclusive</li>
                    <li>✓ Édition numérique</li>
                    <li>✓ 5 jours d'événements</li>
                  </ul>
                </div>
             
              </div>
            </motion.div>

            {/* CTA + Audio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="dakar-cta-box"
            >
              <h3 className="dakar-cta-title">AUDIO ANNONCE DAKAR LIVRES </h3>

              {/* ── Audio Player ── */}
              <audio
                ref={audioRef}
                src="/Djanjo.mp3"
                onEnded={() => setPlaying(false)}
              />

              <div className="dakar-audio-player">

                {/* Waveform */}
                <div className="dakar-waveform">
                  {Array.from({ length: bars }, (_, i) => {
                    const h = 20 + ((i * 7 + 13) % 80);
                    let cls = 'dakar-waveform-bar';
                    if (i < threshold) cls += ' played';
                    if (i === threshold) cls += ' current' + (playing ? ' playing' : '');
                    return <div key={i} className={cls} style={{ height: `${h}%` }} />;
                  })}
                </div>

                {/* Progress bar */}
                <div className="dakar-progress-row">
                  <span className="dakar-time">{currentTime}</span>
                  <input
                    type="range"
                    className="dakar-progress"
                    min="0" max="100" step="1"
                    value={Math.round(progress)}
                    onChange={onSeek}
                  />
                  <span className="dakar-time right">{duration}</span>
                </div>

                {/* Controls */}
                <div className="dakar-controls">
                  <button className="dakar-btn-skip" onClick={() => skip(-10)} title="Reculer 10s">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="1 4 1 10 7 10"/>
                      <path d="M3.51 15a9 9 0 1 0 .49-3.54"/>
                    </svg>
                  </button>

                  <button className="dakar-btn-play" onClick={togglePlay}>
                    {playing ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <rect x="6" y="4" width="4" height="16" rx="1"/>
                        <rect x="14" y="4" width="4" height="16" rx="1"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <polygon points="5,3 19,12 5,21"/>
                      </svg>
                    )}
                  </button>

                  <button className="dakar-btn-skip" onClick={() => skip(10)} title="Avancer 10s">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 4 23 10 17 10"/>
                      <path d="M20.49 15a9 9 0 1 1-.49-3.54"/>
                    </svg>
                  </button>
                </div>

              </div>
            </motion.div>
          </Col>


          
          {/* ── Section Vidéos YouTube ── */}
<motion.div
  className="dakar-videos-section"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  viewport={{ once: true, amount: 0.2 }}
>
  <h3 className="dakar-videos-title">Revivez les éditions précédentes</h3>

  <Row className="g-4">
    {[
      { id: 'I01e0P6SAU4'},
      { id: '50UkiZH4nsY'  },
      { id: 'NOApPEnVkH0' },
    ].map((video, i) => (
      <Col md={4} key={i}>
        <motion.div
          className="dakar-video-card"
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="dakar-video-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="dakar-video-label">{video.label}</p>
        </motion.div>
      </Col>
    ))}
  </Row>
</motion.div>
        </Row>
      </Container>
    </motion.section>
  );
}

export default DakarLivre;