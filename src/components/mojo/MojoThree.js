import React from "react";
import Title from "../layouts/Title";
import Card from "../features/Card";
import { mojoone } from "../../data/mojoone";


import ProjectsCard from '../projects/ProjectsCard';
const Mojothree = () => {

  return (
    <>
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Products" des="MOJO CraigGenie" />
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
          title="Track ad performance"       
          src="https://img.freepik.com/free-vector/accurate-marketing-strategy-content-creation-distribution-target-audience-identification-brand-promotion-smm-expert-analyses-user-behaviour-stats_335657-862.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
        <ProjectsCard
          title="comprehensive spend analysis"
          src="https://img.freepik.com/free-vector/cro-analyst-specialist-increase-customers-percentage-conversion-rate-optimization-digital-marketing-system-lead-attraction-marketing-concept-bright-vibrant-violet-isolated-illustration_335657-235.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
     
        <ProjectsCard
          title="Predictive analytics"
          src="https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-8253.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
          <ProjectsCard
          title="Ad previews"
          src="https://img.freepik.com/premium-vector/marketing-employee-sending-marketing-mail-from-home_701961-418.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
          <ProjectsCard
          title="Beyond craigslist"
          src="https://img.freepik.com/free-vector/cancelled-events-announcement_23-2148584717.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
          
      </div>
    </section>
    </>
  );
};

export default Mojothree;
