import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "id" : "en";
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language === "en" ? "EN" : "ID";
  const currentFlag = i18n.language === "en" ? "🇺🇸" : "🇮🇩";

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={`Switch to ${i18n.language === "en" ? "Indonesian" : "English"}`}
    >
      <span className="text-sm">{currentFlag}</span>
      <span className="text-xs font-medium text-white">{currentLang}</span>
      <Icon icon="lucide:globe" className="w-3 h-3 text-gray-300" />
    </motion.button>
  );
};

export default LanguageSwitcher;
