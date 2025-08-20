import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import yoro from '../assets/YORO.png'; // remplace par tes vraies images
import plastique from '../assets/plastiqur.png';
import trace from '../assets/trace.png';
import { motion } from "framer-motion";


function BooksSection() {
  const books = [
    { id: 1, title: " AFRIQUE OU LA RIME PARTAGÉE", image: yoro },
    { id: 2, title: ' MA DEMARCHE PLASTIQUE EN PARTAGE', image: plastique },
    { id: 3, title: 'TRACE DE VIE', image: trace },
    { id: 4, title: 'Baobab', image: yoro },
    { id: 5, title: 'AZERTY', image: yoro },
    { id: 6, title: 'AZERTGGFS', image: yoro },
  ];

  return (
    <motion.section id="livres" className="books-section py-5 bg-light" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 2 }}>
      <Container>
        <h2 className="text-center mb-5 section-title text-orange">Nos Livres Édités</h2>
        <Row className="g-4">
          {books.map((book) => (
            <Col md={4} sm={6} key={book.id}>
              <Card className="h-100 book-card border-0 shadow-sm">
                <Card.Img variant="top" src={book.image} className="book-img" />
                <Card.Body className="text-center">
                  <Card.Title className="fw-semibold">{book.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button variant="outline-warning" className="rounded-pill px-4 py-2 fw-semibold see-more-btn">
            Voir tous les livres
          </Button>
        </div>
      </Container>
    
    </motion.section>
  );
}

export default BooksSection;
