/**
 * TestimonialCard Component
 *
 * Displays client testimonials with ratings and profile images.
 * Features floating animation on hover for an engaging experience.
 *
 * @param testimonial - Testimonial data including text, author, and rating
 * @param index - Card index for staggered animations
 */

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300 relative"
    >
      {/* Decorative Quote Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: index * 0.15 + 0.3 }}
        className="absolute top-6 right-6"
      >
        <Quote size={60} className="text-gray-300" />
      </motion.div>

      {/* Star Rating */}
      <div className="flex gap-1 mb-4 relative z-10">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.05 }}
            whileHover={{ scale: 1.3, rotate: 360 }}
          >
            <Star className="fill-yellow-400 text-yellow-400" size={20} />
          </motion.div>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 mb-6 leading-relaxed relative z-10 italic">
        "{testimonial.text}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4 relative z-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200"
        >
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div>
          <p className="font-semibold text-gray-900">{testimonial.author}</p>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
