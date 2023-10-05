import React from 'react';
import { motion } from 'framer-motion';

export function AvatarCore() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl overflow-hidden"
    >
      {/* Inner gradient pulse */}
      <motion.div
        className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          animate={{
            y: [-10, -40, -10],
            x: Math.random() * 30 - 15,
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '0%',
          }}
        />
      ))}

      {/* Multiple glowing rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-white/20"
          animate={{
            scale: [1, 1.1 + i * 0.05, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Central glow effect */}
      <motion.div
        className="absolute inset-8 rounded-full bg-white/20 blur-md"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}