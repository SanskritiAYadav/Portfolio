/**
 * Main Portfolio Application - Sanskriti Yadav
 *
 * This is a modular, animated portfolio showcasing skills, experience, and projects.
 * All content is configurable via src/app/config/portfolio-config.ts
 *
 * Key Features:
 * - Smooth scroll animations
 * - Responsive design
 * - Reusable components
 * - Easy customization through config file
 *
 * @author Sanskriti Yadav
 */

import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Download, FileText, Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

// Import configuration
import {
  personalInfo,
  roles,
  aboutItems,
  skills,
  experience,
  projects,
  certifications,
  testimonials,
  achievements
} from './config/portfolio-config';

// Import reusable components
import { AnimatedSection } from './components/AnimatedSection';
import { SkillCard } from './components/SkillCard';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceCard } from './components/ExperienceCard';
import { TestimonialCard } from './components/TestimonialCard';
import { SocialLink } from './components/SocialLink';

export default function App() {
  // ============================================
  // STATE MANAGEMENT
  // ============================================
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // ============================================
  // HELPER FUNCTIONS
  // ============================================

  /**
   * Smooth scroll to a specific section
   * @param sectionId - ID of the section to scroll to
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  /**
   * Handle contact form submission
   * @param e - Form event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with email service (EmailJS, SendGrid, etc.)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  /**
   * Download resume/CV
   */
  const downloadResume = () => {
    // Create a link and trigger download
    const link = document.createElement('a');
    link.href = personalInfo.assets.resume;
    link.download = 'Sanskriti_Yadav_Resume.pdf';
    link.click();
  };

  // Social media links configuration
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-600', url: personalInfo.social.linkedin },
    { name: 'GitHub', icon: Github, color: 'text-gray-900', url: personalInfo.social.github },
    { name: 'Recommendations', icon: Award, color: 'text-purple-600', url: personalInfo.social.recommendations }
  ];

  // ============================================
  // RENDER PORTFOLIO
  // ============================================
  return (
    <div className="min-h-screen bg-white">
      {/* ========================================
          NAVIGATION BAR
          ======================================== */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo / Brand */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="cursor-pointer flex items-center gap-2"
              onClick={() => scrollToSection('home')}
            >
              <Sparkles className="text-purple-500" size={24} />
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {personalInfo.name.split(' ')[0]}
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Testimonials', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-black transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-6 py-4 space-y-3">
              {['About', 'Skills', 'Projects', 'Experience', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-700 hover:text-black transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* ========================================
          HERO SECTION
          ======================================== */}
      <section id="home" className="min-h-screen flex items-center px-6 lg:px-12 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-gray-500 mb-4"
                >
                  👋 Hello, I'm
                </motion.p>

                <h1 className="text-6xl lg:text-8xl mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                  {personalInfo.name}
                </h1>

                <h2 className="text-2xl lg:text-3xl text-gray-700 mb-4">
                  {personalInfo.title}
                </h2>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {personalInfo.tagline}
                </p>

                {/* Role Badges */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {roles.map((role, index) => (
                    <motion.span
                      key={role.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-5 py-2.5 rounded-full ${role.color} shadow-sm cursor-default flex items-center gap-2`}
                    >
                      <span>{role.icon}</span>
                      <span>{role.title}</span>
                    </motion.span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    onClick={() => scrollToSection('contact')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    <Mail size={20} />
                    Get in Touch
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    onClick={downloadResume}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all flex items-center gap-2"
                  >
                    <Download size={20} />
                    Download CV
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Right: Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Main Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl"
                >
                  <img
                    src={personalInfo.assets.profilePhoto}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating Badge - Location */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full px-6 py-3 shadow-lg"
                >
                  <p className="font-semibold text-gray-900">{personalInfo.contact.availability}</p>
                </motion.div>

                {/* Floating Badge - Location */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -top-4 -left-4 bg-white rounded-full px-5 py-2.5 shadow-lg border border-gray-100"
                >
                  <p className="text-sm font-medium text-gray-700">📍 {personalInfo.contact.location}</p>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50"
                />
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5
                  }}
                  className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================
          ABOUT SECTION
          ======================================== */}
      <section id="about" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            {/* Section Header */}
            <div className="max-w-3xl mb-16">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm text-gray-500 mb-4 uppercase tracking-wider"
              >
                About Me
              </motion.p>
              <h2 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Hello, I'm {personalInfo.name.split(' ')[0]}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* About Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl mb-4"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Achievements Highlight */}
          <AnimatedSection delay={0.3} className="mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-5xl mb-3">{achievement.icon}</div>
                    <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-blue-100">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========================================
          SKILLS SECTION
          ======================================== */}
      <section id="skills" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Technical Expertise</p>
              <h2 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A comprehensive toolkit built over 7+ years of hands-on experience
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <SkillCard
                  key={category}
                  category={category}
                  skills={skillList}
                  index={index}
                />
              ))}
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={0.3} className="mt-16">
            <h3 className="text-3xl mb-8 text-center">Certifications & Badges</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 text-center cursor-default shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">{cert.name}</p>
                  <p className="text-xs text-gray-600">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 mt-1">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========================================
          PROJECTS SECTION
          ======================================== */}
      <section id="projects" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Portfolio</p>
              <h2 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real-world applications showcasing full-stack development and testing expertise
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========================================
          SOCIAL NETWORKS
          ======================================== */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Connect</p>
              <h2 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
                Where to Find Me
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={social.name}
                  name={social.name}
                  icon={social.icon}
                  color={social.color}
                  url={social.url}
                  index={index}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========================================
          EXPERIENCE / CAREER TIMELINE
          ======================================== */}
      <section id="experience" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Professional Journey</p>
              <h2 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Experience & Career
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                My journey through software development and testing, from junior engineer to leading automation frameworks
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-8 max-w-5xl mx-auto">
              {experience.map((exp, index) => (
                <ExperienceCard key={exp.company} experience={exp} index={index} />
              ))}
            </div>

            {/* View LinkedIn CTA */}
            <AnimatedSection delay={0.4} className="text-center mt-12">
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                >
                  View Full Career on LinkedIn
                  <ArrowRight size={20} />
                </motion.button>
              </a>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* ========================================
          TESTIMONIALS
          ======================================== */}
      <section id="testimonials" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Testimonials</p>
              <h2 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
                What People Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Feedback from colleagues and team members I've worked with
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.author}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>

            {/* View Recommendations CTA */}
            <AnimatedSection delay={0.4} className="text-center mt-12">
              <a
                href={personalInfo.social.recommendations}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all inline-flex items-center gap-2"
                >
                  <Award size={20} />
                  View All Recommendations on LinkedIn
                </motion.button>
              </a>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* ========================================
          CONTACT SECTION
          ======================================== */}
      <section id="contact" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 self-start"
              >
                Let's Connect
              </motion.div>

              <h2 className="text-5xl lg:text-6xl mb-8">Get In Touch</h2>
              <p className="text-xl text-blue-100 mb-12">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about tech!
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-12">
                <motion.a
                  href={`mailto:${personalInfo.contact.email}`}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-lg hover:text-blue-300 transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail size={24} />
                  </div>
                  <span>{personalInfo.contact.email}</span>
                </motion.a>

                <motion.a
                  href={`tel:${personalInfo.contact.phone}`}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-lg hover:text-blue-300 transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <FileText size={24} />
                  </div>
                  <span>{personalInfo.contact.phone}</span>
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mb-12">
                <motion.a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Linkedin size={28} />
                </motion.a>
                <motion.a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Github size={28} />
                </motion.a>
                <motion.a
                  href={`mailto:${personalInfo.contact.email}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <Mail size={28} />
                </motion.a>
              </div>

              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-auto bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/30">
                    <img
                      src={personalInfo.assets.profilePhoto}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{personalInfo.name}</h3>
                    <p className="text-blue-200">{personalInfo.title}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {roles.slice(0, 4).map((role) => (
                    <span key={role.title} className={`px-3 py-1.5 ${role.color} rounded-full text-xs`}>
                      {role.icon} {role.title.split(' ')[0]}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/20"
            >
              <h3 className="text-3xl mb-8">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border-b-2 border-white/30 py-4 px-4 focus:border-white outline-none transition-colors rounded-t-lg placeholder-white/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border-b-2 border-white/30 py-4 px-4 focus:border-white outline-none transition-colors rounded-t-lg placeholder-white/50"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border-b-2 border-white/30 py-4 px-4 focus:border-white outline-none transition-colors rounded-t-lg placeholder-white/50"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message *"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border-b-2 border-white/30 py-4 px-4 focus:border-white outline-none transition-colors resize-none rounded-t-lg placeholder-white/50"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-10 py-4 bg-white text-gray-900 rounded-full hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2 font-semibold shadow-lg"
                >
                  Send Message
                  <ArrowRight size={20} />
                </motion.button>

                <p className="text-sm text-blue-200 mt-4 text-center">
                  Your information will remain private and secure.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================
          FOOTER
          ======================================== */}
      <footer className="py-12 px-6 lg:px-12 bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Column 1: About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold">{personalInfo.name}</h3>
              </div>
              <p className="text-gray-400 mb-4">
                {personalInfo.title} passionate about building quality software and exceptional user experiences.
              </p>
              <div className="flex gap-3">
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <Mail size={18} className="mt-1 flex-shrink-0" />
                  <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-white transition-colors">
                    {personalInfo.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <FileText size={18} className="mt-1 flex-shrink-0" />
                  <a href={`tel:${personalInfo.contact.phone}`} className="hover:text-white transition-colors">
                    {personalInfo.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">📍</span>
                  <span>{personalInfo.contact.location}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}