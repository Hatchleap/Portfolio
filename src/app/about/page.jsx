import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to Hatchleap</h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            At Hatchleap, we are passionate about creating innovative digital solutions that help businesses 
            grow and succeed in today's competitive marketplace. Our team of experienced developers, designers, 
            and strategists work together to deliver exceptional results.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            To empower businesses with cutting-edge technology solutions that drive growth, improve efficiency, 
            and create meaningful connections with their customers.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Values</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Innovation: We embrace new technologies and creative approaches</li>
            <li>Quality: We deliver exceptional results that exceed expectations</li>
            <li>Collaboration: We work closely with our clients as partners</li>
            <li>Integrity: We conduct business with honesty and transparency</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
