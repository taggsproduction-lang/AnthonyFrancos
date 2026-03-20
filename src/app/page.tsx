import HeroSection from "@/components/hero/HeroSection";
import FeaturedItems from "@/components/home/FeaturedItems";
import ReviewCarousel from "@/components/social-proof/ReviewCarousel";
import AboutTeaser from "@/components/home/AboutTeaser";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedItems />
      <ReviewCarousel />
      <AboutTeaser />
      <CTABanner />
    </>
  );
}
