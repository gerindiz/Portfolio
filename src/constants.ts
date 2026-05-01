export const USER_DATA = {
  name: "Germán Dario Rindizbacher",
  role: "Full Stack Developer & AI Specialist",
  email: "grindiz1989@gmail.com",
  location: "Santa Fe, Argentina",
  cvUrl: "/cv-german-rindizbacher.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/german-rindizbacher",
    github: "https://github.com/gerindiz",
    whatsapp: "https://wa.me/5493426394413"
  }
};

export const EXPERIENCE = [
  {
    role: "Full Stack Developer — Freelance",
    company: "Independiente",
    period: "2024 - Presente",
    description: "Diseño, desarrollo y deploy de aplicaciones web full-stack para clientes de Argentina y Uruguay. Desarrollé VitalTrack reduciendo el tiempo de detección de incidencias en cadena de frío de horas a segundos. Construí TensaCover Uruguay reemplazando un flujo manual de WhatsApp por un CRM con notificaciones automáticas vía Make. Actualmente desarrollando NexusFlow, plataforma de automatización con agentes de IA (Gemini 2.5 Flash) y arquitectura event-driven."
  },
  {
    role: "Administrador de Ventas",
    company: "HEG Máquinas",
    period: "2011 - 2016",
    description: "Gestión de la presencia web de la empresa y relación con proveedores y clientes en el sector de maquinaria industrial. Coordinación del proceso de ventas y resolución de incidencias técnicas bajo presión operativa."
  }
];

export const CERTIFICATES = [
  {
    titulo: "Técnico Superior en Programación",
    emisor: "INSTITUTO SUPERIOR TECLAB",
    fecha: "07/08/2025",
    imagen: "/projects/certs/teclab.webp"
  },
  {
    titulo: "PCAP: Programming Essentials in Python",
    emisor: "CISCO NETWORKING ACADEMY",
    fecha: "28/07/2023",
    imagen: "/projects/certs/python-cisco.webp"
  },
  {
    titulo: "JavaScript Essentials 1 (JSE)",
    emisor: "CISCO NETWORKING ACADEMY",
    fecha: "15/07/2023",
    imagen: "/projects/certs/js-cisco.webp"
  },
  {
    titulo: "Iniciación al Desarrollo con IA",
    emisor: "BIG SCHOOL (MOUREDEV)",
    fecha: "24/10/2025",
    imagen: "/projects/certs/ia-moure.webp"
  }
];

export const PROJECTS = [
  {
    title: "VitalTrack — Telemetría Médica",
    description: "Dashboard de telemetría para logística médica en tiempo real. Resuelve la falta de visibilidad en la cadena de frío de suministros críticos — excursiones de temperatura superiores a 7°C podían comprometer envíos enteros sin detección durante horas. Implementa GPS tracking, geofencing con Leaflet.js, alertas automáticas y exportación de reportes en Excel.",
    tags: ["React", "TypeScript", "Supabase", "Leaflet.js", "ExcelJS", "Vercel"],
    github: "https://github.com/gerindiz/vital-track-dashboard",
    demo: "https://vital-track-dashboard.vercel.app/",
    images: {
      main: "/projects/proyecto 1/vital-dashboard.webp",
      database: "/projects/proyecto 1/vital-db.webp",
      excel: "/projects/proyecto 1/vital-excel.webp",
    }
  },
  {
    title: "TensaCover Uruguay — Landing & CRM",
    description: "Plataforma comercial para empresa de alquiler de carpas de eventos en Uruguay. Reemplazó un flujo manual de WhatsApp por un sistema con catálogo dinámico en Supabase, formulario de captura de leads y notificaciones automáticas vía Make (Integromat). Panel admin protegido con gestión de leads y estados (nuevo/contactado/cerrado).",
    tags: ["React", "TypeScript", "Supabase", "Make", "Tailwind CSS", "Vercel"],
    github: "https://github.com/gerindiz/tensacover-uruguay",
    demo: "https://tensacover-uruguay.vercel.app",
    images: {
      main: "/projects/proyecto 1/vital-dashboard.webp",
      database: "/projects/proyecto 1/vital-db.webp",
      excel: "/projects/proyecto 1/vital-excel.webp"
    }
  },
  {
    title: "NexusFlow — AI Workflow Automation",
    description: "Plataforma de automatización de workflows con agentes de IA. Resuelve el problema de equipos que pierden horas configurando automatizaciones entre herramientas desconectadas. Arquitectura event-driven, agentes con Gemini 2.5 Flash, autenticación multitenant con Supabase RLS y observabilidad con OpenTelemetry. En desarrollo activo.",
    tags: ["Next.js 15", "TypeScript", "Supabase", "Gemini 2.5 Flash", "OpenTelemetry", "Vercel"],
    github: "https://github.com/gerindiz/nexusflow",
    demo: "https://github.com/gerindiz/nexusflow",
    images: {
      main: "/projects/proyecto 1/vital-dashboard.webp",
      database: "/projects/proyecto 1/vital-db.webp",
      excel: "/projects/proyecto 1/vital-excel.webp"
    }
  },
  {
    title: "Bot de Trading — Python & Binance API",
    description: "Bot de trading automatizado para Bitcoin con lógica de Trailing Stop Loss, gestión dinámica de riesgos y análisis de datos en tiempo real con Pandas. Ejecutado en producción sobre cuenta real con Binance API.",
    tags: ["Python", "Pandas", "Binance API"],
    github: "https://github.com/gerindiz",
    demo: "https://github.com/gerindiz",
    images: {
      main: "/projects/proyecto 2/gestor pro.png",
      database: "/projects/proyecto 2/gestor pro.png",
      excel: "/projects/proyecto 2/gestor pro.png"
    }
  }
];