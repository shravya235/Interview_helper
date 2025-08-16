'use client';
import React, { useState } from 'react';
import InterviewPrepDashboard from '@/components/Dashboard/Code';
import Modal from '@/components/ui/Model';

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-10 flex justify-center">
      {/* Simple Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <h2 className="text-xl font-semibold">Interview Prep Dashboard</h2>
        <p className="text-gray-600 mt-2 text-sm">
          Practice coding, mock interviews, and performance insights all in one place.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="mt-6 w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition"
        >
          Open Dashboard
        </button>
      </div>

      {/* Modal */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col h-full w-full md:h-[85vh] md:w-[90vw]">
          {/* Header */}

          {/* Body (scrollable) */}
          <div className="flex-1 overflow-y-auto py-4">
            <InterviewPrepDashboard />
          </div>

          {/* Footer */}
          <div className="flex justify-end border-t pt-3 flex-shrink-0">
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
