import { useTranslation } from "react-i18next";

export const useI18n = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const getCurrentLanguage = () => i18n.language;

  const isEnglish = () => i18n.language === "en";
  const isIndonesian = () => i18n.language === "id";

  return {
    t,
    changeLanguage,
    getCurrentLanguage,
    isEnglish,
    isIndonesian,
    currentLang: i18n.language,
  };
};
