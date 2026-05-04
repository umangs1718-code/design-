import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Aesthetic Living Spaces",
    subtitle: "Designing timeless interiors..."
  },
  {
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    title: "Luxury Modern Interiors",
    subtitle: "Crafted with elegance & detail"
  },
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    title: "Minimal & Premium Design",
    subtitle: "Where comfort meets sophistication"
  }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      
      {/* Background Image Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].image}
          className="hero-bg"
          style={{ backgroundImage: `url(${slides[index].image})` }}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>

      {/* Text Animation */}
      <div className="hero-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].title}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1 }}
          >
            <h1>{slides[index].title}</h1>
            <p>{slides[index].subtitle}</p>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}