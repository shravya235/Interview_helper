import React from "react";
import Header from "./DashboardHeader";
import ProfileCard from "./ProfileCard";
import UsageCard from "./UsageCard";
import SessionsTable from "./SessionTable";

export default function InterviewPrepDashboard() {
  return (
    <div className="min-h-screen bg-purple-200 p-4 font-sans">
      {/* Header */}
      <Header />

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
