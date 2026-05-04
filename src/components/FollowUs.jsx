import { motion } from "framer-motion";

const socials = [
  {
    name: "Instagram",
    username: "@urbanspace.design",
    link: "https://instagram.com",
    description: "Daily luxury interior inspirations & behind the scenes.",
    gradient: "linear-gradient(45deg,#f09433,#dc2743,#bc1888)"
  },
  {
    name: "Dribbble",
    username: "UrbanSpace Studio",
    link: "https://dribbble.com",
    description: "Exclusive concept designs & premium visual projects.",
    gradient: "linear-gradient(45deg,#ea4c89,#ff6b9d)"
  },
  {
    name: "Behance",
    username: "Luxury Architecture",
    link: "https://behance.net",
    description: "Full case studies of our architectural masterpieces.",
    gradient: "linear-gradient(45deg,#1769ff,#0057ff)"
  }
];

export default function FollowUs() {
  return (
    <section className="follow-page" id="follow">
      <div className="follow-overlay" />

      <motion.div
        className="follow-header"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Stay Inspired With Us</h2>
        <p>
          Discover curated luxury interiors, design processes, and timeless
          architecture inspiration across our creative platforms.
        </p>
      </motion.div>

      <div className="follow-grid">
        {socials.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="follow-card"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div
              className="follow-bg"
              style={{ background: item.gradient }}
            />

            <div className="follow-content">
              <h3>{item.name}</h3>
              <span>{item.username}</span>
              <p>{item.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}