import React from "react";
import Title from "../layouts/Title";
import Card from "../features/Card";
import { mojoone } from "../../data/mojoone";


import ProjectsCard from '../projects/ProjectsCard';
const Mojotwo = () => {

  return (
    <>
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Products" des="MOJO Pro" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20" >
        {mojoone.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>

     <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center  items-center text-center">
        <Title
          title="Key Features"
          des="Here's how it works"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Automated job ad placement"       
          src=""
        />
        <ProjectsCard
          title="Job-[evel targeting"
          src=""
        />
     
        <ProjectsCard
          title="Advanced targeting options"
          src=""
        />
          <ProjectsCard
          title="Affinity audience targeting"
          src=""
        />
          <ProjectsCard
          title="Lookalike audience targeting"
          src=""
        />
          <ProjectsCard
          title="Diversity sourcing"
          src=""
        />
          <ProjectsCard
          title="Single source of truth"
          src=""
        />
      
      </div>
    </section>
    </>
  );
};

export default Mojotwo;
