"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Home, Zap, Code2, Target, Mail } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Cerrar menú al hacer click en un enlace o redimensionar
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) closeMenu();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          CA<span className={styles.dot}>.</span>
        </Link>

        {/* Botón Hamburguesa */}
        <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`${styles.navLinks} ${isOpen ? styles.navActive : ""}`}>
          <li>
            <Link href="/" onClick={closeMenu}>
              <Home size={18} className={styles.navIcon} />
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/#impacto" onClick={closeMenu}>
              <Zap size={18} className={styles.navIcon} />
              Impacto
            </Link>
          </li>
          <li>
            <Link href="/#proyectos" onClick={closeMenu}>
              <Target size={18} className={styles.navIcon} />
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="/#habilidades" onClick={closeMenu}>
              <Code2 size={18} className={styles.navIcon} />
              Habilidades
            </Link>
          </li>
          <li>
            <Link href="/challenges" onClick={closeMenu}>
              <Target size={18} className={styles.navIcon} />
              Challenges
            </Link>
          </li>
          <li>
            <Link href="/#contacto" className={styles.contactBtn} onClick={closeMenu}>
              <Mail size={18} className={styles.navIcon} />
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay para cerrar al hacer click fuera en móvil */}
      {isOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </nav>
  );
}
