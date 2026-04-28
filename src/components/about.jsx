import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import baobabLogo from "../assets/baobabed.png";
// Replace with your actual import: import baobab from '../assets/image.png'
const cataloguePDF = "../catalogue.pdf"; // adjust path as needed

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');

        .about-baobab {
          font-family: 'Outfit', sans-serif;
          background: #0e0c08;
          color: #f0ead8;
          position: relative;
          overflow: hidden;
          padding: 100px 0;
        }

        .about-baobab::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(255, 255, 255, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 40% 60% at 10% 80%, rgba(255, 154, 22, 0.1) 0%, transparent 55%);
          pointer-events: none;
        }

        .about-baobab .grain {
          position: absolute;
          inset: 0;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }

        /* ── Header ── */
        .section-eyebrow {
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          font-size: 0.72rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #ff9500;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .section-eyebrow::before {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: #ff9500;
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.08;
          color: #f0ead8;
          margin: 0 0 8px;
        }

        .title-accent {
          color: #ff9500;
          font-style: italic;
        }

        /* ── Layout grid ── */
        .about-grid {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 80px;
          align-items: start;
          margin-top: 60px;
        }

        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
        }

        /* ── Left panel ── */
        .left-panel {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .logo-card {
          background: rgba(200,134,42,0.07);
          border: 1px solid rgba(200,134,42,0.18);
          border-radius: 20px;
          padding: 40px 32px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .logo-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #ff9500, transparent);
        }

        .logo-img {
          width: 96px;
          height: 96px;
          border-radius:30%;
          object-fit: cover;
          margin-bottom: 16px;
        }

        .logo-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 1.05rem;
          color: #ff9500;
          opacity: 0.9;
        }

        /* Stats */
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .stat-item {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 18px 16px;
          text-align: center;
          transition: border-color 0.3s, background 0.3s;
        }
        .stat-item:hover {
          border-color: rgba(200,134,42,0.3);
          background: rgba(200,134,42,0.05);
        }

        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #ff9500;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.68rem;
          letter-spacing: 0.06em;
          color: rgba(240,234,216,0.5);
          margin-top: 4px;
          text-transform: uppercase;
        }

        /* ── Right panel ── */
        .right-panel {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .about-text p {
          font-size: 1.02rem;
          line-height: 1.85;
          color: rgba(240,234,216,0.82);
          margin: 0 0 16px;
        }
        .about-text p:last-child { margin-bottom: 0; }

        /* Memberships */
        .memberships {
          border-left: 2px solid rgba(236, 147, 22, 0.4);
          padding-left: 24px;
        }

        .memberships-label {
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #ee9211;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .memberships ul {
          list-style: none;
          margin: 0; padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .memberships li {
          font-size: 0.9rem;
          color: rgba(240,234,216,0.7);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .memberships li::before {
          content: '◆';
          color: #ec8b04;
          font-size: 0.45rem;
          flex-shrink: 0;
        }

        /* ── CTA Buttons ── */
        .cta-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .btn-primary-gold {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #c8862a, #a86a18);
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 14px 28px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
          box-shadow: 0 4px 20px rgba(200,134,42,0.35);
        }
        .btn-primary-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(200,134,42,0.5);
        }
        .btn-primary-gold:active { transform: translateY(0); }

        .btn-outline-gold {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #f99100;
          font-family: 'Outfit', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 13px 28px;
          border-radius: 8px;
          border: 1.5px solid rgba(200,134,42,0.5);
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.2s, border-color 0.2s, background 0.2s;
        }
        .btn-outline-gold:hover {
          transform: translateY(-2px);
          border-color: #e99014;
          background: rgba(200,134,42,0.06);
        }

        /* ── Catalogue Modal ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(6px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .modal-box {
          background: #16120b;
          border: 1px solid rgba(200,134,42,0.25);
          border-radius: 20px;
          width: 100%;
          max-width: 900px;
          height: 85vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,134,42,0.1);
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 28px;
          border-bottom: 1px solid rgba(200,134,42,0.15);
          flex-shrink: 0;
        }

        .modal-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #f0ead8;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .modal-title span {
          color: #ff9500;
        }

        .modal-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .modal-close {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          background: transparent;
          color: rgba(240,234,216,0.6);
          font-size: 1.1rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, color 0.2s;
        }
        .modal-close:hover { background: rgba(255,255,255,0.08); color: #f0ead8; }

        .modal-body {
          flex: 1;
          overflow: hidden;
        }

        .modal-body iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        /* Decorative separator */
        .divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 8px 0;
        }
        .divider-line { flex: 1; height: 1px; background: rgba(200,134,42,0.15); }
        .divider-icon { color: #ff9705; font-size: 0.6rem; }
      `}</style>

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