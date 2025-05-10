// src/components/DailyTrafficChart.tsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { hour: "00", value: 300 },
  { hour: "04", value: 200 },
  { hour: "08", value: 500 },
  { hour: "12", value: 320 },
  { hour: "14", value: 400 },
  { hour: "16", value: 550 },
  { hour: "18", value: 200 },
];

const DailyTrafficChart = () => {
  return (
    <div className="bg-[#1b254b] p-6 rounded-xl w-full">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-lg font-semibold text-white">Daily Traffic</h3>
        <p className="text-green-400 text-sm">+2.45%</p>
      </div>
      <p className="text-3xl font-bold text-white mb-2">2.579 <span className="text-sm font-medium text-gray-400">Visitors</span></p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="hour" stroke="#cbd5e1" />
          <YAxis stroke="#cbd5e1" hide />
          <Tooltip />
          <Bar dataKey="value" fill="#805ad5" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyTrafficChart;
