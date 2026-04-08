'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function UpcomingPrograms() {
  // Simple countdown logic for demo purposes
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 8,
    minutes: 45,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const programs = [
    {
      id: 1,
      title: "Global Prophetic Summit 2026",
      date: "April 15-18, 2026",
      time: "09:00 AM WAT",
      location: "Main Auditorium & Online",
      isMain: true
    },
    {
      id: 2,
      title: "Monthly Miracle Service",
      date: "May 1, 2026",
      time: "05:00 PM WAT",
      location: "Online Only",
      isMain: false
    },
    {
      id: 3,
      title: "Youth Empowerment Masterclass",
      date: "May 10, 2026",
      time: "10:00 AM WAT",
      location: "Supersite Hub",
      isMain: false
    }
  ];

  const mainProgram = programs.find(p => p.isMain);
  const otherPrograms = programs.filter(p => !p.isMain);

  return (
    <section id="programs" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1000/1000')] bg-repeat opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Upcoming Programs</h2>
          <p className="text-gray-300 max-w-2xl">Mark your calendars and prepare for life-changing encounters in our upcoming gatherings.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Featured Program */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary font-bold text-sm mb-8">
              Next Major Event
            </div>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {mainProgram?.title}
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-10 text-gray-300">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-accent" />
                <span>{mainProgram?.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                <span>{mainProgram?.time}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>{mainProgram?.location}</span>
              </div>
            </div>

            {/* Countdown */}
            <div className="grid grid-cols-4 gap-4 mb-10 max-w-md">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Mins', value: timeLeft.minutes },
                { label: 'Secs', value: timeLeft.seconds }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 rounded-xl p-4 text-center border border-white/5">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-1">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>

            <button className="bg-accent text-primary px-8 py-4 rounded-full font-bold hover:bg-white transition-colors w-full sm:w-auto">
              Register Now
            </button>
          </motion.div>

          {/* Other Programs */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h4 className="text-xl font-heading font-bold text-white mb-2">More Events</h4>
            {otherPrograms.map((program, index) => (
              <motion.div 
                key={program.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <h5 className="text-xl font-heading font-bold mb-4 group-hover:text-accent transition-colors">
                  {program.title}
                </h5>
                <div className="space-y-2 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4" />
                    <span>{program.date} • {program.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4" />
                    <span>{program.location}</span>
                  </div>
                </div>
                <Link href="#" className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:text-white transition-colors">
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
            
            <Link href="#all-programs" className="mt-auto inline-flex items-center justify-center gap-2 text-white border border-white/20 px-6 py-4 rounded-2xl font-medium hover:bg-white/10 transition-colors">
              View Full Calendar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
