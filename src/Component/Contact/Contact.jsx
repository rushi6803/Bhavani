// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h2>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Bhavani Induction Motors</h3>
          <p>📍 7, Shivjyot Complex, Khodiyarnagar Cross Road,N.H. No-8, Bapunagar, Ahmedabad-380024
        </p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ bhavani.induction.motor@gmail.com</p>
        </motion.div>

        <motion.div
          className="contact-map"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7286864743974!2d72.63899359999999!3d23.033732000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86f2cc4c6953%3A0xc7c54b560bad8789!2sShivjyot%20Complex%2C%20Manhar%20Nagar%2C%20Bapunagar%2C%20Ahmedabad%2C%20Gujarat%20380024!5e0!3m2!1sen!2sin!4v1753957908018!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: "0", borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
