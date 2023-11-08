    // About.js
    import React from "react";
    import 'animate.css';
    import work2 from '../assets/images/work2.avif'
    import { motion } from 'framer-motion';
import ResumeCard from '../components/resume/ResumeCard';
import work1 from '../assets/images/work1.avif'
import work3 from '../assets/images/work3.avif'
import Projects from "../components/projects/Projects";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
    function work() {
      const redShadowStyle = {
        boxShadow: "0 0 10px #fff",
      };
      const greenColor = { color: 'green' };
      return (
        <>
          <section
            id="home"
            className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
            <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
              <div className="flex flex-col gap-5">
                <br></br>
                <h3 className=" text-lg font-normal text-black">WHO WE WORK WITH</h3>
                <h2 className="text-5xl font-bold text-black">
                <span className="text-designColor capitalize">Recruitment Marketing Agencies </span>
                </h2>
                <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
                In a fiercely competitive job market, securing top talent is more challenging than ever. That's why we've partnered with leading Recruitment Marketing Agencies to supercharge your recruitment efforts. These experts use data-driven techniques to boost your employer brand, optimize job postings, and reach the right candidates across platforms.<br/> At Besto Consultancy, we understand the importance of attracting the best talent, and our partnership with Recruitment Marketing Agencies ensures you stay ahead in the race for top candidates. Let us help you streamline your hiring strategy, reduce time-to-fill positions, and achieve long-term success. Contact us to learn more.
                Recruitment Marketing Agencies not only help you attract top talent but also optimize your hiring ROI. By leveraging their expertise, we ensure that your recruitment efforts are efficient, cost-effective, and yield the best results. At Besto Consultancy, we are dedicated to enhancing your hiring strategy, saving you time and resources, and ensuring your organization is staffed with the right people. <br/>Let us partner with you to unlock the full potential of your recruitment investment and drive sustained success. Contact us for a consultation and take the first step towards building your dream team.
            </p>
              </div>
            </div>
            <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
              <img
                className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={work1}
                alt="Image"
              />
              <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
            </div>
          </section>
          <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Benefits</p>
          <h2 className="text-3xl md:text-4xl text-black font-bold">Rock your Talent Sourcing Goals</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Your product, our tech!"
            subTitle=""
            result=""
            des="Bring your clients 21st-century, best-in-breed TA tech. Our end-to-end solution is the backbone you need to over deliver! From programmatic job advertising, to never-before-seen dynamic career sites, and enhanced candidate engagement via personalized sequences, we’ll help you help your clients achieve their goals (win!) and make you look like a rock star."
          />
          <ResumeCard
            title="Improve ad spend ROI"
            subTitle=""
            result=""
            des="It’s time to cut the waste from your media budget. Don’t spend on paid media sources, where you don’t need to. Slash your ad spend on underperforming sources and double down on the ones that deliver. Move budget from easy-to-fill reqs, which already have (or can easily get) enough applicants, to jobs or markets that need it most. All thanks to the power of data and AI."
          />
          <ResumeCard
            title="Make media planning a science"
            subTitle=""
            result=""
            des="Is your media planning an art or a science? Oftentimes it’s driven by guesswork, combined with a large helping of experience and a sprinkle of intuition. This approach takes a lot of time and effort, and the results aren’t always optimal. You and your clients deserve better (read, our AI-powered prediction and trading engine)."
          />
           
        </div>
      </div>
      {/* part Two */}

    
    </motion.div>

    <section
            id="home"
            className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
             <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
              <img
                className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={work3}
                alt="Image"
              />
              <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
            </div>
            <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
              <div className="flex flex-col gap-5">
                <br></br>
                <h3 className=" text-lg font-normal text-black">WHO WE WORK WITH</h3>
                <h2 className="text-5xl font-bold text-black">
                <span className="text-designColor capitalize">Recruitment Process Outsourcing </span>
                </h2>
                <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
                Your clients deserve nothing but the best. With a state-of-the-art TA tech stack in your corner, you’ll help them maximize returns from their job ad budget, reach passive job seekers, engage candidates better, automate tedious recruiter tasks, and make data-backed decisions, thanks to real-time reporting and predictive analytics. No matter how challenging the requisition, we’ve got you covered. Thanks to the power of data, AI, and automation, it’s time to leave your competition in the dust!
            </p>
            <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Rock your Talent Sourcing Goals
        </p>
        <p  className="text-base font-bodyFont leading-5 tracking-wide text-black">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} />Upgrade your tech stack
        </p>
        <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Make the most of your candidate database!
        </p> <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} />Improve ad spend ROI
        </p> <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Automate recruiter workflows
        </p> <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} />Make data-driven decisions
        </p> 
              </div>
            </div>
           
          </section>

    <Projects/>
    <section
            id="home"
            className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
            <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
              <img
                className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={work2}
                alt="Image"
              />
              <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
            </div>
            <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
              <div className="flex flex-col gap-5">
                <br></br>
                <h3 className=" text-lg font-normal text-black">Who We Work With</h3>
                <h2 className="text-5xl font-bold text-black">
                <span className="text-designColor capitalize">Direct Employers </span>
                </h2>
                <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
                In today's fast-paced job market, finding the right talent for your organization is critical. Direct Employers, an invaluable partner in your recruitment strategy, offers a streamlined approach to sourcing, attracting, and retaining top-tier candidates.<br/>
                With Direct Employers, you gain direct access to an extensive network of potential hires, reducing the time and effort needed to identify the best fit for your company. This direct connection allows you to bypass intermediaries and ensure a more efficient and cost-effective hiring process.<br/>
                Our commitment at Besto Consultancy is to provide you with the tools and resources to make hiring a seamless and successful endeavor. Direct Employers can help you attract the talent you need and grow your team with the right individuals. Experience the difference with our direct approach to hiring and unlock your organization's full potential. Connect with us today to learn more about how Direct Employers can transform your talent acquisition strategy.
            </p>
              </div>
            </div>
            
          </section>
          <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 justify-center items-center"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Benefits</p>
          <h2 className="text-3xl md:text-4xl text-black font-bold">Rock your Talent Sourcing Goals</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Find the right candidates, stat!"
            subTitle=""
            result=""
            des="Our AI is ready and waiting to match your reqs with the right sources and audiences, hand in glove. With an eye on down-the-funnel metrics, you can be confident that your recruitment media budget is laser focused on delivering the most great-fit talent"
          />
          <ResumeCard
            title="Automate recruiter workflows"
            subTitle=""
            result=""
            des="Ready to cut down on manual tasks? You know, like posting and optimizing across job boards, search engines, and social media? Instead, leave that work to our AI and give your team the time they need to do what they do so well: reeling in those great-fit candidates!"
          />
          <ResumeCard
            title="Centralize your media buying"
            subTitle=""
            result=""
            des="When it comes to managing recruitment media buying, we know you work hard… and it ain’t easy. But we’ve got you covered! Source great-fit people across traditional, niche, and DE&I job sites, social media, Google for Jobs, even offline, you name it. We’re here to help you do it all and look like a rock star."
          />
        </div>
      </div>

    </motion.div>
    <section
            id="home"
            className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
            <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
              <div className="flex flex-col gap-5">
                <br></br>
                <h3 className=" text-lg font-normal text-black">WHO WE WORK WITH</h3>
                <h2 className="text-5xl font-bold text-black">
                <span className="text-designColor capitalize">Staffing Agencies </span>
                </h2>
                <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
                Get your candidate pipeline fighting-fit, over deliver placements (fast!), and leave your competition in the dust! Thanks to the power of data and automation, you’ll maximize the return on your job ad budget, create a predictable pipeline of candidates, automate mundane recruiter tasks, and make the very most of that database you’ve worked so hard to build.
            </p>
            <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Rock your Talent Sourcing Goals
        </p>
        <p  className="text-base font-bodyFont leading-5 tracking-wide text-black">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} />Find the right candidates, ASAP!
        </p>
        <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Make the most of your candidate database!
        </p> <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Automate recruiter workflows
        </p> <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Make data-driven decisions
        </p> <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Re-engage your audience through social ads, email, SMS, and other channels to bring them back into your funnel
        </p> 
              </div>
            </div>
            <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
              <img
                className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={work3}
                alt="Image"
              />
              <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
            </div>
          </section>

    
        
         
        
           
    
          
        </>
      );
    }
    
    export default work;
    