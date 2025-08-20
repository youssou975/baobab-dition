import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import baobab from '../assets/image.png'
function AboutBaobab()  {
    return (

          <motion.section
      id="a-propos"
      className="about-section py-5"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.3 }}
    >

<Container>
    <Row className='align-item-center'>
        <Col md={6} className='text-center mb-6 mb-md-0  '>
        
        
        <img src={baobab} alt="logo-baobab" width="150" height="150" />
        </Col>
          <Col md={6}>
            <h2 className="text-orange mb-3">À propos de BAOBAB  EDITION</h2>
            <p> Baobab Edition est portée sur les fonts batismaux le 27 février 
               2013 à Dakar au Sénégal.
            </p>
            <p>La maison d’édition, de promotion et de diffusion d’ouvrages 
(Roman, Poésie, Récit, Nouvelle, Conte, Théâtre, Essai, Livre 
Enfant et Jeunesse, etc), est enregistrée sous le numéro ISBN 
979-10-92510 par l’Agence francophone de numérotation 
internationale du livre. 
            </p>
            <p>
                La société sénégalaise d’édition à vocation panafricaine 
                regroupe des professionnels chevronnés de l’édition et ceux 
                de la communication. Et  l’objectif  majeur de Baobab Edition 
                est de contribuer à l’enrichissement du patrimoine éditorial 
               de l’Afrique et du monde.
            </p>
            <p>
                Baobab Edition est membre de l’Association sénégalaise des 
éditeurs (ASE), d’African Publishers Network (Apnet), de 
l’Alliance internationale des Editeurs indépendants.
            </p>
          </Col>
        
    </Row>
</Container>

    </motion.section>
    );};
    export default AboutBaobab;
