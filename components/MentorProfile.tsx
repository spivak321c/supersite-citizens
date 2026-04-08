'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Image as ImageIcon } from 'lucide-react';

export default function MentorProfile() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-accent/10 rounded-[3rem] transform -rotate-3"></div>
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] transform rotate-3"></div>
            
            {/* Actual Image Container */}
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden bg-gray-200 border-8 border-white shadow-2xl group">
              <Image 
                src="/mentor-image.jpeg" 
                alt="God's Servant Joshua Jackson" 
                fill 
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6 uppercase tracking-widest">
              Meet Your Mentor
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
              God's Servant <br/>
              <span className="text-accent">Joshua Jackson</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Dedicated to raising a generation of believers equipped with the word, power, and character to impact every sphere of society.
              </p>
              <p>
                Through prophetic guidance, the Early Hours Intercessory Prayers, and deep biblical teachings, God's Servant Joshua Jackson mentors thousands globally, helping them step out of stagnation and into their divine purpose.
              </p>
              <p className="font-medium text-primary italic border-l-4 border-accent pl-4 py-2">
                "When you connect to the right grace, distance is no barrier to your testimony."
              </p>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-3xl font-heading font-bold text-accent">10k+</div>
                <div className="text-sm font-medium text-gray-600 leading-tight">Citizens<br/>Mentored</div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-3xl font-heading font-bold text-accent">Daily</div>
                <div className="text-sm font-medium text-gray-600 leading-tight">Intercessory<br/>Prayers</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
