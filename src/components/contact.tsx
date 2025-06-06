import { useState, useEffect } from "react";
import { FiMail } from "react-icons/fi";
import { FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "../assets/css/contact.css";

// Konstanta untuk kredensial EmailJS (sebaiknya gunakan variabel lingkungan di proyek nyata)
const EMAILJS_PUBLIC_KEY = "OFzoaASapupOV7DvS"; // Ganti dengan Public Key Anda
const EMAILJS_SERVICE_ID = "service_g6d65uq"; // Ganti dengan Service ID Anda
const EMAILJS_TEMPLATE_ID = "template_bsgq0b8"; // Ganti dengan Template ID Anda

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

  // Inisialisasi EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  // Menangani perubahan input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Menangani pengiriman formulir
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage("Harap isi semua kolom!");
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
     name: formData.name,
     email: formData.email,
     message: formData.message,
});
      setSubmitMessage("Pesan berhasil dikirim! Aku akan balas secepatnya.");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitMessage(""), 5000); // Hapus pesan setelah 5 detik
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitMessage("Gagal mengirim pesan. Coba lagi nanti.");
    } finally {
      setIsSubmitting(false);
    }
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
            aria-label="TikTok @vectrofff_"
          >
            <FaTiktok className="contact-icon" />
            <span>@vectrofff_</span>
          </a>
          <a
            href="https://wa.me/6281528558775"
            className="contact-button whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp +62 815-2855-8775"
          >
            <FaWhatsapp className="contact-icon" />
            <span>+62 815-2855-8775</span>
          </a>
          <a
            href="https://instagram.com/vectrofff_"
            className="contact-button instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @vectrofff_"
          >
            <FaInstagram className="contact-icon" />
            <span>@vectrofff_</span>
          </a>
          <a
            href="mailto:pengenjadikamenrider@gmail.com"
            className="contact-button email"
            aria-label="Email pengenjadikamenrider@gmail.com"
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
              aria-describedby="name-error"
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
              aria-describedby="email-error"
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
              aria-describedby="message-error"
            />
          </div>
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Mengirim..." : "Kirim"}
          </button>
          {submitMessage && (
            <p
              className={`submit-message ${
                submitMessage.includes("berhasil")
                  ? "success-message"
                  : "error-message"
              }`}
            >
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;