import { Button } from 'react-bootstrap';

function EditSection() {
  return (
    <section id="editer" className="edit-section">
      <h2 className="mb-3">Faites-vous éditer chez BAOBAB EDITION</h2>
      <p>Nous accompagnons les auteurs africains dans la valorisation de leur œuvre.</p>
      <Button variant="light">Se faire éditer</Button>
    </section>
  );
}

export default EditSection;
