import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import dakar from '../assets/dakarlivres.jpg'
import '../css/dakar.css'

function DakarLivre() {
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
          <span className="dakar-eyebrow">
            Événement International
          </span>
          <h2 className="dakar-title">
            Dakar-Livres
          </h2>
          <p className="dakar-subtitle">
            4ème Salon International du Livre de Jeunesse et pour Enfants
          </p>
        </motion.div>

        {/* Main Content */}
        <Row className='align-items-center'>
          <Col lg={5} className='mb-4 mb-lg-0'>
            <motion.img
              src={dakar}
              alt="Salon Dakar-Livres"
              className="dakar-image"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </Col>

          <Col lg={7} className="dakar-col-content">
            {/* Details Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="dakar-details-wrapper"
            >
              {/* Date and Location Cards */}
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

              {/* About Section */}
              <div className="dakar-about-box">
                <h3 className="dakar-about-title">À propos du salon</h3>
                <p className="dakar-about-text">
                  Un grand rendez-vous international réunissant enfants, adolescents et 
                  professionnels du livre. Maisons d'édition du Sénégal, d'Afrique, d'Europe 
                  et d'Amérique vous invitent à découvrir la richesse de la littérature jeunesse.
                </p>
              </div>

              {/* Activities Grid */}
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

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="dakar-cta-box"
            >
              <p className="dakar-cta-label">Organisateur général</p>
              <h3 className="dakar-cta-title">BAOBAB EDITION</h3>
              <div className="dakar-divider"></div>
              <p className="dakar-cta-contact">+221 77 515 18 80</p>
              <p className="dakar-cta-contact">dakarlivres@gmail.com</p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}

export default DakarLivre;