import styles from "./SkillGroup.module.css";

interface SkillGroupProps {
  title: string;
  skills: string[];
}

export default function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div className={styles.group}>
      <h3 className={styles.groupTitle}>{title}</h3>
      <div className={styles.skillsList}>
        {skills.map((skill) => (
          <span key={skill} className={styles.skillBadge}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
