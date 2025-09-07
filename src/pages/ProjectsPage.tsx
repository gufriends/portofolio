import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "../components/features/ProjectCard";

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Force scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    return () => {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "auto";
      }
    };
  }, []);

  // Animation variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Projects data - sesuai dengan ProjectsSection
  const projects = [
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
      imagePosition: "left" as const,
      year: "2024",
      status: "In Development",
    },
    {
      id: 2,
      title: "SIPEDAS - Employee Information System",
      category: "Full Stack Development",
      description:
        "Employee management system for Aceh Social Service Department built with Express.js and Node.js. Features MongoDB database, role-based access control, approval workflow, and data validation.",
      imageSrc: "/coverProject/sipedas.png",
      projectUrl: "https://sipedas.vercel.app/",
      technologies: [
        { icon: "logos:nodejs-icon", alt: "Node.js" },
        { icon: "logos:express", alt: "Express" },
        { icon: "logos:mongodb-icon", alt: "MongoDB" },
      ],
      imagePosition: "right" as const,
      year: "2024",
      status: "Live",
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
      imagePosition: "left" as const,
      year: "2024",
      status: "In Development",
    },
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
      imagePosition: "right" as const,
      year: "2023",
      status: "In Development",
    },
    // Additional projects untuk melengkapi portfolio
    {
      id: 5,
      title: "Portfolio Website",
      category: "Frontend Development",
      description:
        "Modern, responsive portfolio website showcasing development work with smooth animations, dark theme, and optimized performance. Built with React and Framer Motion for engaging user interactions and professional presentation.",
      imageSrc: "https://placehold.co/800x600/10B981/000000",
      projectUrl: "#",
      technologies: [
        { icon: "logos:react", alt: "React" },
        { icon: "logos:typescript-icon", alt: "TypeScript" },
        { icon: "logos:tailwindcss-icon", alt: "Tailwind CSS" },
        { icon: "logos:framer", alt: "Framer Motion" },
      ],
      imagePosition: "left" as const,
      year: "2024",
      status: "Live",
    },
    {
      id: 6,
      title: "API Gateway Service",
      category: "Backend Development",
      description:
        "Microservices API gateway built with Node.js and Express. Features request routing, authentication middleware, rate limiting, logging, and service discovery for distributed system architecture.",
      imageSrc: "https://placehold.co/800x600/EF4444/000000",
      projectUrl: "#",
      technologies: [
        { icon: "logos:nodejs-icon", alt: "Node.js" },
        { icon: "logos:express", alt: "Express" },
        { icon: "logos:redis", alt: "Redis" },
        { icon: "logos:docker-icon", alt: "Docker" },
      ],
      imagePosition: "right" as const,
      year: "2023",
      status: "Live",
    },
  ];

  const filters = [
    "All",
    "Frontend Development",
    "Full Stack Development",
    "Backend Development",
    "Mobile Development",
    "Web Development",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <motion.div
      className="min-h-screen bg-[#242424] pt-24 pb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[10%] w-32 h-32 bg-gradient-to-r from-[#3BF686]/10 to-[#4CA9FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-[5%] w-40 h-40 bg-gradient-to-r from-[#4CA9FF]/10 to-[#3BF686]/10 rounded-full blur-3xl" />
      </div>

      {/* Container dengan max-width dan padding yang sama dengan LandingPage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div className="mb-20" variants={headerVariants}>
          {/* Back Button */}
          <div className="flex justify-start mb-12">
            <Link to="/">
              <motion.button
                className="group inline-flex items-center px-6 py-3 bg-zinc-800/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-white transition-all duration-300 border border-zinc-700/50 hover:border-[#3BF686]/30"
                whileHover={{ x: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Home
              </motion.button>
            </Link>
          </div>

          {/* Title Section */}
          <div className="text-left mb-12">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-sora mb-6 leading-tight"
              variants={headerVariants}
            >
              <span className="text-white">Projects that I have been </span>
              <span className="bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] bg-clip-text text-transparent">
                done
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-400 text-lg md:text-xl font-inter max-w-2xl leading-relaxed"
              variants={headerVariants}
            >
              Real-world projects showcasing backend development, system
              architecture, mobile development, and full-stack solutions across
              different domains.
            </motion.p>
          </div>

          {/* Divider line */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-600 mb-12"
            variants={headerVariants}
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          variants={itemVariants}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold font-poppins transition-all duration-300 backdrop-blur-sm border ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] text-black border-transparent shadow-lg shadow-[#3BF686]/25"
                  : "bg-zinc-800/50 text-gray-300 border-zinc-700/50 hover:text-white hover:bg-zinc-700/50 hover:border-[#4CA9FF]/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Counter */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <p className="text-gray-400 font-inter">
            Showing{" "}
            <span className="text-[#4CA9FF] font-semibold">
              {filteredProjects.length}
            </span>{" "}
            projects
            {activeFilter !== "All" && (
              <span>
                {" "}
                in{" "}
                <span className="text-[#3BF686] font-semibold">
                  {activeFilter}
                </span>
              </span>
            )}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-20 lg:space-y-24">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative">
                {/* Project number indicator */}
                <div className="absolute -left-4 top-0 text-8xl font-bold text-zinc-800/30 font-sora select-none pointer-events-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* ProjectCard */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    imageSrc={project.imageSrc}
                    projectUrl={project.projectUrl}
                    technologies={project.technologies}
                    imagePosition={project.imagePosition}
                  />
                </motion.div>

                {/* Project metadata */}
                <motion.div
                  className="w-full max-w-5xl mx-auto mt-6 px-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-zinc-800/30 backdrop-blur-sm rounded-lg p-4 border border-zinc-700/30">
                    {/* Left side metadata */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                      <span className="text-sm text-gray-400 font-inter">
                        Year:{" "}
                        <span className="text-[#4CA9FF] font-semibold">
                          {project.year}
                        </span>
                      </span>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            project.status === "Live"
                              ? "bg-green-400"
                              : "bg-yellow-400"
                          }`}
                        ></div>
                        <span className="text-sm text-gray-400 font-inter">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Right side action */}
                    <motion.a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-[#3BF686] hover:text-[#4CA9FF] transition-colors font-semibold self-start sm:self-auto"
                      whileHover={{ x: 5 }}
                    >
                      {project.projectUrl === "#" ? "Coming Soon" : "View Live"}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Contact CTA */}
        <motion.div
          className="text-center mt-24 p-12 bg-gradient-to-r from-zinc-900/80 to-zinc-800/80 backdrop-blur-sm rounded-3xl border border-zinc-700/30 relative overflow-hidden"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#3BF686]/5 to-[#4CA9FF]/5 rounded-3xl"></div>

          <div className="relative z-10">
            <motion.h3
              className="text-3xl md:text-4xl font-sora font-bold text-white mb-6"
              whileInView={{ scale: [0.95, 1] }}
              transition={{ duration: 0.5 }}
            >
              Ready to bring your ideas to life?
            </motion.h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              I'm always excited to work on new challenges and collaborate on
              innovative projects. Let's discuss how we can create something
              amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:ghufranbakrie@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] text-black font-bold rounded-full hover:shadow-lg hover:shadow-[#3BF686]/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Get In Touch
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-zinc-600 text-white font-semibold rounded-full hover:border-[#4CA9FF] hover:bg-[#4CA9FF]/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
