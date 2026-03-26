'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-primary">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/cta/1920/1080')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-accent font-heading font-bold text-4xl">S</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to Take Your Place in the Kingdom?
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of believers who are growing, connecting, and making a tangible impact in their world.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="#join"
              className="w-full sm:w-auto bg-accent text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Become a Supersite Citizen Today
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400">It's free to join the community.</p>
        </motion.div>
      </div>
    </section>
  );
}
