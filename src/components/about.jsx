import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import baobabLogo from "../assets/baobabed.png";
import '../css/about.css';
// Replace with your actual import: import baobab from '../assets/image.png'
const cataloguePDF = "/catalogue.pdf"; // adjust path as needed

const stats = [
  { value: "2013", label: "Fondée à Dakar" },
  { value: "ISBN", label: "979-10-92510" },
  { value: "plus de 90", label: "Livres édités" },
  { value: "∞", label: "Histoires à raconter" },
];

const memberships = [
  "Association sénégalaise des éditeurs (ASE)",
  "African Publishers Network (Apnet)",
  "Alliance internationale des Éditeurs indépendants",
];

export default function AboutBaobab() {
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  return (
    <>
      <style></style>

      <motion.section
        id="a-propos"
        className="about-baobab"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="grain" />

        <div className="about-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="section-eyebrow">À propos</div>
            <h2 className="section-title">
              L'<span className="title-accent">Art du Savoir</span>
              <br />panafricain
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="about-grid">
            {/* Left */}
            <motion.div
              className="left-panel"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="logo-card">
                <img src={baobabLogo} alt="Baobab Edition" className="logo-img" />
                <div className="logo-tagline">L'Art du Savoir</div>
              </div>

              <div className="stats-grid">
                {stats.map((s, i) => (
                  <motion.div
                    className="stat-item"
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              className="right-panel"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <div className="about-text">
                <p>
                  Baobab Edition est portée sur les fonts baptismaux le{" "}
                  <strong style={{ color: "#c8862a" }}>27 février 2013</strong> à Dakar au Sénégal.
                  La maison d'édition, de promotion et de diffusion d'ouvrages — Roman, Poésie,
                  Récit, Nouvelle, Conte, Théâtre, Essai, Livre Enfant et Jeunesse — est enregistrée
                  sous le numéro ISBN <strong style={{ color: "#c8862a" }}>979-10-92510</strong> par
                  l'Agence francophone de numérotation internationale du livre.
                </p>
                <p>
                  La société sénégalaise d'édition à vocation panafricaine regroupe des
                  professionnels chevronnés de l'édition et de la communication. Son objectif
                  majeur est de contribuer à l'enrichissement du patrimoine éditorial de l'Afrique
                  et du monde.
                </p>
              </div>

              <div className="divider">
                <div className="divider-line" />
                <div className="divider-icon">◆</div>
                <div className="divider-line" />
              </div>

              <div className="memberships">
                <div className="memberships-label">Affiliations</div>
                <ul>
                  {memberships.map((m, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {m}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="cta-row">
                <button
                  className="btn-primary-gold"
                  onClick={() => setCatalogueOpen(true)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                  Consulter le catalogue
                </button>

                <a
                  href={cataloguePDF}
                  download="Catalogue_Baobab_Edition.pdf"
                  className="btn-outline-gold"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Télécharger le PDF
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Catalogue Modal */}
      <AnimatePresence>
        {catalogueOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.target === e.currentTarget && setCatalogueOpen(false)}
          >
            <motion.div
              className="modal-box"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="modal-header">
                <div className="modal-title">
                  📚 Catalogue <span>Baobab Edition</span>
                </div>
                <div className="modal-actions">
                  <a
                    href={cataloguePDF}
                    download="Catalogue_Baobab_Edition.pdf"
                    className="btn-outline-gold"
                    style={{ padding: "9px 18px", fontSize: "0.82rem" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Télécharger
                  </a>
                  <button className="modal-close" onClick={() => setCatalogueOpen(false)}>✕</button>
                </div>
              </div>
              <div className="modal-body">
                <iframe
                  src={`${cataloguePDF}#toolbar=0&navpanes=0`}
                  title="Catalogue Baobab Edition"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}