"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import DashboardModal from "@/app/user/dashboard/page"; // Adjust the import path as necessary

type DashboardModalContextType = {
  openDashboard: () => void;
  closeDashboard: () => void;
};

const DashboardModalContext = createContext<DashboardModalContextType | undefined>(undefined);

export function DashboardModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openDashboard = () => setOpen(true);
  const closeDashboard = () => setOpen(false);

  return (
    <DashboardModalContext.Provider value={{ openDashboard, closeDashboard }}>
      {children}
      {/* Global modal instance */}
      <DashboardModal open={open} onClose={closeDashboard} />
    </DashboardModalContext.Provider>
  );
}

export function useDashboardModal() {
  const ctx = useContext(DashboardModalContext);
  if (!ctx) {
    throw new Error("useDashboardModal must be used inside DashboardModalProvider");
  }
  return ctx;
}
