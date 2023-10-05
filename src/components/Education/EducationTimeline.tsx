import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University at Albany (SUNY)",
    year: "Current",
    gpa: "3.87/4.00",
    description: "Courses: Data Structures and Algorithms, Operating Systems, Software Engineering, Machine Learning"
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "GITAM University",
    year: "2020",
    gpa: "3.65/4.00",
    description: "Courses: Object-Oriented Programming, Computer Networks, Artificial Intelligence, Cloud Computing"
  }
];

export function EducationTimeline() {
  return (
    <div className="space-y-8">
      {education.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="flex gap-4"
        >
          <div className="flex-shrink-0 mt-1">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-semibold">{item.degree}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">GPA: {item.gpa}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}