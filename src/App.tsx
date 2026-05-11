/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Camera, 
  Settings, 
  Smartphone, 
  MapPin, 
  MessageCircle, 
  Shield, 
  CheckCircle,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SERVICES = [
  {
    title: "INSTALACIÓN DE CCTV",
    description: "Sistemas de vigilancia de alta definición con cámaras IP y analógicas para hogares y empresas.",
    icon: Camera,
  },
  {
    title: "SOPORTE Y MANTENIMIENTO",
    description: "Asistencia técnica especializada y mantenimiento preventivo para garantizar el funcionamiento 24/7.",
    icon: Settings,
  },
  {
    title: "ACCESO REMOTO",
    description: "Vea sus cámaras desde cualquier lugar del mundo a través de su smartphone o tablet.",
    icon: Smartphone,
  }
];

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function App() {
  const [currentService, setCurrentService] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % SERVICES.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  };

  const whatsappLink = "https://wa.me/595985666661";
  const budgetMessage = encodeURIComponent("Hola, quiero solicitar un presupuesto!");
  const budgetLink = `${whatsappLink}?text=${budgetMessage}`;

  return (
    <div className="min-h-screen bg-[#020617] text-[#f8fafc] font-sans selection:bg-cyan-500 selection:text-white relative overflow-hidden tech-grid">
      {/* Glow Effects */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] glow-circle -mr-48 -mt-48 pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] glow-circle -ml-24 -mb-24 pointer-events-none z-0" />

      {/* Dynamic Background Images (Preserving user request for dynamic camera background) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-transparent to-[#020617] z-10" />
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1920"
          alt="CCTV Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-12 flex flex-col items-center max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
        >
          CCTVPRO.PY
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[10px] md:text-xs tracking-[0.6em] font-semibold text-cyan-200/80 uppercase mb-4"
        >
          SEGURIDAD • CONFIANZA • TECNOLOGÍA
        </motion.p>
        <div className="flex items-center justify-center gap-2 text-cyan-500/60">
          <MapPin size={16} />
          <span className="text-sm font-medium tracking-wide uppercase">Santa Rita, Alto Paraná</span>
        </div>
      </nav>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden fixed top-6 right-6 z-[100]">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 rounded-full bg-slate-900/80 border border-white/10 text-white backdrop-blur-xl"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-[90] bg-[#020617]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 text-2xl font-bold uppercase tracking-widest"
          >
            <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400">Servicios</a>
            <a href="#ubicacion" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400">Ubicación</a>
            <a 
              href={budgetLink}
              className="bg-cyan-500 text-slate-900 px-8 py-4 rounded-full text-lg"
            >
              Presupuesto
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 px-6 max-w-7xl mx-auto">
        {/* Services Section */}
        <section id="servicios" className="py-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="text-center md:text-left">
              <p className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Excelencia en Seguridad</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none uppercase">
                Servicios <br /> Especializados
              </h2>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={prevService}
                className="p-4 rounded-2xl service-card hover:bg-cyan-500/10 transition-all active:scale-90"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextService}
                className="p-4 rounded-2xl service-card hover:bg-cyan-500/10 transition-all active:scale-90"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="service-card rounded-[2.5rem] overflow-hidden p-8 md:p-20 text-center flex flex-col items-center"
              >
                {(() => {
                  const Icon = SERVICES[currentService].icon;
                  return (
                    <div className="max-w-3xl flex flex-col items-center gap-8">
                      <div className="w-24 h-24 bg-cyan-500/10 rounded-[2rem] flex items-center justify-center mb-4 shadow-2xl shadow-cyan-500/20 border border-cyan-500/20">
                        <Icon size={48} className="text-cyan-400" />
                      </div>
                      
                      <div className="flex flex-col gap-6">
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                          {SERVICES[currentService].title}
                        </h3>
                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
                          {SERVICES[currentService].description}
                        </p>
                        


                        <div className="pt-10">
                          <a 
                            href={budgetLink}
                            className="inline-flex items-center gap-4 bg-cyan-500 hover:bg-cyan-400 text-[#020617] px-12 py-5 rounded-full font-black uppercase tracking-widest text-lg transition-all shadow-2xl shadow-cyan-500/30 active:scale-95"
                          >
                            Solicitar Presupuesto <MessageCircle size={24} />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
            
            <div className="flex gap-2 mt-8 justify-center">
              {SERVICES.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentService(idx)}
                  className={cn(
                    "h-1 transition-all duration-500 rounded-full",
                    currentService === idx ? "w-16 bg-cyan-500 shadow-glow shadow-cyan-500/50" : "w-4 bg-slate-800"
                  )}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="ubicacion" className="py-20">
          <div className="service-card rounded-[2.5rem] p-8 md:p-16 border border-cyan-500/10 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <p className="text-cyan-400 font-bold uppercase tracking-widest text-[10px]">Presencia Regional</p>
              <h3 className="text-4xl md:text-6xl font-black tracking-tight leading-none">SANTA RITA <br /> <span className="text-cyan-500">PARAGUAY</span></h3>
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                Garantizamos seguridad total en Santa Rita y toda la zona de Alto Paraná con técnicos altamente capacitados.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="px-5 py-2 rounded-full bg-slate-900 border border-white/5 text-sm font-semibold tracking-widest text-slate-300 uppercase">Alto Paraná</div>
                <div className="px-5 py-2 rounded-full bg-slate-900 border border-white/5 text-sm font-semibold tracking-widest text-slate-300 uppercase">24/7 Cobertura</div>
              </div>
            </div>
            <div className="w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden border border-white/10 relative group">
               <img 
                 src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800&h=800" 
                 alt="Paraguay Region" 
                 className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-cyan-500/10" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 text-center relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-8 uppercase italic">
              Proteja lo que <br /> <span className="text-cyan-500">Más Quiere</span>
            </h3>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light leading-relaxed">
              No deje su seguridad al azar. Solicite un presupuesto profesional hoy mismo y experimente la tranquilidad total.
            </p>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={budgetLink}
              className="inline-flex items-center gap-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-12 py-6 rounded-full font-black text-xl uppercase tracking-wider shadow-2xl shadow-cyan-500/30 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Presupuesto Directo
              <MessageCircle size={28} />
            </motion.a>
          </motion.div>
        </section>

        {/* Mini Footer */}
        <footer className="py-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-60">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-black tracking-tighter text-cyan-400">CCTVPRO.PY</span>
            <span className="text-[10px] tracking-[0.2em] font-bold text-slate-500 uppercase">© 2026 Santa Rita, Paraguay</span>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-slate-500">
            Seguridad • Confianza • Tecnología
          </div>
        </footer>
      </main>

      {/* Floating WhatsApp Button */}
      <motion.a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 md:bottom-32 md:right-10 z-[100] bg-[#25d366] text-white p-4 md:p-5 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center animate-bounce"
      >
        <WhatsAppIcon className="w-8 h-8 md:w-9 md:h-9" />
      </motion.a>
    </div>
  );
}
