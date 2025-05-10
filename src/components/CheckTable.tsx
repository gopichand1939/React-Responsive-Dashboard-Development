import React from "react";
import { MoreVertical } from "lucide-react";

const data = [
  { name: "Horizon UI PRO", progress: "17.5%", quantity: "2,458", date: "24.Jan.2021", checked: false },
  { name: "Horizon UI Free", progress: "10.8%", quantity: "1,485", date: "12.Jun.2021", checked: true },
  { name: "Weekly Update", progress: "21.3%", quantity: "1,024", date: "5.Jan.2021", checked: true },
  { name: "Venus 3D Asset", progress: "31.5%", quantity: "858", date: "7.Mar.2021", checked: true },
  { name: "Marketplace", progress: "12.2%", quantity: "258", date: "17.Dec.2021", checked: false },
];

const CheckTable: React.FC = () => {
  return (
    <div className="bg-[#1B254B] rounded-xl p-4 text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Check Table</h2>
        <MoreVertical className="text-gray-400" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-400 text-left">
            <tr>
              <th className="py-2">NAME</th>
              <th className="py-2">PROGRESS</th>
              <th className="py-2">QUANTITY</th>
              <th className="py-2">DATE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-b border-gray-700 last:border-none">
                <td className="py-3 flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={row.checked}
                    readOnly
                    className="accent-purple-500 w-4 h-4"
                  />
                  <span>{row.name}</span>
                </td>
                <td className="py-3">{row.progress}</td>
                <td className="py-3">{row.quantity}</td>
                <td className="py-3">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckTable;
