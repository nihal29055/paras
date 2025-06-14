import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { contactInfo } from '../data/contactInfo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-900 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-gold-500" />
              <span className="text-2xl font-serif font-bold">Bella Vista</span>
            </div>
            <p className="text-cream-200 mb-6 max-w-md">
              Experience culinary excellence at Bella Vista, where every dish tells a story 
              of passion, tradition, and innovation. Join us for an unforgettable dining journey.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gold-400">Stay Updated</h3>
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-charcoal-800 text-cream-100 border border-charcoal-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
                <button className="px-6 py-2 bg-gold-500 text-charcoal-900 font-semibold rounded-r-md hover:bg-gold-400 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-500" />
                <span className="text-cream-200">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-500" />
                <span className="text-cream-200">{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-500 mt-1" />
                <span className="text-cream-200">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/menu" className="block text-cream-200 hover:text-gold-400 transition-colors duration-200">
                Our Menu
              </Link>
              <Link to="/reservations" className="block text-cream-200 hover:text-gold-400 transition-colors duration-200">
                Make Reservation
              </Link>
              <Link to="/about" className="block text-cream-200 hover:text-gold-400 transition-colors duration-200">
                About Us
              </Link>
              <Link to="/contact" className="block text-cream-200 hover:text-gold-400 transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-charcoal-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-300 text-sm mb-4 md:mb-0">
            © 2024 Bella Vista Restaurant. All rights reserved.
          </p>
          
          {/* Social Media */}
          <div className="flex space-x-4">
            <a href="#" className="text-cream-300 hover:text-gold-400 transition-colors duration-200">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-cream-300 hover:text-gold-400 transition-colors duration-200">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-cream-300 hover:text-gold-400 transition-colors duration-200">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;