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
    const { error } = await supabase.from('contact_messages').insert([{ full_name: data.nombre, email: data.email, message: data.mensaje }]);
    setLoading(false);
    if (error) alert('Error al enviar');
    else { setSuccess(true); (e.target as HTMLFormElement).reset(); }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full max-w-6xl mx-auto py-10">
      <div className="flex flex-col gap-8 text-left">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            ¿Tenés una idea en <span className="text-emerald-500">mente?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md">Estoy disponible para proyectos freelance o posiciones de Full Stack Developer.</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 group">
            <div className="size-14 bg-emerald-500/10 rounded-xl border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-emerald-500 text-2xl">mail</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Email directo</p>
              <p className="text-white font-medium">{USER_DATA.email}</p>
            </div>
          </div>
          <a href={USER_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer">
            <div className="size-14 bg-emerald-500/10 rounded-xl border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors flex items-center justify-center">
              <i className="fab fa-linkedin-in text-emerald-500 text-2xl"></i>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">LinkedIn</p>
              <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">Conectemos profesionalmente</p>
            </div>
          </a>
          <a href={USER_DATA.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer">
            <div className="size-14 bg-emerald-500/10 rounded-xl border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors flex items-center justify-center">
              <i className="fab fa-github text-emerald-500 text-2xl"></i>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">GitHub</p>
              <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">Mirá mis repositorios</p>
            </div>
          </a>
        </div>
      </div>

      <div className="bg-[#2e2e2e] border border-white/10 p-8 rounded-3xl shadow-2xl">
        {success ? (
          <div className="py-12 text-center">
            <span className="material-symbols-outlined text-emerald-500 text-5xl mb-4">check_circle</span>
            <h3 className="text-2xl font-bold text-white">¡Mensaje enviado!</h3>
            <p className="text-gray-400 mt-2">Te respondo a la brevedad.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input name="nombre" type="text" placeholder="Tu Nombre" required className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-emerald-500 outline-none transition-all" />
            <input name="email" type="email" placeholder="tu@email.com" required className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-emerald-500 outline-none transition-all" />
            <textarea name="mensaje" placeholder="¿En qué puedo ayudarte?" required rows={4} className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-emerald-500 outline-none transition-all resize-none"></textarea>
            <button type="submit" disabled={loading} className="w-full bg-emerald-600 hover:bg-emerald-700 py-4 rounded-xl font-bold text-white transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2">
              {loading ? 'Procesando...' : <><span>Enviar mensaje</span><span className="material-symbols-outlined text-sm">send</span></>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
