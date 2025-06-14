import React from 'react';
import { motion } from 'framer-motion';
import { Review } from '../types';
import { Star, CheckCircle } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            {review.customerName.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-charcoal-900">{review.customerName}</h3>
            <p className="text-sm text-charcoal-600">{new Date(review.date).toLocaleDateString()}</p>
          </div>
        </div>
        {review.verified && (
          <div className="flex items-center space-x-1 text-green-600">
            <CheckCircle className="h-4 w-4" />
            <span className="text-xs font-medium">Verified</span>
          </div>
        )}
      </div>

      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < review.rating
                ? 'text-gold-500 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      <p className="text-charcoal-700 leading-relaxed">
        "{review.comment}"
      </p>
    </motion.div>
  );
};

export default ReviewCard;