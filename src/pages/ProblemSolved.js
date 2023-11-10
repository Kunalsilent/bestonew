    // About.js
import React from "react";
import 'animate.css';
import press from "../assets/images/press.avif";
import Resume from "../components/resume/Resume";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
function Problem() {
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
            <h3 className=" text-lg font-normal text-black">WELCOME TO Company</h3>
            <h2 className="text-5xl font-bold text-black">
            <span className="text-designColor capitalize">Problem we Solve </span>
            </h2>
            <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
            “We’ve done all the right things to create a great employer brand. We know we’re getting the right messages out on the right channels, so applicants can understand our culture and values. But, despite all of our best efforts, we still can’t quantify the ROI of our employer branding campaigns – specifically funnel conversions. Can you help?
        </p>
        <p className="text-base font-bodyFont leading-5 tracking-wide text-black"  style={{ marginBottom: '-28px' }}>
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Can’t Measure Employer Branding ROI?
        </p>
        <p  className="text-base font-bodyFont leading-5 tracking-wide text-black"  style={{ marginBottom: '-28px' }}>
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Not Enough Great-Fit Applicants?
        </p>
        <p className="text-base font-bodyFont leading-5 tracking-wide text-black"  style={{ marginBottom: '-28px' }}>
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} />High Cost Per Hire?
        </p> <p className="text-base font-bodyFont leading-5 tracking-wide text-black"  style={{ marginBottom: '-28px' }}>
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Missing Passive Candidates?
        </p> <p className="text-base font-bodyFont leading-5 tracking-wide text-black"  style={{ marginBottom: '-28px' }}>
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> High Application Drop Off ?
        </p> <p className="text-base font-bodyFont leading-5 tracking-wide text-black"  style={{ marginBottom: '-28px' }}>
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Lagging on DE&I Sourcing

        </p> 
        <p className="text-base font-bodyFont leading-5 tracking-wide text-black"  style={{ marginBottom: '-28px' }}>
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Don't Know Where You Stand
        </p> 
        <p className="text-base font-bodyFont leading-5 tracking-wide text-black"  style={{ marginBottom: '-28px' }}>
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} />Too Many Platform, Too Much Info
        </p>
        
        
          </div>
        </div>
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
          <img
            className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
            src={press}
            alt="Image"
          />
          <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
        </div>
      </section>
     <Resume/> 
    
     
    
       

      
    </>
  );
}

export default Problem;
