import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import dakar from '../assets/dak.jpg'
function DakarLivre()  {
    return (

          <motion.section
      id="dakar-livre"
      className="about-section py-5"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.6 }}
    >

<Container>
    <Row className='align-item-center'><hr />
        <Col md={6} className='text mb-6 mb-md-0  '>

          <h2 className="text-orange mb-3">Nos activités</h2>
            <p>
                 Conseils-Publication - Agence littéraire - Marketing-Promotion - Diffusion - 
Événementiel autour du livre - Résidence d’écriture - Rencontres littéraires - Ateliers d’écriture. 
            </p>
         
        
        </Col>
          <Col md={6}>
                  <img src={dakar} alt="dakar-livre" width="350" height="350" />

          </Col>
        
    </Row>
</Container>

    </motion.section>
    );};
    export default DakarLivre;
