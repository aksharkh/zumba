import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Speaker, HeartPulse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="relative overflow-hidden">
      <section className="relative min-h-[95vh] flex items-center px-6 pt-20">
        {/* Background Grid & Neon Orbs */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] -z-20"></div>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-pink-600/30 blur-[150px] rounded-full -z-10 mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/30 blur-[150px] rounded-full -z-10 mix-blend-screen"></div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100, skewX: -10 }}
            animate={{ opacity: 1, x: 0, skewX: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative z-10"
          >
            <div className="inline-block px-6 py-2 bg-yellow-400 text-black font-black italic tracking-widest uppercase -skew-x-12 mb-8 border-b-4 border-r-4 border-black">
              Burn up to 800 Cals
            </div>
            <h1 className="text-7xl md:text-[9rem] font-black italic tracking-tighter leading-[0.8] mb-8 text-white uppercase" style={{ textShadow: '4px 4px 0 #ec4899, 8px 8px 0 #06b6d4' }}>
              Feel <br/> The <br/> Beat.
            </h1>
            <p className="text-2xl text-zinc-300 font-bold uppercase tracking-wide mb-12 max-w-lg border-l-8 border-pink-500 pl-6">
              The ultimate dance fitness experience. High energy, loud music, zero judgement.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/join" className="px-10 py-5 bg-pink-500 hover:bg-white text-black font-black text-2xl italic tracking-widest transform -skew-x-12 hover:-translate-y-2 transition-all shadow-[8px_8px_0_#06b6d4] hover:shadow-[12px_12px_0_#06b6d4] flex items-center gap-2">
                GET PASS <ArrowRight className="w-8 h-8" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
            style={{ y }}
          >
            <div className="relative z-10 p-4 border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 bg-black shadow-[20px_20px_0_#ec4899]">
              <img src="https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=2187&auto=format&fit=crop" alt="Zumba Dance" className="w-full h-auto object-cover grayscale contrast-125" />
              
              {/* Overlays */}
              <div className="absolute top-10 -left-16 bg-yellow-400 p-6 border-4 border-black transform -rotate-12 shadow-[8px_8px_0_#000]">
                <Zap className="w-16 h-16 text-black" />
              </div>
              <div className="absolute -bottom-10 right-10 bg-cyan-400 p-6 border-4 border-black transform rotate-6 shadow-[8px_8px_0_#000]">
                <span className="text-4xl font-black italic text-black tracking-tighter">100%<br/>FUN</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-8 bg-cyan-400 border-y-8 border-black overflow-hidden flex items-center transform -skew-y-3 my-20">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap text-5xl font-black italic text-black tracking-tighter uppercase"
        >
          <span>Reggaeton</span> <Speaker className="w-12 h-12 inline" />
          <span>Salsa</span> <Speaker className="w-12 h-12 inline" />
          <span>Cumbia</span> <Speaker className="w-12 h-12 inline" />
          <span>Merengue</span> <Speaker className="w-12 h-12 inline" />
          <span>Reggaeton</span> <Speaker className="w-12 h-12 inline" />
          <span>Salsa</span> <Speaker className="w-12 h-12 inline" />
          <span>Cumbia</span> <Speaker className="w-12 h-12 inline" />
          <span>Merengue</span> <Speaker className="w-12 h-12 inline" />
        </motion.div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white mb-6 uppercase" style={{ textShadow: '4px 4px 0 #eab308' }}>
              Why We Rule
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: HeartPulse, title: 'Cardio Killer', desc: 'Interval training mixed with fast and slow rhythms to tone your entire body.', color: 'bg-pink-500' },
              { icon: Speaker, title: 'Bass Heavy', desc: 'Club-quality sound systems playing the hottest Latin and World rhythms.', color: 'bg-cyan-400' },
              { icon: Zap, title: 'Energy Boost', desc: 'Endorphin rush guaranteed. Leave the class feeling invincible.', color: 'bg-yellow-400' },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                className={`p-10 border-8 border-white ${feature.color} text-black transform transition-transform duration-300 shadow-[12px_12px_0_#fff]`}
              >
                <feature.icon className="w-20 h-20 mb-8 stroke-[3]" />
                <h3 className="text-4xl font-black italic tracking-tighter mb-4 uppercase">{feature.title}</h3>
                <p className="font-bold text-xl leading-snug uppercase">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
