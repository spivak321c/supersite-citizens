import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-xl">S</span>
              </div>
              <span className="font-heading font-bold text-2xl text-white tracking-tight">
                The Supersite
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Raising Supersite Citizens for Maximum Kingdom Impact. A comprehensive faith-based digital ecosystem combining e-commerce, ministry operations, media, and community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#resources" className="text-gray-300 hover:text-white transition-colors">Resources & Store</Link></li>
              <li><Link href="#programs" className="text-gray-300 hover:text-white transition-colors">Upcoming Programs</Link></li>
              <li><Link href="#testimonies" className="text-gray-300 hover:text-white transition-colors">Testimonies</Link></li>
              <li><Link href="#partner" className="text-gray-300 hover:text-white transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          {/* What You Can Do */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-accent">Get Involved</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Join Trainings</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Submit Testimony</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Request Prayer</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Join Community</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>123 Kingdom Avenue, Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+234 800 SUPERSITE</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>hello@thesupersite.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} The Supersite. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
