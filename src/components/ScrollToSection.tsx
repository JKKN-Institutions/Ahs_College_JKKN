"use client";
import { useEffect } from "react";

export function ScrollToSection() {
  useEffect(() => {
    const section = sessionStorage.getItem("scrollToSection");
    if (section) {
      sessionStorage.removeItem("scrollToSection");
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 300);
      }
    }
  }, []);
  return null;
}
