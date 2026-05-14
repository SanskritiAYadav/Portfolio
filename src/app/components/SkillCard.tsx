/**
 * SkillCard Component
 *
 * Displays a category of skills with a hover effect.
 * Used in the Skills section to showcase technical expertise.
 *
 * @param category - Skill category name (e.g., "Frontend", "Backend")
 * @param skills - Array of skill names
 * @param index - Card index for staggered animations
 */

import { motion } from 'motion/react';

interface SkillCardProps {
  category: string;
  skills: string[];
  index: number;
}

export function SkillCard({ category, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.03, translateY: -5 }}
      className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-lg mb-4 text-gray-900 border-b border-gray-100 pb-2">
        {category}
      </h3>
      <ul className="space-y-2.5">
        {skills.map((skill, skillIndex) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
            className="text-gray-600 flex items-center group"
          >
            <motion.span
              whileHover={{ scale: 1.3, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 group-hover:from-purple-500 group-hover:to-pink-500"
            />
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
