import React, { useState } from "react";
import {
  User,
  Settings,
  SlidersHorizontal,
  Database,
} from "lucide-react";
import Sidebar from "./Sidebar";
import MobileTabSelector from "./MobileTabSelector";
import AccountSettings from "./tabs/AccountSettings";
import GeneralSettings from "./tabs/GeneralSettings";
import PersonalizationSettings from "./tabs/PersonalizationSettings";
import DataControlsSettings from "./tabs/DataControlsSettings";

const tabs = [
  { key: "account", label: "Account", icon: <User size={16} /> },
  { key: "general", label: "General", icon: <Settings size={16} /> },
  { key: "personalization", label: "Personalization", icon: <SlidersHorizontal size={16} /> },
  { key: "data", label: "Data Controls", icon: <Database size={16} /> },
];

export default function SettingsPage({ onBack }) {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="min-h-screen bg-purple-200 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Settings</h2>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Back
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row">
        {/* Desktop Sidebar */}
        <Sidebar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Mobile Tab Selector */}
        <MobileTabSelector tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tab Content */}
        <div className="flex-1 p-6">
          {activeTab === "account" && <AccountSettings />}
          {activeTab === "general" && <GeneralSettings />}
          {activeTab === "personalization" && <PersonalizationSettings />}
          {activeTab === "data" && <DataControlsSettings />}
        </div>
      </div>
    </div>
  );
}
