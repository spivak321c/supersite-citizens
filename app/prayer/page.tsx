'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Calendar, CheckCircle2, Loader2, Clock, MessageCircle } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success';

export default function PrayerAndCounsellingPage() {
  const [prayerStatus, setPrayerStatus] = useState<FormStatus>('idle');
  const [counsellingStatus, setCounsellingStatus] = useState<FormStatus>('idle');

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPrayerStatus('submitting');
    setTimeout(() => setPrayerStatus('success'), 1500);
  };

  const handleCounsellingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCounsellingStatus('submitting');
    setTimeout(() => setCounsellingStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-24">
      {/* Header */}
      <div className="bg-primary text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Prayer & Counselling</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            You don't have to walk alone. Our intercessors and trained counselors are here to stand with you and provide biblical guidance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Prayer Request Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="bg-blue-50 p-8 border-b border-blue-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary">Submit Prayer Request</h2>
                <p className="text-sm text-gray-600">Let our intercessory team stand with you.</p>
              </div>
            </div>

            <div className="p-8">
              <AnimatePresence mode="wait">
                {prayerStatus === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary mb-3">Request Received</h3>
                    <p className="text-gray-600 mb-8">
                      Thank you for sharing. Our intercessory team is already lifting your request up in prayer. God answers!
                    </p>
                    <button 
                      onClick={() => setPrayerStatus('idle')}
                      className="text-accent font-bold hover:text-primary transition-colors underline underline-offset-4"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handlePrayerSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="+234..." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Prayer Request</label>
                      <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none" placeholder="How can we pray for you?"></textarea>
                    </div>
                    <button 
                      disabled={prayerStatus === 'submitting'}
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {prayerStatus === 'submitting' ? (
                        <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                      ) : (
                        'Submit Prayer Request'
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Counselling Booking Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="bg-amber-50 p-8 border-b border-amber-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary">Book Counselling</h2>
                <p className="text-sm text-gray-600">Schedule a session with a trained counselor.</p>
              </div>
            </div>

            <div className="p-8">
              <AnimatePresence mode="wait">
                {counsellingStatus === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary mb-3">Booking Confirmed</h3>
                    <p className="text-gray-600 mb-8">
                      Your counselling session request has been received. Our team will contact you shortly to confirm the exact time and details.
                    </p>
                    <button 
                      onClick={() => setCounsellingStatus('idle')}
                      className="text-accent font-bold hover:text-primary transition-colors underline underline-offset-4"
                    >
                      Book another session
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleCounsellingSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Jane Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="jane@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="+234..." />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-accent" /> Preferred Date
                        </label>
                        <input required type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-gray-700" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-accent" /> Preferred Time
                        </label>
                        <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-gray-700 bg-white">
                          <option value="">Select a time slot</option>
                          <option value="morning">Morning (9AM - 12PM)</option>
                          <option value="afternoon">Afternoon (12PM - 4PM)</option>
                          <option value="evening">Evening (4PM - 7PM)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Brief Description of Topic</label>
                      <textarea required rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none" placeholder="What would you like to discuss?"></textarea>
                    </div>

                    <button 
                      disabled={counsellingStatus === 'submitting'}
                      className="w-full bg-accent text-primary py-4 rounded-xl font-bold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {counsellingStatus === 'submitting' ? (
                        <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
                      ) : (
                        'Request Session'
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
