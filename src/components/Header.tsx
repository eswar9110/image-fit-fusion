
import React from 'react';
import { Camera } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <Camera className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              VirtualFit
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-800 font-medium">Home</a>
            <a href="#" className="text-slate-600 hover:text-slate-800 font-medium">About</a>
            <a href="#" className="text-slate-600 hover:text-slate-800 font-medium">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
