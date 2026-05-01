import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#212121] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-[#212121] to-[#212121] text-slate-200 selection:bg-emerald-500/30 overflow-x-hidden">
      <Navbar />
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col gap-32">
        <section id="inicio"><Hero /></section>
        <section id="proyectos"><Projects /></section>
        <section id="tecnologias"><Stack /></section>
        <section id="experiencia"><Experience /></section>
        <section id="certificaciones"><Certificates /></section>
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
