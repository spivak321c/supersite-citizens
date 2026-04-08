'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function TestimoniesPreview() {
  const testimonies = [
    {
      id: 1,
      name: "Chiamaka Miracle",
      text: "I was in debt and my rent was due. I felt so stranded that I didn't even know what to do. During our Early Hours Intercessory Prayers, I was moved to book a session with God's Servant Joshua Jackson, which I did. I explained my situation to him and he told me that help was going to come to me in 7 days. To my surprise, a friend chatted with me two days after and asked if everything was okay with me. Since I didn't believe he was financially capable, I didn't want to tell him but he pushed more and I told him. Then he gave me my rent, some money to start a business and I was able to pay my debts. I've come to give God all the glory."
    },
    {
      id: 2,
      name: "Oluchi",
      text: "During our 3 days Prayer Conference, God's servant Joshua Jackson gave a word of knowledge that someone here would wake up to a huge financial favour the next day. I claimed it with all expectations that it would be me. The next day, a friend sent me a huge amount of money beyond my expectations. I've come to give God all the glory."
    },
    {
      id: 3,
      name: "Nneamaka Levi",
      text: "My testimony is on God's faithfulness. I am a streamer who once had a sponsor who was always sounding so vile and ungodly. I have tolerated it for months until I told God's Servant Joshua Jackson about it. He told me not to depend on humans but on God. God's servant asked me to quit his agency and stand alone that God was going to send me a new sponsor who would respect me. I did exactly as I was instructed and a few days after, I got a new sponsor who is helping me reach new heights. I have come to give God all the glory."
    },
    {
      id: 4,
      name: "Favourite Collins",
      text: "I am here to testify of God's healing. I did a surgery in 2024 and since then I've been having bouts of pains that paralyze me every month or every two months. I joined the early hours Intercessory Prayers one day and heard God's servant say we could ask God for anything then I asked God to heal me if he is the one who has sent His servant Joshua Jackson. I am here to declare that I got my healing instantly that same day."
    },
    {
      id: 5,
      name: "David John",
      text: "During one of our early hours Intercessory Prayers, we were to have our communion service that day. My roommate had a serious toothache. He was so restless that he couldn't concentrate with anything all. I gave him the communion and instantly the pain disappeared. To God be all the glory."
    }
  ];

  return (
    <section id="testimonies" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">Real Stories. Real Impact.</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {testimonies.map((testimony, index) => (
            <motion.div
              key={testimony.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden"
            >
              <Quote className="absolute top-8 right-8 w-16 h-16 text-gray-200 rotate-180" />
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 italic">
                  "{testimony.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {testimony.name.charAt(0)}
                  </div>
                  <h4 className="font-heading font-bold text-primary text-xl">{testimony.name}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
