import React from 'react';
import { USER_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-16 pb-24 border-b border-white/5 bg-[#0a0a0a]">
      {/* Contenedor principal con Grilla Asimétrica (2/3 texto, 1/3 foto) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-12 items-center">
        
        {/* COLUMNA IZQUIERDA: Todo el contenido de texto */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-2 lg:order-1">
          
          {/* Badge de Disponibilidad */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponible para nuevos proyectos
          </div>

          {/* Título Principal y Rol */}
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-tight">
              Hola, soy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                {USER_DATA.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-xl">
              {USER_DATA.role}
            </p>
          </div>

          {/* Descripción corta */}
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
            Especializado en crear soluciones digitales robustas con <span className="text-white">React, Node.js y Automatización de IA</span>. 
            Transformo ideas en código de alto rendimiento desde Santa Fe, Argentina.
          </p>

          {/* SECCIÓN DE BOTONES: CV Y CONTACTO */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full mt-4">
            {/* Botón Primario: Ver CV */}
            <a 
              href={USER_DATA.cvUrl} 
              target="_blank" 
              rel="noreferrer"
              className="group relative px-8 py-4 bg-white text-black rounded-xl font-bold transition-all hover:bg-blue-500 hover:text-white flex items-center gap-2 shadow-xl shadow-white/5 active:scale-95"
            >
              Ver CV Online
              <span className="material-symbols-outlined text-sm group-hover:rotate-45 transition-transform">visibility</span>
            </a>

            {/* Botón Secundario: Descargar PDF */}
            <a 
              href={USER_DATA.cvUrl} 
              download="Cv German Rindizbacher 2026.pdf"
              className="px-8 py-4 bg-[#111] border border-white/10 hover:border-blue-500/50 text-white rounded-xl font-bold transition-all flex items-center gap-2 group active:scale-95"
            >
              Descargar PDF
              <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">download</span>
            </a>

            {/* Botón Terciario: WhatsApp */}
            <a 
              href={USER_DATA.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-white/5 border border-white/10 text-gray-400 hover:text-green-500 hover:border-green-500/30 rounded-xl transition-all"
              title="Contactar por WhatsApp"
            >
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
          </div>

          {/* Stats rápidas */}
          <div className="grid grid-cols-2 gap-8 pt-10 mt-6 border-t border-white/5 w-full max-w-sm">
            <div>
              <p className="text-3xl font-bold text-white">3+</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Años de experiencia</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Proyectos Finalizados</p>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: La Foto Estilizada */}
        {/* En móvil se oculta (hidden) y aparece en desktop (lg:flex) */}
        <div className="hidden lg:flex justify-center items-center order-1 lg:order-2">
          <div className="relative group">
            {/* Efecto de resplandor azul detrás de la foto */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Contenedor de la foto con borde y sombra */}
            <div className="relative size-72 rounded-full overflow-hidden border-4 border-[#111] shadow-2xl shadow-black/50 group-hover:scale-[1.03] transition-transform duration-500">
              <img 
                src="/assets/foto.jpg" // Asegúrate de que esta ruta sea correcta en tu carpeta public
                alt={USER_DATA.name}
                className="w-full h-full object-cover"
              />
              {/* Overlay oscuro sutil */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;