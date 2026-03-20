import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <section id="proyectos" className="py-24 bg-transparent relative z-10">
      {/* Estilos para el Scrollbar del Modal (Inyectados directamente) */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>

      {/* Encabezado */}
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">
          Proyectos <span className="text-blue-500">Destacados</span>
        </h2>
        <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
          Explora soluciones Full Stack con integraciones reales. Haz clic en las tarjetas para auditar la evidencia técnica.
        </p>
      </div>

      {/* GRID PRINCIPAL (2 Columnas) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            layoutId={`card-${index}`}
            className="group relative aspect-[16/11] bg-[#121212] rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all shadow-2xl cursor-pointer"
          >
            {/* Fondo con Click para Abrir Modal */}
            <img 
              src={project.images.main} 
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
              alt={project.title}
              onClick={() => setSelectedProject({ ...project, index })}
            />

            {/* Iconos de Acceso Directo */}
            <div className="absolute top-6 right-6 flex gap-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-black/60 hover:bg-white hover:text-black text-white rounded-full backdrop-blur-md border border-white/10 transition-all">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="p-3 bg-blue-600/80 hover:bg-blue-500 text-white rounded-full backdrop-blur-md border border-blue-500/20 transition-all">
                <span className="material-symbols-outlined text-2xl">open_in_new</span>
              </a>
            </div>

            {/* Info Inferior */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end pointer-events-none" onClick={() => setSelectedProject({ ...project, index })}>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tighter group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <div className="flex flex-wrap gap-2 pointer-events-none">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="text-[11px] font-bold px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20 backdrop-blur-md uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL DETALLADO */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            />

            <motion.div 
              layoutId={`card-${selectedProject.index}`}
              className="relative w-full max-w-6xl bg-[#0d0d0d] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col lg:flex-row h-[90vh] lg:h-[80vh]"
            >
              {/* GALERÍA IZQUIERDA */}
              <div className="w-full lg:w-[65%] overflow-y-auto bg-black/20 p-6 space-y-6 custom-scrollbar">
                {[selectedProject.images.main, selectedProject.images.database, selectedProject.images.excel].map((img, i) => (
                  <div key={i} className="relative group cursor-zoom-in" onClick={() => setZoomedImage(img)}>
                    <img src={img} className="w-full rounded-2xl border border-white/5 group-hover:opacity-90 transition-all shadow-2xl" alt="Preview" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                       <div className="bg-black/60 p-5 rounded-full backdrop-blur-md border border-white/20">
                          <span className="material-symbols-outlined text-white text-5xl">zoom_in</span>
                       </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* INFO DERECHA */}
              <div className="w-full lg:w-[35%] p-10 flex flex-col justify-between bg-[#0d0d0d] border-l border-white/5">
                <div className="relative">
                  <button onClick={() => setSelectedProject(null)} className="absolute -top-4 -right-4 text-slate-500 hover:text-white p-2 transition-colors"><span className="material-symbols-outlined text-3xl">close</span></button>
                  <h3 className="text-4xl font-black text-white leading-tight mb-6 tracking-tighter">{selectedProject.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag: string) => (
                      <span key={tag} className="text-[10px] font-bold px-4 py-1.5 bg-white/5 text-slate-300 rounded-full border border-white/10 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-10">
                  <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/40">
                    <span className="material-symbols-outlined">visibility</span> Ver Proyecto Vivo
                  </a>
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="w-full py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold flex items-center justify-center gap-3 border border-white/10 transition-all">
                    <i className="fab fa-github text-xl"></i> Ver Código Fuente
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ZOOM LIGHTBOX */}
      <AnimatePresence>
        {zoomedImage && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/98 cursor-zoom-out" onClick={() => setZoomedImage(null)}>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={zoomedImage} className="max-w-full max-h-full rounded-xl shadow-2xl"
            />
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;