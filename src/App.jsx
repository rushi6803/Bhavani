// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import Services from './Component/Services/Services';
import Stats from './Component/Stats/Stats';
import Portfolio from './Component/Portfolio/Portfolio';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TestimonialSlider from './Component/TestimonialSlider/TestimonialSlider';
import Team from './Component/Team/Team';
import About from './Component/About/About';
import Industries from './Component/Industries/Industries';
import Contact from './Component/Contact/Contact';
import ProductPage from './Component/ProductPage/ProductPage';
ProductPage

const router=createBrowserRouter(
[
  {
    path:"/",
    element:
    <div className='container'>

    <Navbar/>
    <Hero/>
    <About/>
    <Portfolio/>
    <Services/>
    <Stats/>
    <TestimonialSlider/>
    <Team/>
    <Industries/>
    <Contact/>
    <Footer/>
    
    </div>

  },
  {
    path:"/about",
    element:
    <div className='container'>
    <Navbar/>
    <About/>
    <Industries/>
    <Footer/>
    </div>
  },
  {
    path:"/product",
    element:
    <div className='container'>
    <Navbar/>
    <ProductPage/>
    <Footer/>
    </div>
  },
  {
    path:"/services",
    element:
    <div className='container'>
    <Navbar/>
    <Services/>
    <Stats/>
    <Footer/>
    </div>
  }



  


])



const App = () => {
  return (
    
    <RouterProvider router={router}/>);
};

export default App;
