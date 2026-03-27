import React, { useState, useEffect } from 'react';
import { USER_DATA } from '../constants';
import { supabase } from '../lib/supabase';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [aiStatus, setAiStatus] = useState("Descargar CV");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAIDownload = async () => {
    setIsOptimizing(true);
    setAiStatus("IA: Analizando Perfil...");

    // 1. REGISTRO INMEDIATO EN SUPABASE
    try {
      const { error } = await supabase
        .from('cv_downloads')
        .insert([
          { 
            user_agent: navigator.userAgent,
            downloaded_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error("❌ Error de Supabase:", error.message);
      } else {
        console.log("✅ Registro guardado con éxito en la base de datos");
      }
    } catch (err) {
      console.error("❌ Error de conexión con Supabase:", err);
    }

    // 2. CONTINUAR CON LA ANIMACIÓN (Simulación de IA)
    await new Promise(resolve => setTimeout(resolve, 1500));
    setAiStatus("IA: Optimizando para ATS...");
    await new Promise(resolve => setTimeout(resolve, 1500));

    // 3. DESCARGA DEL ARCHIVO
    const link = document.createElement('a');
    link.href = USER_DATA.cvUrl; 
    link.download = "CV_German_Rindizbacher_AI_Optimized.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setAiStatus("¡CV Optimizado!");
    
    // Resetear el botón después de mostrar el éxito
    setTimeout(() => {
      setIsOptimizing(false);
      setAiStatus("Descargar CV");
    }, 3000);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="size-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white shadow-lg shadow-blue-500/20">
            G
          </div>
          <span className="text-white font-bold tracking-tighter hidden sm:block">
            GERMÁN <span className="text-blue-500 text-xs uppercase tracking-widest ml-1">Rindizbacher</span>
          </span>
        </div>

        {/* NAVEGACIÓN */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
          <a href="#experiencia" className="hover:text-white transition-colors">Experiencia</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </div>

        {/* BOTÓN DESCARGA CON IA */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleAIDownload}
            disabled={isOptimizing}
            className={`group relative px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 border shadow-2xl ${
              isOptimizing 
                ? 'bg-blue-500/10 border-blue-500/50 text-blue-400 animate-pulse cursor-wait' 
                : 'bg-white text-black hover:bg-blue-600 hover:text-white border-transparent active:scale-95 shadow-white/5'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              {isOptimizing ? 'smart_toy' : 'download'}
            </span>
            {aiStatus}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;