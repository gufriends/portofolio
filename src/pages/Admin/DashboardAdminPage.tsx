import React from "react";

interface DashboardAdminPageProps {
  projectsData?: {
    totalData: number;
  } | null;
}

const DashboardAdminPage: React.FC<DashboardAdminPageProps> = ({
  projectsData,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stats Cards */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Projects</p>
              <p className="text-2xl font-bold text-white">
                {projectsData?.totalData || 0}
              </p>
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
              <p className="text-2xl font-bold text-white">1234</p>
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
            <span className="text-gray-500 text-sm ml-auto">2 hours ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-300">Updated React skill level</span>
            <span className="text-gray-500 text-sm ml-auto">1 day ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-gray-300">About section content updated</span>
            <span className="text-gray-500 text-sm ml-auto">3 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdminPage;
