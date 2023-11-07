// About.js
import React from "react";

import Title from "../components/layouts/Title";

import 'animate.css';

import Security from "../components/resume/security";
import security from "../assets/images/security.avif";



function About() {

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
            <h3 className=" text-lg font-normal text-black">WELCOME TO Our Security</h3>
            <h2 className="text-5xl font-bold text-black">
            Data Rocks <span className="text-designColor capitalize">  We Make Sure It’s Safe.   </span>
            </h2>
            <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
            safeguarding data is paramount to us. Our unwavering commitment to data security and privacy is at the forefront of our operations. We've implemented a robust data security framework that goes above and beyond industry standards. This framework not only ensures secure business operations but also guarantees that the personal and sensitive information of both our clients and their customers is protected with the utmost care.
        <br/>Our comprehensive approach to data protection includes stringent access controls, encryption, regular security audits, and continuous monitoring. We prioritize data integrity and confidentiality, enabling our clients to entrust us with their most valuable asset – their data. By upholding the highest standards of security, we provide peace of mind to our clients, knowing that their information is safe and their trust is well-placed.</p>
          </div>
        </div>
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
          <img
            className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
            src={security}
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
          title="PEACE OF MIND"
          des="Our Security and Data Privacy Framework"  
          
        />
       
      </div> 
     
       
    
      
    </section>

      <Security/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      

    </>
  );
}

export default About;
