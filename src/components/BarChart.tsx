import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "17", value1: 80, value2: 50 },
  { name: "18", value1: 70, value2: 40 },
  { name: "19", value1: 75, value2: 45 },
  { name: "20", value1: 90, value2: 60 },
  { name: "21", value1: 65, value2: 35 },
  { name: "22", value1: 75, value2: 50 },
  { name: "23", value1: 80, value2: 55 },
  { name: "24", value1: 70, value2: 40 },
  { name: "25", value1: 75, value2: 45 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1B254B] text-white px-3 py-1 rounded text-sm shadow">
        <p>Revenue: {payload[0].value + payload[1].value}</p>
      </div>
    );
  }
  return null;
};

const WeeklyBarChart = () => {
  return (
    <div className="p-4 rounded-xl bg-[#1B254B] text-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Weekly Revenue</h3>
        <span className="text-gray-400 text-xl">📊</span>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barGap={6}>
          <XAxis dataKey="name" stroke="#aaa" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value2" stackId="a" fill="#6AD2FF" radius={4} />
          <Bar dataKey="value1" stackId="a" fill="#7C3AED" radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyBarChart;
