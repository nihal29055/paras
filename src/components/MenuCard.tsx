import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../types';
import { Star, Leaf } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {item.isSpecial && (
          <div className="absolute top-3 left-3 bg-gold-500 text-charcoal-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
            <Star className="h-4 w-4 fill-current" />
            <span>Special</span>
          </div>
        )}
        {item.dietary && item.dietary.length > 0 && (
          <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full">
            <Leaf className="h-4 w-4" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-serif font-semibold text-charcoal-900 group-hover:text-gold-600 transition-colors duration-200">
            {item.name}
          </h3>
          <span className="text-lg font-bold text-gold-600">${item.price}</span>
        </div>
        
        <p className="text-charcoal-600 text-sm leading-relaxed mb-4">
          {item.description}
        </p>
        
        {item.dietary && item.dietary.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.dietary.map((diet) => (
              <span
                key={diet}
                className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium"
              >
                {diet}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MenuCard;