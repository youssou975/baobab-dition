import NavbarBaobab from './components/NavbarBaobab';
import BooksSection from './components/BookSection';
import HeroSection from './components/HeroSection';
import EditSection from './components/EditSection';
import FooterBaobab from './components/Footer';
import './App.css';
import AboutBaobab from './components/about';
import DakarLivre from './components/dakarlivre';
import Partenaire from './components/partenaire';

function App() {
  return (
    <>
      <NavbarBaobab />
      <HeroSection />
      <AboutBaobab/>
      <DakarLivre/>
      <BooksSection />
      <Partenaire/>
      <EditSection />
      <FooterBaobab />
    </>
  );
}

export default App;
