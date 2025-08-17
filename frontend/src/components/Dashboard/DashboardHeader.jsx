import Link from "next/link";
import React from "react";

export default function DashboardHeader({ onOpenSettings }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
      <h1 className="text-xl font-medium text-gray-700">Welcome, Yeah!</h1>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-slate-800 transition-colors">
          <Link href='/' className="text-white">
            New session
          </Link>
        </button>

        {/* Settings button */}
        <button
          onClick={onOpenSettings}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          Settings
        </button>
      </div>
    </div>
  );
}
