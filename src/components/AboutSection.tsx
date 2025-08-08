import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutSection: React.FC = () => {
  // State untuk mengontrol tampilan konten
  const [isExpanded, setIsExpanded] = useState(false);

  const renderSkillBar = (skillName: string, percentage: number) => {
    return (
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-sm font-inter text-neutral-300">
            {skillName}
          </span>
          <span className="text-sm font-inter text-neutral-400">
            {percentage}%
          </span>
        </div>
        <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#3BF686] to-[#4CA9FF]"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const renderTimelineItem = (
    period: string,
    title: string,
    position: string,
    description: string
  ) => {
    return (
      <div className="mb-8 relative">
        <div className="absolute -left-[26px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] p-[2px]">
          <div className="w-full h-full bg-zinc-800 rounded-full"></div>
        </div>

        <p className="text-sm font-inter text-[#4CA9FF] mb-1">{period}</p>
        <h4 className="text-lg font-sora font-semibold text-white mb-0.5">
          {title}
        </h4>
        <p className="text-sm font-inter font-medium text-neutral-300 mb-2">
          {position}
        </p>
        <p className="text-neutral-400 font-inter text-sm">{description}</p>
      </div>
    );
  };

  return (
    <section
      id="about"
      className="py-20 w-full bg-zinc-900/90 rounded-3xl shadow-xl overflow-hidden transition-all duration-700"
      style={{
        minHeight: isExpanded ? "auto" : "auto",
      }}
    >
      <div className="px-6 md:px-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-12 font-sora">
          <span className="bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        {/* Konten yang selalu ditampilkan */}
        <div className="bg-zinc-800/80 rounded-xl p-6 shadow-lg mb-8">
          <h3 className="text-xl font-sora font-semibold text-white mb-4 flex items-center">
            <span className="w-6 h-6 rounded-md bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] flex items-center justify-center mr-3">
              <img
                src="/icons/User.svg"
                className="w-3.5 h-3.5"
                alt="Biography"
              />
            </span>
            Biography
          </h3>
          <p className="text-neutral-300 font-inter leading-relaxed mb-4">
            I'm a software engineering student with a passion for creating
            elegant, efficient digital experiences. I specialize in frontend
            development and UX research, combining technical expertise with
            design sensibility to build intuitive interfaces.
          </p>
          <p className="text-neutral-300 font-inter leading-relaxed">
            My approach blends beauty with functionality, focusing on responsive
            designs that work flawlessly across all devices. I'm constantly
            learning new technologies and methodologies to stay at the cutting
            edge of web development.
          </p>
        </div>

        {/* Tombol Expand/Collapse */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center justify-center px-6 py-3 bg-zinc-800/80 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="text-neutral-300 font-inter mr-2">
              {isExpanded ? "View Less" : "View More"}
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              className="w-5 h-5 bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] rounded-full flex items-center justify-center"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </button>
        </div>

        {/* Konten tambahan - hanya muncul jika expanded */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              {/* Profile dan Timeline */}
              <div className="grid md:grid-cols-12 gap-10 mb-10">
                {/* Profile Image + Quick Info Column */}
                <div className="md:col-span-4">
                  <div className="bg-zinc-800/80 rounded-xl p-6 shadow-lg">
                    <motion.div
                      className="mb-8 relative"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <div className="w-full h-40 rounded-lg bg-gradient-to-r from-[#3BF686]/20 to-[#4CA9FF]/20 mb-4" />
                      <img
                        src="/Avatar.svg"
                        alt="Muhammad Ghufran"
                        className="w-28 h-28 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 rounded-full border-4 border-zinc-800"
                      />
                    </motion.div>

                    <div className="mt-16 text-center">
                      <h3 className="text-xl font-sora font-semibold text-white mb-1">
                        Muhammad Ghufran
                      </h3>
                      <p className="text-neutral-400 font-inter text-sm mb-4">
                        Software Engineering Student
                      </p>

                      {/* Stats */}
                      <motion.div
                        className="grid grid-cols-3 divide-x divide-zinc-700 py-3 mt-6"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                      >
                        <div className="text-center px-2">
                          <p className="text-xl font-sora font-bold text-white">
                            2+
                          </p>
                          <p className="text-xs font-inter text-neutral-400">
                            Years Experience
                          </p>
                        </div>
                        <div className="text-center px-2">
                          <p className="text-xl font-sora font-bold text-white">
                            10+
                          </p>
                          <p className="text-xs font-inter text-neutral-400">
                            Projects
                          </p>
                        </div>
                        <div className="text-center px-2">
                          <p className="text-xl font-sora font-bold text-white">
                            5+
                          </p>
                          <p className="text-xs font-inter text-neutral-400">
                            Tech Stack
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Education & Experience */}
                <div className="md:col-span-8">
                  <div className="bg-zinc-800/80 rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-sora font-semibold text-white mb-6 flex items-center">
                      <span className="w-6 h-6 rounded-md bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] flex items-center justify-center mr-3">
                        <img
                          src="/icons/Briefcase.svg"
                          className="w-3.5 h-3.5"
                          alt="Experience"
                        />
                      </span>
                      Education & Experience
                    </h3>

                    <div className="relative pl-8 before:absolute before:left-2 before:top-2 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-[#3BF686] before:to-[#4CA9FF]">
                      {/* Timeline items with staggered animation */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        {renderTimelineItem(
                          "2021 - Present",
                          "University of Syiah Kuala",
                          "Software Engineering",
                          "Studying software architecture, agile methodologies, and full-stack development. Active in campus tech communities."
                        )}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        {renderTimelineItem(
                          "2022 - Present",
                          "MOFON Mentorship",
                          "Frontend Developer & Mentor",
                          "Build and maintain websites, while mentoring junior developers. Focusing on modern frontend frameworks and best practices."
                        )}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      >
                        {renderTimelineItem(
                          "2021 - 2022",
                          "Freelance Web Developer",
                          "Frontend Specialist",
                          "Developed responsive websites and applications for various clients, focusing on clean code and optimal user experience."
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;
