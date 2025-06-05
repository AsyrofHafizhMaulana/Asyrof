import React, { useState, useEffect, type FormEvent } from "react";
import { FiMail } from "react-icons/fi";
import { FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "../assets/css/contact.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");

  // Inisialisasi EmailJS dengan Public Key
  useEffect(() => {
    emailjs.init("OFzoaASapupOV7DvS"); // Ganti dengan Public Key dari EmailJS, contoh: user_123456789
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_g6d65uq", // Ganti dengan Service ID dari EmailJS, contoh: service_abc123
        "template_bsgq0b8", // Ganti dengan Template ID dari EmailJS, contoh: template_xyz789
        formData,
        "OFzoaASapupOV7DvS" // Ganti dengan Public Key dari EmailJS, contoh: user_123456789
      )
      .then(() => {
        setSubmitMessage("Pesan berhasil dikirim! Aku akan balas secepatnya.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setSubmitMessage("Gagal mengirim pesan. Coba lagi nanti.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Mari Bekerjasama!</h2>
        <p className="contact-subtitle">Kirim pesan atau hubungi aku di media sosial!</p>

        <div className="contact-methods">
          <a
            href="https://www.tiktok.com/@Vectrofff_"
            className="contact-button tiktok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="contact-icon" />
            <span>@vectrofff_</span>
          </a>
          <a
            href="https://wa.me/6281528558775"
            className="contact-button whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="contact-icon" />
            <span>+62 815-2855-8775</span>
          </a>
          <a
            href="https://instagram.com/vectrofff_"
            className="contact-button instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="contact-icon" />
            <span>@vectrofff_</span>
          </a>
          <a
            href="mailto:pengenjadikamenrider@gmail.com"
            className="contact-button email"
            aria-label="Send Email"
          >
            <FiMail className="contact-icon" />
            <span>pengenjadikamenrider@gmail.com</span>
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Kirim Pesan</h3>
          <div className="form-group">
            <label htmlFor="name">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nama kamu"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email kamu"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Pesan</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Apa yang ingin kamu sampaikan?"
            />
          </div>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? "Mengirim..." : "Kirim"}
          </button>
          {submitMessage && <p className="submit-message">{submitMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;