import React from "react";

export default function SettingsPage({ onBack }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Settings</h2>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          Back
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <p className="text-gray-600">Here you can update your preferences, profile, and other settings.</p>
        {/* Add settings forms here */}
      </div>
    </div>
  );
}
