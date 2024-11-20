import React from "react";

const AbtTestimonialsSec = () => {
  return (
    <div>
      <div className="mt-16">
        <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">
          What Our Clients Say
        </h3>
        <div className="flex flex-wrap justify-center space-x-4">
          {/* Testimonial 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm mb-6">
            <p className="text-gray-700 mb-4">
              "Legal Solutions provided exceptional service during our merger.
              Their expertise was invaluable."
            </p>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Client"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-gray-800 font-semibold">Sarah Johnson</p>
                <p className="text-gray-600 text-sm">CEO, Tech Innovators</p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm mb-6">
            <p className="text-gray-700 mb-4">
              "Their team handled my custody case with utmost professionalism
              and care. Highly recommended!"
            </p>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Client"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-gray-800 font-semibold">Mark Thompson</p>
                <p className="text-gray-600 text-sm">Entrepreneur</p>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm mb-6">
            <p className="text-gray-700 mb-4">
              "Their innovative approach to legal challenges sets them apart
              from other firms."
            </p>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Client"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-gray-800 font-semibold">Linda Martinez</p>
                <p className="text-gray-600 text-sm">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbtTestimonialsSec;
