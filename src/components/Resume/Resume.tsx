import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { SectionTransition } from '../SectionTransition';

export function Resume() {
  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTransition className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Resume</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Download my resume or view it online
          </p>
        </SectionTransition>

        <div className="max-w-2xl mx-auto">
          <motion.a
            href="https://drive.google.com/file/d/1zScTW5urTkChZGjq523vdobnDb_KUGS-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-4 p-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
          >
            <FileText className="w-6 h-6" />
            <span className="text-lg font-semibold">View Resume</span>
            <Download className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}