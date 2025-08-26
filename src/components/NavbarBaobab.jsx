import { Navbar, Nav, Container } from 'react-bootstrap';
import baobab from '../assets/image.png';
function NavbarBaobab() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand className="text-orange fw-bold d-inline-block align-text-top">  
              BAOBAB EDITION</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end ">
          <Nav className='hover-underline'>
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#home">Présentation</Nav.Link>

          <Nav.Link href="#livres">Livres</Nav.Link>
            <Nav.Link href="#editer">Éditez</Nav.Link>
            <Nav.Link href="#contact">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBaobab;
