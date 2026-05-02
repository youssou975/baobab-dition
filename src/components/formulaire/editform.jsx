import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../css/editform.css';

const COMING_SOON = true; // 👈 mettre false quand prêt

const genres = ['Roman', 'Nouvelle', 'Poésie', 'Essai', 'Biographie', 'Jeunesse', 'Conte', 'Témoignage', 'Autre'];

function EditeurForm({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [fileName, setFileName] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [resumeCount, setResumeCount] = useState(0);
  const [msgCount, setMsgCount] = useState(0);
  const [cguError, setCguError] = useState(false);

  const toggleGenre = (g) =>
    setSelectedGenres((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]
    );

  const handleFile = (e) => {
    if (e.target.files[0]) setFileName(e.target.files[0].name);
  };

  const handleSubmit = () => {
    const cgu = document.getElementById('cgu-check');
    if (!cgu.checked) { setCguError(true); return; }
    setCguError(false);
    setSubmitted(true);
  };

  const progress = submitted ? 100 : step === 1 ? 33 : step === 2 ? 66 : 100;

  const stepStatus = (n) => {
    if (submitted || n < step) return 'done';
    if (n === step) return 'active';
    return 'inactive';
  };

  const ArrowRight = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7h8M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const ArrowLeft = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M11 7H3M6 10L3 7l3-3" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const SendIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7l9-4-4 9V7H2z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {/* COMING SOON OVERLAY */}
          {COMING_SOON && (
            <motion.div
              className="comingSoonOverlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="comingSoonIcon">🕐</div>
              <span className="comingSoonBadge">Bientôt disponible</span>
              <h2 className="comingSoonTitle">
                Formulaire en cours de <em>développement</em>
              </h2>
              <p className="comingSoonSub">
                Cette fonctionnalité n'est pas encore disponible.
                Revenez bientôt pour soumettre votre manuscrit !
              </p>
              <button className="btnNext" onClick={onClose}>Fermer</button>
            </motion.div>
          )}

          {/* HEADER */}
          <div className="header">
            <button className="closeBtn" onClick={onClose}>×</button>
            <div className="badge">Baobab Édition</div>
            <h2 className="headerTitle">Soumettre votre <em>manuscrit</em></h2>
            <p className="headerSub">Nous lisons chaque soumission — réponse sous 10 jours ouvrés.</p>
            <div className="progressBar">
              <div className="progressFill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* BODY */}
          <div className="body">
            {!submitted && (
              <div className="stepsBar">
                {[['1', 'Auteur'], ['2', 'Manuscrit'], ['3', 'Envoi']].map(([n, lbl], i) => (
                  <div key={n} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <div className="stepWrap">
                      <div className={`stepCircle ${stepStatus(parseInt(n))}`}>
                        {stepStatus(parseInt(n)) === 'done' ? '✓' : n}
                      </div>
                      <span className={`stepLabel ${stepStatus(parseInt(n))}`}>{lbl}</span>
                    </div>
                    {i < 2 && <div className={`stepLine ${parseInt(n) < step ? 'done' : ''}`} />}
                  </div>
                ))}
              </div>
            )}

            {/* STEP 1 */}
            {step === 1 && !submitted && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                <p className="sectionTitle">Vos coordonnées <span>Étape 1 sur 3</span></p>
                <div className="grid">
                  <div className="group">
                    <label className="label">Prénom <span className="required">*</span></label>
                    <input className="input" type="text" placeholder="Votre prénom" />
                  </div>
                  <div className="group">
                    <label className="label">Nom <span className="required">*</span></label>
                    <input className="input" type="text" placeholder="Votre nom" />
                  </div>
                  <div className="group">
                    <label className="label">Adresse e-mail <span className="required">*</span></label>
                    <input className="input" type="email" placeholder="vous@exemple.com" />
                  </div>
                  <div className="group">
                    <label className="label">Téléphone</label>
                    <input className="input" type="tel" placeholder="+212 6 XX XX XX XX" />
                  </div>
                  <div className="group">
                    <label className="label">Pays de résidence <span className="required">*</span></label>
                    <select className="select">
                      <option value="">— Sélectionner —</option>
                      {['Maroc', 'Sénégal', "Côte d'Ivoire", 'Cameroun', 'Mali', 'Burkina Faso', 'Congo', 'France', 'Belgique', 'Canada', 'Autre'].map(p => <option key={p}>{p}</option>)}
                    </select>
                  </div>
                  <div className="group">
                    <label className="label">Avez-vous déjà publié ?</label>
                    <select className="select">
                      <option value="">— Sélectionner —</option>
                      <option>Non, c'est mon premier livre</option>
                      <option>Oui, 1 ouvrage</option>
                      <option>Oui, 2 à 5 ouvrages</option>
                      <option>Oui, plus de 5 ouvrages</option>
                    </select>
                  </div>
                </div>
                <div className="actions">
                  <span />
                  <button className="btnNext" onClick={() => setStep(2)}>Suivant <ArrowRight /></button>
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && !submitted && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                <p className="sectionTitle">Votre manuscrit <span>Étape 2 sur 3</span></p>
                <div className="grid">
                  <div className="groupFull">
                    <label className="label">Titre du manuscrit <span className="required">*</span></label>
                    <input className="input" type="text" placeholder="Le titre de votre œuvre" />
                  </div>
                  <div className="groupFull">
                    <label className="label">Genre littéraire <span className="required">*</span></label>
                    <div className="chips">
                      {genres.map((g) => (
                        <span key={g} className={`chip ${selectedGenres.includes(g) ? 'selected' : ''}`} onClick={() => toggleGenre(g)}>{g}</span>
                      ))}
                    </div>
                  </div>
                  <div className="group">
                    <label className="label">Nombre de pages (estimé)</label>
                    <input className="input" type="text" placeholder="Ex. 240 pages" />
                  </div>
                  <div className="group">
                    <label className="label">Langue d'écriture <span className="required">*</span></label>
                    <select className="select">
                      <option value="">— Sélectionner —</option>
                      {['Français', 'Arabe', 'Amazigh', 'Anglais', 'Bilingue'].map(l => <option key={l}>{l}</option>)}
                    </select>
                  </div>
                  <div className="groupFull">
                    <label className="label">Résumé du manuscrit <span className="required">*</span></label>
                    <textarea className="textarea" placeholder="Décrivez votre œuvre..." maxLength={500}
                      onChange={(e) => setResumeCount(e.target.value.length)} />
                    <div className="charCount">{resumeCount}/500 caractères</div>
                  </div>
                </div>
                <div className="actions">
                  <button className="btnBack" onClick={() => setStep(1)}><ArrowLeft /> Retour</button>
                  <button className="btnNext" onClick={() => setStep(3)}>Suivant <ArrowRight /></button>
                </div>
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && !submitted && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                <p className="sectionTitle">Finaliser la soumission <span>Étape 3 sur 3</span></p>
                <div className="grid">
                  <div className="groupFull">
                    <label className="label">Joindre votre manuscrit (optionnel)</label>
                    <div className="uploadZone" onClick={() => document.getElementById('ms-file').click()}>
                      <div className="uploadIcon">📄</div>
                      <p style={{ fontSize: '13px', color: '#555', fontWeight: 500 }}>{fileName ? `✓ ${fileName}` : 'Glisser ou cliquer pour uploader'}</p>
                      <p style={{ fontSize: '11px', color: '#aaa', marginTop: '4px' }}>PDF, DOCX — max 20 Mo</p>
                      <input type="file" id="ms-file" accept=".pdf,.docx" style={{ display: 'none' }} onChange={handleFile} />
                    </div>
                  </div>
                  <div className="groupFull">
                    <label className="label">Message complémentaire</label>
                    <textarea className="textarea" placeholder="Un contexte particulier..." maxLength={300}
                      onChange={(e) => setMsgCount(e.target.value.length)} />
                    <div className="charCount">{msgCount}/300 caractères</div>
                  </div>
                  <div className="groupFull">
                    <label className="label">Comment avez-vous entendu parler de nous ?</label>
                    <select className="select">
                      <option value="">— Sélectionner —</option>
                      {['Réseaux sociaux', 'Bouche à oreille', 'Salon du livre', 'Presse / média', 'Site web', 'Autre'].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className={`cguBox ${cguError ? 'error' : ''}`}>
                  <input type="checkbox" id="cgu-check" style={{ marginTop: '3px', accentColor: '#FF6B35', flexShrink: 0 }} onChange={() => setCguError(false)} />
                  <label htmlFor="cgu-check" style={{ fontSize: '12px', color: '#777', lineHeight: 1.6, cursor: 'pointer' }}>
                    J'accepte que mes données soient utilisées pour le traitement de ma soumission par Baobab Édition.
                  </label>
                </div>
                <div className="actions">
                  <button className="btnBack" onClick={() => setStep(2)}><ArrowLeft /> Retour</button>
                  <button className="btnNext" onClick={handleSubmit}>Envoyer ma soumission <SendIcon /></button>
                </div>
              </motion.div>
            )}

            {/* SUCCESS */}
            {submitted && (
              <motion.div className="successBox" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                <motion.div className="successIcon" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1, duration: 0.4 }}>✓</motion.div>
                <h2 className="successTitle">Soumission reçue !</h2>
                <p className="successSub">Notre équipe éditoriale vous contactera dans les <strong>10 jours ouvrés</strong>.</p>
                <div className="infoTags">
                  <span className="infoTag">📧 Confirmation envoyée</span>
                  <span className="infoTag">📚 Lecture en cours</span>
                  <span className="infoTag">⏱ 10 jours ouvrés</span>
                </div>
                <button className="btnNext" style={{ margin: '28px auto 0' }} onClick={onClose}>Fermer</button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default EditeurForm;