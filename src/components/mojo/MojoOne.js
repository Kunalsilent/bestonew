import React from "react";
import Title from "../layouts/Title";
import Card from "../features/Card";
import { mojoone } from "../../data/mojoone";


import ProjectsCard from '../projects/ProjectsCard';
const Mojoone = () => {

  return (
    <>
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Products" des="MOJO Social" />
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
          src="https://img.freepik.com/free-vector/man-using-chatbot-services-asking-questions-receiving-answers-flat-composition-vector-illustration_98292-9162.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
        <ProjectsCard
          title="Job-evel targeting"
          src="https://img.freepik.com/free-vector/mini-people-with-computer-target_24877-56140.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
     
        <ProjectsCard
          title="Advanced targeting options"
          src="https://img.freepik.com/free-vector/data-initiative-abstract-concept-illustration_335657-3706.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
          <ProjectsCard
          title="Affinity audience targeting"
          src="https://img.freepik.com/free-vector/audience-segmentation-abstract-concept-illustration_335657-1854.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
          <ProjectsCard
          title="Lookalike audience targeting"
          src="https://img.freepik.com/free-vector/generating-new-leads-concept-illustration_114360-7654.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
          <ProjectsCard
          title="Diversity sourcing"
          src="https://img.freepik.com/free-vector/globalization-concept-illustration_114360-8511.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
          <ProjectsCard
          title="Single source of truth"
          src="https://img.freepik.com/free-vector/patent-law-copyright-illustration_23-2148753973.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
      
      </div>
    </section>
    </>
  );
};

export default Mojoone;
