import React from 'react';
import { motion } from 'framer-motion';
import { TechElements } from './TechElements';
import { AvatarCore } from './AvatarCore';
import { NavigationHotspots } from './NavigationHotspots';

export function InteractiveAvatar() {
  return (
    <motion.div 
      className="relative w-80 h-80 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: 360 
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
        scale: { duration: 0.5, ease: "easeOut" }
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <TechElements />
      </div>
      
      <motion.div
        className="relative z-10"
        whileHover={{ 
          rotate: [0, -5, 5, 0],
          scale: 1.05 
        }}
        transition={{ 
          duration: 0.5,
          scale: {
            type: "spring",
            stiffness: 300
          }
        }}
      >
        <AvatarCore />
        <NavigationHotspots />
      </motion.div>
    </motion.div>
  );
}