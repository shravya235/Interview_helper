import React from "react";

export default function DataControlsSettings() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Data & Privacy</h3>

      <div className="space-y-4">
        {/* Export Data */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium text-gray-800 mb-1">Export Your Data</h4>
          <p className="text-sm text-gray-600 mb-3">
            Download a copy of your personal data stored on this platform.
          </p>
          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
            Export Data
          </button>
        </div>

        {/* Clear History */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium text-gray-800 mb-1">Clear History</h4>
          <p className="text-sm text-gray-600 mb-3">
            Remove all your previous activity history from this account.
          </p>
          <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
            Clear History
          </button>
        </div>
      </div>
    </div>
  );
}
