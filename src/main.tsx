import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./fonts.css"; // Import your custom fonts here
import "./i18n"; // Import i18n configuration
import i18n from "./i18n";

// Set language from localStorage if available
const savedLanguage = localStorage.getItem("language");
if (savedLanguage) {
  i18n.changeLanguage(savedLanguage);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
