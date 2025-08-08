// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import "./i18n"; // Import i18n configuration
import Footer from "./components/layout/Footer";
import LandingPage from "./pages/LadingPage";
import Navbar from "./components/layout/Navbar";
import ProjectsPage from "./pages/ProjectsPage";
import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { usePageTracking } from "./hooks/usePageTracking";

function AppContent() {
  const location = useLocation();

  // Use the page tracking hook
  usePageTracking();

  useEffect(() => {
    // Track page changes
    track("page_view", {
      page: location.pathname,
      referrer: document.referrer,
    });
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
