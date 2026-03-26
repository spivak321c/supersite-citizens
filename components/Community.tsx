'use client';

import { motion } from 'motion/react';
import { Youtube, Instagram, Play } from 'lucide-react';
import Image from 'next/image';

export default function Community() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Connect With The Community</h2>
          <p className="text-gray-600">Join thousands of believers across our social platforms for daily encouragement, live streams, and updates.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* YouTube Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
          >
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600">
                  <Youtube className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-gray-900">Watch on YouTube</h3>
                  <p className="text-sm text-gray-500">Latest sermons & streams</p>
                </div>
              </div>
              <button className="text-sm font-bold text-red-600 hover:text-red-700">Subscribe</button>
            </div>
            <div className="p-6 md:p-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 group cursor-pointer">
                <Image 
                  src="https://picsum.photos/seed/youtube/800/450" 
                  alt="Video Thumbnail" 
                  fill 
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-lg drop-shadow-md line-clamp-1">Understanding Kingdom Principles</h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Instagram Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
          >
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-gray-900">Follow on Instagram</h3>
                  <p className="text-sm text-gray-500">Daily inspiration & updates</p>
                </div>
              </div>
              <button className="text-sm font-bold text-pink-600 hover:text-pink-700">Follow</button>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                    <Image 
                      src={`https://picsum.photos/seed/insta${item}/400/400`} 
                      alt="Instagram Post" 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
