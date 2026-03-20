
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export const TECH_STACK = [
  {
    category: "Frontend",
    icon: "code",
    skills: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "Next.js"]
  },
  {
    category: "Backend",
    icon: "terminal",
    skills: ["Node.js", "Express", "Python", "API REST"]
  },
  {
    category: "Database & Cloud",
    icon: "database",
    skills: ["Supabase", "PostgreSQL", "Firebase", "Google Cloud"]
  },
  {
    category: "Herramientas & IA",
    icon: "auto_awesome",
    skills: ["Docker", "Git", "Prompt Engineering", "AI Automation"]
  }
];