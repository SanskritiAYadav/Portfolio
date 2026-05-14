/**
 * SocialLink Component
 *
 * Animated social media link button with icon and label.
 * Features hover effects and arrow indicator.
 *
 * @param name - Platform name (e.g., "LinkedIn", "GitHub")
 * @param icon - Lucide icon component
 * @param color - Tailwind color class for the icon
 * @param url - Link URL
 * @param index - Button index for staggered animations
 */

import { motion } from 'motion/react';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  name: string;
  icon: LucideIcon;
  color: string;
  url: string;
  index: number;
}

export function SocialLink({ name, icon: Icon, color, url, index }: SocialLinkProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.03, translateY: -5 }}
      className="bg-white p-6 rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-300 group shadow-sm hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className={color} size={28} />
          </motion.div>
          <span className="text-xl text-gray-900">{name}</span>
        </div>
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="text-gray-400 group-hover:text-gray-900 transition-colors" size={24} />
        </motion.div>
      </div>
    </motion.a>
  );
}
