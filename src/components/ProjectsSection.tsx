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
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  // Featured projects data - 3 projects untuk preview
  const featuredProjects = [
    {
      id: 1,
      title: "SIPEMA Backend",
      category: "Backend Development",
      description:
        "Sistem Pengaduan Masyarakat untuk Universitas Syiah Kuala dengan arsitektur backend yang robust untuk mengelola alur pengaduan dari submission hingga resolution.",
      imageSrc: "https://placehold.co/600x400/3BF686/000000",
      projectUrl: "https://sipema-usk.com",
      technologies: [
        { src: "/icons/nodejs.svg", alt: "Node.js" },
        { src: "/icons/mongodb.svg", alt: "MongoDB" },
        { src: "/icons/express.svg", alt: "Express" },
      ],
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      description:
        "Complete shopping solution dengan product management, cart functionality, user authentication, dan payment processing integration menggunakan teknologi modern.",
      imageSrc: "https://placehold.co/600x400/4CA9FF/000000",
      projectUrl: "https://ecommerce-demo.com",
      technologies: [
        { src: "/icons/react.svg", alt: "React" },
        { src: "/icons/nodejs.svg", alt: "Node.js" },
        { src: "/icons/stripe.svg", alt: "Stripe" },
      ],
    },
    {
      id: 3,
      title: "TaskFlow Management",
      category: "Frontend Development",
      description:
        "Modern task management application dengan real-time collaboration, drag-and-drop kanban boards, dan progress tracking untuk produktivitas tim.",
      imageSrc: "https://placehold.co/600x400/8B5CF6/000000",
      projectUrl: "https://taskflow-app.com",
      technologies: [
        { src: "/icons/react.svg", alt: "React" },
        { src: "/icons/typescript.svg", alt: "TypeScript" },
        { src: "/icons/tailwind.svg", alt: "Tailwind" },
      ],
    },
  ];

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
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
        <div className="text-left mb-6 md:mb-0">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-sora mb-4"
            variants={titleVariants}
          >
            <span className="bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg md:text-xl font-inter max-w-2xl"
            variants={titleVariants}
          >
            A selection of projects that showcase my skills and passion for
            development
          </motion.p>
        </div>

        {/* See All Button - Moved to header right */}
        <motion.div variants={itemVariants}>
          <Link to="/projects">
            <motion.button
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#3BF686]/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See All Projects
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
      </div>

      {/* Projects Grid - 3 columns layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="h-full"
          >
            <ProjectCard
              title={project.title}
              category={project.category}
              description={project.description}
              imageSrc={project.imageSrc}
              projectUrl={project.projectUrl}
              technologies={project.technologies}
              compact={true} // Props baru untuk mode compact
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
