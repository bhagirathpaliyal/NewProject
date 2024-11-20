import React from "react";

const CaseStudy = () => {
  const caseStudies = [
    {
      title: "Property Dispute Resolution",
      description:
        "A client faced a legal battle over a commercial real estate property worth $5M. Our team conducted extensive research, gathered evidence, and negotiated skillfully to resolve the dispute out of court.",
      outcome:
        "Client retained full ownership of the property, saving over $500,000 in legal fees.",
    },
    {
      title: "Corporate Legal Advisory",
      description:
        "Advised a multinational corporation during a complex merger and acquisition process. Our legal expertise ensured compliance with international trade laws and streamlined documentation.",
      outcome: "Facilitated a seamless merger worth $50M, avoiding regulatory delays.",
    },
    {
      title: "Family Law: Custody Battle",
      description:
        "A parent sought legal assistance to gain custody of their child in a highly contested case. We provided compassionate support and built a strong case focusing on the child's welfare.",
      outcome: "Full custody awarded to the client, ensuring a stable future for the child.",
    },
    {
      title: "Intellectual Property Protection",
      description:
        "A startup faced copyright infringement issues from a competitor. Our team quickly filed for an injunction and initiated litigation to protect the client's intellectual property.",
      outcome:
        "Secured an injunction and $100,000 in damages for the client, safeguarding their brand reputation.",
    },
    {
      title: "Employment Law: Workplace Harassment",
      description:
        "Assisted an employee facing workplace harassment in a multinational company. We mediated with the employer and ensured appropriate compensation and policy changes.",
      outcome: "Client received compensation and the company implemented anti-harassment training.",
    },
  ];

  return (
    <section id="case-study" className="container mx-auto py-10">
      <h2 className="text-4xl font-bold mb-6 text-center">Case Studies</h2>
      <p className="text-lg text-center mb-10">
        Here are some success stories where our expertise made a difference for
        our clients.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{caseStudy.title}</h3>
            <p className="text-sm text-gray-600 mb-4">
              {caseStudy.description}
            </p>
            <p className="font-medium text-secondary">
              <strong>Outcome:</strong> {caseStudy.outcome}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;
