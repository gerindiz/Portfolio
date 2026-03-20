import React, { useState } from 'react';
import { CERTIFICATES } from '../constants';

const Certificates: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#0a0a0a]" id="certificaciones">
      <div className="max-w-7xl mx-auto px-6 text-left">
        <h2 className="text-4xl font-bold text-white mb-12">
          Formación <span className="text-blue-500">& Certificaciones</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <div 
              key={index} 
              className="bg-[#111] border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all flex flex-col h-full group shadow-lg cursor-pointer"
              onClick={() => setSelectedImg(cert.imagen)}
            >
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <img 
                  src={cert.imagen} 
                  alt={cert.titulo} 
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-white text-xs font-bold bg-blue-600 px-4 py-2 rounded-full shadow-xl">
                     Ver Certificado
                   </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">
                  {cert.emisor}
                </p>
                <h3 className="text-white font-bold text-md mb-4 leading-snug flex-grow">
                  {cert.titulo}
                </h3>
                <div className="pt-4 border-t border-white/5 flex justify-between items-center text-gray-500">
                  <p className="text-xs">{cert.fecha}</p>
                  <span className="material-symbols-outlined text-sm">visibility</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL CON OPCIÓN DE DESCARGA */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <div 
            className="relative max-w-5xl w-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre al tocar la imagen
          >
            {/* Barra de Acciones del Modal */}
            <div className="w-full flex justify-end gap-4 mb-2">
              <a 
                href={selectedImg} 
                download 
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all active:scale-95"
              >
                DESCARGAR <span className="material-symbols-outlined text-sm">download</span>
              </a>
              <button 
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all"
                onClick={() => setSelectedImg(null)}
              >
                CERRAR <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
            
            <img 
              src={selectedImg} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10 animate-in zoom-in-95 duration-300"
              alt="Certificado" 
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;