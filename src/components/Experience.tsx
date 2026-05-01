import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-2 bg-transparent">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
            Experiencia <br /><span className="text-emerald-500">y Formación</span>
          </h2>
          <div className="h-1.5 w-20 bg-emerald-500 mt-4 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
        </div>
        <div className="bg-white/[0.03] border border-white/10 p-7 rounded-2xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/40"></div>
         <p className="text-slate-300 text-[15px] leading-relaxed mb-4">
  "Desarrollé <span className="text-emerald-400 font-medium">VitalTrack</span> reduciendo 
  el tiempo de detección de incidencias en cadena de frío de horas a segundos. 
  Construí <span className="text-emerald-400 font-medium">TensaCover Uruguay</span> 
  reemplazando un flujo manual de WhatsApp por un CRM con notificaciones automáticas. 
  Actualmente desarrollando <span className="text-white font-semibold">NexusFlow</span>, 
  plataforma de automatización con agentes de IA y arquitectura event-driven."
</p>
<p className="text-slate-400 text-[15px] leading-relaxed">
  Trabajo el ciclo completo: relevamiento, arquitectura, implementación y deploy — 
  con foco en código limpio, escalabilidad y resultados medibles.
</p>
        </div>
      </div>

      <div className="relative space-y-10">
        <div className="absolute left-[7px] top-2 bottom-0 w-[1px] bg-gradient-to-b from-emerald-500 via-emerald-500/20 to-transparent"></div>
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="relative pl-10 group">
            <div className="absolute w-4 h-4 bg-[#2e2e2e] border-2 border-emerald-500 rounded-full left-0 top-1.5 z-10 group-hover:bg-emerald-500 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.6)] transition-all duration-300" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-500/80 mb-1">{exp.period}</span>
              <div className="flex flex-wrap items-center gap-x-4 mb-2">
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
                <div className="flex items-center gap-1.5 text-slate-400 text-sm bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  <span className="material-symbols-outlined text-[16px] text-emerald-500">apartment</span>
                  <span className="font-medium">{exp.company}</span>
                </div>
              </div>
              <p className="text-slate-400 text-[15px] max-w-3xl leading-snug group-hover:text-slate-200 transition-colors">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
