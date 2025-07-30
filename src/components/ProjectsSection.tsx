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

  // Featured projects data - menggunakan iconify icons
  const featuredProjects = [
    {
      id: 1,
      title: "SIPEMA - Public Complaint System",
      category: "Backend Development",
      description:
        "Public complaint management system for USK using Hono framework with TypeScript. Features RESTful APIs, PostgreSQL with Prisma ORM, user authentication, complaint tracking, and notification system.",
      imageSrc: "/coverProject/sipema.png",
      projectUrl: "#",
      technologies: [
        { icon: "logos:typescript-icon", alt: "TypeScript" },
        { icon: "logos:postgresql", alt: "PostgreSQL" },
        { icon: "simple-icons:prisma", alt: "Prisma" },
        { icon: "devicon:hono", alt: "Hono" },
      ],
    },
    {
      id: 2,
      title: "SIPEDAS - Employee Information System",
      category: "Full Stack Development",
      description:
        "Employee management system for Aceh Social Service Department built with Express.js and Node.js. Features MongoDB database, role-based access control, approval workflow, and data validation.",
      imageSrc: "/coverProject/sipedas.png",
      projectUrl: "#",
      technologies: [
        { icon: "logos:nodejs-icon", alt: "Node.js" },
        { icon: "logos:express", alt: "Express" },
        { icon: "logos:mongodb-icon", alt: "MongoDB" },
      ],
    },
    {
      id: 3,
      title: "Fintrack - Financial App for SMEs",
      category: "Mobile Development",
      description:
        "Financial management application for SMEs with machine learning integration for expense categorization, financial forecasting, data visualization, and comprehensive financial tracking.",
      imageSrc: "/coverProject/fintrack.png",
      projectUrl: "#",
      technologies: [
        { icon: "logos:android-icon", alt: "Android" },
        { icon: "logos:python", alt: "Python" },
        { icon: "logos:tensorflow", alt: "TensorFlow" },
      ],
    },
  ];

  // All projects data - termasuk project keempat
  const allProjects = [
    ...featuredProjects,
    {
      id: 4,
      title: "Euran - Waste Management System",
      category: "Web Development",
      description:
        "Integrated waste management system with Laravel framework. Features payment processing, user dashboard, collection scheduling, geolocation services, and notification system for waste collection operations.",
      imageSrc: "https://placehold.co/600x400/F59E0B/000000",
      projectUrl: "#",
      technologies: [
        { icon: "logos:laravel", alt: "Laravel" },
        { icon: "logos:php", alt: "PHP" },
        { icon: "logos:mysql-icon", alt: "MySQL" },
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
            Real-world projects showcasing backend development, system
            architecture, and problem-solving skills
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
