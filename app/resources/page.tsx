'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Book, Headphones, GraduationCap, Search, Loader2 } from 'lucide-react';
import Image from 'next/image';

type Category = 'all' | 'books' | 'audio' | 'courses';

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  category: Category;
  image: string;
  author: string;
}

const mockProducts: Product[] = [
  {
    id: '1',
    title: "The Believer's Authority",
    description: "Discover your spiritual rights and how to exercise them in your daily life for maximum impact.",
    price: "₦4,500",
    category: 'books',
    image: "https://picsum.photos/seed/book1/400/600",
    author: "Apostle John Doe"
  },
  {
    id: '2',
    title: "Navigating Prophetic Seasons",
    description: "A comprehensive audio guide to understanding and aligning with God's timing.",
    price: "₦2,000",
    category: 'audio',
    image: "https://picsum.photos/seed/audio1/400/400",
    author: "Prophetess Jane Smith"
  },
  {
    id: '3',
    title: "Kingdom Economics Masterclass",
    description: "An intensive 4-week course on biblical financial principles and wealth creation.",
    price: "₦25,000",
    category: 'courses',
    image: "https://picsum.photos/seed/course1/600/400",
    author: "Dr. David Kingdom"
  },
  {
    id: '4',
    title: "Atmosphere for Miracles",
    description: "Live worship recording designed to create an atmosphere for divine encounters.",
    price: "₦1,500",
    category: 'audio',
    image: "https://picsum.photos/seed/audio2/400/400",
    author: "The SuperSite Citizens Choir"
  },
  {
    id: '5',
    title: "Leadership in Ministry",
    description: "Essential principles for leading effectively in the 21st-century church.",
    price: "₦5,500",
    category: 'books',
    image: "https://picsum.photos/seed/book2/400/600",
    author: "Apostle John Doe"
  }
];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<Category>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setIsLoading(true);
    // Simulate network request
    const timer = setTimeout(() => {
      const filtered = activeTab === 'all' 
        ? mockProducts 
        : mockProducts.filter(p => p.category === activeTab);
      setProducts(filtered);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const tabs = [
    { id: 'all', label: 'All Resources', icon: <Search className="w-4 h-4" /> },
    { id: 'books', label: 'Books', icon: <Book className="w-4 h-4" /> },
    { id: 'audio', label: 'Audio Messages', icon: <Headphones className="w-4 h-4" /> },
    { id: 'courses', label: 'Trainings & Courses', icon: <GraduationCap className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-24">
      {/* Header */}
      <div className="bg-primary text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Resources & Trainings</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Equip yourself with life-transforming materials and specialized courses designed for your spiritual growth and kingdom impact.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-accent text-primary shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
                <div className="aspect-video bg-gray-200 w-full" />
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-1/4" />
                  <div className="h-6 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                  <div className="flex justify-between items-center pt-4">
                    <div className="h-6 bg-gray-200 rounded w-1/4" />
                    <div className="h-10 bg-gray-200 rounded-full w-32" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-accent font-bold mb-2">{product.author}</p>
                  <h3 className="font-heading font-bold text-xl text-primary mb-3 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <span className="font-bold text-xl text-primary">{product.price}</span>
                    <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-colors text-sm">
                      {product.category === 'courses' ? (
                        <>
                          <GraduationCap className="w-4 h-4" />
                          Register
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm"
          >
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-3">No resources found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find any resources in this category at the moment. Please check back later for new additions.
            </p>
            <button 
              onClick={() => setActiveTab('all')}
              className="mt-8 text-accent font-bold hover:text-primary transition-colors underline underline-offset-4"
            >
              View all resources
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
