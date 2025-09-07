import React, { useEffect, useState } from "react";
import DotGrid from "../components/effects/DotGrid";
import SectionScrollFloat from "../components/effects/SectionScrollFloat";
import axiosConfig from "../config/axiosConfig";

const AdminPage: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "projects", label: "Projects", icon: "🎯" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "about", label: "About", icon: "👤" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  useEffect(() => {
    const initializeAdmin = async () => {
      const token = localStorage.getItem("token");

      console.log(token);

      if (!token) {
        window.location.href = "/forbidden";
        return;
      }

      try {
        axiosConfig.setAuthHeader(token);
        const isValid = await axiosConfig.verifyToken(token);
        if (!isValid) {
          localStorage.removeItem("token");
          window.location.href = "/forbidden";
          handleLogout();
          return;
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        handleLogout();
      }
    };

    initializeAdmin();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    axiosConfig.setAuthHeader(null);
    window.location.href = "/";
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">
              Dashboard Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stats Cards */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Projects</p>
                    <p className="text-2xl font-bold text-white">12</p>
                  </div>
                  <div className="text-2xl">🎯</div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Skills</p>
                    <p className="text-2xl font-bold text-white">8</p>
                  </div>
                  <div className="text-2xl">⚡</div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Page Views</p>
                    <p className="text-2xl font-bold text-white">1,234</p>
                  </div>
                  <div className="text-2xl">👁️</div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Last Updated</p>
                    <p className="text-sm font-medium text-white">2 days ago</p>
                  </div>
                  <div className="text-2xl">📅</div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Recent Activity
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">
                    New project "E-commerce App" added
                  </span>
                  <span className="text-gray-500 text-sm ml-auto">
                    2 hours ago
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">
                    Updated React skill level
                  </span>
                  <span className="text-gray-500 text-sm ml-auto">
                    1 day ago
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">
                    About section content updated
                  </span>
                  <span className="text-gray-500 text-sm ml-auto">
                    3 days ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-white">Manage Projects</h2>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Add New Project
              </button>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <p className="text-gray-400">
                Project management interface will be implemented here.
              </p>
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-white">Manage Skills</h2>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Add New Skill
              </button>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <p className="text-gray-400">
                Skills management interface will be implemented here.
              </p>
            </div>
          </div>
        );

      case "about":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">About Section</h2>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <p className="text-gray-400">
                About section editor will be implemented here.
              </p>
            </div>
          </div>
        );

      case "settings":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Settings</h2>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <p className="text-gray-400">
                Settings panel will be implemented here.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
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
        {/* Sidebar */}
        <div
          className={`fixed lg:static inset-y-0 left-0 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 transition-transform duration-300 ease-in-out z-30 w-64`}
        >
          <div className="flex flex-col h-full bg-gray-900/80 backdrop-blur-sm border-r border-gray-800">
            {/* Logo/Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h1 className="text-xl font-bold text-white">Admin Panel</h1>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveMenu(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeMenu === item.id
                      ? "bg-indigo-600 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            {/* User Info */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Admin</p>
                  <p className="text-gray-400 text-xs">admin@email.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-0">
          {/* Top Bar */}
          <div className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 p-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden text-gray-400 hover:text-white"
              >
                ☰
              </button>
              <div className="flex items-center space-x-4">
                <span className="text-gray-300">Welcome back, Admin! 👋</span>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <main className="p-6">
            <SectionScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="top bottom-=100"
              scrollEnd="bottom top+=100"
            >
              {renderContent()}
            </SectionScrollFloat>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
