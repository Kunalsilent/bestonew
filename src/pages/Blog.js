// About.js
import React from "react";
import ProjectsCard from "../components/projects/ProjectsCard";
import { projectOne, projectTwo, projectThree } from "../assets/index";
import Title from "../components/layouts/Title";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import Testimonial from "../components/tesimonial/Testimonial";


function About() {

 
  return (
    <>
    <Testimonial/>
     

    

      {/* card section start */}

      <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center  items-center text-center">
        <Title
          title="Latest News & Articles"
          des="Our Blogs"
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

export default About;
