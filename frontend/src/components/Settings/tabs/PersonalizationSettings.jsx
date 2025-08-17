import React from "react";

export default function PersonalizationSettings() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Personalization</h3>

      <div className="space-y-4">
        {/* Theme */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Theme
          </label>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
              Light
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
              Dark
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
              System
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notifications
          </label>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" defaultChecked />
              Email Updates
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              Push Notifications
            </label>
          </div>
        </div>
      </div>

      <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
        Save Preferences
      </button>
    </div>
  );
}
