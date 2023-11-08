    // About.js
    import React from "react";
    import 'animate.css';
    import Productsbesto from "../components/products/Productsbesto";

import Mojoone from "../components/mojo/MojoOne";
import Mojosocial from '../assets/images/mojosocial.avif'
import Mojotwo from "../components/mojo/MojoTwo";
import Mojothree from "../components/mojo/MojoThree";
import Mojofour from "../components/mojo/MojoFour";
import Mojofive from "../components/mojo/MojoFive";
import Projects from "../components/projects/Projects";
    function products() {
      const redShadowStyle = {
        boxShadow: "0 0 10px #fff",
      };
      return (
        <>

        <Productsbesto/>
          <section
            id="home"
            className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
            <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
              <div className="flex flex-col gap-5">
                <br></br>
                <h3 className=" text-lg font-normal text-black">MOJO SOCIAL</h3>
                <h2 className="text-5xl font-bold text-black">
                <span className="text-designColor capitalize"> Social, Search, and Display Advertising Solution with Job-Level Targeting </span>
                </h2>
                <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
                Grow your reach beyond job sites. Attract active and passive job seekers that fit your job reqs across the World Wide Web. Meet your candidates where they live and play.
            </p>
              </div>
            </div>
            <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
              <img
                className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={Mojosocial}
                alt="Image"
              />
              <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
            </div>
          </section>
          <Mojoone/>
          <section
            id="home"
            className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
            <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
              <div className="flex flex-col gap-5">
                <br></br>
                <h3 className=" text-lg font-normal text-black">MOJO Pro</h3>
                <h2 className="text-5xl font-bold text-black">
                <span className="text-designColor capitalize">The Only Transparent Programmatic Job Advertising Platform </span>
                </h2>
                <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
                Get your job ads in front of the right people – at the right place and time, for the right price! With our AI-driven approach to media planning and optimization, you can spend with precision on sources that deliver. 
            </p>
              </div>
            </div>
            <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
              <img
                className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={Mojosocial}
                alt="Image"
              />
              <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
            </div>
          </section>
          <Mojotwo/>
          <section
            id="home"
            className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
            <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
              <div className="flex flex-col gap-5">
                <br></br>
                <h3 className=" text-lg font-normal text-black">MOJO CraigGenie</h3>
                <h2 className="text-5xl font-bold text-black">
                <span className="text-designColor capitalize">The Only Automated and Intelligent Craigslist Posting Tool for Jobs </span>
                </h2>
                <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
                Post and manage your jobs effortlessly, at scale, on Craigslist. Let data do the talking, while AI does the walking, and target great-fit talent in micro markets, maximize your conversions, and bring down your cost per hire. All while tracking your fav job ad metrics in real time
            </p>
              </div>
            </div>
            <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
              <img
                className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={Mojosocial}
                alt="Image"
              />
              <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
            </div>
          </section>
          <Mojothree/>
          <section
            id="home"
            className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
            <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
              <div className="flex flex-col gap-5">
                <br></br>
                <h3 className=" text-lg font-normal text-black">MOJO Career Sites</h3>
                <h2 className="text-5xl font-bold text-black">
                <span className="text-designColor capitalize">Hyper Personalized and Dynamic Career Sites That Let Your Brand Personality Shine Through</span>
                </h2>
                <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
                Make your career site experience personal. Give job seekers relevant, up-to-date information about your brand and values. All this, at a fraction of the time and cost. Let’s rock ‘n’ roll.
            </p>
              </div>
            </div>
            <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
              <img
                className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={Mojosocial}
                alt="Image"
              />
              <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
            </div>
          </section>
          <Mojofour/>
          <section
            id="home"
            className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-white" >
            <div className="w-full lgl:w-1/2 flex flex-col gap-20"> 
              <div className="flex flex-col gap-5">
                <br></br>
                <h3 className=" text-lg font-normal text-black">MOJO Apply</h3>
                <h2 className="text-5xl font-bold text-black">
                <span className="text-designColor capitalize">The Highest-Converting Job Application Optimization Solution</span>
                </h2>
                <p className="text-base font-bodyFont leading-5 tracking-wide text-black">
                Simplify your apply process. Get lots more completed apps without increasing your budget. Oh, and your candidates will love you for it!
            </p>
              </div>
            </div>
            <div className="w-full lgl:w-1/2 flex justify-center items-center relative "  >
              <img
                className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={Mojosocial}
                alt="Image"
              />
              <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center " style={redShadowStyle}></div>
            </div>
          </section>
          <Mojofive/>
          <Projects/>
        
         
        
           
    
          
        </>
      );
    }
    
    export default products;
    