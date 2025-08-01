// src/Component/Testimonial/TestimonialSlider.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TestimonialSlider.css';

const testimonials = [
  {
    quote: "We’ve been using Bhavani Induction Motors for over 3 years now, and the performance is outstanding. Their motors are built tough and work flawlessly in demanding environments.",
    name: "Mr. Raj Mehta",
    role: "Industrial Machinery Supplier",
  },
  {
    quote: "Bhavani’s motors run smoothly with our textile machines and have helped reduce downtime significantly. Excellent quality and prompt service!",
    name: "Mrs. Kavita Desai",
    role: "Textile Factory Owner",
  },
  {
    quote: "I always recommend Bhavani Induction Motors to my clients for their consistent efficiency and durability. Their engineering team clearly knows what they’re doing.",
    name: "Mr. Prakash Iyer",
    role: "Engineering Consultant",
  },
  {
    quote: "Their motors are compact, reliable, and energy-saving — ideal for our ventilation systems. Bhavani is our go-to partner for electric motor needs.",
    name: "Mr. Suresh Parmar",
    role: "HVAC System Integrator",
  },
  {
    quote: "Bhavani Motors have been a hit among our farmer clients. The motors work well with pumps and threshers and require very little maintenance.",
    name: "Mr. Ramesh Patel",
    role: "Agriculture Equipment Dealer",
  },
  {
    quote: "From installation to operation, Bhavani Induction Motors delivered everything we needed. Smooth operation, long lifespan, and very responsive support team.",
    name: "Ms. Nidhi Shah",
    role: "Manufacturing Plant Manager",
  }
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="testimonial-card"
        >
          <p className="testimonial-quote">"{testimonials[index].quote}"</p>
          <h4 className="testimonial-name">{testimonials[index].name}</h4>
          <p className="testimonial-role">{testimonials[index].role}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TestimonialSlider;
