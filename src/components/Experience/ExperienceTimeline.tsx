import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Brain } from 'lucide-react';

const experiences = [
  {
    title: "Software Development Engineer (SDE)",
    company: "RezNext Global Solutions Pvt Ltd",
    period: "Jan 2021 – Jun 2022",
    location: "Hyderabad, IN",
    icon: Code,
    achievements: [
      "Enhanced Angular-based user interfaces, cutting page load times by 25% and raising user satisfaction by 15%",
      "Engineered an automated testing framework with Jest, Enzyme, and custom utilities, boosting test coverage by 30% and reducing defects by 25%"
    ]
  },
  {
    title: "AI/ML Intern",
    company: "Phoenix Global Solutions Pvt Ltd",
    period: "Jun 2020 – Jan 2021",
    location: "Hyderabad, IN",
    icon: Brain,
    achievements: [
      "Deployed an NLP-driven Sentiment Analysis Model using SpaCy, achieving 88% accuracy on customer feedback datasets",
      "Built a real-time AI dashboard with Flask and MongoDB, improving decision-making efficiency by 20%",
      "Designed and optimized an image classification CNN with TensorFlow and Keras, reducing error rates by 15%"
    ]
  }
];

export function ExperienceTimeline() {
  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800"
        >
          <div className="absolute -left-3 top-0">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
              <exp.icon className="w-3 h-3 text-white" />
            </div>
          </div>
          
          <div className="mb-1 flex items-center justify-between">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
          </div>
          
          <div className="mb-4">
            <p className="text-lg text-gray-600 dark:text-gray-300">{exp.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
          </div>
          
          <ul className="list-disc list-inside space-y-2">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="text-gray-600 dark:text-gray-300">
                {achievement}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}