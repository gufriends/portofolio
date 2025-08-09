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
  const [isLoaded, setIsLoaded] = useState(false);

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

    // Set loaded after initial render
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener("resize", checkDevice);
      mediaQuery.removeEventListener("change", handleChange);
      clearTimeout(timer);
    };
  }, []);

  // Optimized animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: prefersReducedMotion
        ? { duration: 0.1 }
        : {
            staggerChildren: 0.1,
            delayChildren: 0.05,
          },
    },
  };

  const sectionVariants = {
    hidden: prefersReducedMotion
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: 20,
          scale: 0.98,
        },
    visible: prefersReducedMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.4,
            ease: [0.25, 0.4, 0.25, 1],
            type: "tween",
          },
        },
  };

  // Optimized DotGrid props
  const dotGridProps = useMemo(
    () => ({
      dotSize: isMobile ? 2 : 3,
      gap: isMobile ? 25 : 20,
      baseColor: "#1f2937",
      activeColor: "#6366f1",
      proximity: isMobile ? 80 : 120,
      shockRadius: isMobile ? 150 : 250,
      shockStrength: isMobile ? 3 : 5,
      resistance: 750,
      returnDuration: 1.5,
    }),
    [isMobile]
  );

  return (
    <div className="relative w-full min-h-screen">
      {/* Background - Only load after initial render */}
      {!isMobile && isLoaded && (
        <div className="fixed inset-0 w-full h-full z-0">
          <Suspense fallback={<div className="bg-gray-900 w-full h-full" />}>
            <DotGrid {...dotGridProps} />
          </Suspense>
        </div>
      )}

      {/* Mobile Background */}
      {isMobile && (
        <div className="fixed inset-0 w-full h-full z-0 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900" />
      )}

      {/* Main Content */}
      <motion.main
        className="relative z-10 w-full pb-20 md:pb-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
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

LandingPage.displayName = "LandingPage";

export default LandingPage;
