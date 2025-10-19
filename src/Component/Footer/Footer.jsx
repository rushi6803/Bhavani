import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-content">
        <div className="footer-section logo">
          <h3>Bhavani Induction Motors</h3>
         
          <p>Smooth Power for Every Application</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/about"><li>About Us/li></NavLink>
            <NavLink to="/product"><li>Products/li></NavLink>
            <NavLink to="/services"><li>Services/li> </NavLink>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>📞: +91 98765 43210</p>
          <p>📧: bhavani.induction.motor@gmail.com</p>
          <p><a href='https://maps.app.goo.gl/MFJYgjcHwXt658bi8'>📍:  7, Shivjyot Complex, Khodiyarnagar Cross Road,N.H. No-8, Bapunagar, Ahmedabad-380024</a></p>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons" >
            <a href="https://wa.me/919898059270" target="_blank" rel="noopener noreferrer" className="whatsapp">
              <FaWhatsapp />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/bhavani_induction_moter?igsh=MXFqN3FvM2lybXc5MQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bhavani Induction Motors. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
