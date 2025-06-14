import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import MenuCard from '../components/MenuCard';
import { menuItems } from '../data/menuItems';

const heroImages = [
  'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
  'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
  'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg'
];

const Home: React.FC = () => {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const featuredDishes = menuItems.filter(item => item.isSpecial).slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHeroImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt="Restaurant ambiance"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Bella Vista
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-cream-100"
          >
            Where Culinary Art Meets Exceptional Experience
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/reservations"
              className="bg-gold-500 text-charcoal-900 px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Make Reservation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/menu"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-charcoal-900 transition-all duration-200"
            >
              View Menu
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-4">
              Chef's Specials
            </h2>
            <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
              Discover our signature dishes, crafted with the finest ingredients and culinary expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <MenuCard item={dish} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="bg-gold-500 text-charcoal-900 px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Explore Full Menu</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                For over two decades, Bella Vista has been a beacon of culinary excellence, 
                combining traditional techniques with innovative flavors to create unforgettable 
                dining experiences.
              </p>
              <p className="text-lg text-charcoal-600 mb-8 leading-relaxed">
                Our passionate team of chefs, led by Executive Chef Marco Rossi, sources only 
                the finest ingredients to craft dishes that celebrate the art of fine dining.
              </p>
              <Link
                to="/about"
                className="bg-charcoal-900 text-cream-100 px-6 py-3 rounded-lg font-semibold hover:bg-charcoal-800 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg"
                alt="Chef at work"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold-500 text-charcoal-900 p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-semibold">20+ Years</span>
                </div>
                <p className="text-sm">of Culinary Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-charcoal-900 text-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <MapPin className="h-12 w-12 text-gold-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-cream-200">123 Gourmet Street<br />Culinary District, NY</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <Clock className="h-12 w-12 text-gold-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-cream-200">Tue-Thu: 5:00 PM - 10:00 PM<br />Fri-Sat: 5:00 PM - 11:00 PM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <Star className="h-12 w-12 text-gold-500 mb-4 fill-current" />
              <h3 className="text-xl font-semibold mb-2">Rating</h3>
              <p className="text-cream-200">4.9/5 Stars<br />Based on 500+ Reviews</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;