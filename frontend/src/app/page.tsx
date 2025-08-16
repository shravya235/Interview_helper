"use client";
import React, { useState } from "react";
import Chatbot from "@/components/Chatbot";
import LandingPage from "./landing/LandingPage";
import InterviewPrepDashboard from "@/components/Dashboard/Code";
import Modal from "@/components/ui/Model";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Chatbot />
      <LandingPage />

      {/* Button to open dashboard modal */}
      <div className="p-6">
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-black text-white rounded-md"
        >
          Open Interview Dashboard
        </button>
      </div>

      {/* Modal */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <InterviewPrepDashboard onClose={() => setOpen(false)} />
      </Modal>

    </main>
  );
}
