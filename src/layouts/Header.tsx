// src/layouts/Header.tsx
import React from 'react';
import { Bell, Moon, Sun, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-[#0b1437] px-6 py-4 flex justify-between items-center shadow-md">
      {/* Page Title */}
      <div>
        <p className="text-sm text-gray-400">Pages / Dashboard</p>
        <h2 className="text-xl font-semibold text-white">Main Dashboard</h2>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#1b254b] text-white text-sm px-4 py-2 rounded-lg pl-10 outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
        </div>

        {/* Icons */}
        <Bell className="text-white cursor-pointer" />
        <Sun className="text-white cursor-pointer" />
        {/* Avatar */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s"
          alt="User"
          className="w-8 h-8 rounded-full border border-white"
        />
      </div>
    </header>
  );
};

export default Header;
