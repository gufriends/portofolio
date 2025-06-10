import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// Lazy load components
const HeroSection = lazy(() => import("../components/HeroSection"));
const ProjectsSection = lazy(() => import("../components/ProjectsSection"));
const SkillsSection = lazy(() => import("../components/SkillsSection"));
const AboutSection = lazy(() => import("../components/AboutSection"));

// Loading component dengan skeleton yang lebih detail
const SectionSkeleton = ({ height = "h-96" }: { height?: string }) => (
  <div className={`animate-pulse ${height}`}>
    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-full flex flex-col p-6">
      <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-4 w-3/4"></div>
      <div className="space-y-3 flex-1">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/6"></div>
      </div>
    </div>
  </div>
);

// Wrapper component untuk lazy loading dengan intersection observer
const LazySection: React.FC<{
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}> = ({ children, fallback = <SectionSkeleton />, className = "" }) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div ref={ref} className={className}>
      {isIntersecting ? (
        <Suspense fallback={fallback}>{children}</Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

const LandingPage: React.FC = () => {
  // Container variants untuk staggered children
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

  // Item variants untuk setiap section
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
        type: "tween",
      },
    },
  };

  return (
    <motion.main
      className="w-full pb-20 md:pb-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-16 md:space-y-24 lg:space-y-32">
        {/* HeroSection - Load immediately */}
        <motion.div variants={sectionVariants}>
          <Suspense fallback={<SectionSkeleton height="h-screen" />}>
            <HeroSection />
          </Suspense>
        </motion.div>

        {/* Other sections - Lazy load on scroll */}
        <motion.div variants={sectionVariants}>
          <LazySection fallback={<SectionSkeleton height="h-96" />}>
            <ProjectsSection />
          </LazySection>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <LazySection fallback={<SectionSkeleton height="h-80" />}>
            <SkillsSection />
          </LazySection>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <LazySection fallback={<SectionSkeleton height="h-64" />}>
            <AboutSection />
          </LazySection>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default LandingPage;
