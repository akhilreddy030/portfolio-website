import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Server, Database } from 'lucide-react';
import { SectionTransition } from './SectionTransition';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React.js, TypeScript, Angular, Next.js, Material UI, Tailwind CSS',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Node.js, Python, GraphQL, RESTful APIs, Microservices',
  },
  {
    icon: Database,
    title: 'Databases & Cloud',
    description: 'AWS, MongoDB, PostgreSQL, Firebase, Docker',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'TensorFlow, PyTorch, NLP, Computer Vision',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTransition className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Software Development Engineer with expertise in building scalable microservices, 
            RESTful APIs, and leveraging Machine Learning to solve complex challenges. 
            Currently pursuing MS in Computer Science at University at Albany (SUNY) with a 
            strong academic record (GPA: 3.87/4.00).
          </p>
        </SectionTransition>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SectionTransition key={skill.title}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
              >
                <skill.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </motion.div>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
}