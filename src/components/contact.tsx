import { useState, useEffect } from "react";
import { FiMail } from "react-icons/fi";
import { FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "../assets/css/contact.css";

// Konstanta untuk kredensial EmailJS
const EMAILJS_PUBLIC_KEY = "OFzoaASapupOV7DvS";
const EMAILJS_SERVICE_ID = "service_g6d65uq";
const EMAILJS_TEMPLATE_ID = "template_bsgq0b8";

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

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage("Please fill in all fields!");
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      setSubmitMessage("Message sent successfully! I'll reply soon.");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitMessage(""), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitMessage("Failed to send message. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect!</h2>
        <p className="contact-subtitle">Reach out via social media or send me a direct message!</p>

        <div className="contact-wrapper">
          <div className="contact-info-container">
            <h3 className="info-title">Get in Touch</h3>
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
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Send a Message</h3>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
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
                  placeholder="Enter your email"
                  aria-describedby="email-error"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  aria-describedby="message-error"
                />
              </div>
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Now"}
              </button>
              {submitMessage && (
                <p
                  className={`submit-message ${
                    submitMessage.includes("successfully") ? "success-message" : "error-message"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;