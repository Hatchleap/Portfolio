import React from 'react';
import Link from 'next/link';

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Web Development Services</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Modern Web Applications</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We create cutting-edge web applications using the latest technologies and best practices. 
            Our development process ensures your website is fast, secure, and scalable.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technologies We Use</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Next.js & React</li>
                <li>• Node.js & Express</li>
                <li>• TypeScript & JavaScript</li>
                <li>• Tailwind CSS</li>
                <li>• MongoDB & PostgreSQL</li>
                <li>• AWS & Vercel</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What You Get</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Responsive Design</li>
                <li>• Fast Loading Times</li>
                <li>• SEO Optimization</li>
                <li>• Security Best Practices</li>
                <li>• Ongoing Support</li>
                <li>• Performance Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">1</div>
              <div>
                <h3 className="font-semibold text-gray-800">Discovery & Planning</h3>
                <p className="text-gray-600">We analyze your requirements and create a detailed project plan.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">2</div>
              <div>
                <h3 className="font-semibold text-gray-800">Design & Prototyping</h3>
                <p className="text-gray-600">Create wireframes and prototypes to visualize the final product.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">3</div>
              <div>
                <h3 className="font-semibold text-gray-800">Development</h3>
                <p className="text-gray-600">Build your application with clean, maintainable code.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">4</div>
              <div>
                <h3 className="font-semibold text-gray-800">Testing & Launch</h3>
                <p className="text-gray-600">Thorough testing and smooth deployment to production.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link href="/contact">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300">
              Start Your Web Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
