"use client";
import React, { useEffect, useState } from "react";
import Chatbot from "@/components/Chatbot";
import LandingPage from "@/components/landing/LandingPage";
import Dashboard from "./user/dashboard/page";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
  
    useEffect(() => {
      const token = document.cookie.split('; ').find(row => row.startsWith('token='));
      if (!token) {
        router.push('/login'); // Redirect to login if token is not present
      }
    }, [router]);
  return (
    <main className="min-h-screen">
      <Chatbot />
      <LandingPage /> 
      <Dashboard/>     
    </main>
  );
}
