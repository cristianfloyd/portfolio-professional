import Link from "next/link";
import styles from "../case-study.module.css";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function SeguridadCaseStudy() {
  return (
    <article className={styles.container}>
      <Link href="/" className={styles.backLink}>
        <ArrowLeft size={18} />
        Volver al inicio
      </Link>

      <header className={styles.header}>
        <span className={styles.type}>
          <ShieldCheck size={16} />
          Ciberseguridad & Arquitectura
        </span>
        <h1 className={styles.title}>Adaptador Criptográfico de Identidad</h1>
        <p className={styles.intro}>Resolviendo el puente de autenticación entre Laravel 11 y sistemas legacy SIU Toba mediante un motor de hashing adaptativo en PHP 8.3.</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>El Reto: Experiencia Unificada y Seguridad</h2>
        <div className={styles.content}>
          <p>
            Al modernizar ecosistemas universitarios, uno de los mayores desafíos es la <strong>fragmentación de identidades</strong>. Los usuarios, reacios a gestionar múltiples credenciales, necesitaban acceder a los nuevos módulos de reportes en <strong>Laravel 11</strong> utilizando sus cuentas
            existentes de <strong>SIU Toba</strong>.
          </p>
          <p>
            <strong>El objetivo estratégico:</strong> Implementar un acceso unificado donde el login fuera transparente para el usuario. Esto requería no solo validar los hashes legacy, sino también permitir que el sistema Laravel leyera y respetara los perfiles de acceso definidos originalmente en
            la base de datos de Toba para restringir permisos de forma quirúrgica.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>La Solución: TobaHashAdapter</h2>
        <div className={styles.content}>
          <p>
            Desarrollé un <strong>Adapter</strong> especializado que replica la lógica interna de hashing de Toba pero utilizando las mejores prácticas de <strong>PHP 8.3</strong>.
          </p>

          <h3>Hitos de la Implementación</h3>
          <ul>
            <li>
              <strong>Replica de Algoritmos:</strong> Soporte para Bcrypt, SHA256 y SHA512 con el cálculo de rondas exacto que espera Toba.
            </li>
            <li>
              <strong>Generación de Sal Segura:</strong> Implementación de <code>random_bytes()</code> nativo para máxima entropía, con fallbacks securizados.
            </li>
            <li>
              <strong>Interoperabilidad Transparente:</strong> Permite al nuevo sistema Laravel verificar contraseñas antiguas y migrarlas automáticamente a estándares más modernos al detectarlas.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Anatomía del Código</h2>
        <div className={styles.content}>
          <p>
            El corazón de la solución reside en la codificación precisa de los bytes de la sal y el soporte multi-algoritmo mediante <code>match</code> expressions de PHP 8.
          </p>

          <pre className={styles.codeBlock}>
            {`// Implementación del generador de sal adaptativo
private function getSalt(): string
{
    $salt = match (strtoupper($this->metodo)) {
        'BCRYPT' => '$2y$' . sprintf('%02d$', $this->rounds),
        'SHA512' => sprintf('$6$rounds=%d$', $this->calculateRounds()),
        'SHA256' => sprintf('$5$rounds=%d$', $this->calculateRounds()),
        'MD5'    => '$1$',
        default  => throw new Exception("Algoritmo no soportado")
    };

    $bytes = random_bytes(16);
    return $salt . $this->encodeBytes($bytes);
}

// Verificación segura (Constant Time)
public function verify(string $input, string $existingHash): bool
{
    $hash = crypt($input, $existingHash);
    return hash_equals($hash, $existingHash);
}`}
          </pre>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Métricas de Seguridad</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Compatibilidad</span>
            <div className={styles.cardValue}>100% Legacy</div>
          </div>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Entropía</span>
            <div className={styles.cardValue}>CSPRNG</div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Conclusión</h2>
        <div className={styles.content}>
          <p>
            Este adaptador no solo eliminó la fricción de la migración para los usuarios finales, sino que también elevó el estándar de seguridad de la aplicación al centralizar la lógica de hashing en un servicio inyectable, testeable y preparado para futuras actualizaciones de hardware mediante el
            ajuste dinámico de rondas.
          </p>
        </div>
      </section>
    </article>
  );
}
