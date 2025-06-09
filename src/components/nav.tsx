// import { useState } from 'react';
// import "../assets/css/nav.css";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">Vectrofff_</div>
//       <button className="hamburger" onClick={toggleMenu}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </button>
//       <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
//         <li><a href="#home" onClick={toggleMenu}>Home</a></li>
//         <li><a href="#about" onClick={toggleMenu}>About</a></li>
//         <li><a href="#project" onClick={toggleMenu}>Project</a></li>
//         <li><a href="#certificates" onClick={toggleMenu}>Experience</a></li>
//         <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
//       </ul>
//       <div className="nav-cv">
//         <a href="./AsyrofCV.pdf">LIHAT CV</a>
//       </div>
//     </nav>
//   );
// }
import { useState } from 'react';
import "../assets/css/nav.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Vectrofff_</div>
      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#project" onClick={toggleMenu}>Project</a></li>
        <li><a href="#certificates" onClick={toggleMenu}>Experience</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        <li><a className='nav-cv-1' href="./AsyrofCV.pdf" onClick={toggleMenu}>LIHAT CV</a></li>
      </ul>
      <div className="nav-cv">
        <a href="./AsyrofCV.pdf" onClick={toggleMenu}>LIHAT CV</a>
      </div>
    </nav>
  );
}