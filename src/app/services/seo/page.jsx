import React from 'react';
import Link from 'next/link';

const SEOServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">SEO Services</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Boost Your Online Visibility</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our comprehensive SEO services help your business rank higher in search engines, 
            drive organic traffic, and increase conversions. We use proven strategies and 
            the latest SEO tools to deliver measurable results.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">SEO Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Keyword Research & Analysis</li>
                <li>• On-Page SEO Optimization</li>
                <li>• Technical SEO Audits</li>
                <li>• Content Strategy & Creation</li>
                <li>• Link Building</li>
                <li>• Local SEO</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tools We Use</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Google Analytics & Search Console</li>
                <li>• SEMrush & Ahrefs</li>
                <li>• Screaming Frog</li>
                <li>• Moz Pro</li>
                <li>• Google PageSpeed Insights</li>
                <li>• Schema Markup Tools</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our SEO Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">1</div>
              <div>
                <h3 className="font-semibold text-gray-800">SEO Audit & Analysis</h3>
                <p className="text-gray-600">Comprehensive analysis of your current SEO performance and opportunities.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">2</div>
              <div>
                <h3 className="font-semibold text-gray-800">Keyword Strategy</h3>
                <p className="text-gray-600">Research and identify high-value keywords for your business.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">3</div>
              <div>
                <h3 className="font-semibold text-gray-800">On-Page Optimization</h3>
                <p className="text-gray-600">Optimize your website content, meta tags, and technical elements.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">4</div>
              <div>
                <h3 className="font-semibold text-gray-800">Content & Link Building</h3>
                <p className="text-gray-600">Create valuable content and build high-quality backlinks.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">5</div>
              <div>
                <h3 className="font-semibold text-gray-800">Monitor & Optimize</h3>
                <p className="text-gray-600">Continuous monitoring and optimization for sustained growth.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Expected Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">150%</div>
              <p className="text-gray-600">Average increase in organic traffic</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
              <p className="text-gray-600">Improvement in search rankings</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
              <p className="text-gray-600">Increase in qualified leads</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link href="/contact">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300">
              Start Your SEO Campaign
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SEOServicesPage;
