import styles from "./page.module.css";
import ProjectCard from "@/components/ProjectCard";
import SkillGroup from "@/components/SkillGroup";
import Reveal from "@/components/Reveal";
import { Zap, Code2, Briefcase, Mail, ExternalLink, Gauge, Server, Calculator, ShieldCheck, FileDown, Target } from "lucide-react";

export default function Home() {
  const featuredProjects = [
    {
      title: "Crawler Académico RAG",
      description: "Web scraper automatizado para la extracción y estructuración de datos institucionales, optimizado para sistemas de Inteligencia Artificial (RAG).",
      tags: ["Python", "Web Scraping", "Data Engineering"],
      link: "https://github.com/cristianfloyd/crawler",
    },
    {
      title: "Portfolio Web Profesional",
      description: "Este mismo sitio. Desarrollado con Next.js 16 y React 19, enfocado en performance, arquitectura limpia y despliegue automatizado.",
      tags: ["Next.js 16", "React 19", "CI/CD"],
      link: "#",
    },
    {
      title: "Coding Challenge Showcase",
      description: "Monorepo que centraliza la resolución de retos técnicos y katas, demostrando la aplicación de principios SOLID y TDD.",
      tags: ["GitHub Monorepo", "Architecture", "Best Practices"],
      link: "https://github.com/cristianfloyd/Coding-Challenges-Showcase",
    },
  ];

  const skillCategories = [
    {
      title: "Backend Core",
      skills: ["Python (FastAPI, Pandas)", "PHP (Laravel 11/12)", "PostgreSQL (Advanced)", "Clean Architecture", "REST APIs", "SQL Optimization"],
    },
    {
      title: "Frontend & Modern UI",
      skills: ["Next.js 16 (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Micro-Animations", "Responsive Design"],
    },
    {
      title: "Infrastructure & DevOps",
      skills: ["Linux (AlmaLinux 9)", "Docker & Orchestration", "CI/CD (GitHub Actions)", "Nginx Hardening", "Virtualization (KVM)", "Git Flow & Submodules"],
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
        <Reveal animation="fadeInUp">
          <p className={styles.subtitle}>Backend Developer | Infrastructure & Systems</p>
        </Reveal>

        {/* Métricas destacadas - AJUSTADAS */}
        <Reveal animation="fadeInUp">
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <span className={styles.metricNumber}>13+</span>
              <span className={styles.metricLabel}>Años IT / Infra</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricNumber}>2 Años</span>
              <span className={styles.metricLabel}>Backend Crítico</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricNumber}>96%</span>
              <span className={styles.metricLabel}>Mejora SQL/Performance</span>
            </div>
          </div>
        </Reveal>

        <Reveal animation="fadeInUp">
          <p className={styles.bio}>
            Desarrollador Backend con foco en lógica de negocio y optimización. Tras más de una década gestionando infraestructura crítica, estos últimos años me he especializado en construir soluciones robustas en <strong>Python</strong> y <strong>Laravel</strong>, aplicando rigor técnico en
            sistemas de liquidación donde la precisión es la máxima prioridad.
          </p>
        </Reveal>

        {/* CTAs prominentes */}
        <Reveal animation="fadeInUp">
          <div className={styles.heroActions}>
            <a href="#impacto" className={styles.primaryBtn}>
              <Zap size={20} />
              Impacto
            </a>
          </div>
        </Reveal>
      </section>

      {/* Valor Section */}
      <section className={styles.valueSection}>
        <Reveal>
          <div className={styles.valueCard}>
            <h2 className={styles.valueTitle}>Ingeniería de Alto Nivel</h2>
            <div className={styles.valueGrid}>
              <div className={styles.valueItem}>
                <Target size={32} className={styles.valueIcon} />
                <h3>Arquitectura Escalable</h3>
                <p>Diseño de software mantenible y robusto aplicando Clean Architecture, principios SOLID y patrones de diseño modernos.</p>
              </div>
              <div className={styles.valueItem}>
                <Code2 size={32} className={styles.valueIcon} />
                <h3>Performance First</h3>
                <p>Obsesión por la eficiencia: desde la optimización de consultas SQL complejas hasta el ajuste fino del Kernel de Linux.</p>
              </div>
              <div className={styles.valueItem}>
                <Zap size={32} className={styles.valueIcon} />
                <h3>Sistemas Críticos</h3>
                <p>Experiencia probada en entornos donde la estabilidad es ley. Gestión de errores, logs transaccionales y alta disponibilidad.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Sección: Impacto Técnico & Resoluciones */}
      <section id="impacto" className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionTitle}>
            <Zap size={28} strokeWidth={2.5} />
            Impacto Técnico & Resoluciones
          </h2>
        </Reveal>
        <div className={styles.grid}>
          <Reveal animation="fadeIn">
            <ProjectCard
              title="Optimización SICOSS (SIU Mapuche)"
              description="Reducción de 40min a <1min en procesamiento de nóminas. Rediseño SQL (96% mejora) y migración de lógica a Python/Pandas para procesamiento vectorial."
              tags={["PostgreSQL", "Python", "Pandas", "Performance"]}
              link="/case-studies/sicoss"
              icon={Gauge}
            />
          </Reveal>
          <Reveal animation="fadeIn">
            <ProjectCard
              title="Infraestructura Dedicada & CI/CD"
              description="Administración integral de servidor privado desde 2012. Gestión de virtualización, securización (SELinux/SSH Hardening) y automatización de despliegues vía GitHub Hooks."
              tags={["SysAdmin", "Linux", "CI/CD", "Security"]}
              link="/case-studies/infraestructura"
              icon={Server}
            />
          </Reveal>
          <Reveal animation="fadeIn">
            <ProjectCard
              title="Algoritmo de Conciliación de Haberes"
              description="Implementación de Subset Sum con optimización de poda para identificar discrepancias en fórmulas de liquidación, automatizando el diagnóstico de errores contables."
              tags={["Algoritmos", "PHP", "Finanzas", "Optimization"]}
              link="/case-studies/conciliacion"
              icon={Calculator}
            />
          </Reveal>
          <Reveal animation="fadeIn">
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

      {/* Sección: Proyectos Destacados (GitHub) */}
      <section id="proyectos" className={styles.section}>
        <Reveal animation="fadeIn">
          <h2 className={styles.sectionTitle}>
            <Target size={28} strokeWidth={2.5} />
            Proyectos Destacados
          </h2>
        </Reveal>
        <div className={styles.grid}>
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <ProjectCard {...project} icon={project.title.includes("Árbol") ? Code2 : Target} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className={styles.section}>
        <Reveal animation="fadeIn">
          <h2 className={styles.sectionTitle}>
            <Code2 size={28} strokeWidth={2.5} />
            Especialización Técnica
          </h2>
        </Reveal>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} animation="fadeIn">
              <SkillGroup title={category.title} skills={category.skills} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experiencia Breve Section */}
      <section id="experiencia" className={styles.section}>
        <Reveal animation="fadeIn">
          <h2 className={styles.sectionTitle}>
            <Briefcase size={28} strokeWidth={2.5} />
            Experiencia Relevante
          </h2>
        </Reveal>
        <div className={styles.experienceList}>
          {experience.map((job, index) => (
            <Reveal key={job.company} animation="fadeIn">
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
