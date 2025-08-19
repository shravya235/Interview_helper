"use client";
import LandingPage from "@/components/landing/LandingPage";
import Dashboard from "./user/dashboard/page";
import { useAuth } from "@/hooks/useAuth";
import DashboardModal from "./user/dashboard/page";
import HelperPage from "@/components/Helper/HelperPage";
import AuthGuard from "@/components/AuthGuard";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <main className="min-h-screen">
      <AuthGuard>
        {user ?<LandingPage /> : <HelperPage/> }
      </AuthGuard>
    </main>
  );
}
