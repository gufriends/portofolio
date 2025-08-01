// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./i18n"; // Import i18n configuration
import Footer from "./components/Footer";
import LandingPage from "./pages/LadingPage";
import Navbar from "./components/Navbar";
import ProjectsPage from "./pages/ProjectsPage";
import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { usePageTracking } from "./hooks/usePageTracking";

function App() {
  // Use the page tracking hook
  usePageTracking();

  useEffect(() => {
    // Track initial page load
    track("page_view", {
      page: window.location.pathname,
      referrer: document.referrer,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
