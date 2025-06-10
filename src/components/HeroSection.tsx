import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
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
      id="home"
      className="w-full flex flex-col pt-6 md:pt-12 items-start text-start relative px-4 md:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background wrapper yang lebih besar */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-visible">
        {/* Responsive glow effects */}
        <div className="absolute -left-[20%] md:-left-[10%] top-[20%] w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] bg-gradient-to-r from-[#3BF686]/10 to-[#3BF686]/30 rounded-full filter blur-[100px] md:blur-[150px]" />
        <div className="absolute -right-[15%] md:-right-[5%] bottom-[10%] w-[50vw] md:w-[35vw] h-[50vw] md:h-[35vw] bg-gradient-to-r from-[#4CA9FF]/30 to-[#4CA9FF]/10 rounded-full filter blur-[100px] md:blur-[150px]" />
        <div className="absolute left-[20%] md:left-[30%] top-[60%] w-[35vw] md:w-[25vw] h-[35vw] md:h-[25vw] bg-gradient-to-r from-[#3BF686]/10 to-[#4CA9FF]/10 rounded-full filter blur-[80px] md:blur-[120px]" />
        <div className="absolute left-[40%] md:left-[50%] top-[10%] w-[30vw] md:w-[20vw] h-[30vw] md:h-[20vw] bg-gradient-to-r from-[#4CA9FF]/5 to-[#3BF686]/5 rounded-full filter blur-[80px] md:blur-[100px]" />
      </div>

      {/* Hero Title */}
      <motion.div className="relative z-10 w-full" variants={itemVariants}>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sora font-bold mb-5 text-left leading-tight"
          style={{
            background: "linear-gradient(79deg, #3BF686, #4CA9FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Hi I'm Muhammad Ghufran, a special human with some ability to love
          learning and working on teamwork.
        </h2>
      </motion.div>

      {/* Avatar, Biography, and Connect Section */}
      <motion.div
        className="flex flex-col lg:flex-row mt-6 md:mt-8 w-full relative z-10 gap-6 lg:gap-0"
        variants={itemVariants}
      >
        {/* Avatar Section */}
        <div className="flex justify-center lg:justify-start lg:flex-1 lg:me-9">
          <div className="relative">
            <div className="absolute inset-0 scale-125 bg-gradient-to-r from-[#3BF686]/40 to-[#4CA9FF]/40 rounded-full blur-xl opacity-50 -z-10"></div>
            <img
              src="/Avatar.svg"
              alt="Muhammad Ghufran"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-auto lg:h-auto relative z-10 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>

        {/* Biography Section */}
        <div className="lg:flex-1 lg:me-20 text-center lg:text-left">
          <h4 className="font-semibold font-sora text-lg md:text-xl mb-3">
            Biography
          </h4>
          <p className="text-gray-300 font-inter leading-relaxed text-sm md:text-base">
            Gaining Buff +1 for learning, Buff +2 for documentation, and even
            more buffs for team management—excited to dive deeper into React, UX
            Research, and Agile while finishing my software engineering degree!
          </p>
        </div>

        {/* Connect Section */}
        <div className="lg:flex-1 text-center lg:text-left">
          <h4 className="font-semibold font-sora text-lg md:text-xl mb-3 tracking-wider">
            Let's connect
          </h4>
          <div className="flex flex-row justify-center lg:justify-start">
            <a
              href="https://www.instagram.com/ghufranb_"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 transition-transform hover:scale-110 duration-300"
              aria-label="Instagram"
            >
              <img
                src="/icons/instgram.svg"
                alt="Instagram"
                className="w-6 h-6 md:w-7 md:h-7"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ghufranbakrie/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 transition-transform hover:scale-110 duration-300"
              aria-label="LinkedIn"
            >
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6 md:w-7 md:h-7"
              />
            </a>
            <a
              href="mailto:ghufranbakrie@gmail.com"
              className="mr-4 transition-transform hover:scale-110 duration-300"
              aria-label="Email"
            >
              <img
                src="/icons/mail.svg"
                alt="Email"
                className="w-6 h-6 md:w-7 md:h-7"
              />
            </a>
          </div>
        </div>
      </motion.div>

      {/* What I do and Service Cards Section */}
      <motion.div
        className="flex flex-col lg:flex-row lg:items-start lg:justify-between w-full mt-12 md:mt-16 lg:mt-20 relative z-10 gap-6"
        variants={itemVariants}
      >
        {/* What I do Section */}
        <div className="lg:w-[28.625rem] text-center lg:text-left">
          <h4 className="font-semibold font-sora text-lg md:text-xl mb-3">
            What I do
          </h4>
          <p className="text-[#EDCECE] font-inter leading-6 tracking-[0.014em] text-sm md:text-base">
            Build and maintain websites, frontend dev also have a mentorship
            called MOFON. My motto is Beauty and function in equal measure as
            priority.
          </p>
        </div>

        {/* Service Cards - Stack on mobile, side by side on desktop */}
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-4 justify-center lg:justify-end">
          <motion.div
            className="relative group flex justify-center"
            variants={itemVariants}
          >
            <div className="absolute inset-0 scale-110 bg-gradient-to-r from-[#3BF686]/20 to-[#4CA9FF]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-10"></div>
            <ServiceCard
              iconSrc="/icons/Globe.svg"
              iconAlt="Web Development"
              title="Web Development"
              description="Creating responsive, interactive websites and web applications with modern frontend frameworks and best practices."
            />
          </motion.div>

          <motion.div
            className="relative group flex justify-center"
            variants={itemVariants}
          >
            <div className="absolute inset-0 scale-110 bg-gradient-to-r from-[#3BF686]/20 to-[#4CA9FF]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-10"></div>
            <ServiceCard
              iconSrc="/icons/Globe.svg"
              iconAlt="Web Development"
              title="Web Development"
              description="Creating responsive, interactive websites and web applications with modern frontend frameworks and best practices."
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
