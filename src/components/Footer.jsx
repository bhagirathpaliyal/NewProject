import React from 'react';
import envelopeImg from '/public/assets/envelope-regular.svg';
import locationImg from '/public/assets/location-dot-solid.svg';
import phoneImg from '/public/assets/phone-solid.svg';
import clockImg from '/public/assets/clock-solid.svg';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 flex flex-wrap gap-8 md:gap-12 text-[16px]">
        {/* Logo and Description */}
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">
            Logo <span className="text-secondary">Here</span>
          </h4>
          <p>
            NRI legal is the most trusted service provider for property and legal matters for overseas Indians. We are dedicated to solving property and legal issues for NRIs with professionalism and care.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex-1 min-w-[250px]">
          <div className="flex items-start gap-4 mb-4">
            <img src={envelopeImg} alt="Email" className="w-6 h-6" />
            <p>info@nrilegal.in</p>
          </div>
          <div className="flex items-start gap-4 mb-4">
            <img src={locationImg} alt="Location" className="w-6 h-6" />
            <p>
              Chamber No. 168, First Floor, Lawyers Complex, District & Session Court Complex, Sector 43, Chandigarh,
              160043
            </p>
          </div>
        </div>

        {/* Phone and Working Hours */}
        <div className="flex-1 min-w-[250px]">
          <div className="flex items-start gap-4 mb-4">
            <img src={phoneImg} alt="Phone" className="w-6 h-6" />
            <p>0123-456-789</p>
          </div>
          <div className="flex items-start gap-4">
            <img src={clockImg} alt="Clock" className="w-6 h-6" />
            <p>
              Monday - Friday: 10am - 6pm
              <br />
              Saturday: 10am - 2pm
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-dark py-4">
        <p className="text-center text-[16px]">
          Developed By{' '}
          <span className="font-bold text-secondary">
            TechPaliyal
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
