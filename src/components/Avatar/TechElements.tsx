import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Globe, Brain, Cloud, Lock, Terminal } from 'lucide-react';

const icons = [Code2, Database, Cpu, Globe, Brain, Cloud, Lock, Terminal];

export function TechElements() {
  return (
    <>
      {[...Array(16)].map((_, i) => {
        const Icon = icons[i % icons.length];
        const rotation = (i * 360) / 16;
        const delay = i * 0.15;
        const radius = 140 + (i % 2) * 20; // Varying orbit radius

        return (
          <motion.div
            key={i}
            className="absolute text-blue-500/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
              rotate: rotation 
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay,
              ease: "easeInOut"
            }}
            style={{
              transform: `rotate(${rotation}deg) translateX(${radius}px)`
            }}
          >
            <Icon className="w-6 h-6" />
          </motion.div>
        );
      })}

      {/* Multiple orbital rings */}
      {[280, 300, 320].map((size, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-blue-500/20"
          style={{ width: size, height: size }}
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 2 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      ))}
    </>
  );
}