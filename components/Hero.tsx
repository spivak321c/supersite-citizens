'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gray-50 overflow-hidden pt-24 lg:pt-32 pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left pb-10 lg:pb-32"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6 uppercase tracking-widest border border-accent/20">
              The SuperSite Citizens Mentoring
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-primary leading-[1.1] mb-6">
              Raising Citizens for <br />
              <span className="text-accent">Maximum Kingdom Impact</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg font-medium">
              A comprehensive faith-based digital ecosystem designed to equip, mentor, and connect believers globally for extraordinary living.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="#enroll"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                Enroll Today
                <ArrowRight className="w-5 h-5 text-accent" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Mentor Cutout Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[700px] w-full hidden md:block"
          >
            {/* Background Blob/Shape */}
            <div className="absolute bottom-0 right-0 w-full h-[80%] bg-primary rounded-t-full opacity-10 blur-3xl"></div>

            {/* Hero Image */}
            <div className="absolute bottom-0 right-0 w-full h-[90%] bg-gray-200 rounded-t-[4rem] border-x-8 border-t-8 border-white shadow-2xl overflow-hidden group">
              <Image 
                src="/hero-image.jpeg" 
                alt="God's Servant Joshua Jackson" 
                fill 
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
