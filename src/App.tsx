/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Camera, 
  Settings, 
  Smartphone, 
  MapPin, 
  MessageCircle, 
  Shield, 
  CheckCircle,
  Instagram,
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
  const [showButtons, setShowButtons] = React.useState(true);
  const [currentService, setCurrentService] = React.useState(0);
  const [direction, setDirection] = React.useState(0); // -1 for left slide, 1 for right slide
  const [isHovered, setIsHovered] = React.useState(false);

  const slideNext = React.useCallback(() => {
    setDirection(1);
    setCurrentService((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const slidePrev = React.useCallback(() => {
    setDirection(-1);
    setCurrentService((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  React.useEffect(() => {
    if (isHovered) return;
    // Comfortable reading time (8 seconds) with automatic slide-over
    const interval = setInterval(() => {
      slideNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [isHovered, slideNext]);

  React.useEffect(() => {
    let scrollTimeout: any;

    const handleScroll = () => {
      // Hide buttons immediately when scrolling begins or continues
      setShowButtons(false);

      // Clear previous timeout
      clearTimeout(scrollTimeout);

      // Set timeout to show buttons again 600ms after scrolling stops
      scrollTimeout = setTimeout(() => {
        setShowButtons(true);
      }, 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const whatsappLink = "https://wa.me/595976824229";
  const budgetMessage = encodeURIComponent("Hola, quiero solicitar un presupuesto!");
  const budgetLink = `${whatsappLink}?text=${budgetMessage}`;

  return (
    <div className="min-h-screen bg-[#000000] text-[#f8fafc] font-sans selection:bg-yellow-400 selection:text-black relative overflow-hidden tech-grid">
      {/* Glow Effects */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] glow-circle -mr-48 -mt-48 pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] glow-circle-navy -ml-24 -mb-24 pointer-events-none z-0" />

      {/* Dynamic Background Images (Preserving user request for dynamic camera background) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-transparent to-black z-10" />
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
      <nav className="relative z-50 px-6 pt-8 pb-4 flex flex-col items-center max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-500 mb-4"
        >
          CCTVPRO.PY
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[10px] md:text-xs tracking-[0.6em] font-semibold text-yellow-400/80 uppercase mb-4"
        >
          SEGURIDAD • CONFIANZA • TECNOLOGÍA
        </motion.p>
        <div className="flex items-center justify-center gap-2 text-yellow-500/60">
          <MapPin size={16} />
          <span className="text-sm font-medium tracking-wide uppercase">Santa Rita, Alto Paraná</span>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 px-6 max-w-7xl mx-auto">
        {/* Services Section */}
        <section id="servicios" className="pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-6">
            <div className="text-center md:text-left">
              <p className="text-yellow-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Excelencia en Seguridad</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none uppercase text-white">
                Servicios <br /> Especializados
              </h2>
            </div>
          </div>

          <div 
            className="relative max-w-5xl mx-auto w-full px-4 sm:px-12 md:px-20 overflow-visible py-8 flex flex-col items-center justify-center min-h-[350px] sm:min-h-[390px] md:min-h-[420px]"
            style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* 3D Revolving Door Wrapper */}
            <div className="relative w-full max-w-[280px] sm:max-w-[460px] md:max-w-[560px] h-[310px] sm:h-[350px] md:h-[380px] mx-auto" style={{ transformStyle: "preserve-3d" }}>
              {(() => {
                const prevIdx = (currentService - 1 + SERVICES.length) % SERVICES.length;
                const nextIdx = (currentService + 1) % SERVICES.length;
                
                const prevService = SERVICES[prevIdx];
                const currentServiceObj = SERVICES[currentService];
                const nextService = SERVICES[nextIdx];
                
                const PrevIcon = prevService.icon;
                const CurrentIcon = currentServiceObj.icon;
                const NextIcon = nextService.icon;
                
                const serviceMessage = encodeURIComponent(`Hola, quiero solicitar presupuesto para ${currentServiceObj.title}!`);
                const serviceBudgetLink = `${whatsappLink}?text=${serviceMessage}`;
                
                return (
                  <>
                    {/* Previous Service Card (Left Revolving Pane) */}
                    <motion.div
                      key={`prev-${prevIdx}`}
                      onClick={slidePrev}
                      className="service-card absolute inset-0 rounded-[2rem] border border-yellow-400/20 bg-slate-950/85 flex flex-col justify-center items-center p-5 sm:p-8 md:p-10 text-center select-none cursor-pointer group/peek origin-right shadow-2xl"
                      initial={{ 
                        x: "-50%", 
                        rotateY: 35, 
                        scale: 0.9, 
                        z: -150, 
                        opacity: 0 
                      }}
                      animate={{ 
                        x: "-50%", 
                        rotateY: 30, 
                        scale: 0.94, 
                        z: -120, 
                        opacity: 0.85 
                      }}
                      exit={{ 
                        x: "-50%", 
                        rotateY: 35, 
                        scale: 0.9, 
                        z: -150, 
                        opacity: 0 
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4">
                        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center border border-yellow-400/20 group-hover/peek:scale-105 transition-transform duration-300">
                          <PrevIcon className="text-yellow-400 w-5 h-5 sm:w-7 sm:h-7" />
                        </div>
                        <h4 className="text-sm sm:text-lg md:text-xl font-black text-white uppercase tracking-tight max-w-[180px] sm:max-w-[240px] text-center line-clamp-2 leading-tight">
                          {prevService.title}
                        </h4>
                        <p className="hidden sm:line-clamp-3 text-[11px] sm:text-xs text-slate-400 font-light max-w-[180px] leading-snug">
                          {prevService.description}
                        </p>
                      </div>
                    </motion.div>

                    {/* Active Service Card (Central Revolving Pane) */}
                    <motion.div
                      key={`current-${currentService}`}
                      className="service-card absolute inset-0 rounded-[2rem] border border-yellow-400/30 bg-slate-950/90 flex flex-col justify-between items-center p-5 sm:p-8 md:p-10 text-center shadow-[0_0_50px_rgba(250,204,21,0.06)] z-10"
                      initial={{ 
                        x: direction > 0 ? "50%" : "-50%", 
                        rotateY: direction > 0 ? -30 : 30, 
                        scale: 0.94, 
                        z: -120, 
                        opacity: 0 
                      }}
                      animate={{ 
                        x: "0%", 
                        rotateY: 0, 
                        scale: 1, 
                        z: 0, 
                        opacity: 1 
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="flex flex-col items-center max-w-3xl mx-auto flex-grow justify-center">
                        {/* Compact Icon */}
                        <div className="w-11 h-11 sm:w-16 sm:h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 border border-yellow-400/20 shadow-2xl">
                          <CurrentIcon className="text-yellow-400 w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                        
                        <h3 className="text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-2">
                          {currentServiceObj.title}
                        </h3>
                        
                        <p className="text-xs sm:text-base md:text-lg text-slate-200 leading-normal sm:leading-relaxed font-normal max-w-2xl px-2 sm:px-0">
                          {currentServiceObj.description}
                        </p>
                      </div>
                      
                      <a 
                        href={serviceBudgetLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black py-2.5 px-6 sm:py-3.5 sm:px-10 rounded-xl font-black uppercase tracking-wider text-[11px] sm:text-xs md:text-sm transition-all shadow-lg active:scale-95 mt-4"
                      >
                        Cotizar Servicio <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </a>
                    </motion.div>

                    {/* Next Service Card (Right Revolving Pane) */}
                    <motion.div
                      key={`next-${nextIdx}`}
                      onClick={slideNext}
                      className="service-card absolute inset-0 rounded-[2rem] border border-yellow-400/20 bg-slate-950/85 flex flex-col justify-center items-center p-5 sm:p-8 md:p-10 text-center select-none cursor-pointer group/peek origin-left shadow-2xl"
                      initial={{ 
                        x: "50%", 
                        rotateY: -35, 
                        scale: 0.9, 
                        z: -150, 
                        opacity: 0 
                      }}
                      animate={{ 
                        x: "50%", 
                        rotateY: -30, 
                        scale: 0.94, 
                        z: -120, 
                        opacity: 0.85 
                      }}
                      exit={{ 
                        x: "50%", 
                        rotateY: -35, 
                        scale: 0.9, 
                        z: -150, 
                        opacity: 0 
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4">
                        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center border border-yellow-400/20 group-hover/peek:scale-105 transition-transform duration-300">
                          <NextIcon className="text-yellow-400 w-5 h-5 sm:w-7 sm:h-7" />
                        </div>
                        <h4 className="text-sm sm:text-lg md:text-xl font-black text-white uppercase tracking-tight max-w-[180px] sm:max-w-[240px] text-center line-clamp-2 leading-tight">
                          {nextService.title}
                        </h4>
                        <p className="hidden sm:line-clamp-3 text-[11px] sm:text-xs text-slate-400 font-light max-w-[180px] leading-snug">
                          {nextService.description}
                        </p>
                      </div>
                    </motion.div>
                  </>
                );
              })()}
            </div>

            {/* Left Navigation Arrow (Now outside 3D wrapper for wider spacing) */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                slidePrev();
              }}
              className="absolute left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/80 border border-yellow-400/20 text-yellow-400 hover:text-black hover:bg-yellow-400 hover:border-yellow-400 flex items-center justify-center transition-all shadow-md active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Right Navigation Arrow (Now outside 3D wrapper for wider spacing) */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                slideNext();
              }}
              className="absolute right-1 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/80 border border-yellow-400/20 text-yellow-400 hover:text-black hover:bg-yellow-400 hover:border-yellow-400 flex items-center justify-center transition-all shadow-md active:scale-95"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Slider Dots / Indicators */}
            <div className="flex gap-2.5 mt-4 justify-center items-center">
              {SERVICES.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentService ? 1 : -1);
                    setCurrentService(idx);
                  }}
                  className={cn(
                    "transition-all duration-500 rounded-full",
                    currentService === idx 
                      ? "w-3 h-3 bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.6)] scale-110" 
                      : "w-2 h-2 bg-slate-800 hover:bg-slate-700"
                  )}
                  aria-label={`Ir al servicio ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="ubicacion" className="pt-4 pb-8">
          <div className="service-card rounded-[2rem] p-6 md:p-10 border border-yellow-400/10 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 space-y-4">
              <p className="text-yellow-400 font-bold uppercase tracking-widest text-[10px]">Presencia Regional</p>
              <h3 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white">SANTA RITA <br /> <span className="text-yellow-400">PARAGUAY</span></h3>
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                Garantizamos seguridad total en Santa Rita y toda la zona de Alto Paraná con técnicos altamente capacitados.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <div className="px-5 py-2 rounded-full bg-slate-900 border border-white/5 text-sm font-semibold tracking-widest text-slate-300 uppercase">Alto Paraná</div>
                <div className="px-5 py-2 rounded-full bg-slate-900 border border-white/5 text-sm font-semibold tracking-widest text-slate-300 uppercase">24/7 Cobertura</div>
              </div>
            </div>
            
            {/* Clickable Map Link (Icon Only, No Image) */}
            <a 
              href="https://maps.app.goo.gl/WtTKs2Pa1BBzXmyi7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-1/2 aspect-video rounded-3xl border border-yellow-400/20 relative group flex flex-col items-center justify-center cursor-pointer bg-black shadow-2xl shadow-yellow-500/5 hover:border-yellow-400/40 transition-all duration-500 p-8 text-center overflow-hidden"
            >
               {/* High-tech tech HUD grid lines */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#eab30805_1px,transparent_1px),linear-gradient(to_bottom,#eab30805_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-10" />

               {/* CCTV/HUD overlay elements */}
               <div className="absolute top-4 left-4 z-20 font-mono text-[9px] text-yellow-500/80 bg-black/70 px-2 py-1 rounded border border-yellow-500/20 tracking-wider">
                 REG: LATAM // PY_SR_AP
               </div>
               
               <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 font-mono text-[9px] text-yellow-500 bg-black/70 px-2 py-1 rounded border border-yellow-500/20 tracking-wider">
                 <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
                 GPS_ONLINE
               </div>

               {/* Map Icon Element */}
               <div className="relative z-20 flex flex-col items-center gap-4 group-hover:scale-105 transition-all duration-500">
                 <div className="relative">
                   {/* Ripple glow circles behind map icon */}
                   <span className="absolute -inset-4 rounded-full bg-yellow-400/5 group-hover:bg-yellow-400/10 animate-ping duration-1000" />
                   <span className="absolute -inset-8 rounded-full bg-yellow-400/5 group-hover:bg-yellow-400/10 animate-pulse duration-2000" />
                   
                   <div className="w-20 h-20 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-500 group-hover:text-yellow-400 group-hover:border-yellow-400/60 shadow-lg transition-all">
                     <MapPin size={40} className="animate-bounce" />
                   </div>
                 </div>
                 
                 <div className="space-y-1">
                   <h4 className="text-yellow-400 font-extrabold uppercase tracking-widest text-sm">Abrir Ubicación</h4>
                   <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] group-hover:text-yellow-400/60 transition-colors">Ver en Google Maps</p>
                 </div>
               </div>

               <div className="absolute inset-0 bg-yellow-500/[0.01] group-hover:bg-yellow-500/[0.03] transition-all duration-500" />
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 text-center relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h3 className="text-3xl md:text-6xl font-black tracking-tighter leading-none mb-4 uppercase italic text-white">
              Proteja lo que <br /> <span className="text-yellow-400">Más Quiere</span>
            </h3>
            <p className="text-lg md:text-xl text-slate-300 mb-6 font-light leading-relaxed">
              No deje su seguridad al azar. Solicite un presupuesto profesional hoy mismo y experimente la tranquilidad total.
            </p>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={budgetLink}
              className="inline-flex items-center gap-4 bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-5 rounded-full font-black text-lg uppercase tracking-wider shadow-2xl shadow-yellow-400/30 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Presupuesto Directo
              <MessageCircle size={24} />
            </motion.a>
          </motion.div>
        </section>

        {/* Mini Footer */}
        <footer className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-black tracking-tighter text-yellow-400">CCTVPRO.PY</span>
            <span className="text-[10px] tracking-[0.2em] font-bold text-slate-500 uppercase">© 2026 Santa Rita, Paraguay</span>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-slate-500">
            Seguridad • Confianza • Tecnología
          </div>
        </footer>
      </main>

      {/* Floating Buttons */}
      <motion.div 
        animate={{ 
          opacity: showButtons ? 1 : 0,
          scale: showButtons ? 1 : 0.8,
          y: showButtons ? 0 : 20
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed bottom-24 right-6 md:bottom-32 md:right-10 z-[100] flex flex-col gap-4 items-center"
        style={{ pointerEvents: showButtons ? 'auto' : 'none' }}
      >
        {/* WhatsApp Button */}
        <motion.a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#25d366] text-white p-4 md:p-5 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center animate-bounce"
        >
          <WhatsAppIcon className="w-8 h-8 md:w-9 md:h-9" />
        </motion.a>

        {/* Instagram Button */}
        <motion.a 
          href="https://www.instagram.com/cctvpro.py?igsh=dDZwaTh0MWVhODJw"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white p-4 md:p-5 rounded-full shadow-[0_0_20px_rgba(238,42,123,0.4)] flex items-center justify-center"
        >
          <Instagram size={32} className="w-8 h-8 md:w-9 md:h-9" />
        </motion.a>
      </motion.div>
    </div>
  );
}
