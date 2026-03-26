'use client';

import { motion } from 'motion/react';
import { ShoppingBag, GraduationCap, MessageCircleHeart, HandHeart, Handshake } from 'lucide-react';
import Link from 'next/link';

export default function QuickLinks() {
  const links = [
    {
      title: "Buy Books",
      description: "Explore our library of life-transforming literature.",
      icon: <ShoppingBag className="w-6 h-6" />,
      href: "#store",
      color: "bg-blue-50 text-blue-700 border-blue-100"
    },
    {
      title: "Join Trainings",
      description: "Enroll in specialized courses for spiritual growth.",
      icon: <GraduationCap className="w-6 h-6" />,
      href: "#trainings",
      color: "bg-amber-50 text-amber-700 border-amber-100"
    },
    {
      title: "Submit Testimony",
      description: "Share what God has done to encourage others.",
      icon: <MessageCircleHeart className="w-6 h-6" />,
      href: "#testimony",
      color: "bg-emerald-50 text-emerald-700 border-emerald-100"
    },
    {
      title: "Request Prayer",
      description: "Let our intercessory team stand with you.",
      icon: <HandHeart className="w-6 h-6" />,
      href: "#prayer",
      color: "bg-purple-50 text-purple-700 border-purple-100"
    },
    {
      title: "Partner",
      description: "Support the vision financially and materially.",
      icon: <Handshake className="w-6 h-6" />,
      href: "#partner",
      color: "bg-rose-50 text-rose-700 border-rose-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">What You Can Do</h2>
            <p className="text-gray-600 max-w-2xl">Navigate our ecosystem quickly to find exactly what you need for your spiritual journey.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={link.href}
                className={`block h-full p-6 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-lg ${link.color}`}
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4">
                  {link.icon}
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-gray-900">{link.title}</h3>
                <p className="text-sm text-gray-700 opacity-90">{link.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
