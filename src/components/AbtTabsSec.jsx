import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const AbtTabsSec = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => handleTabClick("mission")}
          className={`px-4 py-2 rounded ${
            activeTab === "mission"
              ? "bg-secondary text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition duration-300`}
        >
          Our Mission
        </button>
        <button
          onClick={() => handleTabClick("vision")}
          className={`px-4 py-2 rounded ${
            activeTab === "vision"
              ? "bg-secondary text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition duration-300`}
        >
          Our Vision
        </button>
        <button
          onClick={() => handleTabClick("values")}
          className={`px-4 py-2 rounded ${
            activeTab === "values"
              ? "bg-secondary text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition duration-300`}
        >
          Our Values
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        {activeTab === "mission" && (
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-4">
              At <strong>Legal Solutions</strong>, our mission is to provide
              top-notch legal services that empower our clients to navigate
              complex legal landscapes with confidence and ease.
            </p>
            <p className="text-gray-700">
              We strive to uphold the highest standards of integrity,
              professionalism, and dedication in every case we handle, ensuring
              the best possible outcomes for our clients.
            </p>
          </div>
        )}

        {activeTab === "vision" && (
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              Our Vision
            </h3>
            <p className="text-gray-700 mb-4">
              Our vision is to be the leading legal firm recognized for our
              exceptional client service, innovative solutions, and unwavering
              commitment to justice.
            </p>
            <p className="text-gray-700">
              We aim to expand our reach globally while maintaining a strong
              local presence, adapting to the evolving legal needs of our
              diverse clientele.
            </p>
          </div>
        )}

        {activeTab === "values" && (
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              Our Values
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-secondary mr-2" />
                <span className="text-gray-700">
                  <strong>Integrity:</strong> We uphold honesty and strong moral
                  principles in all our actions.
                </span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-secondary mr-2" />
                <span className="text-gray-700">
                  <strong>Excellence:</strong> We strive for excellence in
                  everything we do, delivering high-quality legal services.
                </span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-secondary mr-2" />
                <span className="text-gray-700">
                  <strong>Client-Centric:</strong> Our clients are at the heart
                  of our decisions and strategies.
                </span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-secondary mr-2" />
                <span className="text-gray-700">
                  <strong>Innovation:</strong> We embrace innovative approaches
                  to solve legal challenges.
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AbtTabsSec;
