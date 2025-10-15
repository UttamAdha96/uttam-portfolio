import React, { useState } from "react";
import "../App.css";

export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);
  return (
   <nav className="navbar">
        <div className="logo">Uttam Adha</div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </nav>
  );
}
