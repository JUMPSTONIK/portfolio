import { CallToActionSection } from "@/components/features/AboutMe/CallToActionSection";
import { ScrollAnimation } from "@/components/features/AboutMe/ScrollAnimation/ScrollAnimation";
import { StoryCardsSection } from "@/components/features/AboutMe/StoryCardsSection";

export default function Home() {
  return (
    <>
      {/* <HeroSection />
      <JourneySection /> */}
      <StoryCardsSection />
      {/* <CoreValuesSection /> */}
      <ScrollAnimation />
      <CallToActionSection />
    </>
  );
}

