import React from "react";
import { MoreVertical, Plus } from "lucide-react";

const team = [
  {
    name: "Adela Parkson",
    role: "Creative Director",
    image: "https://i.pravatar.cc/40?img=4",
  },
  {
    name: "Christian Mad",
    role: "Product Designer",
    image: "https://i.pravatar.cc/40?img=5",
  },
  {
    name: "Jason Statham",
    role: "Junior Graphic Designer",
    image: "https://i.pravatar.cc/40?img=6",
  },
];

const TeamMembers: React.FC = () => {
  return (
    <div className="bg-[#1b254b] rounded-xl p-6 w-full text-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Team members</h3>
        <Plus className="w-4 h-4 text-white cursor-pointer" />
      </div>
      <div className="space-y-4">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#141e3c] px-4 py-2 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <img
                src={member.image}
                alt={member.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium">{member.name}</p>
                <p className="text-xs text-gray-400">{member.role}</p>
              </div>
            </div>
            <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
