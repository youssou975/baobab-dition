import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import dakar from '../assets/dakarlivres.jpg'

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
          style={{ textAlign: 'center', marginBottom: '50px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span style={{ 
            color: '#FF6B35', 
            fontWeight: '600', 
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Événement International
          </span>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 'bold',
            marginTop: '15px',
            marginBottom: '10px',
            color: '#1a1a1a'
          }}>
            Dakar-Livres
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#666',
            marginBottom: '30px'
          }}>
            4ème Salon International du Livre de Jeunesse et pour Enfants
          </p>
        </motion.div>

        {/* Main Content */}
        <Row className='align-items-center'>
          <Col lg={5} className='mb-4 mb-lg-0'>
            <motion.img
              src={dakar}
              alt="Salon Dakar-Livres"
              style={{ width: '100%', borderRadius: '12px' }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </Col>

          <Col lg={7} style={{ paddingLeft: '40px' }}>
            {/* Details Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ marginBottom: '35px' }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '35px'
              }}>
                <div style={{
                  padding: '25px',
                  backgroundColor: '#f9f4f0',
                  borderRadius: '12px',
                  borderTop: '4px solid #FF6B35'
                }}>
                  <p style={{ fontSize: '13px', color: '#FF6B35', fontWeight: '600', marginBottom: '8px' }}>
                    DATES
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a' }}>
                    10 - 14 novembre 2026
                  </p>
                </div>

                <div style={{
                  padding: '25px',
                  backgroundColor: '#f9f4f0',
                  borderRadius: '12px',
                  borderTop: '4px solid #FF6B35'
                }}>
                  <p style={{ fontSize: '13px', color: '#FF6B35', fontWeight: '600', marginBottom: '8px' }}>
                    LIEU
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a' }}>
                    Centre Blaise Senghor de Dakar-Sénégal 
                  </p>
                </div>
              </div>

              <div style={{
                backgroundColor: '#FFF',
                padding: '30px',
                borderRadius: '12px',
                border: '1px solid #f0f0f0',
                marginBottom: '30px'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px', color: '#1a1a1a' }}>
                  À propos du salon
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.8',
                  color: '#555',
                  marginBottom: '0'
                }}>
                  Un grand rendez-vous international réunissant enfants, adolescents et 
                  professionnels du livre. Maisons d'édition du Sénégal, d'Afrique, d'Europe 
                  et d'Amérique vous invitent à découvrir la richesse de la littérature jeunesse 
                 .
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px'
              }}>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '12px', color: '#1a1a1a' }}>
                    Activités principales
                  </h4>
                  <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '14px', color: '#555', lineHeight: '1.8' }}>
                    <li>✓ Promotion de la lecture</li>
                    <li>✓ Découverte d'auteurs</li>
                    <li>✓ Exposition de livres</li>
                    <li>✓ Panels-Dédicaces</li>
                    <li>✓ Ateliers d'écriture ,de conte ,de poésie</li>
                    <li>✓Lecture ,Dictée ,Récitation</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '12px', color: '#1a1a1a' }}>
                    Points forts
                  </h4>
                  <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '14px', color: '#555', lineHeight: '1.8' }}>
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
              style={{
                backgroundColor: '#f99100',
                color: '#FFF',
                padding: '30px',
                borderRadius: '12px',
                textAlign: 'center'
              }}
            >
              <p style={{ fontSize: '14px', marginBottom: '15px', opacity: 0.95 }}>
                Organisateur général
              </p>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>
BAOBAB EDITION              </h3>
              <p style={{ fontSize: '15px', marginBottom: '8px' }}>
                 +221 77 515 18 80
              </p>
              <p style={{ fontSize: '15px', marginBottom: '0' }}>
                 dakarlivres@gmail.com
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}

export default DakarLivre;