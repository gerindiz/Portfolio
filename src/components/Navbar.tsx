
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDownload = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      // Simulate download
      console.log('Downloading CV...');
    }, 2000);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-border-dark/50">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
            <span className="material-symbols-outlined text-xl">terminal</span>
          </div>
          <span className="font-bold text-lg tracking-tight">GDR.Dev</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          <a className="hover:text-white transition-colors" href="#projects">Proyectos</a>
          <a className="hover:text-white transition-colors" href="#stack">Stack Tecnológico</a>
          <a className="hover:text-white transition-colors" href="#experience">Experiencia</a>
          <a className="hover:text-white transition-colors" href="#contact">Contacto</a>
        </div>

        <button 
          onClick={handleDownload}
          className={`hidden sm:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-medium transition-all group relative overflow-hidden ${isProcessing ? 'border-primary/60 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : ''}`}
        >
          {!isProcessing ? (
            <span className="text-white flex items-center gap-2">
              Descargar CV
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">download</span>
            </span>
          ) : (
            <span className="text-primary flex items-center gap-2 animate-pulse">
              Optimizando CV...
              <div className="neural-spinner"></div>
            </span>
          )}
          {isProcessing && <div className="absolute bottom-0 left-0 h-[2px] bg-primary shadow-[0_0_10px_#3b82f6] animate-[processingBar_2s_ease-in-out_forwards]"></div>}
        </button>

        <button className="md:hidden text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
