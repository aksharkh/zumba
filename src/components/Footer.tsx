import React from 'react';
import { Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 px-6 border-t-8 border-cyan-400 mt-auto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b-2 border-zinc-800 pb-16">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <Activity className="w-10 h-10 text-cyan-400" />
            <span className="text-4xl font-black italic tracking-tighter text-white">RHYTHM<span className="text-cyan-400">NATION</span></span>
          </Link>
          <p className="text-zinc-400 font-bold text-lg max-w-sm leading-relaxed">
            DITCH THE WORKOUT, JOIN THE PARTY! WE ARE THE CITY'S MOST EXPLOSIVE DANCE FITNESS COMMUNITY.
          </p>
        </div>
        
        <div>
          <h4 className="text-2xl font-black italic text-pink-500 mb-6 tracking-wider">LINKS</h4>
          <ul className="space-y-4 text-zinc-400 font-bold text-lg">
            <li><Link to="/instructors" className="hover:text-cyan-400 transition-colors">THE CREW</Link></li>
            <li><Link to="/classes" className="hover:text-yellow-400 transition-colors">SCHEDULE</Link></li>
            <li><Link to="/join" className="hover:text-pink-500 transition-colors">GET PASS</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl font-black italic text-yellow-400 mb-6 tracking-wider">STUDIO</h4>
          <ul className="space-y-4 text-zinc-400 font-bold">
            <li>100 NEON STREET</li>
            <li>DOWNTOWN, GROOVE CITY</li>
            <li className="pt-4 text-pink-500">HELLO@RHYTHMNATION.FIT</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 font-bold tracking-widest text-sm">
        <p>© {new Date().getFullYear()} RHYTHM NATION FITNESS.</p>
        <p className="mt-4 md:mt-0">SWEAT WITH ATTITUDE.</p>
      </div>
    </footer>
  );
};

export default Footer;
