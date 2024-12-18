import React from "react";
import ContactForm from "../components/ContactForm";
import envelopeImg from '/public/assets/envelope-regular.svg'
import locationImg from '/public/assets/location-dot-solid.svg'
import phoneImg from '/public/assets/phone-solid.svg'

const ContactUs = () => {
  return (
    <div>
      <div className="h-[300px] w-full bg-primary text-white flex justify-center items-center text-[25px] sm:text-[50px] font-medium">
        {" "}
        Contact Us
      </div>
    <div className="w-[95%] mx-auto  ">
      
      <div className="flex justify-around my-[50px] gap-[50px] max-sm:flex-col">
        <ContactForm />
        <div className="bg-secondary  rounded-lg shadow-md p-6 flex flex-1 flex-col justify-center items-center gap-[10px] text-white">
          <img src={phoneImg} alt="Call logo" className="w-[38px]"/>
          <span>+91-1234567890</span>
          <img src={envelopeImg} alt="email Logo" className="w-[38px]"/>
          <span>example@gmail.com</span>
          <img src={locationImg} alt="locationImg" className="w-[36px]"/>
          <span className="w-[60%] text-center">
            Chamber No. 168, First Floor, Lawyers Complex, District & Session
            Court Complex, Sector 43, Chandigarh, 160043
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
