import React, { useState } from 'react';
import { USER_DATA } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías integrar servicios como Formspree o EmailJS en el futuro
    console.log('Form submitted:', formData);
    alert('¡Gracias por escribir! Te responderé a la brevedad.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contacto" className="scroll-mt-24 border-t border-white/5 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Lado Izquierdo: Formulario */}
        <div className="relative group order-2 lg:order-1">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-cyan-600/30 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Enviame un mensaje</h3>
            <p className="text-slate-400 text-sm mb-6">Responderé a tu propuesta en menos de 24 horas.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-300 ml-1">Nombre</label>
                <input 
                  className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                  placeholder="Tu nombre completo" 
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-300 ml-1">Email</label>
                <input 
                  className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                  placeholder="tu@email.com" 
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-300 ml-1">Asunto</label>
                <input 
                  className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                  placeholder="Ej: Propuesta de Proyecto" 
                  type="text"
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-300 ml-1">Mensaje</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none min-h-[120px]" 
                  placeholder="¿En qué puedo ayudarte?"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 mt-4 shadow-lg shadow-blue-500/20" 
                type="submit"
              >
                Enviar Mensaje
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </form>
          </div>
        </div>

        {/* Lado Derecho: Información de Contacto Real */}
        <div className="flex flex-col justify-center h-full order-1 lg:order-2">
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Vamos a crear<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">algo increíble.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              Fusionando mi base técnica analítica con el desarrollo moderno para potenciar tu próximo proyecto digital.
            </p>
          </div>
          
          <div className="space-y-6 mb-12">
            {/* Link a Email - Usando constants */}
            <div className="flex items-center gap-4 group">
              <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-blue-400 group-hover:border-blue-500/50 transition-colors">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Email Directo</div>
                <a className="text-white hover:text-blue-400 transition-colors font-medium text-lg" href={`mailto:grindiz1989@gmail.com`}>
                  grindiz1989@gmail.com
                </a>
              </div>
            </div>
            
            {/* Link a WhatsApp - Usando constants */}
            <div className="flex items-center gap-4 group">
              <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-emerald-500 group-hover:border-emerald-500/50 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">WhatsApp</div>
                <a className="text-white hover:text-emerald-400 transition-colors font-medium text-lg" href={USER_DATA.socials.whatsapp} target="_blank" rel="noreferrer">
                  +54 9 342 6394413
                </a>
              </div>
            </div>

            {/* Ubicación */}
            <div className="flex items-center gap-4 group">
              <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-blue-400">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Ubicación</div>
                <span className="text-white font-medium text-lg">{USER_DATA.location}</span>
              </div>
            </div>
          </div>

          {/* Redes Sociales Redondas */}
          <div className="flex items-center gap-4">
            <a aria-label="GitHub" className="size-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all duration-300" href={USER_DATA.socials.github} target="_blank" rel="noreferrer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
            </a>
            <a aria-label="LinkedIn" className="size-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-all duration-300" href={USER_DATA.socials.linkedin} target="_blank" rel="noreferrer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.774.792 22.55 1.771 22.55h20.451C23.2 22.55 24 21.774 24 20.826V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;