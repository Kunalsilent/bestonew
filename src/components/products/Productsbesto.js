import React,{useState} from 'react'
import Slider from "react-slick";

import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import { testimonialOne,testimonialTwo, quote } from "../../assets";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Productsbesto = () => {
      const [dotActive, setDocActive] = useState(0);
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       nextArrow:<SampleNextArrow />,
       prevArrow:<SamplePrevArrow />,
       beforeChange: (prev, next) => {
         setDocActive(next);
       },
       appendDots: (dots) => (
         <div
           style={{
             borderRadius: "10px",
             padding: "10px",
           }}
         >
           <ul
             style={{
               display: "flex",
               gap: "15px",
               justifyContent: "center",
               marginTop: "20px",
             }}
           >
             {" "}
             {dots}{" "}
           </ul>
         </div>
       ),
       customPaging: (i) => (
         <div
           style={
             i === dotActive
               ? {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "#ff014f",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
               : {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "gray",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
           }
         ></div>
       ),
     };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="JUST FOR YOU " des="OUR PRODUCTS" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#fff] to-[#fff] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  Innovative Solutions, Outstanding Results
                  </p>
                  <h3 className="text-2xl text-black font-bold">Cutting-edge products for excellence.</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#fff] to-[#fff] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl  text-black font-medium tracking-wide">
                     MOJO pro
                      </h3>
                      <p className="text-base text-black mt-3">
                      programmatic Job Advertising
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      {/* <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill /> */}
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-black font-medium tracking-wide leading-6">
                  "MOJO Pro: Unleash Your Full Potential. Our flagship product, MOJO Pro, is designed to empower you with the tools and resources needed to reach new heights in your endeavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Two ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#ffff] to-[#ffff] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialTwo}
                  alt="testimonialTwo"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  Quality Meets Affordability
                  </p>
                  <h3 className="text-2xl text-black font-bold">Premium products at affordable prices.</h3>
                  <p className="text-base tracking-wide text-gray-500">
                  
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#ffff] to-[#ffff] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl text-black font-medium tracking-wide">
                    MOJO Social
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                       Social, Search and Display Ads
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      {/* <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill /> */}
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-black font-medium tracking-wide leading-6">
                  "MOJO Social: Elevate Your Social Presence. With MOJO Social, you can take your social media game to the next level. It's the ultimate tool to boost your online presence and engage with your audience like never before. Stay ahead of the curve with MOJO Social."
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Three ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#ffff] to-[#ffff] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  Unmatched Versatility
                  </p>
                  <h3 className="text-2xl text-black font-bold">Versatile solutions for diverse needs.</h3>
                  <p className="text-base tracking-wide text-gray-500">
                   
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#fff] to-[#ffff] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl text-black font-medium tracking-wide">
                   MOJO CraigGenie
                      </h3>
                      <p className="text-base text-black mt-3">
                   Craiglist Automation
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      {/* <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill /> */}
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-black font-medium tracking-wide leading-6">
                  "MOJO CraigGenie: Your Ultimate Classifieds Companion. Explore the limitless possibilities of efficient classifieds management with MOJO CraigGenie. Our powerful tool is designed to simplify the process, saving you time and effort while maximizing your results. Discover the magic of MOJO CraigGenie today!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#ffff] to-[#ffff] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  Simplicity, Elegance, and Efficiency
                  </p>
                  <h3 className="text-2xl text-black font-bold">Streamlined products for maximum results.</h3>
                  <p className="text-base tracking-wide text-gray-500">
                   
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#fff] to-[#ffff] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl text-black font-medium tracking-wide">
                   MOJO Apply
                      </h3>
                      <p className="text-base text-black mt-3">
                   Job Applications Optimization
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      {/* <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill /> */}
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-black font-medium tracking-wide leading-6">
                  "MOJO Apply: Your Gateway to Seamless Recruitment. MOJO Apply streamlines and simplifies your hiring process, making recruitment a breeze. Say goodbye to the complexities of talent acquisition and welcome the efficiency of MOJO Apply, your partner in building exceptional teams."
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#ffff] to-[#ffff] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  Empowering Your Success
                  </p>
                  <h3 className="text-2xl text-black font-bold">Products that drive your success.</h3>
                  <p className="text-base tracking-wide text-gray-500">
                   
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#fff] to-[#ffff] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl text-black font-medium tracking-wide">
                   MOJO Engage CRM
                      </h3>
                      <p className="text-base text-black mt-3">
                 Talent CRM
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      {/* <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill /> */}
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-black font-medium tracking-wide leading-6">
                  "MOJO Engage CRM: Amplify Customer Relationships. Transform your customer interactions with the power of MOJO Engage CRM. From lead generation to retention, it's your all-in-one solution for nurturing meaningful relationships. Enhance your business's customer engagement with MOJO Engage CRM today."
                  </p>
                </div>
              </div>
            </div>
          </div>



          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#ffff] to-[#ffff] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  Quality Meets Affordability
                  </p>
                  <h3 className="text-2xl text-black font-bold">Premium products at affordable prices.</h3>
                  <p className="text-base tracking-wide text-gray-500">
                   
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#fff] to-[#ffff] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl text-black font-medium tracking-wide">
                   MOJO Go
                      </h3>
                      <p className="text-base text-black mt-3">
                   Optimized Multi-Posting
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      {/* <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill /> */}
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-black font-medium tracking-wide leading-6">
                  "MOJO Go: Your Mobile Solution for Productivity. Stay productive on the move with MOJO Go. Our mobile app is your companion for seamless efficiency, helping you work, communicate, and access essential tools wherever you are. Elevate your productivity with MOJO Go."
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#ffff] to-[#ffff] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  Simplicity, Elegance, and Efficiency
                  </p>
                  <h3 className="text-2xl text-black font-bold">Streamlined products for maximum results.</h3>
                  <p className="text-base tracking-wide text-gray-500">
                   
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#fff] to-[#ffff] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl text-black font-medium tracking-wide">
                   MOJO Unified Analytics
                      </h3>
                      <p className="text-base text-black mt-3">
                   predictive , Actionable Insights
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      {/* <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill /> */}
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-black font-medium tracking-wide leading-6">
"MOJO Unified Analytics: Insights at Your Fingertips. With MOJO Unified Analytics, gain a comprehensive view of your data from various sources in one unified platform. Unlock valuable insights, make data-driven decisions, and drive your business forward with ease. Experience the power of MOJO Unified Analytics."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Productsbesto