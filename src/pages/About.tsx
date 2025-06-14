import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Star, Users } from 'lucide-react';
import { teamMembers } from '../data/teamMembers';

const About: React.FC = () => {
  const achievements = [
    { icon: Award, title: 'Michelin Recommended', description: '2019 - Present' },
    { icon: Star, title: 'Best Fine Dining', description: 'City Restaurant Awards 2023' },
    { icon: Heart, title: 'Locally Sourced', description: '90% of ingredients from local farms' },
    { icon: Users, title: 'Expert Team', description: '20+ years combined experience' },
  ];

  return (
    <div className="min-h-screen bg-cream-50 pt-16">
      {/* Header */}
      <section className="bg-charcoal-900 text-cream-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream-200 max-w-2xl mx-auto"
          >
            A journey of culinary passion, dedication, and the pursuit of perfection
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-6">
                Where It All Began
              </h2>
              <div className="space-y-4 text-lg text-charcoal-600 leading-relaxed">
                <p>
                  Founded in 2001 by Chef Marco Rossi, Bella Vista started as a small family restaurant 
                  with a simple mission: to create exceptional dining experiences that bring people together 
                  through the universal language of food.
                </p>
                <p>
                  What began as a 20-seat trattoria has evolved into one of the city's most celebrated 
                  fine dining establishments, while never losing sight of our core values: quality, 
                  authenticity, and genuine hospitality.
                </p>
                <p>
                  Today, we continue to honor traditional techniques while embracing innovation, 
                  sourcing the finest local ingredients, and creating memories that last a lifetime.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
                alt="Restaurant interior"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-charcoal-900 p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm font-medium">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
              Recognition from industry leaders and the community we serve
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <achievement.icon className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-charcoal-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-charcoal-600 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
              The passionate professionals behind every exceptional dining experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-cream-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-charcoal-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-charcoal-900 text-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
                alt="Chef preparing food"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold mb-6">
                Our Philosophy
              </h2>
              <div className="space-y-4 text-lg text-cream-200 leading-relaxed">
                <p>
                  At Bella Vista, we believe that great food is more than just sustenance—it's 
                  an art form that connects us to our heritage, our community, and each other.
                </p>
                <p>
                  We are committed to sustainable practices, supporting local farmers and 
                  producers, and minimizing our environmental impact while maximizing flavor 
                  and quality in every dish.
                </p>
                <p>
                  Every meal is an opportunity to create joy, foster connection, and celebrate 
                  the simple pleasure of sharing exceptional food with the people we care about.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400">90%</div>
                  <div className="text-sm text-cream-300">Local Ingredients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400">15</div>
                  <div className="text-sm text-cream-300">Partner Farms</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;