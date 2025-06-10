import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";

const LandingPage: React.FC = () => {
  // Container variants untuk staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Item variants untuk setiap section
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
        type: "tween",
      },
    },
  };

  return (
    <motion.main
      className="w-full pb-20 md:pb-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Container dengan max-width dan padding konsisten */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-16 md:space-y-24 lg:space-y-32">
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
      </div>
    </motion.main>
  );
};

export default LandingPage;
