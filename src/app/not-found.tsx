import Link from "next/link";
import { Home, AlertCircle } from "lucide-react";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <AlertCircle size={64} className={styles.icon} />
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Página no encontrada</h2>
        <p className={styles.text}>Parece que el recurso que buscas se ha movido o no existe en este servidor (¿quizás un error en el despliegue de infraestructura?).</p>
        <Link href="/" className={styles.button}>
          <Home size={20} />
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
