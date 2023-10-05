import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: "AWS Certified Developer – Associate",
    provider: "Amazon Web Services",
    date: "2023",
    link: "#"
  },
  {
    name: "PCAP – Certified Associate in Python Programming",
    provider: "Python Institute",
    date: "2023",
    link: "#"
  }
];

export function CertificationGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-start gap-4">
            <Award className="w-12 h-12 text-blue-600" />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{cert.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{cert.provider}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Issued {cert.date}</p>
              <motion.a
                href={cert.link}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mt-2 text-sm"
                whileHover={{ x: 5 }}
              >
                View Certificate <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}