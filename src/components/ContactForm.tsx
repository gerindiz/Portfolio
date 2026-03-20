import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { USER_DATA } from '../constants';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL;
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const { error } = await supabase
      .from('contact_messages')
      .insert([{ full_name: data.nombre, email: data.email, message: data.mensaje }]);

    setLoading(false);
    if (error) alert('Error al enviar');
    else {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full max-w-6xl mx-auto py-10">
      
      {/* Columna Izquierda: Info de contacto y Redes Sociales */}
      <div className="flex flex-col gap-8 text-left">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            ¿Tenés una idea en <span className="text-blue-500">mente?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md">
            Estoy disponible para proyectos freelance o posiciones de Full Stack Developer.
          </p>
        </div>
        
        {/* Lista de contacto Vertical (Con Logos Originales) */}
        <div className="flex flex-col gap-6">
          
          {/* Email - Mantenemos Material Symbol */}
          <div className="flex items-center gap-4 group">
            <div className="size-14 bg-blue-500/10 rounded-xl border border-blue-500/20 group-hover:border-blue-500/50 transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-blue-500 text-2xl">mail</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Email directo</p>
              <p className="text-white font-medium">{USER_DATA.email}</p>
            </div>
          </div>

          {/* LinkedIn - Logo Original con Font Awesome */}
          <a href={USER_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer">
            <div className="size-14 bg-blue-500/10 rounded-xl border border-blue-500/20 group-hover:border-blue-500/50 transition-colors flex items-center justify-center">
              <i className="fab fa-linkedin-in text-blue-500 text-2xl"></i> {/* Icono de LinkedIn */}
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">LinkedIn</p>
              <p className="text-white font-medium group-hover:text-blue-400 transition-colors">Conectemos profesionalmente</p>
            </div>
          </a>

          {/* GitHub - Logo Original con Font Awesome */}
          <a href={USER_DATA.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer">
            <div className="size-14 bg-blue-500/10 rounded-xl border border-blue-500/20 group-hover:border-blue-500/50 transition-colors flex items-center justify-center">
              <i className="fab fa-github text-blue-500 text-2xl"></i> {/* Icono de GitHub */}
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">GitHub</p>
              <p className="text-white font-medium group-hover:text-blue-400 transition-colors">Mirá mis repositorios</p>
            </div>
          </a>

        </div>
      </div>

      {/* Columna Derecha: El Formulario (Sin cambios) */}
      <div className="bg-[#0d1117] border border-white/10 p-8 rounded-3xl shadow-2xl transition-all">
        {success ? (
          <div className="py-12 text-center">
            <span className="material-symbols-outlined text-blue-500 text-5xl mb-4">check_circle</span>
            <h3 className="text-2xl font-bold text-white">¡Mensaje enviado!</h3>
            <p className="text-gray-400 mt-2">Te respondo a la brevedad.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              name="nombre"
              type="text"
              placeholder="Tu Nombre"
              required
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 outline-none transition-all"
            />
            <input
              name="email"
              type="email"
              placeholder="tu@email.com"
              required
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 outline-none transition-all"
            />
            <textarea
              name="mensaje"
              placeholder="¿En qué puedo ayudarte?"
              required
              rows={4}
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500 outline-none transition-all resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-bold text-white transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              {loading ? 'Procesando...' : (
                <>
                  Enviar mensaje <span className="material-symbols-outlined text-sm">send</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;