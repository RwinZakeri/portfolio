"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const updateHash = () => {
      const hash = window.location.hash || "#";
      setActiveSection(hash);
    };

    updateHash(); // Initial load

    // Listen for hash changes and browser history changes
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);
    window.addEventListener("click", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
      window.removeEventListener("click", updateHash);
    };
  }, []);

  return (
    <header className="flex sticky z-50 bg-transparent items-center justify-center top-3">
      <nav className="flex gap-1 p-0.5 bg-white/10 backdrop-blur border border-white/15 rounded-full">
        <Link
          href="#"
          className={`navItem ${activeSection === "#" ? "navItem_active" : ""}`}
        >
          Home
        </Link>
        <Link
          href="#project"
          className={`navItem ${
            activeSection === "#project" ? "navItem_active" : ""
          }`}
        >
          Project
        </Link>
        <Link
          href="#about"
          className={`navItem ${
            activeSection === "#about" ? "navItem_active" : ""
          }`}
        >
          About
        </Link>
        <Link
          href="#contact"
          className={`navItem ${
            activeSection === "#contact" ? "navItem_active" : ""
          }`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
