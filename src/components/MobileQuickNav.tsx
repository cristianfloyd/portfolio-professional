"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./MobileQuickNav.module.css";

const SECTIONS = ["hero", "proyectos", "habilidades", "experiencia", "contacto"];

export default function MobileQuickNav() {
  const pathname = usePathname();
  const [nextSectionIndex, setNextSectionIndex] = useState(1);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentIdx = 0;
      for (let i = 0; i < SECTIONS.length; i++) {
        const element = document.getElementById(SECTIONS[i]);
        if (element && scrollPosition >= element.offsetTop) {
          currentIdx = i;
        }
      }

      if (currentIdx === SECTIONS.length - 1) {
        setIsAtEnd(true);
      } else {
        setIsAtEnd(false);
        setNextSectionIndex(currentIdx + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // No mostrar el botón si no estamos en la home
  if (pathname !== "/") return null;

  const scrollToSection = (index: number) => {
    const targetId = SECTIONS[index];
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleClick = () => {
    if (isAtEnd) {
      scrollToSection(0);
    } else {
      scrollToSection(nextSectionIndex);
    }
  };

  return (
    <button className={styles.quickNav} onClick={handleClick} aria-label={isAtEnd ? "Volver arriba" : "Siguiente sección"}>
      {isAtEnd ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
    </button>
  );
}
