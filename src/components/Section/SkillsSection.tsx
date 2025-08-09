import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

interface SkillItemProps {
  name: string;
  icon: string;
  level?: number;
  color?: string;
}
const SkillItem: React.FC<SkillItemProps> = ({ name, icon }) => {
  return (
    <motion.div
      className="relative group cursor-pointer" // Main container for motion and group hover
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }} // Scale the whole item including the glow
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      {/* Surrounding glow effect */}
      {/* This div creates the glow. It's slightly larger than the content box (-inset-1.5),
          has a gradient background, is blurred, and appears on hover.
          -z-10 attempts to place it behind the content box. */}
      <div className="absolute -inset-1.5 rounded-xl bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] opacity-0 group-hover:opacity-20 filter blur-lg transition-opacity duration-300 -z-10"></div>

      {/* Content Box */}
      <div className="bg-zinc-800 rounded-xl p-5 shadow-lg flex flex-col items-center relative transition-colors duration-300 ">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-zinc-700 rounded-lg relative z-10">
          <Icon icon={icon} width="40" height="40" />
        </div>
        <h3 className="text-white font-sora font-medium text-center relative z-10">
          {name}
        </h3>
      </div>
    </motion.div>
  );
};
const SkillsSection: React.FC = () => {
  const { t } = useTranslation();
  const techSkills: SkillItemProps[] = [
    { name: "React", icon: "logos:react", level: 85 },
    { name: "TypeScript", icon: "logos:typescript-icon", level: 78 },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", level: 90 },
    { name: "Node.js", icon: "logos:nodejs-icon", level: 65 },
    { name: "Next.js", icon: "logos:nextjs-icon", level: 75 },
    { name: "Figma", icon: "logos:figma", level: 70 },
    { name: "Git", icon: "logos:git-icon", level: 82 },
    { name: "MongoDB", icon: "logos:mongodb-icon", level: 60 },
    { name: "PostgreSQL", icon: "logos:postgresql", level: 70 },
    { name: "Hono", icon: "logos:hono", level: 65 },
    { name: "Prisma", icon: "simple-icons:prisma", level: 75 },
  ];

  return (
    <section id="skills" className="py-20 w-full relative">
      {/* Background lighting effects */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-visible">
        {/* Main skill stack glow */}
        <div className="absolute left-[15%] top-[30%] w-[30vw] h-[30vw] bg-gradient-to-r from-[#3BF686]/10 to-[#4CA9FF]/5 rounded-full filter blur-[120px]" />
        <div className="absolute right-[20%] bottom-[20%] w-[25vw] h-[25vw] bg-gradient-to-r from-[#4CA9FF]/10 to-[#3BF686]/5 rounded-full filter blur-[150px]" />

        {/* Additional subtle glows */}
        <div className="absolute right-[10%] top-[10%] w-[15vw] h-[15vw] bg-gradient-to-r from-[#3BF686]/5 to-[#4CA9FF]/5 rounded-full filter blur-[80px]" />
        <div className="absolute left-[30%] bottom-[10%] w-[10vw] h-[10vw] bg-[#3BF686]/5 rounded-full filter blur-[60px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-3xl font-bold text-center mb-4 font-sora">
          <span className="bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] bg-clip-text text-transparent">
            {t("SkillSection.title")}
          </span>
        </h2>

        <p className="text-neutral-300 text-center max-w-2xl mx-auto mb-12 font-inter">
          {t("SkillSection.description")}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        {techSkills.map((skill, index) => (
          <SkillItem key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>

      {/* Additional skills categories - Dibuat solid dan elegan */}
      <motion.div
        className="mt-16 bg-zinc-800 rounded-xl p-6 relative shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Subtle glow behind the other skills section */}
        <div className="absolute inset-0 scale-105 bg-gradient-to-r from-[#3BF686]/10 to-[#4CA9FF]/10 rounded-xl filter blur-xl opacity-30 -z-10"></div>

        <h3 className="text-xl font-sora font-semibold text-white mb-6 flex items-center relative z-10">
          <span className="w-6 h-6 rounded-md bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] flex items-center justify-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Other Skills
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          {[
            "UI/UX Design",
            "Agile Methodology",
            "REST API",
            "Technical Writing",
            "Team Leadership",
            "Problem Solving",
            "User Research",
            "Responsive Design",
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-zinc-700 py-3 px-4 rounded-lg text-center cursor-pointer relative group shadow-md hover:shadow-lg transition-shadow duration-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgb(63, 63, 70)", // Tetap solid zinc-600 saat hover
              }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Subtle hover glow - HANYA DI PINGGIRAN */}
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-[#3BF686]/20 to-[#4CA9FF]/20 rounded-lg blur-sm transition-opacity duration-300 -z-10"></div>

              <p className="text-neutral-200 font-inter text-sm relative z-10">
                {skill}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
