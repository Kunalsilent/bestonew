import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const LeftBanner = () => {
    // const [text] = useTypewriter({
    //   words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    //   loop: true,
    //   typeSpeed: 20,
    //   deleteSpeed: 10,
    //   delaySpeed: 2000,
    // });
    const greenColor = { color: 'green' };
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h2 className="text-5xl font-bold text-white">
        Hyper Personalized and <span className="text-designColor capitalize"> Dynamic Career Sites   </span>
        </h2>
        <h2 className="text-4xl font-bold text-white">
        That Let Your Brand Personality Shine Through 
        {/* <span>{text}</span> */}
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        
        <p className="text-base font-bodyFont leading-5 tracking-wide">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Get your new career site off the ground in less than four weeks, at half the cost
        </p>
        <p className="text-base font-bodyFont leading-5 tracking-wide">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Personalize the experience – show openings based on candidates’ skills, interests, or jobs similar to what they’ve previously viewed
        </p>
        <p className="text-base font-bodyFont leading-5 tracking-wide">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Build a talent community that engages candidates and brings them back, again and again
        </p> <p className="text-base font-bodyFont leading-5 tracking-wide">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Pull in your social media feeds and keep your audience engaged with up-to-the minute info
        </p> <p className="text-base font-bodyFont leading-5 tracking-wide">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Update your content, add/remove pages, and more in a matter of minutes – all thanks to a user-friendly content management system
        </p> <p className="text-base font-bodyFont leading-5 tracking-wide">
        <FontAwesomeIcon icon={faCheckCircle} style={greenColor} /> Re-engage your audience through social ads, email, SMS, and other channels to bring them back into your funnel
        </p> 
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner