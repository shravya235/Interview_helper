import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function MobileTabSelector({ tabs, activeTab, setActiveTab }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden border-b border-gray-200 bg-gray-50 p-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium bg-white"
      >
        <span className="flex items-center gap-2">
          {tabs.find((t) => t.key === activeTab)?.icon}
          {tabs.find((t) => t.key === activeTab)?.label}
        </span>
        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setOpen(false);
              }}
              className={`flex items-center gap-3 w-full px-4 py-2 text-sm transition-all
                ${activeTab === tab.key
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-purple-100 hover:text-purple-800"}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
