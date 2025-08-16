import React from 'react';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Mobile-First Approach"],
      link: "/services/web-development"
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      features: ["iOS & Android", "Cross-Platform", "Real-time Features", "App Store Optimization"],
      link: "/services/app-development"
    },
    {
      title: "SEO Services",
      description: "Comprehensive SEO strategies to improve your online visibility and drive organic traffic.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"],
      link: "/services/seo"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
        <p className="text-lg text-gray-600 mb-12">
          We offer comprehensive digital solutions to help your business succeed in the modern marketplace.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link href={service.link}>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Let's discuss your project and how we can help bring your vision to life.
          </p>
          <Link href="/contact">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300">
              Contact Us Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
