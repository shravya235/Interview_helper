import React from "react";

export default function SessionTable() {
  const sessions = [
    { company: "Company A", role: "Role A", date: "2025-08-01" },
    { company: "Company B", role: "Role B", date: "2025-08-02" },
    { company: "Company C", role: "Role C", date: "2025-08-03" },
    { company: "Company D", role: "Role D", date: "2025-08-04" },
  ];

  return (
    <div className="bg-white border-2 border-black shadow-[4px_4px_0px_black] p-4 rounded-md">
      <h3 className="text-lg font-bold mb-4">Recent Interview Prep Sessions</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-pink-600">
            <th className="p-2">Company</th>
            <th className="p-2">Role</th>
            <th className="p-2">Date</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((s, idx) => (
            <tr key={idx} className="border-t border-gray-300">
              <td className="p-2">{s.company}</td>
              <td className="p-2">{s.role}</td>
              <td className="p-2">{s.date}</td>
              <td className="p-2">
                <button className="border-2 border-pink-600 text-pink-600 px-3 py-1 rounded hover:bg-pink-100">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
