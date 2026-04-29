import '../css/footer.css';

function FooterBaobab() {
  return (
    <footer id="contact">
      <p>
        <a href="mailto:alacisse@gmail.com"> alacisse@gmail.com</a>
        <span className="sep">|</span>
        <a href="tel:+221775151880"> +221 77 515 18 80</a>
      </p>
      <p>&copy; {new Date().getFullYear()} Baobab Édition. Tous droits réservés.</p>
    </footer>
  );
}

export default FooterBaobab;