
import React from 'react';
import { Monitor, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Monitor className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">POS Pro Solutions</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of touch screen POS terminals for retail businesses. 
              We help transform traditional stores into modern, efficient operations with 
              cutting-edge technology and exceptional support.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>sales@posterterminals.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span>123 Business Plaza, Tech District, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">POS Pro 15"</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">POS Compact 12"</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">POS Enterprise 17"</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Technical Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Installation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Training</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Warranty</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 POS Pro Solutions. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
