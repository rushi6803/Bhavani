import React,{useState} from 'react';
import logo from '../assets/logo.jpg';
import {motion} from 'framer-motion';
import menu from '../assets/menu1.png'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    const [menuOpen,setmenuOpen]=useState(false);
    const toggleMenu=()=>setmenuOpen(!menuOpen);
  return (
    <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}>
      <div className="navbar">
      <NavLink to="/">  <img src={logo} alt="Induction Motor" className='logo'/></NavLink>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
       <NavLink to="/"> <li>Home</li></NavLink>
       <NavLink to="/about"> <li>About Us</li></NavLink>
       <NavLink to="/product"><li>Products</li></NavLink>
       <NavLink to="/services"><li>Services</li></NavLink>
       <li><a href="https://wa.me/919898059270"> <button>Get Quote</button></a></li>
    </ul>
    <ul className='ham' onClick={toggleMenu}>
        <img src={menu} alt="" />
    </ul>

    </div>
    </motion.div>
  )
}

export default Navbar
