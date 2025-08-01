import React from "react";
import { useI18n } from "../hooks/useI18n";

const LanguageSwitcher: React.FC = () => {
  const { t, changeLanguage, currentLang } = useI18n();

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "id" : "en";
    changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gradient-to-r from-[#3BF686]/10 to-[#4CA9FF]/10 border border-[#3BF686]/20 text-white hover:from-[#3BF686]/20 hover:to-[#4CA9FF]/20 transition-all duration-200"
      title={t("common.language")}
    >
      <span className="text-sm font-medium">
        {currentLang === "en" ? "🇺🇸 EN" : "🇮🇩 ID"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
