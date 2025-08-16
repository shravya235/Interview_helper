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
      
    </main>
  );
}
