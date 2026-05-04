import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`header ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="header-inner">

          {/* Logo */}
          <motion.div
            className="logo"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/89121/optimized_product_thumb_stage.jpg"
              alt="logo"
            />
            <span>ARROW</span>
          </motion.div>

          {/* Nav Links */}
          <nav className="nav-links">
            {["Home" , "Services", "Gallery","Designers", "Contact","About"  ].map(
              (item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </nav>

          {/* CTA Button */}
          <motion.button
            className="cta-btn"
            
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Consultation
          </motion.button>

          {/* Hamburger */}
          <motion.div
            className="menu-toggle"
            onClick={() => setOpen(true)}
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.4 }}
          >
            ☰
          </motion.div>

        </div>
      </motion.header>

      <Menu open={open} setOpen={setOpen} />
    </>
  );
}