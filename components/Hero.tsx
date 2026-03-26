'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, BookOpen, MessageSquareHeart } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/spiritual/1920/1080')] bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent font-medium text-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Welcome to the Digital Ecosystem
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-6">
              Raising  Citizens for <span className="text-accent">Maximum Kingdom Impact.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              Equipping believers globally through transformative resources, deep community connection, and impactful ministry operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#join" 
                className="inline-flex items-center justify-center gap-2 bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                Join the Movement
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#resources" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-medium text-lg hover:bg-white/20 transition-all"
              >
                <BookOpen className="w-5 h-5" />
                Explore Resources
              </Link>
            </div>
            
            <div className="mt-8">
              <Link href="#testimony" className="inline-flex items-center gap-2 text-gray-300 hover:text-accent transition-colors text-sm font-medium">
                <MessageSquareHeart className="w-4 h-4" />
                Have a story to share? Submit Testimony
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-accent/20 animate-[spin_40s_linear_infinite_reverse]" />
              
              {/* Main Image */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/worship/800/800" 
                  alt="Worship and Community" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  priority
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              </div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                  10k+
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">Active Citizens</p>
                  <p className="text-xs text-gray-500">Globally connected</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
