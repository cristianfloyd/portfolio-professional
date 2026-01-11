import Link from "next/link";
import styles from "../case-study.module.css";
import { ArrowLeft, Server } from "lucide-react";

export default function InfraestructuraCaseStudy() {
  return (
    <article className={styles.container}>
      <Link href="/" className={styles.backLink}>
        <ArrowLeft size={18} />
        Volver al inicio
      </Link>

      <header className={styles.header}>
        <span className={styles.type}>
          <Server size={16} />
          Infrastructure & SysAdmin
        </span>
        <h1 className={styles.title}>Gestión de Infraestructura Dedicada</h1>
        <p className={styles.intro}>Evolución y administración integral de un ecosistema de servidores privados desde 2012: de la virtualización Bare-Metal a la automatización moderna.</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Una Trayectoria de 13 Años</h2>
        <div className={styles.content}>
          <p>
            Desde 2012, he gestionado de forma independiente un <strong>servidor dedicado único</strong>, operando como mi propio proveedor de infraestructura. Este entorno ha sido mi laboratorio principal, evolucionando desde un host inicial con <strong>CentOS</strong> hasta una actualización
            reciente a <strong>AlmaLinux</strong>.
          </p>
          <p>La arquitectura se basa en la segmentación de servicios críticos mediante virtualización en el host, permitiéndome mantener un ecosistema estable para correo, DNS, FTP, bases de datos y entornos de experimentación.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Hitos de Evolución Tecnológica</h2>
        <div className={styles.content}>
          <p>La infraestructura ha pasado por ciclos críticos de modernización y migración:</p>
          <ul>
            <li>
              <strong>Virtualización con VirtualBox:</strong> Implementación de servicios aislados (Correo, DNS, FTP, Web, DB) mediante máquinas virtuales gestionadas sobre el host Linux, incluyendo un entorno dedicado exclusivamente a testing.
            </li>
            <li>
              <strong>Salto a AlmaLinux:</strong> Hace dos años, realicé una actualización integral del host raíz de CentOS a <strong>AlmaLinux</strong>, migrando progresivamente las VMs (tanto Linux como Windows) para estandarizar el ecosistema en las versiones más recientes y estables.
            </li>
            <li>
              <strong>Migración de Datos:</strong> Gestión del ciclo de vida de bases de datos, incluyendo la transición crítica de <strong>MySQL 5.7 a MariaDB 10</strong>, garantizando cero pérdida de datos en entornos productivos.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Hardening y Seguridad</h2>
        <div className={styles.content}>
          <p>Administrar un servidor expuesto a internet requiere una postura de seguridad agresiva. Mi configuración estándar incluye:</p>
          <ul>
            <li>
              <strong>SELinux:</strong> Políticas estrictas activas (Enforcing) para mitigar vectores de ataque, configurando contextos específicos para servicios web y de datos.
            </li>
            <li>
              <strong>Firewalling:</strong> Uso avanzado de <code>firewall-cmd</code> para control granular de tráfico.
            </li>
            <li>
              <strong>Acceso Seguro:</strong> Inhabilitación de acceso por contraseña, permitiendo únicamente autenticación vía **SSH con llaves RSA** (Pública/Privada).
            </li>
            <li>
              <strong>Cockpit:</strong> Implementación de administración remota segura para monitoreo de recursos en tiempo real.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Automatización CI/CD</h2>
        <div className={styles.content}>
          <p>
            En los últimos años, he integrado flujos modernos de despliegue. Utilizo <strong>Webhooks de GitHub</strong> para automatizar las actualizaciones: cada vez que realizo un push a producción, mi servidor recibe la notificación, valida el cambio y actualiza el código o los contenedores de
            forma automática.
          </p>

          <pre className={styles.codeBlock}>
            {`# Ejemplo conceptual de flujo de Deploy vía Webhooks
1. Push to GitHub (main branch)
2. Webhook triggers Node.js/PHP Listener en Servidor
3. Script valida firma de seguridad (X-Hub-Signature)
4. Git Pull + Reload Nginx / Docker Restart
5. Notificación de éxito vía Log/Email`}
          </pre>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Conclusión</h2>
        <div className={styles.content}>
          <p>
            Contar con infraestructura propia no solo me ha permitido desplegar mis aplicaciones (como este portfolio), sino que me ha dado una comprensión profunda de cómo el código interactúa con el sistema operativo y el hardware. Esta visión de 360° es lo que me permite diseñar soluciones
            backend que no solo funcionan, sino que son eficientes y seguras desde la base.
          </p>
        </div>
      </section>
    </article>
  );
}
