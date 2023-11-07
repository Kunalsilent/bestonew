// About.js
import React from "react";
import ProjectsCard from "../components/projects/ProjectsCard";

import Title from "../components/layouts/Title";
import {  Row, Col } from "react-bootstrap";
import 'animate.css';
import {  Testi1 } from "../assets/index";

import careerimg from '../assets/images/career.avif'
import careerimg1 from '../assets/images/career1.avif'


function Career() {
      const paragraphStyle = {
    color: "black",
    fontSize: "20px",
    lineHeight: "1.5", // Adjust line height for readability
    margin: "20px 0",
    textAlign: "justify",
     // Add margin for spacing
  };

  const redShadowStyle = {
    boxShadow: "0 0 10px #ff014f",
  };
 
  
  return (
    <>
      <section
        id="home"
        className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
        <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
          <div className="flex flex-col gap-5">
            <br></br>
            <h3 className=" text-lg font-normal text-black">WELCOME TO Company</h3>
            <h2 className="text-5xl font-bold text-black">
            Join Our Team <span className="text-designColor capitalize">Explore Career Opportunities   </span>
            </h2>
            <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
            we're always on the lookout for talented individuals who share our passion for innovation and excellence. If you're driven by a commitment to quality and a desire to make a meaningful impact, we invite you to explore exciting career opportunities with us. Join a team dedicated to shaping the future and advancing your career. We value diversity, creativity, and continuous learning. Discover your potential with us.
        </p>
          </div>
        </div>
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
          <img
            className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
            src={careerimg1}
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
          title="Powering"
          des="Join a team that is making things happen"
 
          
        />
       
      </div> 
      <Row className="vh-100">
        <Col md={6} className="animate__animated animate__bounceIn">
          <img src={careerimg} alt="Your Image" className="img-fluid" />
        </Col>
        <Col md={6} className="text-center d-flex align-items-center">
          <p
           style={paragraphStyle}
          >
          we believe in fostering a dynamic and inclusive work environment that encourages creativity and innovation. <br/>Our team is made up of individuals from diverse backgrounds, all working together to achieve common goals. We offer a range of benefits and opportunities to support the professional growth and personal well-being of our employees.<br/> If you're passionate about making a positive impact and are eager to be part of a team dedicated to excellence, we invite you to explore the exciting career paths available with us. We look forward to welcoming new talents who share our vision and values.
          </p>
        </Col>
      </Row>
       
    
      
    </section>

      {/* card section start */}

    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center  items-center text-center">
        <Title
          title="PEOPLE"
          des="Join Us to Meet Our Team"
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
      <br/>
      <div className="flex justify-center items-center text-center " >
        <Title
          des="Join a team that is making things happen"
        />
      </div> 
      <div className="d-flex justify-content-center align-items-center ">
      <button className="btn btn-danger">
      Apply Now
      </button>
    </div>
    </section>
    
    </>
  );
}

export default Career;
