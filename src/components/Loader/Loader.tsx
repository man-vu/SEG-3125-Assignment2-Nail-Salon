import React from "react";
import { motion } from "framer-motion";
import logo192 from "@/assets/icons/logo192.png";
import "./Loader.css"; // Import the CSS below!

const Loader: React.FC = () => (
  <div className="loader-backdrop">
    <div className="loader-wrapper">
      <motion.img
        src={logo192}
        alt="Loading"
        className="loader-logo"
        initial={{ rotate: 0, opacity: 0.7 }}
        animate={{ rotate: 360, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
      />
      <motion.div
        className="loader-text"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
      >
        Loading...
      </motion.div>
    </div>
  </div>
);

export default Loader;
