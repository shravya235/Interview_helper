import React from "react";

export default function GeneralSettings() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">General Preferences</h3>

      <div className="space-y-4">
        {/* Language Preference */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Language
          </label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>English</option>
            <option>Spanish</option>
            <option>German</option>
            <option>French</option>
          </select>
        </div>

        {/* Time Zone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Time Zone
          </label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>UTC</option>
            <option>GMT</option>
            <option>EST</option>
            <option>PST</option>
          </select>
        </div>
      </div>

      <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
        Save Changes
      </button>
    </div>
  );
}
