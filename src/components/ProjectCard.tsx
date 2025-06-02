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
  projectUrl?: string; // Optional URL for the project
  technologies?: TechIcon[];
  imagePosition?: "left" | "right"; // Optional positioning of image
}

/**
 * ProjectCard component displays a project with image, description, and technologies used
 */
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  imageSrc,
  projectUrl = "#", // Default to "#" if not provided
  technologies = [],
  imagePosition = "left",
}) => {
  // Determine order of flex items based on image position
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

        {/* External link icon - Made slightly more prominent since it's the only link now */}
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

        {/* Technology icons - Removed tooltip overlay */}
        {technologies.length > 0 && (
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="w-8 h-8 bg-neutral-50/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                title={tech.alt} // Using HTML title attribute instead of custom tooltip
              >
                <img src={tech.src} alt={tech.alt} className="w-5 h-5" />
                {/* Removed the custom tooltip span */}
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
