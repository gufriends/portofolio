import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-900/70 pt-16 pb-8 mt-12">
      <div className="max-w-5xl mx-auto px-8">
        {/* Top section with logo, nav and socials */}
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          {/* Logo and tagline */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              {/* Logo - Replace with your actual logo */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-bold font-sora">MG</span>
              </div>
              <h3 className="text-xl font-sora font-semibold text-white">
                Ghufran
              </h3>
            </div>

            <p className="text-neutral-400 font-inter text-sm mb-6 leading-relaxed">
              Creating elegant digital experiences with a focus on clean code,
              beautiful interfaces, and exceptional user experiences.
            </p>

            {/* Social links */}
            <div className="flex space-x-3">
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-[#3BF686] hover:to-[#4CA9FF]"
                aria-label="GitHub"
              >
                <img src="/icons/github.svg" alt="GitHub" className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-[#3BF686] hover:to-[#4CA9FF]"
                aria-label="LinkedIn"
              >
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-4 h-4"
                />
              </a>
              <a
                href="https://www.instagram.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-[#3BF686] hover:to-[#4CA9FF]"
                aria-label="Instagram"
              >
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="w-4 h-4"
                />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="text-white font-sora font-medium text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-neutral-400 font-inter hover:text-[#4CA9FF] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-neutral-400 font-inter hover:text-[#4CA9FF] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-neutral-400 font-inter hover:text-[#4CA9FF] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-400 font-inter hover:text-[#4CA9FF] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-3">
            <h4 className="text-white font-sora font-medium text-lg mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ghufranbakrie@gmail.com"
                  className="text-neutral-400 font-inter hover:text-[#4CA9FF] transition-colors flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-[#3BF686]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  ghufranbakrie@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 mr-2 mt-1 text-[#3BF686]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-neutral-400 font-inter">
                  Aceh, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-8"></div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-neutral-500 text-sm font-inter mb-4 md:mb-0">
            © {currentYear} Muhammad Ghufran. All rights reserved.
          </p>

          <motion.div
            className="flex items-center text-neutral-500 text-sm font-inter"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span>Designed with</span>
            <svg
              className="w-4 h-4 mx-1 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>using React & Tailwind</span>
          </motion.div>
        </div>

        {/* Back to top button */}
        <div className="fixed bottom-8 right-8">
          <a
            href="#home"
            className="w-12 h-12 rounded-full bg-zinc-800/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-gradient-to-r hover:from-[#3BF686] hover:to-[#4CA9FF] transition-all duration-300"
            aria-label="Back to top"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
