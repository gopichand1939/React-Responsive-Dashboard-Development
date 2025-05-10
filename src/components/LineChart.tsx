import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Sep", uv: 420, pv: 380 },
  { name: "Oct", uv: 300, pv: 280 },
  { name: "Nov", uv: 480, pv: 460 },
  { name: "Dec", uv: 180, pv: 160 },
  { name: "Jan", uv: 270, pv: 240 },
  { name: "Feb", uv: 160, pv: 140 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1B254B] text-white px-4 py-2 rounded-lg shadow-md text-sm">
        <p className="font-semibold">${payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const CustomLineChart = () => {
  return (
    <div className="p-4 rounded-xl bg-[#1B254B] text-white">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="inline-block px-2 py-1 text-xs border border-white/30 rounded-md mb-2 text-white/60">
            This month
          </span>
          <h2 className="text-2xl font-bold">$37.5K</h2>
          <p className="text-green-400 text-sm">+2.45%</p>
          <span className="text-xs text-white/50">On track</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1B254B" />
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="pv" stroke="#00BFFF" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
