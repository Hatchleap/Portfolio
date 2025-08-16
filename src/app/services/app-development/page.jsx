import React from 'react';
import Link from 'next/link';

const AppDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mobile App Development</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Native & Cross-Platform Apps</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We develop high-performance mobile applications for iOS and Android platforms. 
            Our apps are designed to provide exceptional user experiences and drive business growth.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Development Platforms</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React Native</li>
                <li>• Flutter</li>
                <li>• Native iOS (Swift)</li>
                <li>• Native Android (Kotlin)</li>
                <li>• Progressive Web Apps</li>
                <li>• Hybrid Apps (Ionic)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Push Notifications</li>
                <li>• Offline Functionality</li>
                <li>• Real-time Updates</li>
                <li>• Payment Integration</li>
                <li>• Social Media Login</li>
                <li>• Analytics & Reporting</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">App Development Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">1</div>
              <div>
                <h3 className="font-semibold text-gray-800">Strategy & Planning</h3>
                <p className="text-gray-600">Define app objectives, target audience, and feature requirements.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">2</div>
              <div>
                <h3 className="font-semibold text-gray-800">UI/UX Design</h3>
                <p className="text-gray-600">Create intuitive and engaging user interfaces and experiences.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">3</div>
              <div>
                <h3 className="font-semibold text-gray-800">Development & Testing</h3>
                <p className="text-gray-600">Build and test the app across different devices and scenarios.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">4</div>
              <div>
                <h3 className="font-semibold text-gray-800">App Store Deployment</h3>
                <p className="text-gray-600">Launch your app on Apple App Store and Google Play Store.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Our App Development?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Fast Performance</h3>
              <p className="text-gray-600 text-sm">Optimized for speed and smooth user experience</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Secure</h3>
              <p className="text-gray-600 text-sm">Industry-standard security practices implemented</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Cross-Platform</h3>
              <p className="text-gray-600 text-sm">Works seamlessly on iOS and Android devices</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link href="/contact">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300">
              Start Your App Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopmentPage;
