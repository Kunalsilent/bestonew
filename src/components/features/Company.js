import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from '../projects/ProjectsCard';



const Company = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Powering"
          des="The World’s Smartest Recruitment Teams"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
         
          //src={projectOne}
        />
        <ProjectsCard
        
          //src={projectTwo}
        />
     
        <ProjectsCard
        
          //src={projectThree}
        />
      
      </div>
    </section>
  );
}

export default Company