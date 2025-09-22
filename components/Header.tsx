"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // fixed
    <header
      className={`hidden top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold italic text-brand">
            GemaSoftwork
          </div>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-8">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </a>
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </a>
            <a
              href="#portfolio"
              className="text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="">Iniciar Projeto</button>
          </div>
        </div>
      </div>
    </header>
  );
}
