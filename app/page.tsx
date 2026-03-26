import Hero from '@/components/Hero';
import About from '@/components/About';
import QuickLinks from '@/components/QuickLinks';
import FeaturedResources from '@/components/FeaturedResources';
import UpcomingPrograms from '@/components/UpcomingPrograms';
import TestimoniesPreview from '@/components/TestimoniesPreview';
import Community from '@/components/Community';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <QuickLinks />
      <FeaturedResources />
      <UpcomingPrograms />
      <TestimoniesPreview />
      <Community />
      <FinalCTA />
    </div>
  );
}
