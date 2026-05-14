/**
 * ExperienceCard Component
 *
 * Timeline-style card displaying work experience with company logo and highlights.
 * Features staggered list animations and gradient backgrounds.
 *
 * @param experience - Work experience data
 * @param index - Card index for positioning and animations
 */

import { motion } from 'motion/react';
import { MapPin, Calendar } from 'lucide-react';

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  logo: string;
  color: string;
  highlights: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="relative"
    >
      {/* Timeline Connector */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block" />

      {/* Content Card */}
      <div className="lg:ml-12 bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className={`${experience.color} p-6 border-b border-gray-100`}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-2xl mb-1 text-gray-900">{experience.role}</h3>
              <p className="text-lg text-gray-700 mb-3">{experience.company}</p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={16} />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Company Logo/Icon */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="text-5xl"
            >
              {experience.logo}
            </motion.div>
          </div>
        </div>

        {/* Highlights */}
        <div className="p-6">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Key Achievements
          </h4>
          <ul className="space-y-3">
            {experience.highlights.map((highlight, hIndex) => (
              <motion.li
                key={hIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + hIndex * 0.1 }}
                className="flex items-start gap-3 text-gray-700"
              >
                <motion.span
                  whileHover={{ scale: 1.5 }}
                  className="mt-1.5 w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"
                />
                <span>{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.3 }}
        className="absolute -left-2 top-8 w-4 h-4 bg-white border-4 border-blue-500 rounded-full hidden lg:block"
      />
    </motion.div>
  );
}
