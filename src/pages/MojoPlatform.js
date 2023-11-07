// About.js
import React from "react";
import ProjectsCard from "../components/projects/ProjectsCard";
import { projectOne, projectTwo, projectThree } from "../assets/index";
import Title from "../components/layouts/Title";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';


function About() {

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
            <h3 className=" text-lg font-normal text-black">WELCOME TO MY WORLD</h3>
            <h2 className="text-5xl font-bold text-black">
              Hyper Personalized and <span className="text-designColor capitalize"> Dynamic Career Sites   </span>
            </h2>
            <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
         Get your new career site off the ground in less than four weeks, at half the cost
        </p>
          </div>
        </div>
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
          <img
            className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
            src=""
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
          des="The World’s Smartest Recruitment Teams"  
          
        />
       
      </div> 
      <Row className="vh-100">
        <Col md={6} className="animate__animated animate__bounceIn">
          <img src=" " alt="Your Image" className="img-fluid" />
        </Col>
        <Col md={6} className="text-center d-flex align-items-center">
          <p
            style={{
              color: "black",
              fontSize: "24px",
            }}
          >
            This paragraph is on the right side with a left-side image.
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
          title="HAPPY CUSTOMERS"
          des="Teams details"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="HEALTHTRUST"
          des=" How HealthTrust fully centralized its recruitment media with little to no effect!"
       
          src={projectOne}
        />
        <ProjectsCard
          title="LifeTIME"
          des=" We had the time of our life with this recruitment advertising operations overhaul"
          src={projectTwo}
        />
     
        <ProjectsCard
          title="oliverraine"
          des=" This recruitment marketing agency in the UK changed the way media buying is done "
          src={projectThree}
        />
      
      </div>
    </section>
    </>
  );
}

export default About;
