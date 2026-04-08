'use client';

import { motion } from 'motion/react';

export default function Mission() {
  return (
    <section id="mission" className="py-32 bg-primary relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://picsum.photos/seed/texture/1000/1000')] mix-blend-overlay"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-accent font-bold tracking-widest uppercase mb-8 text-lg md:text-xl">
            THIS MINISTRY HAS ONE MISSION:
          </h2>
          <p className="text-3xl md:text-5xl lg:text-6xl text-white leading-tight font-heading font-extrabold">
            "To raise a generation of believers equipped with the word, power, and character to impact every sphere of society."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
