import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, Phone, Linkedin, Github } from 'lucide-react';

export function ContactSidebar() {
  return (
    <div className="space-y-4">
      <motion.a
        href="mailto:akhilreddy.uf154@gmail.com"
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <Mail className="w-5 h-5 text-blue-600" />
        <span>Email Me</span>
      </motion.a>

      <motion.a
        href="tel:838-910-9978"
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <Phone className="w-5 h-5 text-green-600" />
        <span>Call Me</span>
      </motion.a>

      <motion.a
        href="https://linkedin.com/in/akhil-reddy-sde"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <Linkedin className="w-5 h-5 text-blue-600" />
        <span>Connect on LinkedIn</span>
      </motion.a>

      <motion.a
        href="https://github.com/akhilreddy030"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <Github className="w-5 h-5 text-gray-800 dark:text-white" />
        <span>View GitHub</span>
      </motion.a>
    </div>
  );
}