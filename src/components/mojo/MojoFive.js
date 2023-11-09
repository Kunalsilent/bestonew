import React from "react";
import Title from "../layouts/Title";
import Card from "../features/Card";
import { mojoone } from "../../data/mojoone";


import ProjectsCard from '../projects/ProjectsCard';
const Mojofive = () => {

  return (
    <>
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Products" des="MOJO Apply" />
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
          title="Mobile-optimized applications"       
          src="https://img.freepik.com/free-photo/ui-ux-representations-with-smartphone_23-2150201874.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
        <ProjectsCard
          title="Skip ATS registration"
          src="https://img.freepik.com/free-photo/sign-up-user-password-privacy-concept_53876-123680.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
     
        <ProjectsCard
          title="Social sign-up"
          src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
          <ProjectsCard
          title="Automated form fills"
          src="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150268421.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
          <ProjectsCard
          title="Retargeting"
          src="https://img.freepik.com/free-vector/multi-device-targeting-concept-illustration_114360-7585.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=sph"
        />
          <ProjectsCard
          title="custom questions"
          src="https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
          <ProjectsCard
          title="Multi-apply"
          src="https://img.freepik.com/premium-vector/check-out-flat-illustration-application-development_203633-7575.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
      
      </div>
    </section>
    </>
  );
};

export default Mojofive;
