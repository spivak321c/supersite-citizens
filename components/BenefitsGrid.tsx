'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function BenefitsGrid() {
  const benefits = [
    {
      title: "Spiritual Covering",
      description: "Gain access to dedicated intercessors and spiritual leaders who stand with you in prayer and guidance."
    },
    {
      title: "Exclusive Resources",
      description: "Unlock a premium library of books, audio messages, and masterclasses tailored for your growth."
    },
    {
      title: "Kingdom Network",
      description: "Connect with like-minded believers globally, forming relationships that foster accountability and purpose."
    },
    {
      title: "Empowerment",
      description: "Receive practical training to excel in your career, ministry, and personal life through biblical principles."
    },
    {
      title: "1-on-1 Counselling",
      description: "Access professional and spiritual counseling to navigate life's toughest challenges with wisdom."
    },
    {
      title: "Global Impact",
      description: "Participate in outreach programs and initiatives that make a tangible difference in communities worldwide."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6"
          >
            Benefits of Belonging:
          </motion.h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-5"
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
