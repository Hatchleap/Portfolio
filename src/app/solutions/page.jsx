import React from 'react';
import Link from 'next/link';

const SolutionsPage = () => {
  const solutions = [
    {
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment processing, inventory management, and customer analytics.",
      features: ["Payment Gateway Integration", "Inventory Management", "Customer Analytics", "Mobile Commerce"],
      link: "/solutions/ecommerce",
      icon: "🛒"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for improved performance and cost efficiency.",
      features: ["Cloud Migration", "Auto Scaling", "Load Balancing", "Disaster Recovery"],
      link: "/solutions/cloud",
      icon: "☁️"
    },
    {
      title: "AI Integration",
      description: "Artificial Intelligence and Machine Learning solutions to automate processes and gain insights.",
      features: ["Machine Learning Models", "Predictive Analytics", "Chatbots", "Data Processing"],
      link: "/solutions/ai",
      icon: "🤖"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Solutions</h1>
        <p className="text-lg text-gray-600 mb-12">
          Comprehensive technology solutions designed to transform your business and drive growth.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <span className="text-4xl">{solution.icon}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">{solution.title}</h2>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link href={solution.link}>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-300">
                  Explore Solution
                </button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why Choose Our Solutions?</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Fast Implementation</h3>
              <p className="text-gray-600 text-sm">Quick deployment with minimal disruption</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 text-2xl">📈</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Scalable</h3>
              <p className="text-gray-600 text-sm">Grows with your business needs</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 text-2xl">🔧</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Customizable</h3>
              <p className="text-gray-600 text-sm">Tailored to your specific requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 text-2xl">💬</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock technical support</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-600 mb-8">
            Let's discuss how our solutions can help you achieve your business goals.
          </p>
          <Link href="/contact">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300">
              Get Started Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
