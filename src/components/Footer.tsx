import React from 'react';
import { USER_DATA } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#050505] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Lado Izquierdo: Branding */}
        <div className="flex items-center gap-4">
          <div className="size-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 shadow-lg shadow-blue-500/5">
            <span className="material-symbols-outlined text-2xl">terminal</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white tracking-tight">
              {USER_DATA.name.toUpperCase()}
            </span>
            <span className="text-xs text-slate-500 font-mono">
              © {currentYear} — Full Stack Developer
            </span>
          </div>
        </div>
        
        {/* Lado Derecho: Redes con Logos Originales */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          
          {/* Ubicación */}
          <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/5">
            <span className="material-symbols-outlined text-[20px] text-blue-500">location_on</span>
            <span className="text-sm font-medium text-slate-300">{USER_DATA.location}</span>
          </div>

          <div className="flex items-center gap-6">
            {/* Email */}
            <a 
              href={`mailto:${USER_DATA.email}`}
              className="group flex flex-col items-center gap-1 transition-all"
            >
              <div className="p-3 rounded-full bg-white/5 border border-white/5 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
                <span className="material-symbols-outlined text-[24px] text-slate-400 group-hover:text-blue-400 transition-all">mail</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-blue-400 font-bold">Email</span>
            </a>

            {/* LinkedIn Original */}
            <a 
              href={USER_DATA.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-1 transition-all"
            >
              <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
                <i className="fab fa-linkedin-in text-[22px] text-slate-400 group-hover:text-blue-400 transition-all"></i>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-blue-400 font-bold">LinkedIn</span>
            </a>

            {/* GitHub Original */}
            <a 
              href={USER_DATA.socials.github}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-1 transition-all"
            >
              <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
                <i className="fab fa-github text-[22px] text-slate-400 group-hover:text-blue-400 transition-all"></i>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-blue-400 font-bold">GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;