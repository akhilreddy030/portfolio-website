import React from 'react';
import { SectionTransition } from '../SectionTransition';
import { ExperienceTimeline } from './ExperienceTimeline';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTransition className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Professional Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My journey in software development and machine learning
          </p>
        </SectionTransition>

        <div className="max-w-4xl mx-auto">
          <SectionTransition>
            <ExperienceTimeline />
          </SectionTransition>
        </div>
      </div>
    </section>
  );
}