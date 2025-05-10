import React from "react";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

const data = [
  {
    name: "Horizon UI PRO",
    status: "Approved",
    date: "18 Apr 2022",
    progress: 90,
  },
  {
    name: "Horizon UI Free",
    status: "Disable",
    date: "18 Apr 2022",
    progress: 60,
  },
  {
    name: "Marketplace",
    status: "Error",
    date: "20 May 2021",
    progress: 80,
  },
  {
    name: "Weekly Updates",
    status: "Approved",
    date: "12 Jul 2021",
    progress: 70,
  },
];

const statusIcons: any = {
  Approved: <CheckCircle className="text-green-400" size={16} />,
  Disable: <XCircle className="text-red-400" size={16} />,
  Error: <AlertCircle className="text-yellow-400" size={16} />,
};

const ComplexTable: React.FC = () => {
  return (
    <div className="bg-[#1b254b] p-6 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">Complex Table</h3>
        <div className="text-white">⋮</div>
      </div>
      <table className="w-full text-sm text-left text-white">
        <thead>
          <tr className="text-gray-400">
            <th className="py-2">NAME</th>
            <th className="py-2">STATUS</th>
            <th className="py-2">DATE</th>
            <th className="py-2">PROGRESS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t border-gray-700">
              <td className="py-2">{row.name}</td>
              <td className="py-2 flex items-center gap-2">
                {statusIcons[row.status]} {row.status}
              </td>
              <td className="py-2">{row.date}</td>
              <td className="py-2">
                <div className="h-2 w-full bg-gray-700 rounded">
                  <div
                    className="h-2 bg-purple-500 rounded"
                    style={{ width: `${row.progress}%` }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplexTable;
