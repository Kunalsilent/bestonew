// About.js
import React from "react";
import ProjectsCard from "../components/projects/ProjectsCard";
import { projectOne, projectTwo, projectThree } from "../assets/index";
import Title from "../components/layouts/Title";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import Contact from "../components/contact/Contact";
import contactimg from '../assets/images/contact1.avif'


function contact() {

  const redShadowStyle = {
    boxShadow: "0 0 10px #fff",
  };
  return (
    <>
      <section
        id="home"
        className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
        <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
          <div className="flex flex-col gap-5">
            <br></br>
            <h3 className=" text-lg font-normal text-black">Contact Us </h3>
            <h2 className="text-5xl font-bold text-black">
            Your Feedback Matters <span className="text-designColor capitalize">   </span>
            </h2>
            <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
            Whether you have a question, want to collaborate, or simply want to say hello, we'd love to hear from you. Our team is here to assist you. Reach out to us through the provided contact information or use the form below to send us a message. We look forward to connecting with you and addressing your inquiries. Your feedback and inquiries are important to us, and we're committed to providing a timely and helpful response.
        </p>
          </div>
        </div>
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
          <img
            className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
            src={contactimg}
            alt="Image"
          />
          <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
        </div>
      </section>
      <Contact/>

     

     
    </>
  );
}

export default contact;
