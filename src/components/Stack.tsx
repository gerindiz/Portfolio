import React from 'react';

const TECH_STACK = [
  { category: "Frontend", skills: [{ name: "React 19", icon: "fab fa-react" }, { name: "TypeScript", icon: "ts-custom" }, { name: "Tailwind CSS", icon: "fab fa-css3-alt" }, { name: "Vite", icon: "fas fa-bolt" }] },
  { category: "Backend & DB", skills: [{ name: "Node.js", icon: "fab fa-node-js" }, { name: "Python", icon: "fab fa-python" }, { name: "Supabase", icon: "fas fa-database" }, { name: "PostgreSQL", icon: "fas fa-server" }] },
  { category: "IA & Automation", skills: [{ name: "Prompt Engineering", icon: "fas fa-brain" }, { name: "AI Agents", icon: "fas fa-robot" }, { name: "Google Cloud", icon: "fab fa-google" }] }
];

const Stack: React.FC = () => {
  return (
    <section className="py-24 px-6 w-full max-w-7xl mx-auto" id="stack">
      <div className="flex flex-col gap-4 mb-16 text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Mi <span className="text-emerald-500">Stack Tecnológico</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">Especialización en desarrollo Full Stack y soluciones impulsadas por Inteligencia Artificial.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TECH_STACK.map((group, index) => (
          <div key={index} className="group bg-[#2e2e2e] border border-white/10 p-8 rounded-3xl hover:border-emerald-500/40 transition-all duration-500 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 size-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all" />
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-emerald-500 rounded-full" />
              {group.category}
            </h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {group.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3 group/item">
                  <div className="size-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-emerald-500/50 group-hover/item:bg-emerald-500/10 transition-all overflow-hidden">
                    {skill.icon === "ts-custom" ? (
                      <svg viewBox="0 0 24 24" className="size-6 fill-[#007acc] group-hover/item:fill-emerald-400 transition-colors">
                        <path d="M0 0h24v24H0V0zm22.034 18.268c0-1.146-.733-1.988-2.011-2.536l-.633-.269c-.672-.277-1.018-.548-1.018-.942 0-.443.343-.703 1.012-.703.65 0 1.066.252 1.257.73l1.767-.96c-.392-1.135-1.423-1.754-3.003-1.754-1.923 0-3.301 1.13-3.301 2.91 0 1.557.895 2.376 2.454 2.996l.634.261c.73.291 1.148.599 1.148 1.117 0 .556-.49.905-1.277.905-.927 0-1.555-.448-1.839-1.158l-1.803 1.014c.547 1.487 1.832 2.197 3.639 2.197 2.276 0 3.671-1.259 3.671-3.05zm-11.403 2.903h2.153v-8.031H6.19v1.947h2.291v6.084z"/>
                      </svg>
                    ) : (
                      <i className={`${skill.icon} text-lg text-slate-400 group-hover/item:text-emerald-400 transition-colors`}></i>
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
