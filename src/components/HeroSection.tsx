import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="w-full flex flex-col  pt-12 items-start text-start relative"
      // Hapus overflow-hidden untuk mencegah efek glow terpotong
    >
      {/* Background wrapper yang lebih besar */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-visible">
        {/* Glow effects dengan ukuran yang lebih besar dan blur yang lebih halus */}
        <div className="absolute -left-[10%] top-[20%] w-[40vw] h-[40vw] bg-gradient-to-r from-[#3BF686]/10 to-[#3BF686]/30 rounded-full filter blur-[150px]" />
        <div className="absolute -right-[5%] bottom-[10%] w-[35vw] h-[35vw] bg-gradient-to-r from-[#4CA9FF]/30 to-[#4CA9FF]/10 rounded-full filter blur-[150px]" />
        <div className="absolute left-[30%] top-[60%] w-[25vw] h-[25vw] bg-gradient-to-r from-[#3BF686]/10 to-[#4CA9FF]/10 rounded-full filter blur-[120px]" />

        {/* Additional subtle glow */}
        <div className="absolute left-[50%] top-[10%] w-[20vw] h-[20vw] bg-gradient-to-r from-[#4CA9FF]/5 to-[#3BF686]/5 rounded-full filter blur-[100px]" />
      </div>

      <motion.div
        className="relative z-10 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2
          className="text-5xl font-sora font-bold mb-5 text-left"
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

      <motion.div
        className="flex flex-row mt-8 w-full relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <div className="rounded-lg me-9 flex-1 flex justify-center items-start">
          <div className="relative">
            <div className="absolute inset-0 scale-125 bg-gradient-to-r from-[#3BF686]/40 to-[#4CA9FF]/40 rounded-full blur-xl opacity-50 -z-10"></div>
            <img
              src="/Avatar.svg"
              alt="Muhammad Ghufran"
              className="w-auto h-auto relative z-10 object-cover rounded-full mx-auto shadow-lg"
            />
          </div>
        </div>

        <div className="flex-1 me-20 w-auto">
          <h4 className="font-semibold font-sora text-xl mb-3">Biography</h4>
          <p className="text-gray-300 w-xl font-inter leading-relaxed">
            Gaining Buff +1 for learning, Buff +2 for documentation, and even
            more buffs for team management—excited to dive deeper into React, UX
            Research, and Agile while finishing my software engineering degree!
          </p>
        </div>

        <div className="flex-1">
          <h4 className="font-semibold font-sora text-xl mb-3 tracking-wider">
            Let's connect
          </h4>
          <div className="flex flex-row">
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
                className="w-7 h-7"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadghufran"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 transition-transform hover:scale-110 duration-300"
              aria-label="LinkedIn"
            >
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-7 h-7"
              />
            </a>
            <a
              href="mailto:ghufranbakrie@gmail.com"
              className="mr-4 transition-transform hover:scale-110 duration-300"
              aria-label="Email"
            >
              <img src="/icons/mail.svg" alt="Email" className="w-7 h-7" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-row items-start justify-between w-full mt-20 relative z-10 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      >
        <div className="w-[28.625rem]">
          <h4 className="font-semibold font-sora text-xl mb-3">What I do</h4>
          <p className="text-[#EDCECE] font-inter leading-6 tracking-[0.014em]">
            Build and maintain websites, frontend dev also have a mentorship
            called MOFON. My motto is Beauty and function in equal measure as
            priority.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 scale-110 bg-gradient-to-r from-[#3BF686]/20 to-[#4CA9FF]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-10"></div>
          <ServiceCard
            iconSrc="/icons/Globe.svg"
            iconAlt="Web Development"
            title="Web Development"
            description="Creating responsive, interactive websites and web applications with modern frontend frameworks and best practices."
          />
        </div>

        <div className="relative group">
          <div className="absolute inset-0 scale-110 bg-gradient-to-r from-[#3BF686]/20 to-[#4CA9FF]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-10"></div>
          <ServiceCard
            iconSrc="/icons/Globe.svg"
            iconAlt="Web Development"
            title="Web Development"
            description="Creating responsive, interactive websites and web applications with modern frontend frameworks and best practices."
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
