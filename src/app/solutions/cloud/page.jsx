import React from 'react';
import Link from 'next/link';

const CloudSolutionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cloud Solutions</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Scalable Cloud Infrastructure</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Transform your business with our comprehensive cloud solutions. We help you migrate to the cloud, 
            optimize performance, and reduce costs while ensuring maximum security and reliability.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cloud Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Cloud Migration & Strategy</li>
                <li>• Infrastructure as Code</li>
                <li>• Auto Scaling & Load Balancing</li>
                <li>• Database Management</li>
                <li>• Backup & Disaster Recovery</li>
                <li>• Security & Compliance</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cloud Platforms</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Amazon Web Services (AWS)</li>
                <li>• Microsoft Azure</li>
                <li>• Google Cloud Platform (GCP)</li>
                <li>• DigitalOcean</li>
                <li>• Vercel & Netlify</li>
                <li>• Hybrid Cloud Solutions</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Migration Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">1</div>
              <div>
                <h3 className="font-semibold text-gray-800">Assessment & Planning</h3>
                <p className="text-gray-600">Evaluate current infrastructure and create migration strategy.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">2</div>
              <div>
                <h3 className="font-semibold text-gray-800">Architecture Design</h3>
                <p className="text-gray-600">Design scalable and secure cloud architecture.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">3</div>
              <div>
                <h3 className="font-semibold text-gray-800">Migration & Testing</h3>
                <p className="text-gray-600">Migrate applications with minimal downtime and thorough testing.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">4</div>
              <div>
                <h3 className="font-semibold text-gray-800">Optimization & Monitoring</h3>
                <p className="text-gray-600">Continuous optimization and 24/7 monitoring for peak performance.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits of Cloud Migration</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cost Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 30-50% reduction in infrastructure costs</li>
                <li>• Pay-as-you-use pricing model</li>
                <li>• Reduced hardware maintenance costs</li>
                <li>• Lower energy consumption</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 99.9% uptime guarantee</li>
                <li>• Auto-scaling capabilities</li>
                <li>• Global content delivery</li>
                <li>• Enhanced security measures</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Success Metrics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">70%</div>
              <p className="text-gray-600">Average cost reduction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
              <p className="text-gray-600">Uptime achieved</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5x</div>
              <p className="text-gray-600">Faster deployment times</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Move to the Cloud?</h2>
          <p className="text-gray-600 mb-6">
            Start your cloud transformation journey with our expert team guiding you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                Get Cloud Assessment
              </button>
            </Link>
            <Link href="/case-studies">
              <button className="bg-white text-purple-600 border border-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors duration-300">
                View Success Stories
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSolutionsPage;
