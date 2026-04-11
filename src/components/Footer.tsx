import React from 'react';
import { USER_DATA } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-[#1a1a1a] mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-2xl font-bold text-white tracking-tighter">GERMÁN<span className="text-emerald-500">.DEV</span></div>
          <p className="text-gray-500 text-sm">Full Stack Developer • AI Automation</p>
        </div>
        <div className="text-gray-500 text-sm order-3 md:order-2">
          <p>© {currentYear} — Desarrollado con React & Tailwind</p>
        </div>
        <div className="flex items-center gap-5 order-2 md:order-3">
          <a href={USER_DATA.socials.github} target="_blank" rel="noreferrer" className="size-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-emerald-500/50 transition-all duration-300">
            <i className="fab fa-github text-lg"></i>
          </a>
          <a href={USER_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="size-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-all duration-300">
            <i className="fab fa-linkedin-in text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
