'use client';

import { motion } from 'motion/react';
import { Target, Globe, Heart } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Our Mission",
      description: "To raise a generation of believers equipped with the word, power, and character to impact every sphere of society."
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Global Reach",
      description: "Building a borderless digital ecosystem where distance is no barrier to spiritual growth and community."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Deep Connection",
      description: "Fostering authentic relationships and providing a safe space for testimonies, prayer, and mutual edification."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6"
          >
            About The SuperSite Citizens
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We are more than a website; we are a digital city. The SuperSite Citizens is a comprehensive faith-based ecosystem designed to nourish your spirit, equip your mind, and connect you with a global family of believers dedicated to maximum kingdom impact.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
