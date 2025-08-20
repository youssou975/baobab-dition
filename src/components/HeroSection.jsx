import { motion } from "framer-motion";
function HeroSection() {
  return (
  <motion.section
      id="home"
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 5 }}
    >
<div >
 
        <h1 className="text">BAOBAB EDITION</h1>
        <p className="text" >"La lecture nourrit l'esprit"</p>
      </div>
    </motion.section>
  );
}

export default HeroSection;
