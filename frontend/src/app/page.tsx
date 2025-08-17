"use client";
import React, { useState } from "react";
import Chatbot from "@/components/Chatbot";
import LandingPage from "../components/landing/LandingPage";
import InterviewPrepDashboard from "@/components/Dashboard/Code";
import Modal from "@/components/ui/Model";
import Dashboard from "./user/dashboard/page";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Chatbot />
      <LandingPage /> 
      <Dashboard/>     
    </main>
  );
}
