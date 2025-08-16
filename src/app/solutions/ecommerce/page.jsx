import React from 'react';
import Link from 'next/link';

const EcommercePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">E-commerce Solutions</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Complete E-commerce Platform</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Build a powerful online store with our comprehensive e-commerce solutions. From product 
            management to payment processing, we provide everything you need to sell online successfully.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Product Catalog Management</li>
                <li>• Shopping Cart & Checkout</li>
                <li>• Payment Gateway Integration</li>
                <li>• Order Management System</li>
                <li>• Inventory Tracking</li>
                <li>• Customer Accounts</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Multi-currency Support</li>
                <li>• Abandoned Cart Recovery</li>
                <li>• Wishlist & Favorites</li>
                <li>• Product Reviews & Ratings</li>
                <li>• Coupon & Discount System</li>
                <li>• Analytics & Reporting</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Frontend</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Next.js / React</li>
                <li>• Tailwind CSS</li>
                <li>• TypeScript</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Backend</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Node.js / Express</li>
                <li>• MongoDB / PostgreSQL</li>
                <li>• Redis for Caching</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Integrations</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Stripe / PayPal</li>
                <li>• Shopify / WooCommerce</li>
                <li>• Mailchimp / SendGrid</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Success Metrics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">+200%</div>
              <p className="text-gray-600">Average increase in online sales</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">35%</div>
              <p className="text-gray-600">Improvement in conversion rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50%</div>
              <p className="text-gray-600">Reduction in cart abandonment</p>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Launch Your Online Store?</h2>
          <p className="text-gray-600 mb-6">
            Get a custom e-commerce solution that drives sales and grows your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                Request Quote
              </button>
            </Link>
            <Link href="/case-studies">
              <button className="bg-white text-purple-600 border border-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors duration-300">
                View Case Studies
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommercePage;
