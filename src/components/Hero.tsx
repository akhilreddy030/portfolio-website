import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';
import { InteractiveAvatar } from './Avatar/InteractiveAvatar';

export function Hero() {
  const scrollTo = useScrollTo();

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto lg:mx-0"
        >
          <InteractiveAvatar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <h1 className="text-5xl lg:text-6xl font-bold">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Akhil Reddy
            </span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300">
            Software Development Engineer specializing in full-stack development and machine learning
          </p>
          <div className="flex gap-4">
            <motion.button
              onClick={() => scrollTo('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              Contact Me
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.a
              href="https://linkedin.com/in/akhil-reddy-sde"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full flex items-center gap-2 hover:bg-blue-50 transition-colors"
            >
              View LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}