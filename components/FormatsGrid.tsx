'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FormatsGrid() {
  const formats = [
    {
      title: "Live Masterclasses",
      description: "Interactive, real-time sessions with seasoned ministers and industry experts. Dive deep into the word and practical application.",
      image: "https://picsum.photos/seed/masterclass/800/600",
      link: "/resources"
    },
    {
      title: "Digital Library",
      description: "On-demand access to transformative books, audio sermons, and study guides. Learn at your own pace, wherever you are.",
      image: "https://picsum.photos/seed/library/800/600",
      link: "/resources"
    },
    {
      title: "Interactive Community",
      description: "Forums and groups designed for daily encouragement, prayer, and networking. You don't have to walk this journey alone.",
      image: "https://picsum.photos/seed/community/800/600",
      link: "/#community"
    },
    {
      title: "Personalized Counselling",
      description: "Direct access to spiritual leaders for guidance tailored to your specific journey. Get the clarity and support you need.",
      image: "https://picsum.photos/seed/counsel/800/600",
      link: "/prayer"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6"
          >
            Your mentoring will take various forms:
          </motion.h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-24">
          {formats.map((format, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                    <Image 
                      src={format.image} 
                      alt={format.title} 
                      fill 
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 flex flex-col items-start"
                >
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                    {format.title}
                  </h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {format.description}
                  </p>
                  <Link 
                    href={format.link}
                    className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors text-lg border-b-2 border-accent pb-1"
                  >
                    Learn More <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
