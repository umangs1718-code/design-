import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about">
        <section className="about" id="about"></section>
      <div className="about-overlay" />

      <div className="about-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8 }}
          >
            We are a luxury interior design studio crafting timeless,
            elegant and emotionally inspiring space.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8 }}
          >
            Our philosophy blends minimalism, innovation and aesthetic
            storytelling to transform every environment into a masterpiece.
          </motion.p>

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            Discover More
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE CARD */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}
