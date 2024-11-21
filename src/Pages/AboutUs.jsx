import React, { useState } from "react";
import { Link } from "react-router-dom";
import AbtTabsSec from "../components/AbtTabsSec";
import AbtTeamMbrSec from "../components/AbtTeamMbrSec";
import AbtJourneySec from "../components/AbtJourneySec";
import AbtTestimonialsSec from "../components/AbtTestimonialsSec";

const AboutUs = () => {


  return (
    <section id="about-us" className="bg-white py-16">
      <div className="container mx-auto px-4">
       
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
          About Us
        </h2>

       <AbtTabsSec/>
       <AbtTeamMbrSec/>
       <AbtJourneySec/>
       <AbtTestimonialsSec/>
        

       
        <div className="mt-16 bg-secondary text-white py-12 rounded-lg shadow-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h3>
          <p className="text-lg mb-6">
            Contact us today to discuss how we can assist you with your legal needs.
          </p>
         <Link to={'/Contact-Us'}> <button
            
            className="inline-block bg-white text-secondary px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
          >
            Get in Touch
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
