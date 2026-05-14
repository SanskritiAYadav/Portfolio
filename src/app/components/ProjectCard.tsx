/**
 * ProjectCard Component
 *
 * Displays project information with image, tags, and description.
 * Features a parallax hover effect for an immersive experience.
 *
 * @param project - Project data including title, description, tags, and image
 * @param index - Card index for staggered animations
 */

import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl"
    >
      {/* Project Image with Overlay */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
          <span className="text-white text-sm font-medium">{project.category}</span>
          <ExternalLink className="text-white" size={24} />
        </div>

        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium"
        >
          {project.subtitle.split('|')[0].trim()}
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl mb-2 text-gray-900">{project.title}</h3>
        <p className="text-sm text-gray-500 mb-3">{project.subtitle}</p>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-xs font-medium border border-gray-200"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
