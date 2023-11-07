// About.js
import React from "react";
import ProjectsCard from "../components/projects/ProjectsCard";
import {  Testi1 } from "../assets/index";
import Title from "../components/layouts/Title";
import {  Row, Col } from "react-bootstrap";
import 'animate.css';
import image from '../assets/images/about1.avif'
import image1 from '../assets/images/about.avif'


function About() {

  const redShadowStyle = {
    boxShadow: "0 0 10px #ffff",
  };
  const paragraphStyle = {
    color: "black",
    fontSize: "20px",
    lineHeight: "1.5", // Adjust line height for readability
    margin: "20px 0",
    textAlign: "justify",
     // Add margin for spacing
  };
  return (
    <>
      <section
        id="home"
        className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
        <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
          <div className="flex flex-col gap-5">
            <br></br>
            <h3 className=" text-lg font-normal text-black">About Us</h3>
            <h2 className="text-5xl font-bold text-black">
            Discover Our Story <span className="text-designColor capitalize"> Committed to Excellence, Innovating for You.  </span>
            </h2>
            <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
            Our company is driven by a passion for excellence and innovation. With a rich history and a dedicated team, we continuously strive to provide the highest quality products and services. Our commitment to our mission and values has propelled us to the forefront of our industry, and we look forward to a future filled with growth and success.<br/>
           <br/> "We are a passionate, innovative company with a rich history and a commitment to excellence. Our dedicated team works tirelessly to provide top-quality products and services. With a focus on innovation and customer satisfaction, we continue to grow and shape a bright future."
        </p>
          </div>
        </div>
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
          <img
            className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
            src={image}
            alt="Image"
          />
          <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
        </div>
      </section>

      {/* about deatils start */}
      <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center " >
        <Title
          title="Our DNA"
          des="This is What We’re Made Of"  
          
        />
       
      </div> 
      <Row className="vh-100">
        <Col md={6} className="animate__animated animate__bounceIn">
          <img src={image1} alt="Your Image" className="img-fluid" />
        </Col>
        <Col md={6} className="text-center d-flex align-items-center">
        <p style={paragraphStyle}>
        Our journey is defined by a relentless commitment to excellence. We're
        driven by a shared passion for innovation and a relentless pursuit of
        quality. With a rich history and a dedicated team, we've evolved and
        adapted to meet the evolving needs of our customers. Our story is a
        testament to the values that shape us – integrity, dedication, and a
        forward-thinking spirit. We look back at our journey with pride, and we
        look forward to a future filled with even greater achievements.<br/>
        we're dedicated to excellence through innovation. Our rich history, rooted in integrity and dedication, has shaped our relentless pursuit of quality. With a forward-thinking spirit, we adapt to meet evolving customer needs. 
      </p>
        </Col>
      </Row>
       
    
      
    </section>
<br/>
      {/* card section start */}
<br/>
      <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center  items-center text-center">
        <Title
          title="PEOPLE"
          des="Our Leadership Team"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Founder and CEO"
          des=" Name2"
       
          src={Testi1}
        />
        <ProjectsCard
          title="Product"
          des=" Name3"
          src={Testi1}
        />
     
        <ProjectsCard
          title="oMarketing"
          des=" Name1 "
          src={Testi1}
        />
         <ProjectsCard
          title="oMarketing"
          des=" Name1 "
          src={Testi1}
        />
         <ProjectsCard
          title="oMarketing"
          des=" Name1 "
          src={Testi1}
        />
         <ProjectsCard
          title="oMarketing"
          des=" Name1 "
          src={Testi1}
        />
      
      </div>
    </section>
    </>
  );
}

export default About;
