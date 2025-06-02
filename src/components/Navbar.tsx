import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-auto border-b-[#4D4D4D] border-b-[1px] justify-center mx-16 mt-6 h-auto pb-2">
      <div className="w-full flex justify-between items-center">
        <a
          href="/"
          className="text-white  text-2xl font-poppins font-extrabold"
        >
          Muhammad Ghufran
        </a>
        <ul className="flex space-x-6 justify-center text-xl  items-center font-semibold p-2.5 h-10">
          <li>
            <a
              href="#home"
              className="text-gray-200 inline-block transform transition-all duration-200 hover:scale-110 hover:text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-200 inline-block transform transition-all duration-200 hover:scale-110 hover:text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-200 inline-block transform transition-all duration-200 hover:scale-110 hover:text-white"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-200 inline-block transform transition-all duration-200 hover:scale-110 hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
