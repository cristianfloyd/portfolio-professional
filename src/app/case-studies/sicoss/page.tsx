import Link from "next/link";
import styles from "../case-study.module.css";
import { ArrowLeft, Gauge, ShieldCheck, Cpu, Database, Activity, Code2, Terminal } from "lucide-react";

export default function SicossCaseStudy() {
  return (
    <article className={styles.container}>
      <Link href="/" className={styles.backLink}>
        <ArrowLeft size={18} />
        Volver al inicio
      </Link>

      <header className={styles.header}>
        <div className={styles.badgeContainer}>
          <span className={styles.type}>
            <Gauge size={16} />
            Performance Optimization
          </span>
          <span className={`${styles.type} ${styles.auditBadge}`}>
            <ShieldCheck size={16} />
            Production Ready (95%)
          </span>
        </div>
        <h1 className={styles.title}>Reingeniería SICOSS: El Motor de Nóminas</h1>
        <p className={styles.intro}>
          Migración masiva de un sistema PHP legacy a un backend especializado en Python. Una arquitectura de <strong>47,500+ líneas de código</strong> diseñada para procesar liquidaciones de misión crítica con un rendimiento 20x superior.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Métricas de Ingeniería (Post-Auditoría)</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Impacto en Performance</span>
            <div className={styles.cardValue}>20x Fast</div>
            <p className={styles.cardSubtitle}>0.5s vs 10s (Legacy)</p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Escala del Sistema</span>
            <div className={styles.cardValue}>47.5k+ LOC</div>
            <p className={styles.cardSubtitle}>66+ archivos Python</p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Rigor Técnico</span>
            <div className={styles.cardValue}>86% Cov</div>
            <p className={styles.cardSubtitle}>Suite de Tests Automática</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Anatomía del Problema (Legacy)</h2>
        <div className={styles.content}>
          <p>La auditoría inicial reveló patrones de código que impedían el escalamiento del sistema original:</p>

          <div className={styles.comparison}>
            <div className={styles.before}>
              <h4>SQL Correlacionado</h4>
              <p>Subconsultas redundantes por cada fila procesada.</p>
              <pre className={styles.codeBlock}>
                {`SELECT payroll.id,
  (SELECT ARRAY( 
    SELECT DISTINCT group_id 
    FROM generic_groups_table 
    WHERE group_id IN (...)
  )) AS category_groups
FROM payroll_registry;`}
              </pre>
            </div>
            <div className={styles.before}>
              <h4>Problema N+1 en PHP</h4>
              <p>Consultas a base de datos dentro de ciclos masivos.</p>
              <pre className={styles.codeBlock}>
                {`foreach ($employees as $emp) {
    // Alarma técnica: I/O en bucle
    $details = $db->query(
        "SELECT * FROM details..."
    );
    $this->process($details);
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Arquitectura del Sistema</h2>
        <div className={styles.content}>
          <p>
            El sistema no es solo un script; es una plataforma modular basada en <strong>Capas (Layered Architecture)</strong> y orquestada por componentes especializados:
          </p>

          <div className={styles.architectureBox}>
            <div className={styles.externalSystem}>💻 Laravel PHP Frontend</div>

            <div className={styles.archArrow}>↕</div>

            <div className={styles.archLayer}>
              <Terminal size={20} />
              <div>
                <h4>FastAPI Gateway</h4>
                <p>Capa de comunicación REST. Manejo de autenticación, validación de schemas con Pydantic y Swagger UI.</p>
              </div>
            </div>

            <div className={styles.archArrow}>↓</div>

            <div className={styles.archLayer}>
              <Cpu size={20} />
              <div>
                <h4>SICOSS Backend Core</h4>
                <p>
                  Pipeline de procesamiento vectorial con <strong>Pandas</strong>. Orquestación de lógicas fiscales y aplicación de topes complejos.
                </p>
              </div>
            </div>

            <div className={styles.archArrow}>↓</div>

            <div className={styles.archGrid}>
              <div className={styles.archLayer}>
                <Database size={20} />
                <div>
                  <h4>Extraction Layer</h4>
                  <p>Batch queries optimizadas que eliminan el problema N+1.</p>
                </div>
              </div>
              <div className={styles.archLayer}>
                <Database size={20} />
                <div>
                  <h4>Persistence Layer</h4>
                  <p>Inserción masiva ACID en esquema segregado.</p>
                </div>
              </div>
            </div>

            <div className={styles.archArrow}>↓</div>

            <div className={styles.externalSystem}>🗄️ PostgreSQL Database</div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Desafíos Técnicos Superados</h2>
        <div className={styles.content}>
          <div className={styles.challengeItem}>
            <h4>1. Reemplazo del Bucle N+1</h4>
            <p>
              El sistema PHP legacy consultaba la base de datos por cada legajo. Migré esto a un <strong>Extractor Manager</strong> que utiliza Common Table Expressions (CTEs) para traer un set de datos enriquecido en una sola pasada de memoria.
            </p>
          </div>

          <div className={styles.challengeItem}>
            <h4>2. Validaciones de Dominio Complejas</h4>
            <p>
              Implementé <strong>Value Objects</strong> como <code>PeriodoFiscal</code> para encapsular la lógica de validación inmutable, asegurando que ninguna fecha o periodo inválido entre al pipeline de cálculo.
            </p>
          </div>

          <div className={styles.challengeItem}>
            <h4>3. Verificador vs Legacy</h4>
            <p>
              Para garantizar la seguridad del despliegue, desarrollé un <code>SicossVerifier</code>. Un componente que corre en paralelo el sistema viejo y el nuevo sobre 1.2M de registros para certificar discrepancia cero antes del pase a producción.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Stack Tecnológico</h2>
        <div className={styles.tagGrid}>
          <span className={styles.tag}>
            <Code2 size={14} /> Python 3.10+
          </span>
          <span className={styles.tag}>
            <Activity size={14} /> FastAPI
          </span>
          <span className={styles.tag}>
            <Database size={14} /> Pandas / NumPy
          </span>
          <span className={styles.tag}>
            <Database size={14} /> PostgreSQL (SQLAlchemy 2.0)
          </span>
          <span className={styles.tag}>
            <ShieldCheck size={14} /> Pytest / TDD
          </span>
        </div>
      </section>

      <footer className={styles.caseFooter}>
        <Link href="https://github.com/cristianfloyd/sicoss_backend" target="_blank" className={styles.primaryBtn}>
          <Code2 size={20} />
          Ver Repositorio en GitHub
        </Link>
      </footer>
    </article>
  );
}
