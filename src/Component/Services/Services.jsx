// src/components/Services.jsx
import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Custom Motor Design',
    description:
      'Tailored induction motor solutions based on specific industry requirements.',
  },
  {
    title: 'Manufacturing & Assembly',
    description:
      'Precision manufacturing of single-phase and three-phase induction motors.',
  },
  {
    title: 'Motor Repair & Rewinding',
    description:
      'Professional repair, rewinding, and refurbishment of damaged motors.',
  },
  {
    title: 'Quality Testing & Inspection',
    description:
      'Rigorous performance and safety testing to ensure reliability.',
  },
  {
    title: 'Bulk Supply & OEM Services',
    description:
      'Large-scale production and private labeling for OEM clients.',
  },
  {
    title: 'Technical Support & Maintenance',
    description:
      'Ongoing assistance, troubleshooting, and scheduled maintenance services.',
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <motion.h2
        className="services-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
