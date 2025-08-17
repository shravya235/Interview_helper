import React from "react";

export default function AccountSettings() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Account Details</h3>

      {/* Replace this with API data */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p><span className="font-medium text-gray-800">Username:</span> johndoe</p>
        <p><span className="font-medium text-gray-800">Email:</span> john@example.com</p>
        <p><span className="font-medium text-gray-800">Plan:</span> Free Tier</p>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-red-600 mb-2">Danger Zone</h4>
        <p className="text-sm text-gray-600 mb-4">
          Deleting your account is permanent and cannot be undone.
        </p>
        <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
          Delete Account
        </button>
      </div>
    </div>
  );
}
