import React from "react";
import "./ProductPage.css";
import { motion } from "framer-motion";
import img1 from "../assets/pro1.jpg"
import img2 from "../assets/motor1.png"
import img3 from "../assets/p1.jpg"
import img4 from "../assets/p2.jpg"
import img5 from "../assets/pro2.JPG"
import img6 from "../assets/p3.jpg"
import img7 from "../assets/pro3.JPG"
import img8 from "../assets/pro4.JPG"
import img9 from "../assets/pro5 .png"
import img10 from "../assets/pro6.png"
import img11 from "../assets/pro7.JPG"
import img12 from "../assets/pro8.JPG"


import brochure from "../assets/Brochure.pdf"
const products = [
  {
    name: "Single Phase  Motor",
    description:"Efficient and compact motors designed for small-scale applications where three-phase power is not available. Ideal for domestic, agricultural, and light industrial use with reliable startup torque and quiet operation.",
    image: img1,
    brochure: brochure,
  },
  {
    name: "Brake Motor",
    description:
      "Induction motors integrated with an electromagnetic brake unit for instant stopping. Suitable for applications requiring quick stopping and holding, such as lifts, conveyors, and hoists..",
    image:img2,
    brochure: brochure,
  },
  {
    name: "Aluminium Body Motor",
    description:
      "Lightweight, corrosion-resistant motors built with high-grade aluminum housing. Known for superior heat dissipation, silent running, and reduced weight, ideal for compact installations.",
    image: img3,
    brochure: brochure,
  },
  {
    name: "Flange Mount Motor ",
    description:
      "Motors designed with flange mounting for vertical or horizontal installation. Commonly used in pumps, compressors, and gearboxes where compact and stable mounting is required..",
    image: img4,
    brochure: brochure,
  },
  {
    name: "Planetry Gear Motor",
    description:
      "High torque, low-speed gear motors with planetary gear systems. Offers excellent load distribution and efficiency, commonly used in robotics, automation, and heavy-duty machinery.",
    image: img5,
    brochure: brochure,
  },
  {
    name: "Three Phase Motor",
    description:
      "Durable and high-performance motors designed for continuous industrial applications. Operates on a three-phase power supply offering greater efficiency and lower operational costs.",
    image: img6,
    brochure: brochure,
  },
  {
    name: "Worm Gear Box",
    description:
      "Right-angle gear reducers known for compact size, high torque output, and quiet operation. Used widely in conveyors, mixers, and packaging machines.",
    image: img7,
    brochure: brochure,
  },
  {
    name: "AC Brake",
    description:
      "Electromagnetic brakes that operate on AC current. Ensures rapid and safe stopping of the motor shaft, suitable for applications like elevators, cranes, and textile machinery.",
    image:img8,
    brochure: brochure,
  },
  {
    name: "Gear Motor",
    description:
      "Integrated motor and gearbox units that reduce speed and increase torque output. Available in various ratios and types (helical, worm, planetary), used in material handling and automation.",
    image: img9,
    brochure: brochure,
  },
  {
    name: "AC spring Brake",
    description:
      "Fail-safe brakes that engage when power is cut off. Spring-loaded mechanism ensures immediate braking, ideal for cranes, hoists, and safety-critical machines.",
    image: img10,
    brochure: brochure,
  },
  {
    name: "Normally off Brake  ",
    description:
      "Brakes that remain disengaged under no power and only activate when power is supplied. Common in systems requiring occasional braking under control, such as automatic doors.",
    image: img11,
    brochure: brochure,
  },
  {
    name: "DC Brake",
    description:
      "Direct current operated brakes offering precise control and fast response. Suitable for applications demanding frequent starts and stops like machine tools and presses.",
    image: img12,
    brochure: brochure,
  },
];

const ProductPage = () => {
  return (
    <section className="product-section">
      <h2 className="product-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <motion.div
            className="product-card"
            key={index}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <a href={product.brochure} download className="download-button">
              Download Brochure
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
