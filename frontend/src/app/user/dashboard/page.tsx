'use client';
import React, { useState } from 'react';
import InterviewPrepDashboard from '@/components/Dashboard/Code';
import Modal from '@/components/ui/Model';

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 sm:p-10 flex justify-center">
      {/* Simple Card */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
        <h2 className="text-lg sm:text-xl font-semibold">Interview Prep Dashboard</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Practice coding, mock interviews, and performance insights all in one place.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="mt-6 w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition text-sm sm:text-base"
        >
          Open Dashboard
        </button>
      </div>

      {/* Modal */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col h-full w-full md:h-[90vh] md:w-[90vw]">
          {/* Header (optional) */}

          {/* Body (scrollable on mobile) */}
          <div className="flex-1 overflow-y-auto py-4 px-2 sm:px-4">
            <InterviewPrepDashboard />
          </div>

          {/* Footer (floating button) */}
          <div className="absolute bottom-4 right-4">
            <button
              onClick={() => setOpen(false)}
              className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 
                        text-gray-700 bg-white/80 backdrop-blur-md 
                        shadow-md hover:bg-gray-100 transition text-sm sm:text-base"
            >
              Close
            </button>
          </div>

        </div>
      </Modal>
    </div>
  );
}
