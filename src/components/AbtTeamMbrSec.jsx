import React from "react";

const AbtTeamMbrSec = () => {
  return (
    <div>
      <div className="mt-16">
        <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Meet Our Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Team Member"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">John Doe</h4>
              <p className="text-gray-600 mb-4">Senior Partner</p>
              <p className="text-gray-700">
                John has over 20 years of experience in corporate law,
                specializing in mergers and acquisitions.
              </p>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Team Member"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">Jane Smith</h4>
              <p className="text-gray-600 mb-4">Legal Advisor</p>
              <p className="text-gray-700">
                Jane specializes in family law and has successfully handled
                numerous custody cases.
              </p>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Team Member"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">Michael Brown</h4>
              <p className="text-gray-600 mb-4">Associate Attorney</p>
              <p className="text-gray-700">
                Michael is an expert in intellectual property law, protecting
                clients' innovations.
              </p>
            </div>
          </div>
          {/* Team Member 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Team Member"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">Emily Davis</h4>
              <p className="text-gray-600 mb-4">Junior Attorney</p>
              <p className="text-gray-700">
                Emily focuses on employment law, advocating for workers' rights
                and workplace fairness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbtTeamMbrSec;
