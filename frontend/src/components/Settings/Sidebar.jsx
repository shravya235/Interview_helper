import React from "react";

export default function Sidebar({ tabs, activeTab, setActiveTab }) {
  return (
    <nav className="hidden lg:block w-64 border-r border-gray-200 bg-gray-50 p-4">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg mb-2 text-sm font-medium transition-all
            ${activeTab === tab.key
              ? "bg-purple-600 text-white shadow-md"
              : "text-gray-700 hover:bg-purple-100 hover:text-purple-800"}`}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
