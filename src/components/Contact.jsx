import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-overlay" />

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Let’s Design Your Dream Space</h2>
        <p className="contact-sub">
          We create timeless, elegant and luxurious interiors tailored to your vision and idea.
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>📍 Shayam Nagar Metro Station, Jaipur</p>
            <p>📞 +91 6375331059</p>
            <p>✉ info@designagency.com</p>
            <p>🕒 Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
