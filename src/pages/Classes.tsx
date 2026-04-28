import React from 'react';
import { motion } from 'framer-motion';

const Classes: React.FC = () => {
  const schedule = [
    { day: 'MONDAY', classes: [
      { time: '6:00 PM', name: 'ZUMBA® FITNESS', instructor: 'MIA', intensity: 'HIGH' },
      { time: '7:30 PM', name: 'ZUMBA® TONING', instructor: 'JAXON', intensity: 'EXTREME' }
    ]},
    { day: 'WEDNESDAY', classes: [
      { time: '6:00 PM', name: 'STRONG NATION™', instructor: 'JAXON', intensity: 'EXTREME' },
      { time: '7:30 PM', name: 'ZUMBA® FITNESS', instructor: 'MIA', intensity: 'HIGH' }
    ]},
    { day: 'SATURDAY', classes: [
      { time: '10:00 AM', name: 'WEEKEND WARRIOR', instructor: 'MIA & JAXON', intensity: 'MAXIMUM' }
    ]}
  ];

  return (
    <div className="py-24 px-6 max-w-6xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <h1 className="text-6xl md:text-[8rem] font-black italic tracking-tighter text-white mb-6 uppercase" style={{ textShadow: '6px 6px 0 #06b6d4' }}>
          SCHEDULE
        </h1>
      </motion.div>

      <div className="space-y-16">
        {schedule.map((day, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border-8 border-white bg-zinc-900 p-8 transform -skew-x-3 shadow-[12px_12px_0_#ec4899]"
          >
            <h2 className="text-4xl font-black italic text-yellow-400 tracking-widest uppercase mb-8 border-b-4 border-zinc-800 pb-4">{day.day}</h2>
            <div className="space-y-6">
              {day.classes.map((cls, clsIdx) => (
                <div key={clsIdx} className="grid md:grid-cols-4 gap-6 items-center p-6 bg-black border-4 border-zinc-800 hover:border-cyan-400 transition-colors group">
                  <div className="text-3xl font-black italic text-white group-hover:text-pink-500 transition-colors">{cls.time}</div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-black italic text-white uppercase">{cls.name}</h3>
                    <p className="text-lg font-bold text-zinc-500 uppercase">W/ {cls.instructor}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="inline-block px-4 py-1 bg-zinc-800 text-white font-black uppercase text-sm border-2 border-zinc-700">
                      INTENSITY: {cls.intensity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
