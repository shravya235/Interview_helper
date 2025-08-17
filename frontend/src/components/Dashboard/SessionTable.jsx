import React, { useState } from "react";
import { Copy } from "lucide-react";
import sessions from "@/Data/sessions.json";

export default function SessionsTable() {
  const [copiedId, setCopiedId] = useState(null);
  const [openSession, setOpenSession] = useState(null); // modal state

  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);

    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleView = (session) => {
    setOpenSession(session);
  };

  const closeModal = () => {
    setOpenSession(null);
  };

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
              <th className="text-left p-4 text-sm font-medium text-red-600">ID</th>
              <th className="text-left p-4 text-sm font-medium text-red-600">Company</th>
              <th className="text-left p-4 text-sm font-medium text-red-600">Role</th>
              <th className="text-left p-4 text-sm font-medium text-red-600">Date</th>
              <th className="text-left p-4 text-sm font-medium text-red-600">Status</th>
              <th className="text-right p-4 text-sm font-medium text-red-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, index) => (
              <tr
                key={`${session.id}-${index}`}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="p-4 text-sm text-gray-600 flex items-center gap-2">
                  <span className="font-mono">{session.id}</span>
                  <button
                    onClick={() => handleCopy(session.id)}
                    className="text-gray-500 hover:text-gray-800"
                    title="Copy ID"
                  >
                    {copiedId === session.id ? (
                      <span className="text-green-600 text-xs">Copied!</span>
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </td>
                <td className="p-4 text-sm text-gray-600">{session.company}</td>
                <td className="p-4 text-sm text-gray-600">{session.role}</td>
                <td className="p-4 text-sm text-gray-600">{session.date}</td>
                <td className="p-4 text-sm text-gray-600">{session.status}</td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => handleView(session)}
                    className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded bg-white hover:bg-gray-50 transition-colors"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {openSession && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Session Details
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              <strong>ID:</strong> {openSession.id}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Company:</strong> {openSession.company}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Role:</strong> {openSession.role}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Date:</strong> {openSession.date}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Status:</strong> {openSession.status}
            </p>
            <p className="text-sm text-gray-700">
              (💬 In the future, this will navigate to the chat for this
              session.)
            </p>

            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
