"use client";

import { useState, useMemo } from "react";
import styles from "./challenges.module.css";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { Code, Terminal, Globe, Cpu, Database, Layout } from "lucide-react";

const ALL_CHALLENGES = [
  {
    title: "01 - Árbol Genealógico Dragón",
    description: "Reto de lógica de programación: Implementación de un árbol genealógico con validaciones de parentesco y gestión de estado mediante grafos.",
    tags: ["Python", "Algorithms", "Testing"],
    link: "https://github.com/cristianfloyd/Coding-Challenges-Showcase/tree/main/01-Arbol-Genealogico-Dragon",
    icon: Code,
  },
  {
    title: "02 - Gilded Rose Kata",
    description: "Ejercicio clásico de refactorización de código legacy, aplicando el patrón Strategy para manejar reglas de negocio complejas sin romper la compatibilidad.",
    tags: ["Python", "Refactoring", "TDD"],
    link: "https://github.com/cristianfloyd/Coding-Challenges-Showcase/tree/main/GildedRose-Python-Refactoring",
    icon: Cpu,
  },
  {
    title: "03 - Buscador de Películas (React)",
    description: "Consumo de API externa, gestión de estados complejos y diseño responsivo con Tailwind CSS.",
    tags: ["React", "API", "JS"],
    link: "#",
    icon: Layout,
  },
  {
    title: "04 - Script de Automatización SysAdmin",
    description: "Automatización de backups y limpieza de logs en servidores Linux mediante Bash y Python.",
    tags: ["Bash", "Linux", "Python"],
    link: "#",
    icon: Terminal,
  },
  {
    title: "05 - Analizador de Logs (Data)",
    description: "Procesamiento masivo de logs de servidor para detección de anomalías utilizando Python y Pandas.",
    tags: ["Python", "Pandas", "Data"],
    link: "#",
    icon: Database,
  },
];

const FILTERS = ["Todos", "Python", "Next.js", "React", "Linux", "JS", "Algorithms"];

export default function ChallengesPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredChallenges = useMemo(() => {
    if (activeFilter === "Todos") return ALL_CHALLENGES;
    return ALL_CHALLENGES.filter((challenge) => challenge.tags.some((tag) => tag.toLowerCase() === activeFilter.toLowerCase()));
  }, [activeFilter]);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Reveal animation="fadeIn">
          <h1 className={styles.title}>
            Coding <span className={styles.highlight}>Challenges</span>
          </h1>
        </Reveal>
        <Reveal animation="fadeIn" delay={200}>
          <p className={styles.subtitle}>Un registro de mi progreso resolviendo retos de programación, ejercicios técnicos y automatizaciones.</p>
        </Reveal>
      </header>

      <section className={styles.filterSection}>
        <Reveal animation="fadeIn" delay={400}>
          <div className={styles.filterBar}>
            {FILTERS.map((filter) => (
              <button key={filter} className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ""}`} onClick={() => setActiveFilter(filter)}>
                {filter}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {filteredChallenges.map((challenge, index) => (
            <Reveal key={challenge.title} delay={index * 100}>
              <ProjectCard {...challenge} />
            </Reveal>
          ))}
        </div>

        {filteredChallenges.length === 0 && (
          <div className={styles.noResults}>
            <p>No se encontraron retos con la tecnología "{activeFilter}" por el momento.</p>
          </div>
        )}
      </section>
    </main>
  );
}
