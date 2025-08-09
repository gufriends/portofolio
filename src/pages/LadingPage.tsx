import React, { useState, useEffect, lazy, Suspense, useMemo } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/Section/HeroSection";
import SkillsSection from "../components/Section/SkillsSection";
import AboutSection from "../components/Section/AboutSection";

// Lazy load heavy components
const DotGrid = lazy(() => import("../components/effects/DotGrid"));
const ProjectsSection = lazy(
  () => import("../components/Section/ProjectsSection")
);

const LandingPage: React.FC = React.memo(() => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      window.removeEventListener("resize", checkDevice);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Simplified animations for reduced motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: prefersReducedMotion
        ? { duration: 0.1 }
        : {
            staggerChildren: 0.15,
            delayChildren: 0.1,
          },
    },
  };

  const sectionVariants = {
    hidden: prefersReducedMotion
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
    visible: prefersReducedMotion
      ? { opacity: 1 }
      : {
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

  // DotGrid props
  const dotGridProps = useMemo(
    () => ({
      dotSize: 3,
      gap: 20,
      baseColor: "#1f2937",
      activeColor: "#6366f1",
      proximity: 120,
      shockRadius: 250,
      shockStrength: 5,
      resistance: 750,
      returnDuration: 1.5,
    }),
    []
  );

  return (
    <div className="relative w-full min-h-screen">
      {/* DotGrid Background - Disable on mobile */}
      {!isMobile && (
        <div className="fixed inset-0 w-full h-full z-0">
          <Suspense fallback={<div />}>
            <DotGrid {...dotGridProps} />
          </Suspense>
        </div>
      )}

      {/* Mobile Background Alternative */}
      {isMobile && <div className="fixed inset-0 w-full h-full z-0 " />}

      {/* Main Content */}
      <motion.main
        className="relative z-10 w-full pb-20 md:pb-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Container dengan max-width dan padding konsisten */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-16 md:space-y-24 lg:space-y-32">
          <motion.div variants={sectionVariants}>
            <HeroSection />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <Suspense
              fallback={
                <div className="h-96 animate-pulse bg-gray-800 rounded-lg" />
              }
            >
              <ProjectsSection />
            </Suspense>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <SkillsSection />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <AboutSection />
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
});

export default LandingPage;
