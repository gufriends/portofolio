import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { t } = useTranslation();

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block w-auto border-b-[#4D4D4D] border-b-[1px] justify-center mx-4 lg:mx-16 mt-6 h-auto pb-2">
        <div className="w-full flex justify-between items-center">
          <a
            href="/"
            className="text-white text-xl lg:text-2xl font-poppins font-extrabold"
          >
            Muhammad Ghufran
          </a>
          <ul className="flex space-x-4 lg:space-x-6 justify-center text-lg lg:text-xl items-center font-semibold p-2.5 h-10">
            <li>
              <a
                href="#home"
                className="text-gray-200 inline-block transform transition-all duration-200 hover:scale-110 hover:text-white"
                onClick={() => handleNavClick("home")}
              >
                {t("navbar.home")}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-200 inline-block transform transition-all duration-200 hover:scale-110 hover:text-white"
                onClick={() => handleNavClick("projects")}
              >
                {t("navbar.projects")}
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-200 inline-block transform transition-all duration-200 hover:scale-110 hover:text-white"
                onClick={() => handleNavClick("skills")}
              >
                {t("navbar.skills")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-200 inline-block transform transition-all duration-200 hover:scale-110 hover:text-white"
                onClick={() => handleNavClick("about")}
              >
                {t("navbar.about")}
              </a>
            </li>
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Top Bar - Logo only */}
      <div className="md:hidden w-full px-4 py-3 border-b-[#4D4D4D] border-b-[1px]">
        <a href="/" className="text-white text-lg font-poppins font-extrabold">
          Muhammad Ghufran
        </a>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1a1a1a]/95 backdrop-blur-md border-t border-[#4D4D4D] z-50">
        <ul className="flex justify-around items-center py-2 px-2">
          <li className="flex-1">
            <a
              href="#home"
              className={`flex flex-col items-center py-2 px-1 rounded-lg transition-all duration-200 ${
                activeSection === "home"
                  ? "text-white bg-gradient-to-r from-[#3BF686]/20 to-[#4CA9FF]/20"
                  : "text-gray-400"
              }`}
              onClick={() => handleNavClick("home")}
            >
              <svg
                className="w-5 h-5 mb-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="text-xs font-medium">{t("navbar.home")}</span>
            </a>
          </li>

          <li className="flex-1">
            <a
              href="#projects"
              className={`flex flex-col items-center py-2 px-1 rounded-lg transition-all duration-200 ${
                activeSection === "projects"
                  ? "text-white bg-gradient-to-r from-[#3BF686]/20 to-[#4CA9FF]/20"
                  : "text-gray-400"
              }`}
              onClick={() => handleNavClick("projects")}
            >
              <svg
                className="w-5 h-5 mb-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z"
                />
              </svg>
              <span className="text-xs font-medium">
                {t("navbar.projects")}
              </span>
            </a>
          </li>

          <li className="flex-1">
            <a
              href="#skills"
              className={`flex flex-col items-center py-2 px-1 rounded-lg transition-all duration-200 ${
                activeSection === "skills"
                  ? "text-white bg-gradient-to-r from-[#3BF686]/20 to-[#4CA9FF]/20"
                  : "text-gray-400"
              }`}
              onClick={() => handleNavClick("skills")}
            >
              <svg
                className="w-5 h-5 mb-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-medium">{t("navbar.skills")}</span>
            </a>
          </li>

          <li className="flex-1">
            <a
              href="#about"
              className={`flex flex-col items-center py-2 px-1 rounded-lg transition-all duration-200 ${
                activeSection === "about"
                  ? "text-white bg-gradient-to-r from-[#3BF686]/20 to-[#4CA9FF]/20"
                  : "text-gray-400"
              }`}
              onClick={() => handleNavClick("about")}
            >
              <svg
                className="w-5 h-5 mb-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                />
              </svg>
              <span className="text-xs font-medium">{t("navbar.about")}</span>
            </a>
          </li>

          <li className="flex-1">
            <div className="flex justify-center py-2">
              <LanguageSwitcher />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
