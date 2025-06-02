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
    <div className="ml-6 w-64 bg-[#323443] rounded-xl p-4 relative flex flex-col items-center">
      {/* Icon circle at the top */}
      <div
        className="w-16 h-16 -mt-8 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(46deg, #4CA9FF, #3BF686)",
          padding: "1px",
        }}
      >
        <div className="w-full h-full rounded-full bg-zinc-700 flex items-center justify-center">
          <img src={iconSrc} alt={iconAlt} className="w-9 h-9" />
        </div>
      </div>
      {/* Card content */}
      <h3 className="mt-4 text-stone-50 text-base font-semibold font-sora tracking-wide">
        {title}
      </h3>

      <p className="mt-3 text-card-text-secondary text-sm mx-2 font-inter text-center tracking-wide">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
