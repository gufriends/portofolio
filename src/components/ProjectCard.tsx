import React from "react";

/**
 * Technology icon type definition
 */
interface TechIcon {
  src: string;
  alt: string;
}

/**
 * ProjectCard properties
 */
interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  projectUrl?: string;
  technologies?: TechIcon[];
  imagePosition?: "left" | "right";
  compact?: boolean; // New prop for compact mode
}

/**
 * ProjectCard component displays a project with image, description, and technologies used
 */
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  imageSrc,
  projectUrl = "#",
  technologies = [],
  imagePosition = "left",
  compact = false, // Default to false for backward compatibility
}) => {
  // Compact layout - vertical card
  if (compact) {
    return (
      <div className="group bg-zinc-800/90 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(75,169,255,0.15)] hover:-translate-y-2 h-full flex flex-col">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageSrc}
            alt={`${title} project screenshot`}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
            loading="lazy"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent"></div>

          {/* External link icon */}
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} project`}
            className="absolute top-3 right-3 w-8 h-8 bg-gray-700/80 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-[#4CA9FF] hover:to-[#3BF686]"
          >
            <img
              src="/icons/ArrowUp.svg"
              className="w-4 h-4"
              alt="External link"
            />
          </a>

          {/* Technology icons */}
          {technologies.length > 0 && (
            <div className="absolute bottom-3 left-3 flex gap-1.5">
              {technologies.slice(0, 3).map((tech, index) => (
                <div
                  key={index}
                  className="w-6 h-6 bg-neutral-50/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                  title={tech.alt}
                >
                  <img src={tech.src} alt={tech.alt} className="w-3.5 h-3.5" />
                </div>
              ))}
              {technologies.length > 3 && (
                <div className="w-6 h-6 bg-neutral-50/90 backdrop-blur-sm rounded-full flex items-center justify-center text-xs font-bold text-gray-700">
                  +{technologies.length - 3}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Category badge */}
          <div className="mb-3">
            <span className="px-2.5 py-1 bg-zinc-700/70 rounded-full text-neutral-300 text-xs font-medium font-inter tracking-wide">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-white text-lg font-bold font-sora leading-tight mb-3">
            {title}
          </h3>

          {/* Description - Truncated for compact mode */}
          <p className="text-neutral-300 text-sm font-inter leading-relaxed flex-grow line-clamp-3">
            {description.length > 120
              ? `${description.substring(0, 120)}...`
              : description}
          </p>

          {/* View Project Link */}
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-[#3BF686] hover:text-[#4CA9FF] transition-colors font-semibold mt-4 group/link"
          >
            View Project
            <svg
              className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  // Original layout - horizontal card for ProjectsPage
  const imageOrderClass = imagePosition === "right" ? "md:order-2" : "";
  const contentOrderClass = imagePosition === "right" ? "md:order-1" : "";

  return (
    <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto bg-zinc-800/90 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(75,169,255,0.15)]">
      {/* Image Section */}
      <div className={`relative md:w-1/2 h-80 ${imageOrderClass}`}>
        <div className="absolute inset-0 bg-zinc-700 overflow-hidden">
          <img
            src={imageSrc}
            alt={`${title} project screenshot`}
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
        </div>

        {/* External link icon */}
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} project`}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-700/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-[#4CA9FF] hover:to-[#3BF686]"
        >
          <img
            src="/icons/ArrowUp.svg"
            className="w-5 h-5 rounded-sm"
            alt="External link"
          />
        </a>

        {/* Technology icons */}
        {technologies.length > 0 && (
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="w-8 h-8 bg-neutral-50/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                title={tech.alt}
              >
                <img src={tech.src} alt={tech.alt} className="w-5 h-5" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div
        className={`md:w-1/2 p-7 md:p-8 flex flex-col text-start justify-between ${contentOrderClass}`}
      >
        {/* Category badge */}
        <div className="mb-3">
          <span className="px-3 py-1 bg-zinc-700/70 rounded-full text-neutral-300 text-sm font-medium font-inter tracking-wide">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-white text-2xl md:text-3xl font-bold font-sora leading-tight mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-300 text-base font-inter leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
