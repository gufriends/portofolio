import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
// import ContactSection from "../components/ContactSection";
import AboutSection from "../components/AboutSection";

const LandingPage: React.FC = () => {
  // Container variants untuk staggered children - lebih smooth
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Dikurangi dari 0.3 ke 0.15
        delayChildren: 0.1, // Dikurangi dari 0.2 ke 0.1
      },
    },
  };

  // Item variants untuk setiap section - perpindahan lebih halus
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 30, // Dikurangi dari 100 ke 30 - pergerakan lebih kecil
      scale: 0.95, // Dikurangi dari 0.8 ke 0.95 - scaling lebih subtle
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6, // Dikurangi dari 0.8 ke 0.6
        ease: [0.25, 0.4, 0.25, 1], // Easing lebih halus
        type: "tween", // Ganti dari spring ke tween untuk konsistensi
      },
    },
  };

  return (
    <motion.main
      className="w-auto mx-36 mt-7 "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={sectionVariants}>
        <HeroSection />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <ProjectsSection />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <SkillsSection />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <AboutSection />
      </motion.div>

      {/* <motion.div variants={sectionVariants}>
        <ContactSection />
      </motion.div> */}
    </motion.main>
  );
};

export default LandingPage;
