import React from 'react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      client: "TechStore Inc.",
      description: "Complete redesign and development of an e-commerce platform that increased conversion rates by 45%.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      results: ["45% increase in conversion rate", "60% faster page load times", "30% increase in mobile traffic"],
      image: "/assets/images/case-study-1.jpg"
    },
    {
      id: 2,
      title: "Mobile App Development",
      client: "FitTrack",
      description: "Native mobile application for fitness tracking with real-time data synchronization.",
      technologies: ["React Native", "Firebase", "Google Fit API", "Apple HealthKit"],
      results: ["100k+ downloads in first month", "4.8 star rating", "Featured in App Store"],
      image: "/assets/images/case-study-2.jpg"
    },
    {
      id: 3,
      title: "Cloud Migration & Optimization",
      client: "DataFlow Systems",
      description: "Migration of legacy systems to cloud infrastructure with performance optimization.",
      technologies: ["AWS", "Docker", "Kubernetes", "PostgreSQL"],
      results: ["70% cost reduction", "99.9% uptime", "5x faster query performance"],
      image: "/assets/images/case-study-3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Case Studies</h1>
        <p className="text-lg text-gray-600 mb-12">
          Explore our successful projects and see how we've helped businesses achieve their goals.
        </p>
        
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Project Image</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`p-8 ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h2>
                  <p className="text-purple-600 font-semibold mb-4">Client: {study.client}</p>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Results</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Interested in working with us?</p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
