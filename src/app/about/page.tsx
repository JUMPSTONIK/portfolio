import { CallToActionSection } from "@/components/features/AboutMe/CallToActionSection";
import { HeroSection } from "@/components/features/AboutMe/HeroSection";
import { ScrollAnimation } from "@/components/features/AboutMe/ScrollAnimation/ScrollAnimation";
import { StoryCardsSection } from "@/components/features/AboutMe/StoryCardsSection";

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      {/* <JourneySection /> */}
      <StoryCardsSection />
      {/* <CoreValuesSection /> */}
      <ScrollAnimation />
      <CallToActionSection/>
    </>
  );
}

