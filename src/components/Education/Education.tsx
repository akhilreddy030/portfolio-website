import React from 'react';
import { SectionTransition } from '../SectionTransition';
import { EducationTimeline } from './EducationTimeline';
import { CertificationGrid } from './CertificationGrid';

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <SectionTransition className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Education & Certifications</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My academic journey and professional certifications
          </p>
        </SectionTransition>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <SectionTransition>
            <h3 className="text-2xl font-semibold mb-8">Education</h3>
            <EducationTimeline />
          </SectionTransition>

          <SectionTransition>
            <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
            <CertificationGrid />
          </SectionTransition>
        </div>
      </div>
    </section>
  );
}