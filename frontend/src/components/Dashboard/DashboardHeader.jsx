import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
      <h1 className="text-xl font-medium text-gray-700">Welcome, Yeah!</h1>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors">
          New session
        </button>
        <button className="px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors">
          View all session
        </button>
      </div>
    </div>
  );
}
