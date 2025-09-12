import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axiosConfig from "../../config/axiosConfig";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: "📊", path: "/admin/dashboard" },
  { id: "projects", label: "Projects", icon: "🎯", path: "/admin/projects" },
  { id: "skills", label: "Skills", icon: "⚡", path: "/admin/skills" },
  { id: "about", label: "About", icon: "👤", path: "/admin/about" },
  { id: "settings", label: "Settings", icon: "⚙️", path: "/admin/settings" },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Tentukan menu aktif dari path
  const activeMenu =
    menuItems.find((item) => location.pathname.startsWith(item.path))?.id ||
    "dashboard";

  const handleLogout = () => {
    localStorage.removeItem("token");
    axiosConfig.setAuthHeader(null);
    window.location.href = "/";
  };

  return (
    <div
      className={`fixed lg:static inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 transition-transform duration-300 ease-in-out z-30 w-64`}
    >
      <div className="flex flex-col h-full bg-gray-900/80 backdrop-blur-sm border-r border-gray-800">
        {/* Logo/Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white">Admin Panel</h1>
          <button
            onClick={onToggle}
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
                navigate(item.path);
                // Tutup sidebar di mobile setelah navigasi
                if (window.innerWidth < 1024) {
                  onToggle();
                }
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

        {/* User Info & Logout */}
        <div className="p-4 border-t border-gray-800 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
            <div>
              <p className="text-white text-sm font-medium">Admin</p>
              <p className="text-gray-400 text-xs">admin@email.com</p>
            </div>
          </div>
          <button
            className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
