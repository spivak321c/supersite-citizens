'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section id="enroll" className="relative py-32 overflow-hidden bg-primary">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/cta/1920/1080')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/95 to-primary/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
            Enroll Today!
          </h2>
          
          <p className="text-2xl text-accent font-medium mb-10 max-w-2xl mx-auto italic">
            "I hate regrets! Step into your divine purpose and join a community that pushes you toward greatness."
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              href="/register"
              className="w-full sm:w-auto bg-accent text-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] transform hover:-translate-y-1"
            >
              Become a Citizen Now
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-400 uppercase tracking-widest">Your transformation awaits</p>
        </motion.div>
      </div>
    </section>
  );
}
