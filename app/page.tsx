import Hero from '@/components/Hero';
import MentorProfile from '@/components/MentorProfile';
import Mission from '@/components/Mission';
import BenefitsGrid from '@/components/BenefitsGrid';
import FormatsGrid from '@/components/FormatsGrid';
import TestimoniesPreview from '@/components/TestimoniesPreview';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <MentorProfile />
      <Mission />
      <BenefitsGrid />
      <FormatsGrid />
      <TestimoniesPreview />
      <FinalCTA />
    </div>
  );
}
