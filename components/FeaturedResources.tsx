'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Headphones, Book } from 'lucide-react';

export default function FeaturedResources() {
  const resources = [
    {
      id: 1,
      title: "The Believer's Authority",
      author: "Apostle John Doe",
      type: "Book",
      price: "₦4,500",
      image: "https://picsum.photos/seed/book1/400/600",
      icon: <Book className="w-4 h-4" />
    },
    {
      id: 2,
      title: "Navigating Prophetic Seasons",
      author: "Prophetess Jane Smith",
      type: "Audio Series",
      price: "₦2,000",
      image: "https://picsum.photos/seed/audio1/400/400",
      icon: <Headphones className="w-4 h-4" />
    },
    {
      id: 3,
      title: "Kingdom Economics",
      author: "Dr. David Kingdom",
      type: "Book",
      price: "₦5,000",
      image: "https://picsum.photos/seed/book2/400/600",
      icon: <Book className="w-4 h-4" />
    },
    {
      id: 4,
      title: "Atmosphere for Miracles",
      author: "The Supersite Choir",
      type: "Audio Album",
      price: "₦1,500",
      image: "https://picsum.photos/seed/audio2/400/400",
      icon: <Headphones className="w-4 h-4" />
    }
  ];

  return (
    <section id="resources" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Featured Resources</h2>
            <p className="text-gray-600 max-w-2xl">Equip yourself with materials designed to build your faith and transform your mind.</p>
          </div>
          <Link href="#store" className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors">
            View All Resources <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1.5">
                  {resource.icon}
                  {resource.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-primary mb-1 line-clamp-1">{resource.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{resource.author}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">{resource.price}</span>
                  <button className="text-sm font-medium text-accent hover:text-primary transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
