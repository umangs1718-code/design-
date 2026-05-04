import { motion } from "framer-motion";

const services = [
  {
    title: "Interior Design",
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013"
  },
  {
    title: "Furniture Design",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
  },
  {
    title: "Architecture Planning",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    title: "Luxury Renovation",
    img: "https://images.unsplash.com/photo-1616593969747-4797dc75033e"
  },
  {
    title: "Modern Landscape Design",
    img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
  },
  {
    title: "Smart Home Styling",
    img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf"
  }
];

export default function Services() {
  return (
    <section className="services">
        <section className="services" id="services"></section>
      <div className="overlay" />

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>

      <div className="cards">
        {services.map((item, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 0.5 }}
            viewport={{ once: true }}
          >
            <div
              className="card-bg"
              style={{ backgroundImage: `url(${item.img})` }}
            />
            <div className="card-content">
              <h3>{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}