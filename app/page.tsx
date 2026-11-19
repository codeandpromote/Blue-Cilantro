import SiteHeader from '@/components/SiteHeader';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import MenuShowcase from '@/components/MenuShowcase';
import PhotoGallery from '@/components/PhotoGallery';
import VisitSection from '@/components/VisitSection';
import SiteFooter from '@/components/SiteFooter';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F7] text-[#14181E]">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <StorySection />
        <MenuShowcase />
        <PhotoGallery />
        <VisitSection />
      </main>
      <SiteFooter />
    </div>
  );
}
