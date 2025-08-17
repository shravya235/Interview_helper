import React, { useState } from "react";
import { Github, Linkedin } from "lucide-react";

export default function ProfileCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-4 flex-1">
          <div className="w-16 h-16 bg-purple-100 border-4 border-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm">
              👤
            </div>
          </div>
          <div className="flex-1">
          {/* const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}"); */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {userDetails.displayName || "User"}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              I'm planning to do work in the same company but i dont have the
              <br />
              CGPA to attend the placement 😢
            </p>
          </div>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="text-gray-400 hover:text-gray-600 text-sm transition-colors flex-shrink-0"
        >
          View
        </button>
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 mt-4">
        <a
          href="#"
          className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <Github size={16} />
          <span className="text-sm">GitHub</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <Linkedin size={16} />
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Profile Details
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Here you can show more details about the user, like education,
              skills, or achievements.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
