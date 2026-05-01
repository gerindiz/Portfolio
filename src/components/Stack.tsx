import React from 'react';

const TECH_STACK = [
  {
    category: "Frontend",
    skills: [
      { name: "React 19", icon: "fab fa-react" },
      { name: "Next.js", icon: "nextjs-custom" },
      { name: "TypeScript", icon: "ts-custom" },
      { name: "Tailwind CSS", icon: "fab fa-css3-alt" },
      { name: "Vite", icon: "fas fa-bolt" },
      { name: "Framer Motion", icon: "fas fa-film" },
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "Express", icon: "fas fa-server" },
      { name: "Python", icon: "fab fa-python" },
      { name: "FastAPI", icon: "fas fa-rocket" },
      { name: "REST APIs", icon: "fas fa-plug" },
      { name: "Webhooks", icon: "fas fa-share-alt" },
    ]
  },
  {
    category: "Base de Datos & BaaS",
    skills: [
      { name: "Supabase", icon: "fas fa-database" },
      { name: "PostgreSQL", icon: "fas fa-server" },
      { name: "MongoDB", icon: "fas fa-leaf" },
      { name: "Firebase", icon: "fas fa-fire" },
      { name: "Redis", icon: "fas fa-memory" },
      { name: "pgvector", icon: "fas fa-vector-square" },
    ]
  },
  {
    category: "IA & Automatización",
    skills: [
      { name: "Claude Code", icon: "claude-custom" },
      { name: "Gemini 2.5 Flash", icon: "fab fa-google" },
      { name: "OpenAI API", icon: "fas fa-brain" },
      { name: "LangChain", icon: "fas fa-link" },
      { name: "AI Agents", icon: "fas fa-robot" },
      { name: "Make (Integromat)", icon: "fas fa-cogs" },
    ]
  },
  {
    category: "DevOps & Herramientas",
    skills: [
      { name: "Git / GitHub", icon: "fab fa-github" },
      { name: "Vercel", icon: "vercel-custom" },
      { name: "Docker", icon: "fab fa-docker" },
      { name: "CI/CD", icon: "fas fa-infinity" },
      { name: "Google Cloud", icon: "fas fa-cloud" },
      { name: "Scrum", icon: "fas fa-users" },
    ]
  }
];

const renderIcon = (icon: string) => {
  if (icon === "ts-custom") {
    return (
      <svg viewBox="0 0 24 24" className="size-6 fill-[#007acc] group-hover/item:fill-emerald-400 transition-colors">
        <path d="M0 0h24v24H0V0zm22.034 18.268c0-1.146-.733-1.988-2.011-2.536l-.633-.269c-.672-.277-1.018-.548-1.018-.942 0-.443.343-.703 1.012-.703.65 0 1.066.252 1.257.73l1.767-.96c-.392-1.135-1.423-1.754-3.003-1.754-1.923 0-3.301 1.13-3.301 2.91 0 1.557.895 2.376 2.454 2.996l.634.261c.73.291 1.148.599 1.148 1.117 0 .556-.49.905-1.277.905-.927 0-1.555-.448-1.839-1.158l-1.803 1.014c.547 1.487 1.832 2.197 3.639 2.197 2.276 0 3.671-1.259 3.671-3.05zm-11.403 2.903h2.153v-8.031H6.19v1.947h2.291v6.084z"/>
      </svg>
    );
  }

  if (icon === "nextjs-custom") {
    return (
      <svg viewBox="0 0 24 24" className="size-6 fill-slate-400 group-hover/item:fill-emerald-400 transition-colors">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
      </svg>
    );
  }

  if (icon === "vercel-custom") {
    return (
      <svg viewBox="0 0 24 24" className="size-6 fill-slate-400 group-hover/item:fill-emerald-400 transition-colors">
        <path d="M24 22.525H0l12-21.05 12 21.05z"/>
      </svg>
    );
  }

  if (icon === "claude-custom") {
    return (
      <svg viewBox="0 0 24 24" className="size-6 fill-slate-400 group-hover/item:fill-emerald-400 transition-colors">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"/>
      </svg>
    );
  }

  return (
    <i className={`${icon} text-lg text-slate-400 group-hover/item:text-emerald-400 transition-colors`}></i>
  );
};

const Stack: React.FC = () => {
  return (
    <section className="py-24 px-6 w-full max-w-7xl mx-auto" id="stack">
      <div className="flex flex-col gap-4 mb-16 text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Mi <span className="text-emerald-500">Stack Tecnológico</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          Stack completo para construir aplicaciones web en tiempo real,
          sistemas de automatización con IA y arquitecturas orientadas a datos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TECH_STACK.map((group, index) => (
          <div
            key={index}
            className="group bg-[#2e2e2e] border border-white/10 p-8 rounded-3xl hover:border-emerald-500/40 transition-all duration-500 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 size-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all" />
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-emerald-500 rounded-full" />
              {group.category}
            </h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {group.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3 group/item">
                  <div className="size-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-emerald-500/50 group-hover/item:bg-emerald-500/10 transition-all overflow-hidden">
                    {renderIcon(skill.icon)}
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors">
                    {skill.name}
                  </span>
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