import styles from "./challenges.module.css";
import ProjectCard from "@/components/ProjectCard";

export default function ChallengesPage() {
  const allChallenges = [
    {
      title: "01 - Árbol Genealógico Dragón",
      description: "Reto de lógica de programación: Implementación de un árbol genealógico con validaciones de parentesco y gestión de estado.",
      tags: ["Python", "Algorithms", "Testing"],
      link: "https://github.com/cristianfloyd/Coding-Challenges-Showcase/tree/main/01-Arbol-Genealogico-Dragon"
    },
    {
      title: "02 - Portfolio Web",
      description: "Este mismo proyecto. Un reto de aprendizaje de Next.js y React para un perfil profesional.",
      tags: ["Next.js", "React", "CSS Modules"],
      link: "#"
    },
    // Aquí podrás añadir más retos fácilmente:
    // { title: "03 - Buscador de Películas", ... }
  ];

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Coding <span className={styles.highlight}>Challenges</span></h1>
        <p className={styles.subtitle}>
          Un registro de mi progreso resolviendo retos de programación y ejercicios técnicos.
        </p>
      </header>

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {allChallenges.map((challenge) => (
            <ProjectCard key={challenge.title} {...challenge} />
          ))}
        </div>
      </section>
    </main>
  );
}