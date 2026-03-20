import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-2 bg-transparent"> {/* Reducción de padding superior al mínimo */}
      
      {/* CABECERA: Título arriba y texto completo a la derecha */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-start">
        
        <div className="lg:mt-0"> {/* Título pegado al techo de la sección */}
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
            Experiencia <br />
            <span className="text-blue-500">y Formación</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-500 mt-4 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
        </div>

        {/* TU TEXTO COMPLETO: Estético y legible */}
        <div className="bg-white/[0.03] border border-white/10 p-7 rounded-2xl backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/40"></div>
          <p className="text-slate-300 text-[15px] leading-relaxed mb-4">
            "He trabajado en el diseño e implementación de soluciones desde cero, así como en la <span className="text-blue-400 font-medium">mejora y optimización de proyectos existentes</span>. Me he encargado de todo el ciclo de desarrollo, desde la planificación y arquitectura hasta la implementación y mantenimiento, asegurando <span className="text-white font-semibold">código limpio, escalabilidad y una excelente experiencia de usuario</span>."
          </p>
          <p className="text-slate-400 text-[15px] leading-relaxed">
            Además, colaboro directamente con clientes para entender sus necesidades y traducirlas en soluciones eficientes y funcionales.
          </p>
        </div>
      </div>

      {/* TIMELINE: Alineación milimétrica */}
      <div className="relative space-y-10">
        {/* Línea de tiempo con gradiente para que no sea pesada */}
        <div className="absolute left-[7px] top-2 bottom-0 w-[1px] bg-gradient-to-b from-blue-500 via-blue-500/20 to-transparent"></div>

        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="relative pl-10 group">
            {/* Círculo indicador con efecto glow al pasar el mouse */}
            <div className="absolute w-4 h-4 bg-[#121212] border-2 border-blue-500 rounded-full left-0 top-1.5 z-10 group-hover:bg-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300" />
            
            <div className="flex flex-col">
              {/* Fecha: pequeña y técnica */}
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-500/80 mb-1">
                {exp.period}
              </span>
              
              <div className="flex flex-wrap items-center gap-x-4 mb-2">
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-1.5 text-slate-400 text-sm bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  <span className="material-symbols-outlined text-[16px] text-blue-500">apartment</span>
                  <span className="font-medium">{exp.company}</span>
                </div>
              </div>
              
              {/* DESCRIPCIÓN: Perfectamente alineada y sin espacios muertos */}
              <p className="text-slate-400 text-[15px] max-w-3xl leading-snug group-hover:text-slate-200 transition-colors">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;