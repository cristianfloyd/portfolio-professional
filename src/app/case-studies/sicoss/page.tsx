import Link from "next/link";
import styles from "../case-study.module.css";
import { ArrowLeft, Gauge } from "lucide-react";

export default function SicossCaseStudy() {
  return (
    <article className={styles.container}>
      <Link href="/" className={styles.backLink}>
        <ArrowLeft size={18} />
        Volver al inicio
      </Link>

      <header className={styles.header}>
        <span className={styles.type}>
          <Gauge size={16} />
          Performance Optimization
        </span>
        <h1 className={styles.title}>Optimización de Reportes SICOSS</h1>
        <p className={styles.intro}>Cómo reduje un proceso crítico de 40 minutos a menos de 60 segundos transformando consultas SQL masivas y migrando lógica a Python.</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Anatomía del Problema (Legacy)</h2>
        <div className={styles.content}>
          <p>Tras una auditoría técnica profunda, identifiqué dos cuellos de botella que impedían el escalamiento del sistema:</p>

          <h3>1. SQL Correlacionado (Carga Excesiva de DB)</h3>
          <p>El sistema original utilizaba subconsultas anidadas de forma correlacionada. Esto significa que por cada registro de liquidación, el motor de base de datos debía recalcular jerarquías de grupos de forma redundante.</p>
          <pre className={styles.codeBlock}>
            {`-- Representación anonimizada del problema SQL
-- Ejecución redundante de sub-arrays por fila
SELECT 
    payroll.id,
    (SELECT ARRAY( 
        SELECT DISTINCT group_id 
        FROM generic_groups_table 
        WHERE group_id IN (
            SELECT group_id FROM concepts_relation 
            WHERE concept_id = payroll.concept_id
        )
    )) AS category_groups
FROM payroll_registry AS payroll;`}
          </pre>

          <h3>2. El problema N+1 en PHP</h3>
          <p>La lógica de negocio procesaba los legajos de forma secuencial, realizando nuevas peticiones de datos dentro de un bucle de miles de iteraciones.</p>
          <pre className={styles.codeBlock}>
            {`// Representación anonimizada del flujo ineficiente
foreach ($employees as $employee) {
    // Alarma técnica: Consulta a DB dentro de un ciclo masivo
    $details = $db->query('SELECT * FROM details WHERE emp_id = ' . $employee['id']);
    
    foreach ($details as $row) {
        $this->processBusinessRules($row);
    }
}`}
          </pre>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Métricas de Impacto</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Tiempo Total de Proceso</span>
            <div className={styles.cardValue}>40m → 58s</div>
          </div>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Optimización SQL</span>
            <div className={styles.cardValue}>15m → 7s</div>
          </div>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Confiabilidad</span>
            <div className={styles.cardValue}>100% Integra</div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>La Solución</h2>
        <div className={styles.content}>
          <p>La solución se aplicó en dos etapas críticas:</p>

          <h3>1. Optimización SQL con CTEs</h3>
          <p>
            Reemplacé las subconsultas recurrentes por <strong>Common Table Expressions (CTEs)</strong>. Esto permitió a PostgreSQL precalcullar los grupos una sola vez en memoria y unirlos mediante un Join altamente eficiente.
          </p>

          <pre className={styles.codeBlock}>
            {`-- Solución mediante CTE (Pre-procesamiento en memoria)
WITH processed_groups AS (
    SELECT concept_id, array_agg(DISTINCT group_id) as groups
    FROM concepts_relation
    GROUP BY concept_id
)
SELECT payroll.*, pg.groups
FROM payroll_registry payroll
LEFT JOIN processed_groups pg ON pg.concept_id = payroll.concept_id;`}
          </pre>

          <h3>2. Procesamiento Vectorial con Python</h3>
          <p>
            Finalmente, la lógica de validación se migró a un motor en <strong>Python</strong> utilizando <strong>Pandas</strong>. Al tratar el millón de registros de forma vectorial (como un todo en memoria), eliminé la sobrecarga del bucle secuencial de PHP.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Conclusión</h2>
        <div className={styles.content}>
          <p>
            Este proyecto no solo ahorró tiempo, sino que demostró la importancia de la <strong>observabilidad</strong> y el análisis de planes de ejecución. La solución fue validada mediante Jupyter Notebooks, asegurando que el 100% de los 1.2M de registros generados coincidieran exactamente con el
            sistema original, garantizando integridad total de los datos contables.
          </p>
        </div>
      </section>
    </article>
  );
}
