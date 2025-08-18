"use client";
import React, { useState } from "react";
import LandingPage from "@/components/landing/LandingPage";
import Dashboard from "./user/dashboard/page";
import HelperPage from "@/components/Helper/HelperPage";

export default function Home() {

  return (
    <main className="min-h-screen">
      <LandingPage />
      <Dashboard />
      <HelperPage />
    </main>
  );
}
