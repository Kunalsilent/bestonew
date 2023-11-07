
import React from "react";


import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container, Row, Col } from "react-bootstrap";

import 'animate.css';
import Global1 from '../assets/images/global1.avif'
import Global2 from '../assets/images/global2.avif'
import Global3 from '../assets/images/global3.avif'
import Global4 from '../assets/images/global4.avif'
import Global5 from '../assets/images/global5.avif'
import Global6 from '../assets/images/global6.avif'


function Global() {

  const redShadowStyle = {
    boxShadow: "0 0 10px #fff",
  };
 

  return (
    <>
      <div
        id="home"
        className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
        <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
          <div className="flex flex-col gap-5">
            <br></br>
            <h3 className=" text-lg font-normal text-black">Global Partner Prograam </h3>
            <h2 className="text-5xl font-bold text-black">
             PARTNERSHIPS <span className="text-designColor capitalize"> Global Partner Program  </span>
            </h2>
            <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
            Whether you aim to elevate client applicant flow, reduce cost per hire, enhance job application conversions, or establish a unified source of truth across all online channels, our expertise is at your service
        </p>
          </div>
        </div>
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
          <img
            className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
            src={Global1}
            alt="Image"
          />
          <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
        </div>
        
      </div>
      <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    > <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center text-black font-bold">Grow With Us!</h1>
          <p style={{ textAlign: "justify", color:"black" }}>
          Before we get into the details, we have to brag a little and say that we offer the best value on the market. Hands down. What’s more, we’re obsessed with customer success and it shows. When it comes to client servicing, we have been consistently recognized as an industry leader.
          </p>
        </Col>
      </Row>
    </Container>


       
    
      
    </section>
      <div
        id="home"
        className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
          <img
            className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
            src={Global2}
            alt="Image"
          />
          <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
        </div>
        <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
          <div className="flex flex-col gap-5">
            <br></br>
            <h3 className=" text-lg font-normal text-black">REFERRALS</h3>
            <h2 className="text-5xl font-bold text-black">
            Nothin’ says love like a <span className="text-designColor capitalize">  good referral.  </span>
            </h2>
            <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
            We’re here to address all your clients’ talent sourcing needs. And you can count on us to impress! All we need from you is a warm intro, and we’ll take it from there. When your referral signs up, you get a recurring commission for as long as they stay with us. 
        </p>
          </div>
        </div>
        
        
      </div>

      {/* 2nd  */}

      <div
        id="home"
        className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
        <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
          <div className="flex flex-col gap-5">
            <br></br>
            <h3 className=" text-lg font-normal text-black">VALUE-ADDED RESELLERS </h3>
            <h2 className="text-5xl font-bold text-black">
            Want to resell the #1 talent <span className="text-designColor capitalize">  sourcing platform worldwide? </span>
            </h2>
            <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
            Well, you can do that and increase your revenue, all while making your customers super happy. Our VAR partner program offers all you’ll need for selling, co-marketing, onboarding, and eternal customer success.
        </p>
          </div>
        </div>
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
          <img
            className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
            src={Global3}
            alt="Image"
          />
          <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
        </div>
        
      </div>
      <div
        id="home"
        className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
          <img
            className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
            src={Global6}
            alt="Image"
          />
          <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
        </div>
        <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
          <div className="flex flex-col gap-5">
            <br></br>
            <h3 className=" text-lg font-normal text-black">SYSYTEM INTEGRATORS</h3>
            <h2 className="text-5xl font-bold text-black">
            Perfect your client’s <span className="text-designColor capitalize">  tech stack.
  </span>
            </h2>
            <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
            Looking for a simple source-to-hire fix? We offer the world’s #1 AI-powered programmatic job advertising solution, job-level social and search advertising, a content management system (CMS) to build world-class career sites in weeks (instead of months), a candidate engagement first CRM, a never-seen-before analytics dashboard, and an advanced API stack. (Phew! That was a long sentence.) Deploy one or deploy them all
            !
        </p>
          </div>
        </div>
        
        
      </div>

      {/* 3rd box  */}
      <div
        id="home"
        className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
        <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
          <div className="flex flex-col gap-5">
            <br></br>
            <h3 className=" text-lg font-normal text-black">AGENCIES </h3>
            <h2 className="text-5xl font-bold text-black">
            Bring your clients <span className="text-designColor capitalize">  into the 21st century  </span>
            </h2>
            <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
            Are you working with the best-of-breed in talent sourcing tech? Help your clients get HUGE returns on their recruitment marketing spend with our AI-driven fully-integrated platform. Go global with our multi-currency and multi-language capabilities. And track campaigns more confidently – in real-time.


        </p>
          </div>
        </div>
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
          <img
            className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
            src={Global4}
            alt="Image"
          />
          <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
        </div>
        
      </div>
      <div
        id="home"
        className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
          <img
            className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
            src={Global5}
            alt="Image"
          />
          <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
        </div>
        <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
          <div className="flex flex-col gap-5">
            <br></br>
            <h3 className=" text-lg font-normal text-black">JOB SITES</h3>
            <h2 className="text-5xl font-bold text-black">
            Ready <span className="text-designColor capitalize"> Ready to grow your site’s revenue?  </span>
            </h2>
            <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
            Become a publisher partner and get instant access to our clients’ jobs. Our customers include the biggest direct and gig employers, the largest staffing agencies, and others. If you need traffic, you can use our open exchange to buy it from other job boards. And rest assured, you’ll only pay for human job seekers (NOT bots, thanks to our AI!) and get the best ROI. 
        </p>
          </div>
        </div>
        
        
      </div>

      
      
       
      
    
      
   

    </>
  );
}

export default Global;
