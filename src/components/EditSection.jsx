import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useState } from 'react';

function EditSection() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const styles = {
    /* ═══════════════════════════════════════════════════════════════════════════════ */
    /* EDIT SECTION - STYLES COMPLETS */
    /* ═══════════════════════════════════════════════════════════════════════════════ */
    
    section: {
      position: 'relative',
      overflow: 'hidden',
      padding: '100px 0',
      background: 'linear-gradient(135deg, #fafaf8 0%, #f5f1ed 100%)',
    },

    sectionBefore: {
      content: "''",
      position: 'absolute',
      top: 0,
      right: '-10%',
      width: '500px',
      height: '500px',
      background: 'radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, transparent 70%)',
      borderRadius: '50%',
      pointerEvents: 'none',
    },

    /* ─────────────────────────────────────────────────────────────────────────────── */
    /* CONTAINER & LAYOUT */
    /* ─────────────────────────────────────────────────────────────────────────────── */

    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 40px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
      '@media (max-width: 1024px)': {
        gap: '60px',
        padding: '0 30px',
      },
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '50px',
        padding: '0 20px',
      },
    },

    /* ─────────────────────────────────────────────────────────────────────────────── */
    /* CONTENT SECTION */
    /* ─────────────────────────────────────────────────────────────────────────────── */

    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },

    badge: {
      display: 'inline-block',
      background: 'rgba(255, 107, 53, 0.1)',
      color: '#FF6B35',
      fontSize: '12px',
      fontWeight: '600',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      padding: '8px 16px',
      borderRadius: '25px',
      width: 'fit-content',
      border: '1px solid rgba(255, 107, 53, 0.2)',
      transition: 'all 0.3s ease',
      cursor: 'default',
    },

    title: {
      fontSize: 'clamp(28px, 5vw, 48px)',
      fontWeight: '700',
      lineHeight: '1.2',
      color: '#1a1a1a',
      margin: '0',
      letterSpacing: '-0.02em',
    },

    highlight: {
      color: '#FF6B35',
      fontStyle: 'italic',
      position: 'relative',
      display: 'inline-block',
      textDecoration: 'none',
    },

    subtitle: {
      fontSize: '18px',
      color: '#555',
      margin: '0',
      fontWeight: '500',
      lineHeight: '1.6',
    },

    description: {
      fontSize: '15px',
      color: '#666',
      lineHeight: '1.8',
      margin: '0',
      padding: '20px 0',
    },

    /* ─────────────────────────────────────────────────────────────────────────────── */
    /* FEATURES LIST */
    /* ─────────────────────────────────────────────────────────────────────────────── */

    featuresList: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
    },

    featureItem: (isHovered) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '15px',
      color: isHovered ? '#FF6B35' : '#333',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
      cursor: 'default',
    }),

    featureIcon: (isHovered) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '28px',
      height: '28px',
      background: isHovered ? '#FF6B35' : 'rgba(255, 107, 53, 0.15)',
      color: isHovered ? 'white' : '#FF6B35',
      borderRadius: '50%',
      fontSize: '14px',
      fontWeight: 'bold',
      flexShrink: 0,
      transition: 'all 0.3s ease',
      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    }),

    /* ─────────────────────────────────────────────────────────────────────────────── */
    /* CTA BUTTONS */
    /* ─────────────────────────────────────────────────────────────────────────────── */

    ctaButtons: {
      display: 'flex',
      gap: '16px',
      marginTop: '20px',
      flexWrap: 'wrap',
      '@media (max-width: 480px)': {
        flexDirection: 'column',
      },
    },

    btnPrimaryGold: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #FF6B35 0%, #E55A24 100%)',
      color: 'white',
      fontFamily: "'Outfit', sans-serif",
      fontSize: '15px',
      fontWeight: '600',
      letterSpacing: '0.5px',
      padding: '14px 36px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 24px rgba(255, 107, 53, 0.3)',
    },

    btnSecondaryOutline: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      color: '#FF6B35',
      fontFamily: "'Outfit', sans-serif",
      fontSize: '15px',
      fontWeight: '600',
      letterSpacing: '0.5px',
      padding: '13px 36px',
      borderRadius: '8px',
      border: '2px solid #FF6B35',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },

    /* ─────────────────────────────────────────────────────────────────────────────── */
    /* VISUAL SECTION */
    /* ─────────────────────────────────────────────────────────────────────────────── */

    visual: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      perspective: '1000px',
    },

    visualCard: {
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      alignItems: 'center',
      width: '100%',
    },

    /* ─────────────────────────────────────────────────────────────────────────────── */
    /* BOOK STACK ANIMATION */
    /* ─────────────────────────────────────────────────────────────────────────────── */

    bookStack: {
      position: 'relative',
      width: '280px',
      height: '320px',
      perspective: '1200px',
    },

    bookItemBase: {
      position: 'absolute',
      width: '200px',
      height: '280px',
      borderRadius: '8px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '700',
      fontSize: '14px',
      textAlign: 'center',
      padding: '20px',
      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
      color: 'white',
    },

    book1: {
      background: 'linear-gradient(135deg, #FF6B35 0%, #FF8A5B 100%)',
      zIndex: 3,
      top: '0',
      left: '0',
      transform: 'rotateZ(8deg) rotateY(-10deg)',
    },

    book2: {
      background: 'linear-gradient(135deg, #F99100 0%, #FFB347 100%)',
      zIndex: 2,
      top: '20px',
      left: '40px',
      transform: 'rotateZ(-6deg) rotateY(8deg)',
    },

    book3: {
      background: 'linear-gradient(135deg, #FFD700 0%, #FFE082 100%)',
      color: '#333',
      zIndex: 1,
      top: '40px',
      left: '80px',
      transform: 'rotateZ(4deg) rotateY(-8deg)',
    },

    /* ─────────────────────────────────────────────────────────────────────────────── */
    /* STATISTICS */
    /* ─────────────────────────────────────────────────────────────────────────────── */

    stats: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      width: '100%',
      maxWidth: '350px',
    },

    statBox: {
      background: 'white',
      padding: '24px',
      borderRadius: '12px',
      textAlign: 'center',
      border: '1px solid rgba(255, 107, 53, 0.1)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
      transition: 'all 0.3s ease',
    },

    statNumber: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#FF6B35',
      lineHeight: '1',
      marginBottom: '8px',
    },

    statLabel: {
      fontSize: '13px',
      color: '#666',
      fontWeight: '500',
      lineHeight: '1.4',
    },
  };

  // Features data
  const features = [
    { icon: '✓', text: 'Accompagnement personnalisé' },
    { icon: '✓', text: 'Relecture & correction professionnelle' },
    { icon: '✓', text: 'Maquette & design couverture' },
    { icon: '✓', text: 'Distribution nationale & internationale' },
    { icon: '✓', text: 'Support marketing & promotion' },
  ];

  // Media query helper
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <motion.section
      id="editer"
      style={styles.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Decorative background */}
      <div style={styles.sectionBefore} />

      {/* Container */}
      <div style={{
        ...styles.container,
        display: isMobile ? 'flex' : 'grid',
        flexDirection: isMobile ? 'column' : 'unset',
        gridTemplateColumns: isMobile ? 'unset' : '1fr 1fr',
      }}>
        {/* Left Content */}
        <motion.div
          style={styles.content}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div
            style={styles.badge}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 107, 53, 0.15)';
              e.target.style.borderColor = 'rgba(255, 107, 53, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 107, 53, 0.1)';
              e.target.style.borderColor = 'rgba(255, 107, 53, 0.2)';
            }}
          >
            Édition & Publication
          </div>

          {/* Title */}
          <h2 style={styles.title}>
            Faites-vous éditer chez{' '}
            <span style={styles.highlight}>BAOBAB EDITION</span>
          </h2>

          {/* Subtitle */}
          <p style={styles.subtitle}>
            Nous accompagnons les auteurs  dans la valorisation de leur œuvre.
          </p>

          {/* Description */}
          <p style={styles.description}>
            Transformez votre manuscrit en œuvre publiée. Notre équipe d'experts vous guide
            à travers chaque étape du processus éditorial, du manuscrit initial à la mise en
            distribution. Nous croyons au potentiel des voix africaines.
          </p>

          {/* Features List */}
          <ul style={styles.featuresList}>
            {features.map((feature, index) => (
              <li
                key={index}
                style={styles.featureItem(hoveredFeature === index)}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <span style={styles.featureIcon(hoveredFeature === index)}>
                  {feature.icon}
                </span>
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <motion.div
            style={styles.ctaButtons}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button
              style={styles.btnPrimaryGold}
              size="lg"
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 32px rgba(255, 107, 53, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 24px rgba(255, 107, 53, 0.3)';
              }}
            >
              Se faire éditer
            </Button>
            <Button
              style={styles.btnSecondaryOutline}
              size="lg"
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 107, 53, 0.08)';
                e.target.style.borderColor = '#E55A24';
                e.target.style.color = '#E55A24';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = '#FF6B35';
                e.target.style.color = '#FF6B35';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              En savoir plus
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          style={styles.visual}
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div style={styles.visualCard}>
            {/* Book Stack */}
            <div style={styles.bookStack}>
              <div style={{ ...styles.bookItemBase, ...styles.book1 }}>
                Manuscrit
              </div>
              <div style={{ ...styles.bookItemBase, ...styles.book2 }}>
                Édité
              </div>
              <div style={{ ...styles.bookItemBase, ...styles.book3 }}>
                Publié
              </div>
            </div>

            {/* Statistics */}
            <div style={styles.stats}>
              <div
                style={styles.statBox}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.2)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 107, 53, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.1)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={styles.statNumber}>50+</div>
                <div style={styles.statLabel}>Auteurs accompagnés</div>
              </div>
              <div
                style={styles.statBox}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.2)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 107, 53, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.1)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={styles.statNumber}>90+</div>
                <div style={styles.statLabel}>Livres publiés</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS Responsive via style tag */}
      <style>{`
        @media (max-width: 1024px) {
          #editer {
            padding: 80px 0 !important;
          }
        }

        @media (max-width: 768px) {
          #editer {
            padding: 60px 0 !important;
          }
        }

        @media (max-width: 480px) {
          #editer {
            padding: 50px 0 !important;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </motion.section>
  );
}

export default EditSection;