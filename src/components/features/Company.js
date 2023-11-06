import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, Companyone, Companytwo, Companythree, Companyfour, Companyfive } from "../../assets/index";
import ProjectsCard from '../projects/ProjectsCard';



const Company = () => {
  return (
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 xl:gap-14">
        <ProjectsCard
         
          src={Companyone}
        />
        <ProjectsCard
        
        src={Companytwo}
        />
     
        <ProjectsCard
        
        src={Companythree}
        />
          <ProjectsCard
        
        src={Companyfour}
      /> <ProjectsCard
        
        src={Companyfive}
      />
      
      </div>
    </section>
  );
}

export default Company