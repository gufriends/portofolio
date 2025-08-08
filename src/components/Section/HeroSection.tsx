import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { track } from "@vercel/analytics";
import { Icon } from "@iconify/react";
import GradientText from "../effects/GradientTextProps";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  // Track social media clicks
  const trackSocialClick = (platform: string) => {
    track("social_click", { platform });
  };

  // Track CV download
  const trackCVDownload = () => {
    track("cv_download", { source: "hero_section" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      id="home"
      className="w-full min-h-screen flex flex-col justify-center relative py-16 md:py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Minimal background glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#3BF686]/4 rounded-full filter blur-[100px] -z-10" />

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side - Main Content */}
        <div className="lg:col-span-8 space-y-6">
          {/* Status Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#3BF686]/20 bg-[#3BF686]/5">
              <div className="w-1.5 h-1.5 bg-[#3BF686] rounded-full mr-2 animate-pulse"></div>
              <span className="text-[#3BF686] text-xs font-medium">
                Available for hire
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sora font-bold leading-[0.9]">
              <span className="text-white">Muhammad</span>
              <br />
              <GradientText
                colors={["#3BF686", "#4CA9FF", "#3BF686", "#4CA9FF", "#3BF686"]}
                animationSpeed={1}
                showBorder={false}
                className=""
              >
                Ghufran
              </GradientText>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl">
              {t("hero.heading")}
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants}>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
              {t("hero.contentBiography")}
            </p>
          </motion.div>

          {/* CTA Buttons & Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2"
          >
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/resume.pdf"
                download="Muhammad_Ghufran_CV.pdf"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] text-black font-semibold rounded-lg text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={trackCVDownload}
              >
                <Icon icon="lucide:download" className="w-4 h-4 mr-2" />
                Download CV
              </motion.a>

              <motion.a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:border-[#3BF686] transition-colors text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Work
              </motion.a>
            </div>

            {/* Social Links - Horizontal */}
            <div className="flex items-center space-x-3">
              {[
                {
                  href: "https://www.linkedin.com/in/ghufranbakrie/",
                  icon: "mdi:linkedin",
                  name: "linkedin",
                },
                {
                  href: "https://github.com/GhufranBkri",
                  icon: "mdi:github",
                  name: "github",
                },
                {
                  href: "https://www.instagram.com/ghufranb_",
                  icon: "mdi:instagram",
                  name: "instagram",
                },
                {
                  href: "mailto:ghufranbakrie@gmail.com",
                  icon: "mdi:email",
                  name: "email",
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.name !== "email" ? "_blank" : undefined}
                  rel={
                    social.name !== "email" ? "noopener noreferrer" : undefined
                  }
                  className="p-2.5 rounded-lg border border-gray-700/30 hover:border-[#3BF686]/50 bg-gray-800/10 hover:bg-[#3BF686]/5 transition-all duration-300 w-10 h-10 flex items-center justify-center group"
                  onClick={() => trackSocialClick(social.name)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon
                    icon={social.icon}
                    className="w-4 h-4 text-gray-400 group-hover:text-[#3BF686] transition-colors"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side - Creative Profile Section */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
          {/* Avatar only */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="relative">
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 border border-[#3BF686]/20 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-[#4CA9FF]/10 rounded-lg"
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3BF686]/5 to-[#4CA9FF]/5 rounded-3xl blur-lg"></div>
                <img
                  src="/Avatar.svg"
                  alt="Muhammad Ghufran"
                  className="relative z-10 w-40 h-40 md:w-48 md:h-48 object-cover rounded-3xl shadow-2xl"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section - Tech Stack */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-6 left-4 md:left-8 hidden lg:block"
      >
        <div className="flex items-center space-x-3 text-gray-500">
          <span className="text-xs">Built with</span>
          <div className="flex space-x-2">
            <Icon icon="logos:react" className="w-4 h-4" />
            <Icon icon="logos:typescript-icon" className="w-4 h-4" />
            <Icon icon="logos:tailwindcss-icon" className="w-4 h-4" />
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-6 right-4 md:right-8 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-gray-400 cursor-pointer group"
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          <span className="text-xs mb-2 group-hover:text-[#3BF686] transition-colors">
            Scroll
          </span>
          <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-400 to-transparent group-hover:via-[#3BF686] transition-colors"></div>
          <Icon
            icon="lucide:chevron-down"
            className="w-3 h-3 mt-1 group-hover:text-[#3BF686] transition-colors"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
