// src/layouts/Sidebar.tsx
import React from 'react';
import { Home, ShoppingCart, Table, Layout, User, Lock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();

  const navLinks = [
    { label: 'Dashboard', path: '/', icon: <Home size={18} /> },
    { label: 'NFT Marketplace', path: '/nft', icon: <ShoppingCart size={18} /> },
    { label: 'Tables', path: '/tables', icon: <Table size={18} /> },
    { label: 'Kanban', path: '/kanban', icon: <Layout size={18} /> },
    { label: 'Profile', path: '/profile', icon: <User size={18} /> },
    { label: 'Sign In', path: '/signin', icon: <Lock size={18} /> },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#111c44] p-6">
      <h1 className="text-white text-2xl font-bold mb-10">HORIZON <span className="font-light">FREE</span></h1>

      <nav className="space-y-3">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              pathname === link.path
                ? 'bg-[#2d3c85] text-white'
                : 'text-gray-400 hover:bg-[#2d3c85] hover:text-white'
            }`}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>

      {/* Upgrade Box */}
      <div className="mt-20 bg-gradient-to-br from-[#6675f7] to-[#8e63f8] text-white p-4 rounded-xl text-center">
        <div className="w-10 h-10 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
          <Lock size={18} />
        </div>
        <p className="font-semibold">Upgrade to PRO</p>
        <p className="text-xs mt-1">to get access to all features!</p>
        <button className="mt-3 text-sm underline">Connect with Venus World!</button>
      </div>
    </aside>
  );
};

export default Sidebar;
