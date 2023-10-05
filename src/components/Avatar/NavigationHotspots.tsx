import React from 'react';
import { motion } from 'framer-motion';
import { Code2, User, Mail, Briefcase, GraduationCap } from 'lucide-react';
import { useScrollTo } from '../../hooks/useScrollTo';

interface Hotspot {
  id: string;
  icon: React.ElementType;
  section: string;
  position: string;
  label: string;
}

export function NavigationHotspots() {
  const scrollTo = useScrollTo();
  
  const hotspots: Hotspot[] = [
    { id: 'about', icon: User, section: 'about', position: 'left-0 top-1/2', label: 'About' },
    { id: 'projects', icon: Code2, section: 'projects', position: 'right-0 top-1/2', label: 'Projects' },
    { id: 'education', icon: GraduationCap, section: 'education', position: 'top-0 left-1/2', label: 'Education' },
    { id: 'contact', icon: Mail, section: 'contact', position: 'bottom-0 left-1/2', label: 'Contact' },
  ];

  return (
    <>
      {hotspots.map(({ id, icon: Icon, section, position, label }) => (
        <motion.button
          key={id}
          onClick={() => scrollTo(section)}
          className={`absolute ${position} -translate-x-1/2 -translate-y-1/2 group`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg 
            flex items-center justify-center hover:text-blue-600 dark:hover:text-blue-400
            hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300">
            <Icon className="w-5 h-5" />
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            whitespace-nowrap text-sm font-medium text-gray-600 dark:text-gray-300">
            {label}
          </div>
        </motion.button>
      ))}
    </>
  );
}