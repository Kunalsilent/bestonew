// About.js
import React from "react";
import { Navbar } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import aboutImage from "../assets/images/about.avif"; // Import your about image

function About() {
  return (
   
    <div className="w-full lgl:w-1/2 flex flex-col gap-20"> <Navbar/>
      <div className="flex flex-col gap-5">
      <br></br>
        <h3 className=" text-lg font-normal text-black">WELCOME TO MY WORLD</h3>
        <h2 className="text-5xl font-bold text-black">
        Hyper Personalized and <span className="text-designColor capitalize"> Dynamic Career Sites   </span>
        </h2>
        <h2 className="text-4xl font-bold text-black">
        That Let Your Brand Personality Shine Through 
        {/* <span>{text}</span> */}
        
        </h2>
        
    
      </div>
      <Container>
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            ante sed quam dignissim tincidunt. Fusce nec faucibus lectus. Sed
            sagittis arcu vel magna efficitur, vel mattis justo malesuada.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={aboutImage} alt="About Us" className="img-fluid" />
        </Col>
      </Row>
    </Container>
     {/* Media */}
    
    </div>
  );
}

export default About;
