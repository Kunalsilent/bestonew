import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';



const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center  items-center text-center">
        <Title
          title="HAPPY CUSTOMERS"
          des="Success Stories"
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
  );
}

export default Projects