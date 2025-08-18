"use client";
import React, { useState } from "react";
import Chatbot from "@/components/Chatbot";
import LandingPage from "@/components/landing/LandingPage";
import Dashboard from "./user/dashboard/page";

export default function Home() {

  return (
    <main className="min-h-screen">
      <LandingPage />
      <Dashboard />
      <HelperPage />
    </main>
  );
}
