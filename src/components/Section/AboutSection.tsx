import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";

const AboutSection: React.FC = () => {
  // State untuk mengontrol tampilan konten
  const [isExpanded, setIsExpanded] = useState(false);

  const { t } = useTranslation();

  const WorkIcon = () => (
    <Icon icon="mdi:briefcase" className="w-4 h-4 text-white" />
  );

  const EducationIcon = () => (
    <Icon icon="mdi:school" className="w-4 h-4 text-white" />
  );

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
            {t("aboutSection.title")}
          </span>
        </h2>

        {/* Konten yang selalu ditampilkan */}
        <div className="bg-zinc-800/80 rounded-xl p-6 shadow-lg mb-8">
          <h3 className="text-xl font-sora font-semibold text-white mb-4 flex items-center">
            <span className="w-6 h-6 rounded-md bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] flex items-center justify-center mr-3">
              <Icon icon="mdi:account" className="w-3.5 h-3.5 text-white" />
            </span>
            {t("aboutSection.biography")}
          </h3>
          <p className="text-neutral-300 font-inter leading-relaxed mb-4">
            {t("aboutSection.biographyContent1")}
          </p>
          <p className="text-neutral-300 font-inter leading-relaxed">
            {t("aboutSection.biographyContent2")}
          </p>
        </div>

        {/* Tombol Expand/Collapse */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center justify-center px-6 py-3 bg-zinc-800/80 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="text-neutral-300 font-inter mr-2">
              {isExpanded
                ? t("aboutSection.viewLess")
                : t("aboutSection.viewMore")}
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
                        {t("aboutSection.name")}
                      </h3>
                      <p className="text-neutral-400 font-inter text-sm mb-4">
                        {t("aboutSection.role")}
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
                            {t("aboutSection.yearsExperience")}
                          </p>
                          <p className="text-xs font-inter text-neutral-400">
                            {t("aboutSection.yearsExperienceLabel")}
                          </p>
                        </div>
                        <div className="text-center px-2">
                          <p className="text-xl font-sora font-bold text-white">
                            {t("aboutSection.projectsCompleted")}
                          </p>
                          <p className="text-xs font-inter text-neutral-400">
                            {t("aboutSection.projectsLabel")}
                          </p>
                        </div>
                        <div className="text-center px-2">
                          <p className="text-xl font-sora font-bold text-white">
                            {t("aboutSection.techStack")}
                          </p>
                          <p className="text-xs font-inter text-neutral-400">
                            {t("aboutSection.techStackLabel")}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Education & Experience with Vertical Timeline */}
                <div className="md:col-span-8">
                  <div className="bg-zinc-800/80 rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-sora font-semibold text-white mb-6 flex items-center">
                      <span className="w-6 h-6 rounded-md bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] flex items-center justify-center mr-3">
                        <Icon
                          icon="mdi:briefcase"
                          className="w-3.5 h-3.5 text-white"
                        />
                      </span>
                      {t("aboutSection.educationExperience")}
                    </h3>

                    <VerticalTimeline lineColor="linear-gradient(to bottom, #3BF686, #4CA9FF)">
                      <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{
                          background: "rgba(39, 39, 42, 0.8)",
                          color: "#fff",
                          border: "1px solid rgba(59, 246, 134, 0.2)",
                          borderRadius: "12px",
                          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                        }}
                        contentArrowStyle={{
                          borderRight: "7px solid rgba(39, 39, 42, 0.8)",
                        }}
                        date={t("aboutSection.universityDate")}
                        dateClassName="!text-neutral-300 !font-inter !text-sm mx-4"
                        iconStyle={{
                          background:
                            "linear-gradient(135deg, #3BF686, #4CA9FF)",
                          color: "#fff",
                          border: "3px solid rgba(59, 246, 134, 0.3)",
                        }}
                        icon={<EducationIcon />}
                      >
                        <h3 className="text-lg font-sora font-semibold text-white">
                          {t("aboutSection.university")}
                        </h3>
                        <h4 className="text-sm font-inter font-medium text-[#4CA9FF] mb-2">
                          {t("aboutSection.major")}
                        </h4>
                        <p className="text-neutral-300 font-inter text-sm">
                          {t("aboutSection.universityDescription")}
                        </p>
                      </VerticalTimelineElement>

                      <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{
                          background: "rgba(39, 39, 42, 0.8)",
                          color: "#fff",
                          border: "1px solid rgba(59, 246, 134, 0.2)",
                          borderRadius: "12px",
                          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                        }}
                        contentArrowStyle={{
                          borderRight: "7px solid rgba(39, 39, 42, 0.8)",
                        }}
                        date={t("aboutSection.bangkitDate")}
                        dateClassName="!text-neutral-300 !font-inter !text-sm mx-4"
                        iconStyle={{
                          background:
                            "linear-gradient(135deg, #3BF686, #4CA9FF)",
                          color: "#fff",
                          border: "3px solid rgba(59, 246, 134, 0.3)",
                        }}
                        icon={<EducationIcon />}
                      >
                        <h3 className="text-lg font-sora font-semibold text-white">
                          {t("aboutSection.bangkit")}
                        </h3>
                        <h4 className="text-sm font-inter font-medium text-[#4CA9FF] mb-2">
                          {t("aboutSection.bangkitRole")}
                        </h4>
                        <p className="text-neutral-300 font-inter text-sm">
                          {t("aboutSection.bangkitDescription")}
                        </p>
                      </VerticalTimelineElement>

                      <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                          background: "rgba(39, 39, 42, 0.8)",
                          color: "#fff",
                          border: "1px solid rgba(59, 246, 134, 0.2)",
                          borderRadius: "12px",
                          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                        }}
                        contentArrowStyle={{
                          borderRight: "7px solid rgba(39, 39, 42, 0.8)",
                        }}
                        date={t("aboutSection.freelanceDate")}
                        dateClassName="!text-neutral-300 !font-inter !text-sm mx-4"
                        iconStyle={{
                          background:
                            "linear-gradient(135deg, #3BF686, #4CA9FF)",
                          color: "#fff",
                          border: "3px solid rgba(59, 246, 134, 0.3)",
                        }}
                        icon={<WorkIcon />}
                      >
                        <h3 className="text-lg font-sora font-semibold text-white">
                          {t("aboutSection.freelance")}
                        </h3>
                        <h4 className="text-sm font-inter font-medium text-[#4CA9FF] mb-2">
                          {t("aboutSection.freelanceRole")}
                        </h4>
                        <p className="text-neutral-300 font-inter text-sm">
                          {t("aboutSection.freelanceDescription")}
                        </p>
                      </VerticalTimelineElement>

                      <VerticalTimelineElement
                        iconStyle={{
                          background:
                            "linear-gradient(135deg, #3BF686, #4CA9FF)",
                          color: "#fff",
                        }}
                        icon={
                          <Icon
                            icon="mdi:star"
                            className="w-4 h-4 text-white"
                          />
                        }
                      />
                    </VerticalTimeline>
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
