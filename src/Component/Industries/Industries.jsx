import React from "react";
import { motion } from "framer-motion";
import "./Industries.css";
import img1 from "../assets/use1.jpg";
import img2 from "../assets/use2.jpg";
import img3 from "../assets/use3.jpg";
import img4 from "../assets/use4.jpg";
import img5 from "../assets/use5.jpg";
import img6 from "../assets/use6.jpg";
import img7 from "../assets/use7.jpg";
import img8 from "../assets/use8.jpg";
const industries = [
  { title: "Textile Industry", image: img7 },
  { title: "Pharmaceuticals", image:img8 },
  { title: "Air Compresor", image: img1 },
  { title: "Diamond", image: img5},
  { title: "Crane", image: img4 },
  { title: "Packaging", image: img6 },
];

const Industries = () => {
  return (
    <section className="industries-section" id="industries">
      <h2 className="industries-heading">Industries We Serve</h2>
      <div className="industries-grid">
        {industries.map((industry, index) => (
          <motion.div
            className="industry-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={industry.image} alt={industry.title} />
            <h3>{industry.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
