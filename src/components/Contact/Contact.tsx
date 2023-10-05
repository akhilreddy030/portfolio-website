import React from 'react';
import { SectionTransition } from '../SectionTransition';
import { ContactForm } from './ContactForm';
import { ContactSidebar } from './ContactSidebar';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTransition className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Let's discuss your project or just say hello!
          </p>
        </SectionTransition>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <SectionTransition>
              <ContactForm />
            </SectionTransition>
          </div>
          <div className="lg:col-span-1">
            <SectionTransition>
              <ContactSidebar />
            </SectionTransition>
          </div>
        </div>
      </div>
    </section>
  );
}