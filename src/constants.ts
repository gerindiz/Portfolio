// src/constants.ts

export const USER_DATA = {
  name: "Germán Dario Rindizbacher", // Reclamado por Hero.tsx:31
  role: "Full Stack Developer & AI Specialist", // Reclamado por Hero.tsx:39
  email: "grindiz1989@gmail.com",
  location: "Santa Fe, Argentina",
  cvUrl: "/cv-german-rindizbacher.pdf", // Reclamado por Hero.tsx:64 (Asegurate que el PDF esté en la carpeta public)
  socials: {
    linkedin: "https://www.linkedin.com/in/grindiz1989/",
    github: "https://github.com/gerindiz",
    whatsapp: "https://wa.me/5493426394413"
  }
};

export const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "Freelance",
    period: "2023 - Presente",
    description: "Especialista en Full Stack y automatización con IA."
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

// src/constants.ts
// src/constants.ts
export const PROJECTS = [
  {
    title: "VitalTrack — Telemetría Médica",
    description: "Sistema de telemetría de alta precisión para logística crítica. Desarrollé un dashboard con monitoreo en tiempo real, integración con Supabase para persistencia de datos y exportación de reportes en Excel mediante ExcelJS.",
    tags: ["React", "Supabase", "TypeScript", "ExcelJS"],
    github: "https://github.com/gerindiz/vital-track-dashboard",
    demo: "https://vital-track-dashboard.vercel.app/",
    images: {
      main: "/projects/vital-dashboard.webp",
      database: "/projects/vital-db.webp",
      excel: "/projects/vital-excel.webp"
    }
  },


{
    title: "Bedouin Tents Uruguay",
    description: "Plataforma de e-commerce y cotización para alquiler de carpas beduinas. Implementé un sistema de filtrado dinámico y un flujo de reserva optimizado. La arquitectura permite una carga ultra rápida y una gestión de inventario en tiempo real.",
    tags: ["React", "Firebase", "Tailwind CSS", "Vite"],
    github: "https://github.com/tu-usuario/nombre-repo",
    demo: "https://tu-link-de-demo.vercel.app",
    images: {
      main: "/projects/tents-m",
      database: "/projects/tents-db.webp",
      excel: "/projects/tents-excel.webp"
    }
  },

{
    title: "Bedouin Tents Uruguay",
    description: "Plataforma de e-commerce y cotización para alquiler de carpas beduinas. Implementé un sistema de filtrado dinámico y un flujo de reserva optimizado. La arquitectura permite una carga ultra rápida y una gestión de inventario en tiempo real.",
    tags: ["React", "Firebase", "Tailwind CSS", "Vite"],
    github: "https://github.com/tu-usuario/nombre-repo",
    demo: "https://tu-link-de-demo.vercel.app",
    images: {
      main: "/assets/projects/tents-main.webp",
      database: "/assets/projects/tents-db.webp",
      excel: "/assets/projects/tents-excel.webp"
    }
  },











];

// src/constants.ts

