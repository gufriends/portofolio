import React from "react";
import HeroSection from "../components/Section/HeroSection";
import ProjectsSection from "../components/Section/ProjectsSection";
import SkillsSection from "../components/Section/SkillsSection";
import AboutSection from "../components/Section/AboutSection";
import DotGrid from "../components/effects/DotGrid";
import SectionScrollFloat from "../components/effects/SectionScrollFloat";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const LandingPage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Navbar />
      {/* DotGrid Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <DotGrid
          dotSize={3}
          gap={20}
          baseColor="#1f2937"
          activeColor="#6366f1"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full pb-20 md:pb-0">
        {/* Container dengan max-width dan padding konsisten */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-16 md:space-y-24 lg:space-y-32">
          {/* Hero Section with ScrollFloat */}
          <section id="home">
            <SectionScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="top bottom-=100"
              scrollEnd="bottom top+=100"
            >
              <HeroSection />
            </SectionScrollFloat>
          </section>

          {/* Projects Section with ScrollFloat */}
          <section id="projects">
            <SectionScrollFloat
              animationDuration={1.2}
              ease="back.inOut(2)"
              scrollStart="top bottom-=100"
              scrollEnd="bottom top+=100"
            >
              <ProjectsSection />
            </SectionScrollFloat>
          </section>

          {/* Skills Section with ScrollFloat */}
          <section id="skills">
            <SectionScrollFloat
              animationDuration={1.1}
              ease="back.inOut(2)"
              scrollStart="top bottom-=100"
              scrollEnd="bottom top+=100"
            >
              <SkillsSection />
            </SectionScrollFloat>
          </section>

          {/* About Section with ScrollFloat */}
          <section id="about">
            <SectionScrollFloat
              animationDuration={1.3}
              ease="back.inOut(2)"
              scrollStart="top bottom-=100"
              scrollEnd="bottom top+=100"
            >
              <AboutSection />
            </SectionScrollFloat>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
