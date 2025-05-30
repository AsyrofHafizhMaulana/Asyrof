import React from "react";
import { FiMail } from "react-icons/fi";
import { FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "../assets/css/contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title"> Mari Bekerjasama!</h2>
        <p className="contact-subtitle">
          Apakah kamu ingin berdiskusi, kolaborasi proyek, atau hanya sekadar menyapa? Aku selalu terbuka! 
        </p>

        <div className="contact-methods">
          <a
            href="https://www.tiktok.com/@pengenjadikamenrider"
            className="contact-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="contact-icon" />
            <span>vectrofff_</span>
          </a>

          <a
            href="https://wa.me/6281528558775"
            className="contact-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="contact-icon" />
            <span>+62 815-2855-8775</span>
          </a>

          <a
            href="https://instagram.com/vectrofff_"
            className="contact-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="contact-icon" />
            <span>@vectrofff_</span>
          </a>

          <a
            href="mailto:pengenjadikamenrider@gmail.com"
            className="contact-button"
            aria-label="Send Email"
          >
            <FiMail className="contact-icon" />
            <span>pengenjadikamenrider@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;