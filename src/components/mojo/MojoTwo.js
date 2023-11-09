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
          title="Flexible Job Segmentation"       
          src="https://img.freepik.com/free-vector/businessman-character-showing-different-social-roles_1262-18136.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
        <ProjectsCard
          title="Automated job ad distribution"
          src="https://img.freepik.com/free-vector/man-using-chatbot-services-asking-questions-receiving-answers-flat-composition-vector-illustration_98292-9162.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
     
        <ProjectsCard
          title="Advanced targeting options"
          src="https://img.freepik.com/free-vector/multi-device-targeting-abstract-concept_335657-3041.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
          <ProjectsCard
          title="Job content optimiztion"
          src="https://img.freepik.com/free-vector/completed-steps-concept-illustration_114360-5441.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
          <ProjectsCard
          title="Auto-pilot"
          src="https://img.freepik.com/free-vector/self-driving-car-concept-illustration_114360-10865.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=sph"
        />
          <ProjectsCard
          title="Cookieless tracking"
          src="https://img.freepik.com/free-vector/smart-delivery-tracking-concept-illustration_335657-5629.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
          <ProjectsCard
          title="Slots optimization"
          src="https://img.freepik.com/free-vector/man-with-smartphone-gambler-placing-football-bets-mobile-gambling-addiction-sports-betting-application-soccer-match-results-prediction_335657-70.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
      
      </div>
    </section>
    </>
  );
};

export default Mojotwo;
