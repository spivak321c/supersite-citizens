'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Upload, CheckCircle2, Loader2, Image as ImageIcon, Quote } from 'lucide-react';
import Image from 'next/image';

type FormStatus = 'idle' | 'submitting' | 'success';

interface Testimony {
  id: string;
  name: string;
  title: string;
  content: string;
  date: string;
  image?: string;
}

const approvedTestimonies: Testimony[] = [
  {
    id: '1',
    name: "Sarah O.",
    title: "Supernatural Healing",
    content: "I was diagnosed with a chronic condition that the doctors said had no cure. During the Monthly Miracle Service, a word of knowledge was given exactly for my case. I claimed it, and when I went back for tests the following week, the doctors were astounded. I am completely healed!",
    date: "March 15, 2026",
    image: "https://picsum.photos/seed/testimony1/400/300"
  },
  {
    id: '2',
    name: "David M.",
    title: "Career Breakthrough",
    content: "After completing the Kingdom Economics Masterclass, I applied the principles to my struggling business. Within three months, we not only cleared all debts but secured a major international contract. The teachings on this platform are practical and powerful.",
    date: "February 28, 2026"
  },
  {
    id: '3',
    name: "Grace K.",
    title: "Family Restoration",
    content: "My marriage was on the brink of divorce. I submitted a prayer request on The SuperSite Citizens and joined the online community prayers. God intervened miraculously. Today, my husband and I are serving God together, and our home is filled with peace.",
    date: "January 10, 2026",
    image: "https://picsum.photos/seed/testimony3/400/300"
  },
  {
    id: '4',
    name: "Emmanuel T.",
    title: "Academic Excellence",
    content: "I was struggling with my final year project and failing my courses. I keyed into the prophetic declarations during the Youth Empowerment Masterclass. I just graduated with First Class Honors!",
    date: "December 5, 2025"
  }
];

export default function TestimoniesPage() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-24">
      {/* Header */}
      <div className="bg-primary text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Testimonies</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            "And they overcame him by the blood of the Lamb, and by the word of their testimony." Read and share stories of God's faithfulness.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Submission Form */}
          <div className="lg:col-span-5 lg:order-2">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden sticky top-28">
              <div className="bg-emerald-50 p-6 border-b border-emerald-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-heading font-bold text-primary">Share Your Story</h2>
                  <p className="text-xs text-gray-600">Inspire others with what God has done.</p>
                </div>
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                    >
                      <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-primary mb-2">Pending Approval</h3>
                      <p className="text-sm text-gray-600 mb-6">
                        Thank you for sharing your testimony! It has been submitted successfully and is currently under review by our team before being published.
                      </p>
                      <button
                        onClick={() => {
                          setFormStatus('idle');
                          setFileName(null);
                        }}
                        className="text-accent font-bold hover:text-primary transition-colors underline underline-offset-4 text-sm"
                      >
                        Submit another testimony
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-sm" placeholder="John Doe" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <input required type="email" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-sm" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Testimony Title</label>
                        <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-sm" placeholder="e.g. Supernatural Healing" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Full Testimony</label>
                        <textarea required rows={5} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none text-sm" placeholder="Share the details of what God did..."></textarea>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Optional Media (Image/Video)</label>
                        <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                          <input
                            type="file"
                            accept="image/*,video/*"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                          <div className="flex flex-col items-center justify-center gap-2 text-gray-500">
                            <Upload className="w-6 h-6 text-accent" />
                            <span className="text-sm font-medium">
                              {fileName ? fileName : "Click or drag file to upload"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        disabled={formStatus === 'submitting'}
                        className="w-full bg-primary text-white py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
                      >
                        {formStatus === 'submitting' ? (
                          <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                        ) : (
                          'Submit Testimony'
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Approved Testimonies Grid */}
          <div className="lg:col-span-7 lg:order-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary">Latest Testimonies</h2>
            </div>

            <div className="grid gap-6">
              {approvedTestimonies.map((testimony, index) => (
                <motion.div
                  key={testimony.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden"
                >
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-50 rotate-180" />

                  <div className="relative z-10">
                    <h3 className="font-heading font-bold text-xl text-primary mb-3">{testimony.title}</h3>

                    {testimony.image && (
                      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                        <Image
                          src={testimony.image}
                          alt="Testimony Media"
                          fill
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}

                    <p className="text-gray-600 leading-relaxed mb-6 italic">
                      "{testimony.content}"
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-sm">
                          {testimony.name.charAt(0)}
                        </div>
                        <span className="font-bold text-primary text-sm">{testimony.name}</span>
                      </div>
                      <span className="text-xs text-gray-400 font-medium">{testimony.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
