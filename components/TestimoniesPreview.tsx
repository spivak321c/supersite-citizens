'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function TestimoniesPreview() {
  const testimonies = [
    {
      id: 1,
      name: "Sarah O.",
      location: "Lagos, Nigeria",
      text: "Joining the SuperSite Citizens community completely transformed my prayer life. The resources available here are deeply rooted in the word. I experienced a major breakthrough in my career just weeks after participating in the prophetic summit.",
      image: "https://picsum.photos/seed/person1/100/100"
    },
    {
      id: 2,
      name: "David M.",
      location: "London, UK",
      text: "Distance is truly no barrier. Even from the UK, I feel so connected to the family. The teachings have given me clarity on my purpose, and the community support is unmatched. This is a true digital city of refuge.",
      image: "https://picsum.photos/seed/person2/100/100"
    },
    {
      id: 3,
      name: "Grace K.",
      location: "Nairobi, Kenya",
      text: "I was struggling with my faith until I stumbled upon a sermon on the SuperSite Citizens. That led me to enroll in the training programs. Today, I am not just a consumer, but an active contributor to the kingdom. Thank God for this platform.",
      image: "https://picsum.photos/seed/person3/100/100"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonies.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonies.length) % testimonies.length);
  };

  return (
    <section id="testimonies" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Stories of Impact</h2>
          <p className="text-gray-600">Read what God is doing in the lives of SuperSite Citizens Citizens globally.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Decorative Quote Mark */}
          <div className="absolute -top-10 -left-10 text-gray-100 z-0 hidden md:block">
            <Quote className="w-32 h-32 rotate-180" />
          </div>

          <div className="relative z-10 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md mb-6">
                  <Image
                    src={testimonies[currentIndex].image}
                    alt={testimonies[currentIndex].name}
                    width={80}
                    height={80}
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 italic">
                  "{testimonies[currentIndex].text}"
                </p>
                <div>
                  <h4 className="font-heading font-bold text-primary text-lg">{testimonies[currentIndex].name}</h4>
                  <p className="text-sm text-gray-500">{testimonies[currentIndex].location}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex justify-center items-center gap-4 mt-10">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-colors shadow-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {testimonies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === currentIndex ? 'bg-accent' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-colors shadow-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="text-primary font-bold hover:text-accent transition-colors underline underline-offset-4">
            Submit Your Testimony
          </button>
        </div>
      </div>
    </section>
  );
}
