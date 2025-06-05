import React from 'react';
import { FaWhatsapp, FaInstagram, FaTiktok, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../assets/css/footer.css';

const services = [
  'Web Development',
  'Cybersecurity',
  'Design Grafis',
  'UI/UX Design',
  'Digital Illustration'
];

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/6281234567890',
    icon: FaWhatsapp,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/asyrof_ilustrasi',
    icon: FaInstagram,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@asyrofmaulana',
    icon: FaTiktok,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/asyrofmaulana',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/asyrofmaulana',
    icon: FaLinkedin,
  },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Asyrof Hafizh Maulana</h2>
          <p>Digital Illustrator & Web Developer passionate about creating stunning visuals and robust web solutions.</p>
          <button 
            onClick={scrollToTop}
            className="footer-scroll-btn"
            aria-label="Kembali ke atas"
          >
            ↑ Kembali ke Atas
          </button>
        </div>

        <div className="footer-services">
          <h3>Layanan</h3>
          <ul>
            {services.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="footer-social">
          <h3>Ikuti Saya</h3>
          <div className="social-links">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
              >
                <Icon className="social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Asyrof Hafizh Maulana. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;