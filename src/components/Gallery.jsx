import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
  "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
  "https://images.unsplash.com/photo-1615873968403-89e068629265",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
];

export default function Gallery() {
  return (
    <section className="gallery">
        <section className="gallery" id="gallery"></section>
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Our Luxury Spaces
      </motion.h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="gallery-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            <div
              className="gallery-bg"
              style={{ backgroundImage: `url(${img})` }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}