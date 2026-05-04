import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay" />

      <div className="footer-container">
 
          
      <div className="footer-bottom">
        © {new Date().getFullYear()} UrbanSpace. All Rights Reserved.| 2025 @Arrow Represented By Umang
      </div>
      </div>
    </footer>
  );
}