import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 top-0 bg-black/90 backdrop-blur-md border-b-4 border-pink-500">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Activity className="w-10 h-10 text-pink-500 group-hover:text-cyan-400 transition-colors" />
          </motion.div>
          <span className="text-4xl font-black italic tracking-tighter text-white">RHYTHM<span className="text-pink-500">NATION</span></span>
        </NavLink>
        
        <div className="hidden md:flex gap-10 text-lg font-black italic tracking-wider">
          <NavLink to="/" className={({ isActive }) => `transition-colors duration-300 hover:text-pink-500 ${isActive ? 'text-pink-500 underline decoration-4 underline-offset-8' : 'text-zinc-400'}`}>
            Home
          </NavLink>
          <NavLink to="/instructors" className={({ isActive }) => `transition-colors duration-300 hover:text-cyan-400 ${isActive ? 'text-cyan-400 underline decoration-4 underline-offset-8' : 'text-zinc-400'}`}>
            Crew
          </NavLink>
          <NavLink to="/classes" className={({ isActive }) => `transition-colors duration-300 hover:text-yellow-400 ${isActive ? 'text-yellow-400 underline decoration-4 underline-offset-8' : 'text-zinc-400'}`}>
            Schedule
          </NavLink>
        </div>

        <NavLink to="/join" className="px-8 py-3 bg-pink-500 hover:bg-cyan-400 text-black font-black text-xl italic tracking-widest transform -skew-x-12 hover:scale-110 transition-all border-b-4 border-r-4 border-white active:translate-y-1 active:border-b-0 active:border-r-0">
          JOIN PARTY
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
