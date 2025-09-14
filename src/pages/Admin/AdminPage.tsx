import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DotGrid from "../../components/effects/DotGrid";
import SectionScrollFloat from "../../components/effects/SectionScrollFloat";
import Sidebar from "../../components/layout/Sidebar.tsx";

// Import all admin pages
import DashboardAdminPage from "./DashboardAdminPage.tsx";
import ProjectsAdminPage from "./ProjectAdminPage.tsx";
import SkillsAdminPage from "./SkillsAdminPage.tsx";
import AboutAdminPage from "./AboutAdminPage";
import SettingsAdminPage from "./SettingsAdminPage.tsx";

const AdminPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* DotGrid Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <DotGrid
          dotSize={3}
          gap={20}
          baseColor="#1f2937"
          activeColor="#6366f1"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen">
        {/* Sidebar Component */}
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

        {/* Overlay untuk mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
            onClick={toggleSidebar}
          />
        )}

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-0">
          {/* Top Bar */}
          <div className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 p-4">
            <div className="flex items-center justify-between">
              <button
                onClick={toggleSidebar}
                className="lg:hidden text-gray-400 hover:text-white"
              >
                ☰
              </button>
              <div className="flex items-center space-x-4">
                <span className="text-gray-300">Welcome back, Admin! 👋</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <main className="">
            <SectionScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="top bottom-=100"
              scrollEnd="bottom top+=100"
            >
              <Routes>
                <Route
                  path="/dashboard"
                  element={<DashboardAdminPage projectsData={null} />}
                />
                <Route path="/projects" element={<ProjectsAdminPage />} />
                <Route path="/skills" element={<SkillsAdminPage />} />
                <Route path="/about" element={<AboutAdminPage />} />
                <Route path="/settings" element={<SettingsAdminPage />} />
                {/* Default/fallback */}
                <Route
                  path="*"
                  element={<DashboardAdminPage projectsData={null} />}
                />
              </Routes>
            </SectionScrollFloat>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
