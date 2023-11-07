import React from "react";

import Contact from "./pages/Contact";

import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";

import './app.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from './pages/Careers'
import Press from './pages/Press'
import Security from "./pages/Security"

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4" style={{ backgroundColor: 'white' }}>
        <Navbar />
        <Router/>
        <Footer />
        <FooterBottom />
      </div>
    
  );
}

export default App;


const Router=()=>{
  return(
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/Careers' element={<Careers/>}></Route>
      <Route path='/press' element={<Press/>}></Route>
      <Route path='/security' element={<Security/>}></Route>
    </Routes>
  )
}
