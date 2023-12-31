import React from "react";
import Banner from "../components/banner/Banner";
import Contact from "../components/contact/Contact";
import Features from "../components/features/Features";
import Projects from "../components/projects/Projects";
// import Resume from "./components/resume/Resume";
// import Testimonial from "./components/tesimonial/Testimonial";
import Company from "../components/features/Company";
import '../app.css'

function Home() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4" style={{ backgroundColor: 'white' }}>
       
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Company/>
        <Features />
        <Projects />
        {/* <Resume /> */}
        {/* <Testimonial /> */}
        <Contact />
       
      
      </div>
    </div>
  );
}

export default Home;
