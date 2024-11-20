import React from "react";

const AbtJourneySec = () => {
  return (
    <div>
      <div className="mt-16">
        <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Our Journey
        </h3>
        <div className="relative wrap overflow-hidden p-10 h-full">
          {/* Vertical Line */}
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2 transform -translate-x-1/2"></div>

          {/* Timeline Item 1 */}
          <div className="mb-8 flex justify-between items-center w-full">
            <div className="order-1 w-5/12"></div>
            <div className="z-10 flex items-center order-1 bg-secondary shadow-xl w-8 h-8 rounded-full">
              <span className="mx-auto text-white font-semibold text-lg">
                1
              </span>
            </div>
            <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h4 className="mb-3 font-bold text-gray-800 text-xl">Founded</h4>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Established in 2004, Legal Solutions was founded with the vision
                to provide exceptional legal services.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
            <div className="order-1 w-5/12"></div>
            <div className="z-10 flex items-center order-1 bg-secondary shadow-xl w-8 h-8 rounded-full">
              <span className="mx-auto text-white font-semibold text-lg">
                2
              </span>
            </div>
            <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h4 className="mb-3 font-bold text-gray-800 text-xl">
                Expansion
              </h4>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Expanded our services to include corporate law, family law, and
                intellectual property.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="mb-8 flex justify-between items-center w-full">
            <div className="order-1 w-5/12"></div>
            <div className="z-10 flex items-center order-1 bg-secondary shadow-xl w-8 h-8 rounded-full">
              <span className="mx-auto text-white font-semibold text-lg">
                3
              </span>
            </div>
            <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h4 className="mb-3 font-bold text-gray-800 text-xl">Awards</h4>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Received the "Best Legal Firm" award for outstanding client
                service in 2015.
              </p>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
            <div className="order-1 w-5/12"></div>
            <div className="z-10 flex items-center order-1 bg-secondary shadow-xl w-8 h-8 rounded-full">
              <span className="mx-auto text-white font-semibold text-lg">
                4
              </span>
            </div>
            <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h4 className="mb-3 font-bold text-gray-800 text-xl">
                Global Presence
              </h4>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Established offices in New York, London, and Sydney to better
                serve our international clients.
              </p>
            </div>
          </div>

          {/* Timeline Item 5 */}
          <div className="mb-8 flex justify-between items-center w-full">
            <div className="order-1 w-5/12"></div>
            <div className="z-10 flex items-center order-1 bg-secondary shadow-xl w-8 h-8 rounded-full">
              <span className="mx-auto text-white font-semibold text-lg">
                5
              </span>
            </div>
            <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h4 className="mb-3 font-bold text-gray-800 text-xl">
                Innovation
              </h4>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Implemented advanced legal technologies to streamline case
                management and enhance client experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbtJourneySec;
