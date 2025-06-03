import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const ProjectsSection: React.FC = () => {
  // Container variants untuk staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Item variants - simple fade up
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Title variants - slightly different timing
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="projects"
      className="w-full py-16 md:py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-sora mb-4"
          variants={titleVariants}
        >
          <span className="bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg md:text-xl font-inter max-w-2xl mx-auto"
          variants={titleVariants}
        >
          A selection of projects that showcase my skills and passion for
          development
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-16 lg:space-y-20">
        <motion.div variants={itemVariants}>
          <ProjectCard
            title="SIPEMA Backend"
            category="Backend Development"
            description="SIPEMA adalah Sistem Pengaduan Masyarakat untuk Universitas Syiah Kuala (USK) yang memungkinkan masyarakat menyampaikan keluhan, masukan, dan laporan secara langsung. Backend dibangun dengan arsitektur handal untuk mengelola alur pengaduan dari penerimaan hingga penyelesaian kasus."
            imageSrc="https://placehold.co/800x600"
            technologies={[
              { src: "/icons/react.svg", alt: "React" },
              { src: "/icons/tailwind.svg", alt: "Tailwind" },
              { src: "/icons/typescript.svg", alt: "TypeScript" },
            ]}
            imagePosition="left"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ProjectCard
            title="E-Commerce Platform"
            category="Full Stack Development"
            description="A complete shopping solution with product management, cart functionality, user authentication, and payment processing integration. Built with modern technologies to ensure scalability and performance."
            imageSrc="https://placehold.co/800x600"
            technologies={[
              { src: "/icons/react.svg", alt: "React" },
              { src: "/icons/nodejs.svg", alt: "Node.js" },
              { src: "/icons/mongodb.svg", alt: "MongoDB" },
            ]}
            imagePosition="right"
          />
        </motion.div>
      </div>

      {/* See All Button */}
      <motion.div className="text-center mt-16" variants={itemVariants}>
        <Link to="/projects">
          <motion.button
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#3BF686]/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See All Projects
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;
