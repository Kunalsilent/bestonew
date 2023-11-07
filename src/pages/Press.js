// About.js
import React from "react";
import ProjectsCard from "../components/projects/ProjectsCard";

import Title from "../components/layouts/Title";

import 'animate.css';
import {  Testi1 } from "../assets/index";


import press from "../assets/images/press.avif";
import press1 from "../assets/images/press1.avif";




function Press() {
   

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
            <h3 className=" text-lg font-normal text-black">WELCOME TO Company</h3>
            <h2 className="text-5xl font-bold text-black">
            <span className="text-designColor capitalize">Press Releases   </span>
            </h2>
            <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
            we believe in transparency and the importance of keeping our stakeholders informed. Our Press Releases serve as a platform to share significant developments, announcements, and milestones with the world. We take pride in our commitment to open communication and the ability to provide timely updates on our latest achievements, partnerships, and industry insights. Explore our Press Releases to stay up-to-date with our journey and the impact we're making in the industry.
        </p>
          </div>
        </div>
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
          <img
            className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
            src={press}
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Article"
          des=" Introduces the Industry’s First Interactive Reports on the State of Talent Sourcing and Recruitment Advertising Across Key Occupations"
       
          src={press1}
        />
        <ProjectsCard
          title="Article"
          des=" When it Comes to Recruitment Tech, New Report Finds Low Satisfaction Among Users"
          src={press1}
        />
     
        <ProjectsCard
         title="Article"
          des=" Introduces the Industry’s First Interactive Reports on the State of Talent Sourcing and Recruitment Advertising Across Key Occupations"
          src={press1}
        />
        <ProjectsCard
         title="Article"
          des=" Introduces the Industry’s First Interactive Reports on the State of Talent Sourcing and Recruitment Advertising Across Key Occupations"
          src={press1}
        />
          <ProjectsCard
         title="Article"
          des=" Introduces the Industry’s First Interactive Reports on the State of Talent Sourcing and Recruitment Advertising Across Key Occupations"
          src={press1}
        />
          <ProjectsCard
         title="Article"
          des=" Introduces the Industry’s First Interactive Reports on the State of Talent Sourcing and Recruitment Advertising Across Key Occupations"
          src={press1}
        />
          <ProjectsCard
         title="Article"
          des=" Introduces the Industry’s First Interactive Reports on the State of Talent Sourcing and Recruitment Advertising Across Key Occupations"
          src={press1}
        />
          <ProjectsCard
         title="Article"
          des=" Introduces the Industry’s First Interactive Reports on the State of Talent Sourcing and Recruitment Advertising Across Key Occupations"
          src={press1}
        />
          <ProjectsCard
         title="Article"
          des=" Introduces the Industry’s First Interactive Reports on the State of Talent Sourcing and Recruitment Advertising Across Key Occupations"
          src={press1}
        />
      </div>
    </section>
    </>
  );
}

export default Press;
