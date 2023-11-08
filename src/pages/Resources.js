// About.js
import React from "react";
import ProjectsCard from "../components/projects/ProjectsCard";
import { projectOne, projectTwo, projectThree } from "../assets/index";
import Title from "../components/layouts/Title";
import Resources from '../assets/images/resources.avif'
import 'animate.css';


function Resource() {

  const redShadowStyle = {
    boxShadow: "0 0 5px #ff014f",
  };
  return (
    <>
      <section
        id="home"
        className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
          <img
            className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
            src={Resources}
            alt="Image"
          />
          <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
        </div>
        <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
          <div className="flex flex-col gap-5">
            <br></br>
            <h3 className=" text-lg font-normal text-black">WELCOME TO Besto Consultancy Services</h3>
            <h2 className="text-5xl font-bold text-black">
            Explore Our  <span className="text-designColor capitalize"> Comprehensive Resources   </span>
            </h2>
            <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
            Welcome to our Resources page, where you can access a wealth of valuable information and tools to help you stay informed, solve problems, and make informed decisions. We've curated a diverse collection of resources to cater to your needs, whether you're a customer, partner, or simply interested in our industry.
        </p>
          </div>
        </div>
        
      </section>

      {/* about deatils start */}
     
      <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center  items-center text-center">
        <Title
          title="Access Valuable Materials"
          des="Resources"
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
      <ProjectsCard
          title="oliverraine"
          des=" This recruitment marketing agency in the UK changed the way media buying is done "
          src={projectThree}
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

export default Resource;
