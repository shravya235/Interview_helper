import React from "react";
import { Button } from "../ui/Button";

export default function DashboardHeader() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Welcome, Yeah!</h1>
      <div className="flex gap-2">
        <Button variant="outline">New session</Button>
        <Button variant="outline">View all session</Button>
      </div>
    </div>
  );
}
