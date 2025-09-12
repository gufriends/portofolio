import React from "react";

const SkillsAdminPage: React.FC = () => {
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
};

export default SkillsAdminPage;
