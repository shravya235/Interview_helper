import React from "react";

export default function SessionsTable() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-base font-medium text-gray-800">
          Recent Interview Prep Sessions
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left p-4 text-sm font-medium text-red-600">
                Company
              </th>
              <th className="text-left p-4 text-sm font-medium text-red-600">
                Role
              </th>
              <th className="text-left p-4 text-sm font-medium text-red-600">
                Date
              </th>
              <th className="text-left p-4 text-sm font-medium text-red-600">
                Status
              </th>
              <th className="text-right p-4 text-sm font-medium text-red-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((row) => (
              <tr
                key={row}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="p-4 text-sm text-gray-600"></td>
                <td className="p-4 text-sm text-gray-600"></td>
                <td className="p-4 text-sm text-gray-600"></td>
                <td className="p-4 text-sm text-gray-600"></td>
                <td className="p-4 text-right">
                  <button className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded bg-white hover:bg-gray-50 transition-colors">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
