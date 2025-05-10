import React from "react";
import { Flame } from "lucide-react";

const LessonCard: React.FC = () => {
  return (
    <div className="bg-[#1b254b] rounded-xl p-6 w-full text-white">
      <div className="flex items-center gap-2 mb-1">
        <Flame size={18} className="text-white" />
        <span className="text-xs text-gray-400 font-medium">Business Design</span>
      </div>
      <p className="text-sm text-white font-medium mb-2">New lesson is available</p>
      <h4 className="text-base font-semibold mb-4 leading-snug">
        What do you need to know to <br /> create better products?
      </h4>
      <div className="flex items-center text-xs text-gray-300 mb-4 gap-6">
        <span className="flex items-center gap-1 text-green-400">🕒 85 mins</span>
        <span className="flex items-center gap-1 text-red-400">🎥 Video format</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          <img className="w-6 h-6 rounded-full border-2 border-[#0b1437]" src="https://i.pravatar.cc/20?img=1" alt="avatar1" />
          <img className="w-6 h-6 rounded-full border-2 border-[#0b1437]" src="https://i.pravatar.cc/20?img=2" alt="avatar2" />
          <img className="w-6 h-6 rounded-full border-2 border-[#0b1437]" src="https://i.pravatar.cc/20?img=3" alt="avatar3" />
          <span className="text-xs ml-2 text-gray-400">15+</span>
        </div>
        <button className="bg-purple-500 text-white px-4 py-1 text-sm rounded-lg hover:bg-purple-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LessonCard;
