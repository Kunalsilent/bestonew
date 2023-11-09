import React from "react";
import Title from "../layouts/Title";
import Card from "../features/Card";
import { mojoone } from "../../data/mojoone";


import ProjectsCard from '../projects/ProjectsCard';
const Mojofour = () => {

  return (
    <>
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Products" des="MOJO Career Sites" />
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
          title="Talent community"       
          src="https://img.freepik.com/free-photo/happy-motivated-colleagues-office_114579-2790.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
        <ProjectsCard
          title="Job application optimization"
          src="https://img.freepik.com/free-vector/happy-seo-planning-campaign-social-media-isolated-flat-illustration_74855-10793.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
     
        <ProjectsCard
          title="content management system"
          src="https://img.freepik.com/free-vector/different-data-compilation-collection-media_335657-2458.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
          <ProjectsCard
          title="conversational chatbot"
          src="https://img.freepik.com/free-vector/hand-holding-phone-with-conversation-girl-chat-bot-mobile-app-talking-robot-online-flat-vector-illustration-technology-assistance-concept-banner-website-design-landing-page_74855-24649.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
          <ProjectsCard
          title="Best-in-class integrations"
          src="https://img.freepik.com/free-vector/people-sending-messages-using-gadgets-celebrating-success_1262-20662.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
          <ProjectsCard
          title="Engagement tracking"
          src="https://img.freepik.com/free-vector/sport-fitness-tracker-abstract-concept-vector-illustration-activity-band-health-monitor-wrist-worn-device-application-running-cycling-every-day-training-abstract-metaphor_335657-4008.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
          <ProjectsCard
          title="SEO acceleration"
          src="https://img.freepik.com/free-vector/seo-concept-illustration_114360-5766.jpg?size=626&ext=jpg&ga=GA1.1.745243041.1698423410&semt=ais"
        />
      
      </div>
    </section>
    </>
  );
};

export default Mojofour;
