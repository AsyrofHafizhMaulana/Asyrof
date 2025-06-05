import React from "react";
import "../assets/css/nav.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Vectrofff_</div>
      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#certificates">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-cv">
        <a href="public/AsyrofCV.pdf">LIHAT CV</a>
      </div>
    </nav>
  );
}