import React, { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useI18n } from "../hooks/useI18n";

interface I18nContextType {
  t: (key: string, options?: any) => string;
  changeLanguage: (lang: string) => void;
  getCurrentLanguage: () => string;
  isEnglish: () => boolean;
  isIndonesian: () => boolean;
  currentLang: string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const i18nMethods = useI18n();

  return (
    <I18nContext.Provider value={i18nMethods}>{children}</I18nContext.Provider>
  );
};

export const useI18nContext = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18nContext must be used within an I18nProvider");
  }
  return context;
};
