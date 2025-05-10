import React from "react";
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Your files", value: 63, color: "#8E6CFF" },
  { name: "System", value: 25, color: "#00CFFF" },
  { name: "Others", value: 12, color: "#8CE7FF" },
];

const PieChartCard: React.FC = () => {
  return (
    <div className="bg-[#1B254B] rounded-xl p-6 text-white">
      <div className="flex justify-between mb-4">
        <h3 className="text-md font-semibold">Your Pie Chart</h3>
        <span className="text-sm text-gray-400">Monthly</span>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={70}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="flex justify-between mt-6 text-sm">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#8E6CFF]"></span>
          <span>Your files</span>
        </div>
        <span className="font-bold">63%</span>

        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#00CFFF]"></span>
          <span>System</span>
        </div>
        <span className="font-bold">25%</span>
      </div>
    </div>
  );
};

export default PieChartCard;