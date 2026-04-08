import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-gray-100">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6 uppercase tracking-widest">
            About Us
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
            The SuperSite Citizens Ecosystem
          </h1>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              The SuperSite Citizens is a comprehensive faith-based digital ecosystem designed to equip, mentor, and connect believers globally for extraordinary living. We believe that every individual has a divine purpose, and our mission is to provide the spiritual covering, resources, and community needed to fulfill that purpose.
            </p>
            <p>
              Founded on the principles of the word, power, and character, we aim to impact every sphere of society. Whether you are seeking spiritual growth, career empowerment, or a supportive network of like-minded believers, The SuperSite Citizens offers a structured path to help you achieve your goals.
            </p>
            <h2 className="text-2xl font-heading font-bold text-primary mt-10 mb-4">Our Core Values</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Faith:</strong> Rooted in biblical truths and unwavering belief in God's promises.</li>
              <li><strong>Excellence:</strong> Striving for the highest standards in all our endeavors.</li>
              <li><strong>Community:</strong> Fostering genuine connections and mutual support among members.</li>
              <li><strong>Impact:</strong> Equipping individuals to make a positive difference in their communities and the world.</li>
            </ul>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-100">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
            >
              Join the Ecosystem <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
