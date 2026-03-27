import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0a0a0a]">
      {/* Efecto de Luces de Fondo (Dark Engineering) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* TEXTO Y ACCIONES */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponible para nuevos proyectos
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight">
            Germán Dario <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
              Rindizbacher
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Especialista en <span className="text-white font-medium">Full Stack Development</span> y <span className="text-white font-medium">AI Automation</span>. 
            Construyendo soluciones escalables con React 19 y ecosistemas inteligentes.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#proyectos" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20 active:scale-95">
              Ver Proyectos <ArrowRight size={18} />
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a href="https://github.com/gerindiz" target="_blank" className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-all">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/grindiz1989" target="_blank" className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-all">
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* CONTENEDOR DE LA FOTO (Corregido para Celular) */}
        <div className="order-1 md:order-2 flex justify-center items-center">
          <div className="relative group">
            {/* El resplandor azul detrás de la foto */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative size-64 md:size-80 rounded-full border-4 border-[#1a1a1a] overflow-hidden bg-[#1a1a1a] shadow-2xl">
              <img 
                src="/assets/foto.jpg" // RUTA CORREGIDA: Sin /public
                alt="Germán Dario Rindizbacher"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  // Si la ruta falla, intentamos una alternativa común
                  (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=German+Rindizbacher&background=3b82f6&color=fff";
                }}
              />
            </div>

            {/* Badge de Experiencia */}
            <div className="absolute -bottom-4 -right-4 bg-[#1a1a1a] border border-white/10 p-4 rounded-2xl shadow-xl hidden sm:block">
              <div className="text-2xl font-black text-white leading-none">AI</div>
              <div className="text-[10px] text-blue-500 font-bold uppercase tracking-tighter">Expert</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;