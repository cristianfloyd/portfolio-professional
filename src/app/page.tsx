import styles from "./page.module.css";
import ProjectCard from "@/components/ProjectCard";
import SkillGroup from "@/components/SkillGroup";
import Reveal from "@/components/Reveal";
import { Zap, Code2, Briefcase, Mail, ExternalLink, Gauge, Server, Calculator, ShieldCheck } from "lucide-react";

export default function Home() {
  const featuredProjects = [
    {
      title: "Árbol Genealógico Dragón",
      description: "Sistema complejo de gestión de dinastías con validaciones de lógica de negocio y arquitectura limpia (SOLID).",
      tags: ["Python", "Pytest", "SOLID", "CI/CD"],
      link: "https://github.com/cristianfloyd/Coding-Challenges-Showcase/tree/main/01-Arbol-Genealogico-Dragon",
    },
    {
      title: "Crawler Académico RAG",
      description: "Web scraper automatizado para extracción de información académica (horarios, materias) para sistemas RAG.",
      tags: ["Python", "Web Scraping", "RAG", "Data Processing"],
      link: "https://github.com/cristianfloyd/crawler",
    },
    {
      title: "Portfolio Web Profesional",
      description: "Este mismo sitio. Desarrollado con Next.js enfocándose en rendimiento, diseño y UX moderno.",
      tags: ["Next.js", "React", "TypeScript", "CSS Modules"],
      link: "#",
    },
  ];

  const skillCategories = [
    {
      title: "Backend & Data Engineering",
      skills: ["PHP (Laravel 11/12)", "Python (FastAPI, Pandas)", "PostgreSQL (Advanced)", "SQL Optimization", "Data Analysis", "REST APIs"],
    },
    {
      title: "Infrastructure & Systems",
      skills: ["Linux (AlmaLinux/CentOS)", "Docker Swarm & Podman", "Nginx / Apache", "Virtualización (VirtualBox/KVM)", "Networks & Security", "SysAdmin (13+ años)"],
    },
    {
      title: "Architecture & Methodology",
      skills: ["SOLID / Clean Code", "Hexagonal Architecture", "CI/CD (GitHub Actions)", "TDD / Unit Testing", "AI-Assisted Development", "Git Flow"],
    },
  ];

  const experience = [
    {
      title: "Backend Developer (Data & Integration)",
      company: "Universidad de Buenos Aires - Rectorado",
      period: "2023 - 2025",
      description: "Optimización de procesos de misión crítica en SIU Mapuche, desarrollando motores de reportes y asegurando la integridad de datos en el sistema de liquidación.",
    },
    {
      title: "Infrastructure & Web Specialist",
      company: "Videopuerto",
      period: "2012 - 2025",
      description: "Gestión de servidores dedicados, virtualización con KVM, despliegues autogestionados con Docker/Portainer y pipelines de CI/CD.",
    },
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <Reveal animation="fadeIn">
          <h1 className={styles.title}>
            Cristian <span className={styles.highlight}>Arenas</span>
          </h1>
        </Reveal>
        <Reveal animation="fadeInUp" delay={2000}>
          <p className={styles.subtitle}>Backend Developer & Infrastructure Specialist</p>
        </Reveal>
        <Reveal animation="fadeInUp" delay={4000}>
          <p className={styles.bio}>
            Especialista IT con más de 15 años de trayectoria. Mi fortaleza reside en el equilibrio entre la <strong>Ingeniería de Software</strong> y la <strong>Gestión de Infraestructura</strong>. Desde 2012, administro y evoluciono mi propio ecosistema de servidores dedicados, utilizándolo como
            laboratorio para implementar flujos de CI/CD y desplegar soluciones backend robustas con <strong>Python</strong> y <strong>Laravel</strong>.
          </p>
        </Reveal>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionTitle}>
            <Zap size={28} strokeWidth={2.5} />
            Impacto Técnico & Resoluciones
          </h2>
        </Reveal>
        <div className={styles.grid}>
          <Reveal delay={1000}>
            <ProjectCard
              title="Optimización SICOSS (SIU Mapuche)"
              description="Reducción de 40min a <1min en procesamiento de nóminas. Rediseño SQL (96% mejora) y migración de lógica a Python/Pandas para procesamiento vectorial."
              tags={["PostgreSQL", "Python", "Pandas", "Performance"]}
              link="/case-studies/sicoss"
              icon={Gauge}
            />
          </Reveal>
          <Reveal delay={2000}>
            <ProjectCard
              title="Infraestructura Dedicada & CI/CD"
              description="Administración integral de servidor privado desde 2012. Gestión de virtualización, securización (SELinux/SSH Hardening) y automatización de despliegues vía GitHub Hooks."
              tags={["SysAdmin", "Linux", "CI/CD", "Security"]}
              link="/case-studies/infraestructura"
              icon={Server}
            />
          </Reveal>
          <Reveal delay={3000}>
            <ProjectCard
              title="Algoritmo de Conciliación de Haberes"
              description="Implementación de Subset Sum con optimización de poda para identificar discrepancias en fórmulas de liquidación, automatizando el diagnóstico de errores contables."
              tags={["Algoritmos", "PHP", "Finanzas", "Optimization"]}
              link="/case-studies/conciliacion"
              icon={Calculator}
            />
          </Reveal>
          <Reveal delay={4000}>
            <ProjectCard
              title="Adaptador Criptográfico de Identidad"
              description="Interoperabilidad entre Laravel 11 y SIU Toba (Legacy), permitiendo autenticación segura y transparente mediante un bridge de hashing en PHP 8.3."
              tags={["Seguridad", "Interoperabilidad", "Legacy", "Auth"]}
              link="/case-studies/seguridad"
              icon={ShieldCheck}
            />
          </Reveal>
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionTitle}>
            <Code2 size={28} strokeWidth={2.5} />
            Especialización Técnica
          </h2>
        </Reveal>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 1000}>
              <SkillGroup title={category.title} skills={category.skills} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experiencia Breve Section */}
      <section id="experiencia" className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionTitle}>
            <Briefcase size={28} strokeWidth={2.5} />
            Experiencia Relevante
          </h2>
        </Reveal>
        <div className={styles.experienceList}>
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 1500}>
              <div className={styles.experienceItem}>
                <div className={styles.expHeader}>
                  <h3 className={styles.expTitle}>{job.title}</h3>
                  <span className={styles.expPeriod}>{job.period}</span>
                </div>
                <h4 className={styles.expCompany}>{job.company}</h4>
                <p className={styles.expDescription}>{job.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      {/* Contacto Section */}
      <section id="contacto" className={styles.contactSection}>
        <div className={styles.contactCard}>
          <h2 className={styles.contactTitle}>¿Hablamos?</h2>
          <p className={styles.contactText}>Actualmente estoy abierto a nuevas oportunidades y colaboraciones en proyectos de Backend, Infraestructura o Análisis de Datos.</p>
          <div className={styles.contactLinks}>
            <a href="mailto:cristianfloyd@gmail.com" className={styles.mainBtn}>
              <Mail size={20} />
              Enviar Email
            </a>
            <div className={styles.socialLinks}>
              <a href="https://linkedin.com/in/cristian-arenas" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} />
                LinkedIn
              </a>
              <a href="https://github.com/cristianfloyd" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} />
                GitHub
              </a>
              <a href="https://flickr.com/photos/cristianarenas" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} />
                Flickr
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Cristian Arenas. Desarrollado con Next.js & ❤️</p>
      </footer>
    </main>
  );
}
