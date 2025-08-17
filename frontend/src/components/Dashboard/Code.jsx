import React, { useState } from "react";
import Header from "./DashboardHeader";
import ProfileCard from "./ProfileCard";
import UsageCard from "./UsageCard";
import SessionsTable from "./SessionTable";
import SettingsPage from "./SettingsPage";

export default function InterviewPrepDashboard() {
  const [showSettings, setShowSettings] = useState(false);

  if (showSettings) {
    return <SettingsPage onBack={() => setShowSettings(false)} />;
  }

  return (
    <div className="min-h-screen bg-purple-200 p-4 font-sans">
      {/* Header */}
      <Header onOpenSettings={() => setShowSettings(true)} />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <ProfileCard />
        <UsageCard />
      </div>

      {/* Sessions */}
      <SessionsTable />
    </div>
  );
}
