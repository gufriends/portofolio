import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import LanguageSwitcher from "../features/LanguageSwitcher";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      // Urutan sections sesuai permintaan: home → projects → skills → about
      const sections = ["home", "projects", "skills", "about"];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);

    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Urutan menu sesuai permintaan: Beranda → Proyek → Keahlian → Tentang
  const navItems = [
    { key: "home", label: t("navbar.home"), icon: "lucide:home" },
    { key: "projects", label: t("navbar.projects"), icon: "lucide:folder" },
    { key: "skills", label: t("navbar.skills"), icon: "lucide:code" },
    { key: "about", label: t("navbar.about"), icon: "lucide:user" },
  ];

  return (
    <>
      {/* Desktop Glassmorphism Navbar */}
      <motion.nav
        className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className={`px-6 py-3 rounded-full backdrop-blur-lg border border-white/10 transition-all duration-300 ${
            isScrolled
              ? "bg-black/40 shadow-lg shadow-black/25"
              : "bg-white/5 shadow-lg shadow-black/10"
          }`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-white font-bold text-lg"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick("home")}
            >
              <span className="bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] bg-clip-text text-transparent">
                MG
              </span>
            </motion.a>

            {/* Navigation Items */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={`#${item.key}`}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.key
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => handleNavClick(item.key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSection === item.key && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#3BF686]/20 to-[#4CA9FF]/20 rounded-full border border-[#3BF686]/30"
                      layoutId="activeTab"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        {/* Mobile Top Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 px-4 py-3 backdrop-blur-lg bg-black/40 border-b border-white/10"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between items-center">
            <motion.a
              href="#home"
              className="text-white font-bold text-lg"
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("home")}
            >
              <span className="bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] bg-clip-text text-transparent">
                Muhammad Ghufran
              </span>
            </motion.a>

            <motion.button
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <Icon
                icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"}
                className="w-5 h-5 text-white"
              />
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed top-16 left-4 right-4 z-40 backdrop-blur-lg bg-black/80 rounded-2xl border border-white/10 overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={`#${item.key}`}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === item.key
                        ? "bg-gradient-to-r from-[#3BF686]/20 to-[#4CA9FF]/20 text-white border border-[#3BF686]/30"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                    onClick={() => handleNavClick(item.key)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon icon={item.icon} className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.a>
                ))}

                <div className="pt-2 border-t border-white/10">
                  <div className="flex justify-center">
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Bottom Floating Navbar */}
        <motion.nav
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="px-4 py-3 backdrop-blur-lg bg-black/40 rounded-full border border-white/10 shadow-lg shadow-black/25"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={`#${item.key}`}
                  className={`relative p-3 rounded-full transition-all duration-300 ${
                    activeSection === item.key
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => handleNavClick(item.key)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {activeSection === item.key && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#3BF686]/30 to-[#4CA9FF]/30 rounded-full border border-[#3BF686]/50"
                      layoutId="activeMobileTab"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <Icon icon={item.icon} className="w-5 h-5 relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.nav>

        {/* Backdrop for mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
