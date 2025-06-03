import React from "react";

interface ServiceCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  iconSrc,
  iconAlt,
  title,
  description,
}) => {
  return (
    <div className="ml-0 sm:ml-6 w-full sm:w-64 max-w-sm bg-[#323443] rounded-xl p-4 relative flex flex-col items-center">
      {/* Icon circle at the top */}
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 -mt-6 sm:-mt-8 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(46deg, #4CA9FF, #3BF686)",
          padding: "1px",
        }}
      >
        <div className="w-full h-full rounded-full bg-zinc-700 flex items-center justify-center">
          <img src={iconSrc} alt={iconAlt} className="w-7 h-7 sm:w-9 sm:h-9" />
        </div>
      </div>
      {/* Card content */}
      <h3 className="mt-3 sm:mt-4 text-stone-50 text-sm sm:text-base font-semibold font-sora tracking-wide text-center">
        {title}
      </h3>

      <p className="mt-2 sm:mt-3 text-card-text-secondary text-xs sm:text-sm mx-2 font-inter text-center tracking-wide leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
