import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen p-8 w-full">
      <h2 className="text-3xl font-bold text-center mb-12 font-sora">
        <span className="bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      <div className="space-y-16">
        <ProjectCard
          title="SIPEMA Backend"
          category="Backend Development"
          description="SIPEMA adalah Sistem Pengaduan Masyarakat untuk Universitas Syiah Kuala (USK) yang memungkinkan masyarakat menyampaikan keluhan, masukan, dan laporan secara langsung. Backend dibangun dengan arsitektur handal untuk mengelola alur pengaduan dari penerimaan hingga penyelesaian kasus."
          imageSrc="https://placehold.co/800x600"
          technologies={[
            { src: "/icons/react.svg", alt: "React" },
            { src: "/icons/tailwind.svg", alt: "Tailwind" },
            { src: "/icons/typescript.svg", alt: "TypeScript" },
          ]}
        />

        <ProjectCard
          title="E-Commerce Platform"
          category="Full Stack Development"
          description="A complete shopping solution with product management, cart functionality, user authentication, and payment processing integration."
          imageSrc="https://placehold.co/800x600"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
