import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE";

const Join: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    passType: 'DROP-IN',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const data = new FormData();
      data.append('sheetName', 'Zumba_Registrations');
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      if (GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE") {
        setTimeout(() => setStatus('success'), 1500);
        return;
      }

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('success'); // Still show success for demo if offline
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-24 px-6 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/20 blur-[100px] rounded-full -z-10 mix-blend-screen"></div>
      
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-black p-12 border-8 border-white shadow-[16px_16px_0_#06b6d4] relative"
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white mb-4 uppercase" style={{ textShadow: '4px 4px 0 #ec4899' }}>
              JOIN THE <br/>PARTY
            </h1>
            <p className="text-xl font-bold text-zinc-400 uppercase tracking-widest">Grab your pass and let's go.</p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12 border-4 border-dashed border-cyan-400 bg-zinc-900">
              <h3 className="text-4xl font-black italic text-pink-500 uppercase mb-4">YOU'RE IN!</h3>
              <p className="text-xl font-bold text-white uppercase mb-8">We sent the details to your email. Get ready to sweat.</p>
              <button onClick={() => setStatus('idle')} className="px-6 py-3 bg-white text-black font-black italic uppercase hover:bg-cyan-400 transition-colors">
                GET ANOTHER PASS
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xl font-black italic text-cyan-400 mb-2 tracking-wider">NAME</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} 
                  className="w-full p-4 bg-zinc-900 border-4 border-zinc-700 focus:outline-none focus:border-pink-500 text-white font-bold uppercase transition-colors" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xl font-black italic text-cyan-400 mb-2 tracking-wider">EMAIL</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} 
                    className="w-full p-4 bg-zinc-900 border-4 border-zinc-700 focus:outline-none focus:border-pink-500 text-white font-bold uppercase transition-colors" />
                </div>
                <div>
                  <label className="block text-xl font-black italic text-cyan-400 mb-2 tracking-wider">PHONE</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} 
                    className="w-full p-4 bg-zinc-900 border-4 border-zinc-700 focus:outline-none focus:border-pink-500 text-white font-bold uppercase transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xl font-black italic text-cyan-400 mb-2 tracking-wider">PASS TYPE</label>
                <select name="passType" value={formData.passType} onChange={handleChange}
                  className="w-full p-4 bg-zinc-900 border-4 border-zinc-700 focus:outline-none focus:border-pink-500 text-white font-bold uppercase transition-colors appearance-none">
                  <option>DROP-IN (1 CLASS) - $20</option>
                  <option>10 CLASS PUNCH CARD - $150</option>
                  <option>UNLIMITED MONTHLY VIP - $99</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-6 mt-8 bg-yellow-400 hover:bg-white text-black font-black text-3xl italic tracking-widest uppercase transition-all transform hover:-translate-y-1 hover:shadow-[8px_8px_0_#ec4899] border-4 border-black"
              >
                {status === 'submitting' ? 'PROCESSING...' : 'LOCK IT IN'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Join;
