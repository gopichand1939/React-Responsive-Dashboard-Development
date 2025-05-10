// src/components/Tasks.tsx
import React from "react";

const Tasks: React.FC = () => {
  return (
    <div className="bg-[#1b254b] p-6 rounded-xl">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-white">Tasks</h3>
        <span className="text-xs text-gray-400">Today</span>
      </div>
      <ul className="space-y-3 text-sm text-white">
        {[
          "Landing Page Design",
          "Dashboard Builder",
          "Mobile App Design",
          "Illustrations",
          "Promotional LP",
        ].map((task, i) => (
          <li
            key={i}
            className="flex justify-between items-center bg-[#141e3c] px-3 py-2 rounded"
          >
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="accent-purple-500" />
              <span>{task}</span>
            </div>
            <span className="text-gray-400">⋮</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
