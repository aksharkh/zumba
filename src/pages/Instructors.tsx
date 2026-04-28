import React from 'react';
import { motion } from 'framer-motion';

const Instructors: React.FC = () => {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <h1 className="text-6xl md:text-[8rem] font-black italic tracking-tighter text-white mb-6 uppercase" style={{ textShadow: '6px 6px 0 #ec4899' }}>
          THE CREW
        </h1>
        <p className="text-3xl text-cyan-400 font-black italic uppercase tracking-widest bg-black inline-block px-4 py-2 border-4 border-cyan-400 transform -skew-x-12">
          MEET YOUR HYPE SQUAD
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-24">
        {[
          { name: 'JAXON', style: 'HIP-HOP & REGGAETON', quote: 'LEAVE IT ALL ON THE FLOOR.', img: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1974&auto=format&fit=crop', color: 'bg-yellow-400' },
          { name: 'MIA', style: 'SALSA & CUMBIA', quote: 'FEEL THE RHYTHM IN YOUR SOUL.', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop', color: 'bg-cyan-400' }
        ].map((instructor, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className={`absolute inset-0 ${instructor.color} transform ${idx % 2 === 0 ? 'rotate-3' : '-rotate-3'} transition-transform duration-300 group-hover:rotate-0 border-8 border-white`}></div>
            <div className="relative bg-black p-6 border-8 border-white transform transition-transform duration-300 group-hover:-translate-y-4 group-hover:-translate-x-4">
              <div className="aspect-square mb-6 overflow-hidden border-4 border-zinc-800">
                <img src={instructor.img} alt={instructor.name} className="w-full h-full object-cover grayscale contrast-150 group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="text-6xl font-black italic tracking-tighter text-white uppercase mb-2">{instructor.name}</h3>
              <p className="text-2xl font-black text-pink-500 uppercase tracking-widest mb-4">{instructor.style}</p>
              <p className="text-xl font-bold text-zinc-400 uppercase border-l-4 border-white pl-4 italic">"{instructor.quote}"</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
