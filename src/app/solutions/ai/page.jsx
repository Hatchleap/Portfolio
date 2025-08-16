import React from 'react';
import Link from 'next/link';

const AIIntegrationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Integration Solutions</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intelligent Automation & Analytics</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Harness the power of Artificial Intelligence to automate processes, gain valuable insights, 
            and make data-driven decisions. Our AI solutions help businesses improve efficiency and 
            stay competitive in the digital age.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">AI Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Machine Learning Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
                <li>• Chatbots & Virtual Assistants</li>
                <li>• Recommendation Systems</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">AI Technologies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• TensorFlow & PyTorch</li>
                <li>• OpenAI GPT Integration</li>
                <li>• Google AI Platform</li>
                <li>• AWS SageMaker</li>
                <li>• Azure Cognitive Services</li>
                <li>• Custom ML Algorithms</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI Implementation Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">1</div>
              <div>
                <h3 className="font-semibold text-gray-800">Data Assessment</h3>
                <p className="text-gray-600">Analyze your data quality and identify AI opportunities.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">2</div>
              <div>
                <h3 className="font-semibold text-gray-800">Model Development</h3>
                <p className="text-gray-600">Build and train custom AI models for your specific needs.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">3</div>
              <div>
                <h3 className="font-semibold text-gray-800">Integration & Testing</h3>
                <p className="text-gray-600">Seamlessly integrate AI into your existing systems.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">4</div>
              <div>
                <h3 className="font-semibold text-gray-800">Deployment & Monitoring</h3>
                <p className="text-gray-600">Deploy AI solutions with continuous performance monitoring.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Experience</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Intelligent chatbots for 24/7 support</li>
                <li>• Personalized product recommendations</li>
                <li>• Sentiment analysis of reviews</li>
                <li>• Automated customer segmentation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Business Operations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Predictive maintenance scheduling</li>
                <li>• Automated invoice processing</li>
                <li>• Fraud detection and prevention</li>
                <li>• Supply chain optimization</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI Impact Metrics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">80%</div>
              <p className="text-gray-600">Reduction in manual tasks</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
              <p className="text-gray-600">Increase in productivity</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
              <p className="text-gray-600">Accuracy in predictions</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Embrace AI?</h2>
          <p className="text-gray-600 mb-6">
            Transform your business with intelligent automation and data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                Start AI Project
              </button>
            </Link>
            <Link href="/case-studies">
              <button className="bg-white text-purple-600 border border-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors duration-300">
                View AI Case Studies
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIIntegrationPage;
