import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    /* CONFIGURACIÓN DE COLOR:
       1. bg-[#121212]: Un gris oscuro (Charcoal) que reemplaza al negro total.
       2. bg-[radial-gradient]: Mantenemos el resplandor para dar profundidad.
    */
    <div className="min-h-screen bg-[#121212] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-[#121212] to-[#121212] text-slate-200 selection:bg-blue-500/30 overflow-x-hidden">
      
      <Navbar />
      
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col gap-32">
        
        <section id="inicio">
          <Hero />
        </section>

        <section id="servicios">
          <Services />
        </section>

        <section id="proyectos">
          <Projects />
        </section>

        <section id="tecnologias">
          <Stack />
        </section>

        <section id="experiencia">
          <Experience />
        </section>

        <section id="certificaciones">
          <Certificates />
        </section>

        <section id="contacto" className="w-full flex justify-center items-center py-10">
          <ContactForm />
        </section>

      </main>

      <Footer />
      
      <WhatsAppButton />
      
    </div>
  );
};

export default App;