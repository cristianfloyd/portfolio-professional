import Link from "next/link";
import { LucideIcon } from "lucide-react";
import styles from "./ProjectCard.module.css";

// Definimos qué datos necesita cada tarjeta (esto es TypeScript en acción)
interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon?: LucideIcon;
}

export default function ProjectCard({ title, description, tags, link, icon: Icon }: ProjectProps) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          {Icon && <Icon className={styles.cardIcon} size={24} />}
          <h3 className={styles.title}>{title}</h3>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <Link href={link} className={styles.link}>
          Ver resolución →
        </Link>
      </div>
    </div>
  );
}
