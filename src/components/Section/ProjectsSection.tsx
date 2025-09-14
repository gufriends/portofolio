import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../features/ProjectCard";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  // Featured projects data - menggunakan iconify icons
  const featuredProjects = [
    {
      id: 1,
      title: t("ProjectSection.projects.0.title"),
      category: "Backend Development",
      description: t("ProjectSection.projects.0.description"),
      imageSrc: "/coverProject/sipema.png",
      projectUrl: "https://github.com/GhufranBkri/Sipema-backend",
      technologies: [
        { icon: "logos:typescript-icon", alt: "TypeScript" },
        { icon: "logos:postgresql", alt: "PostgreSQL" },
        { icon: "simple-icons:prisma", alt: "Prisma" },
        { icon: "devicon:hono", alt: "Hono" },
      ],
    },
    {
      id: 2,
      title: t("ProjectSection.projects.1.title"),
      category: "Full Stack Development",
      description: t("ProjectSection.projects.1.description"),
      imageSrc: "/coverProject/sipedas.png",
      projectUrl: "https://sipedas.vercel.app/",
      technologies: [
        { icon: "logos:nodejs-icon", alt: "Node.js" },
        { icon: "logos:express", alt: "Express" },
        { icon: "logos:mongodb-icon", alt: "MongoDB" },
      ],
    },
    {
      id: 3,
      title: t("ProjectSection.projects.2.title"),
      category: "Mobile Development",
      description: t("ProjectSection.projects.2.description"),
      imageSrc: "/coverProject/fintrack.png",
      projectUrl: "#",
      technologies: [
        { icon: "logos:android-icon", alt: "Android" },
        { icon: "logos:python", alt: "Python" },
        { icon: "logos:tensorflow", alt: "TensorFlow" },
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
              {t("ProjectSection.headline")}
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg md:text-xl font-inter max-w-2xl"
            variants={titleVariants}
          >
            {t("ProjectSection.description")}
          </motion.p>
        </div>

        {/* See All Button - Moved to header right */}
        {/* <motion.div variants={itemVariants}>
          <Link to="/projects">
            <motion.button
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#3BF686]/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("ProjectSection.btnSeeAll")}
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
        </motion.div> */}
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
