import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, BookOpen, ShoppingCart, Car } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'EduAI',
    description: 'AI-Powered Learning Platform with OpenAI GPT integration and real-time chat system',
    icon: BookOpen,
    tech: ['Node.js', 'WebSocket', 'OpenAI API', 'React'],
    achievements: [
      'Reduced query resolution times by 40%',
      'Increased user engagement by 35%'
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'Commerce360',
    description: 'Scalable microservices e-commerce platform with real-time features',
    icon: ShoppingCart,
    tech: ['React.js', 'Django', 'Flask', 'Ruby on Rails'],
    achievements: [
      'Increased transaction rates by 40%',
      'Enhanced user engagement by 20%'
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'RoamSafe',
    description: 'Roadside assistance platform with real-time location tracking',
    icon: Car,
    tech: ['React.js', 'Firebase', 'Bootstrap', 'Google Maps API'],
    achievements: [
      'Cut response times by 25%',
      'Improved navigation efficiency'
    ],
    github: '#',
    demo: '#',
  },
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <project.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="list-disc list-inside mb-4 text-sm text-gray-600 dark:text-gray-300">
                  {project.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}