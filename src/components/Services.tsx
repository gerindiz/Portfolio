import React from 'react';

const services = [
  {
    icon: 'neurology',
    title: 'Implementación de LLMs',
    description: 'Integración personalizada de modelos de IA generativa para crear soluciones de negocio innovadoras y escalables.',
    tags: ['OpenAI API', 'Fine-tuning', 'RAG'],
    bgIcon: 'chat'
  },
  {
    icon: 'sync_alt',
    title: 'Automatización de Workflows',
    description: 'Optimización de tareas repetitivas y flujos de trabajo complejos utilizando scripts y servicios en la nube.',
    tags: ['Python', 'Google Cloud', 'APIs'],
    bgIcon: 'account_tree'
  },
  {
    icon: 'smart_toy',
    title: 'Integración de Agentes Inteligentes',
    description: 'Desarrollo de agentes autónomos capaces de razonar y ejecutar acciones para soporte o procesamiento de datos.',
    tags: ['LangChain', 'AutoGPT', 'Vector DB'],
    bgIcon: 'smart_toy'
  },
  {
    icon: 'analytics',
    title: 'Optimización de Procesos con IA',
    description: 'Aplicación de lógica analítica e inteligencia artificial para maximizar la eficiencia operativa.',
    tags: ['Data Analysis', 'Cloud SDK', 'Pandas'],
    bgIcon: 'trending_up'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="scroll-mt-24 bg-transparent">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
          Servicios de <span className="text-blue-500">IA & Automatización</span>
        </h2>
        <p className="text-slate-400 max-w-2xl">
          Soluciones estratégicas para integrar inteligencia artificial y optimizar procesos empresariales.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          /* CAMBIO CLAVE: Usamos bg-white/5 y backdrop-blur para que se vea el gris de fondo */
          <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="material-symbols-outlined text-blue-500/10 text-8xl">{service.bgIcon}</span>
            </div>
            <div className="size-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <span className="material-symbols-outlined text-2xl">{service.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 relative z-10">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">{service.description}</p>
            <div className="flex flex-wrap gap-2 relative z-10">
              {service.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="text-[11px] font-medium text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md hover:bg-blue-500/20 hover:text-white transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;