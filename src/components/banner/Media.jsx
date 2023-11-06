import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  const redShadowStyle = {
    boxShadow: "0 0 10px gray",
  };
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-black">
        WHY Besto Solutions
          </h2>
          <div className="flex gap-4" >
            <span className="bannerIcon" style={redShadowStyle}>
              <FaFacebookF />
            </span>
            <span className="bannerIcon" style={redShadowStyle}>
              <FaTwitter />
            </span>
            <span className="bannerIcon" style={redShadowStyle}>
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-black">
          Here’s Why
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" style={redShadowStyle}>
              <FaReact />
            </span>
            <span className="bannerIcon" style={redShadowStyle}>
              <SiNextdotjs />
            </span>
            <span className="bannerIcon" style={redShadowStyle}>
              <SiTailwindcss />
            </span>
            <span className="bannerIcon" style={redShadowStyle}>
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media