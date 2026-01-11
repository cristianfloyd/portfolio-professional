import Link from "next/link";
import styles from "../case-study.module.css";
import { ArrowLeft, Calculator } from "lucide-react";

export default function ConciliacionCaseStudy() {
  return (
    <article className={styles.container}>
      <Link href="/" className={styles.backLink}>
        <ArrowLeft size={18} />
        Volver al inicio
      </Link>

      <header className={styles.header}>
        <span className={styles.type}>
          <Calculator size={16} />
          Algoritmos & Finanzas
        </span>
        <h1 className={styles.title}>Conciliación de Haberes con Subset Sum</h1>
        <p className={styles.intro}>Resolviendo discrepancias en nóminas públicas mediante optimización combinatoria: identificando qué conceptos causan diferencias de centavos.</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>El Desafío</h2>
        <div className={styles.content}>
          <p>En la liquidación de haberes de grandes instituciones como la UBA, es común encontrar discrepancias entre lo liquidado y lo reportado a entes externos (AFIP, ANSES).</p>
          <p>
            El problema no es detectar <em>que hay</em> una diferencia, sino <strong>cuál es su origen</strong>. Con cientos de conceptos (sueldos, aportes, adicionales, descuentos), encontrar manualmente qué combinación de ellos suma exactamente la diferencia detectada es un problema de complejidad
            exponencial.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>El Enfoque Algorítmico</h2>
        <div className={styles.content}>
          <p>
            Implementé una solución basada en el problema matemático <strong>Subset Sum</strong> (Suma de Subconjuntos). El objetivo es encontrar, dado un conjunto de valores (conceptos del legajo), qué subconjunto suma un valor objetivo (la diferencia detectada).
          </p>

          <h3>Optimizaciones Críticas (Pruning)</h3>
          <p>
            Para manejar la explosión combinatoria, el algoritmo utiliza técnicas de <strong>poda</strong>:
          </p>
          <ul>
            <li>
              <strong>Ordenamiento Previo:</strong> Procesar elementos de mayor a menor para descartar ramas de búsqueda rápidamente.
            </li>
            <li>
              <strong>Suma Restante:</strong> Si la suma actual más todos los elementos restantes no alcanza el objetivo, se aborta la rama.
            </li>
            <li>
              <strong>Tolerancia Dinámica:</strong> Manejo de errores de redondeo de punto flotante típicos en sistemas financieros.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Implementación Técnica</h2>
        <div className={styles.content}>
          <p>El núcleo de la solución es una función recursiva optimizada que explora el espacio de búsqueda con un límite de tolerancia configurable.</p>

          <pre className={styles.codeBlock}>
            {`// Implementación del núcleo recursivo con poda
private function findSubsets(
    array $items,
    float $targetSum,
    array $currentSubset,
    int $index,
    float $currentSum,
    array &$results,
    float $tolerance
): void {
    // Éxito: diferencia dentro de la tolerancia
    if (abs($currentSum - $targetSum) <= $tolerance) {
        $results[] = ['items' => $currentSubset, 'total' => $currentSum];
    }

    // Poda: si excedemos demasiado o no quedan elementos
    if ($index >= count($items) || $currentSum > $targetSum * 1.5) {
        return;
    }

    // Poda: si lo que queda no alcanza para llegar al objetivo
    if ($currentSum + $this->getRemainingSum($items, $index) < $targetSum - $tolerance) {
        return;
    }

    // Exploración de ramas (con y sin el elemento actual)
    $this->exploreBranch($items, $index, $currentSubset, $currentSum, ...);
}`}
          </pre>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Impacto y Resultados</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Diagnóstico</span>
            <div className={styles.cardValue}>Automático</div>
          </div>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Precisión</span>
            <div className={styles.cardValue}>100%</div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Conclusión</h2>
        <div className={styles.content}>
          <p>
            Esta herramienta transformó un proceso de investigación manual de horas por legajo en un diagnóstico instantáneo. Al identificar exactamente qué conceptos causan la falla, el equipo de nómina puede corregir las fórmulas en el sistema base (SIU Mapuche) de forma quirúrgica, eliminando
            errores sistémicos en lugar de hacer ajustes manuales temporales.
          </p>
        </div>
      </section>
    </article>
  );
}
