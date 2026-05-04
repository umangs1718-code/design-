import React from "react";
import { motion } from "framer-motion";

const menuItems = [
  "INTERIOR DESIGN",
  "FURNITURE DESIGN",
  "AFFORDABLE PRICES"
];

export default function Menu({ open, setOpen }) {
  return (
    <motion.div
      className="menu"
      initial={{ y: "-100%" }}
      animate={{ y: open ? "0%" : "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <button className="close" onClick={() => setOpen(false)}>
        ✕
      </button>

      <div className="menu-content">
        {menuItems.map((item, i) => (
          <motion.div
            key={i}
            className="menu-item"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: open ? 1 : 0, y: open ? 0 : 40 }}
            transition={{ delay: i * 0.2 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}