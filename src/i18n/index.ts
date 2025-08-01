import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import enTranslations from "./locales/en.json";
import idTranslations from "./locales/id.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  id: {
    translation: idTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
