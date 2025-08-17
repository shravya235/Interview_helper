import React from "react";

export default function UsageCard() {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
      <h3 className="text-sm text-gray-600 mb-4">Usage & Credits</h3>

      <div className="flex justify-between items-end mb-6">
        <div>
          <div className="text-3xl font-bold text-gray-800 leading-none">4</div>
          <div className="text-sm text-gray-600 mt-1">Remaining Interviews</div>
        </div>

        {/* Chart */}
        <div className="flex items-end gap-1 h-16">
          <div className="w-4 bg-gray-300 rounded-sm" style={{ height: "30%" }}></div>
          <div className="w-4 bg-gray-300 rounded-sm" style={{ height: "45%" }}></div>
          <div className="w-4 bg-gray-300 rounded-sm" style={{ height: "60%" }}></div>
          <div className="w-4 bg-gray-300 rounded-sm" style={{ height: "35%" }}></div>
          <div className="w-4 bg-gray-300 rounded-sm" style={{ height: "50%" }}></div>
          <div className="w-4 bg-gray-300 rounded-sm" style={{ height: "70%" }}></div>
          <div className="w-4 bg-blue-200 rounded-sm" style={{ height: "40%" }}></div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <div className="text-2xl font-bold text-gray-800 leading-none">8</div>
          <div className="text-sm text-gray-600 mt-1">Total Interviews</div>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-gray-800 leading-none">
            Aug 15, 2025
          </div>
          <div className="text-sm text-gray-500 mt-0.5">Last Prep Date</div>
        </div>
      </div>
    </div>
  );
}
