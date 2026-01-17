"use client";

import { useState, useMemo } from "react";
import styles from "./challenges.module.css";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { Code, Terminal, Globe, Cpu, Database, Layout } from "lucide-react";

import CHALLENGES_DATA from "@/data/challenges.json";

const ICON_MAP: Record<string, any> = {
  Code,
  Terminal,
  Globe,
  Cpu,
  Database,
  Layout,
};

const ALL_CHALLENGES = CHALLENGES_DATA.map((challenge) => ({
  ...challenge,
  icon: ICON_MAP[challenge.icon] || Code,
}));

const FILTERS = ["Todos", "Python", "Next.js", "React", "Linux", "JS", "Algorithms", "Data"];

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
