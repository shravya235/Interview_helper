'use client';
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "A", value: 4 },
  { name: "B", value: 3 },
  { name: "C", value: 5 },
  { name: "D", value: 2 },
  { name: "E", value: 6 },
  { name: "F", value: 3 },
  { name: "G", value: 1 },
];

export default function UsageCard() {
  return (
    <div className="bg-white border-2 border-black shadow-[4px_4px_0px_black] p-4 rounded-md">
      <h3 className="text-lg font-bold">Usage & Credits</h3>
      <p className="mt-2 font-medium">4 Remaining Interviews</p>
      <p className="font-medium">8 Total Interviews</p>

      <div className="mt-3 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="value" fill="#000" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-3 font-bold text-lg">Aug 15, 2025</p>
      <p className="text-sm">Last Prep Date</p>
    </div>
  );
}
