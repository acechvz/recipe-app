import { Header } from "@/components/Header";
import { DiversePalette } from "@/modules/home/DiversePalette";
import { FeaturedRecipes } from "@/modules/home/FeaturedRecipes";
import { HeroSection } from "@/modules/home/HeroSection";
import { EmbarkOnJourney } from "./modules/home/EmbarkOnJourney/EmbarkOnJourney";
import { OurCulinaryChronicle } from "./modules/home/OurCulinaryChronicle";
import { SubscribeNow } from "./modules/SubscribeNow";

export function App() {
  return (
    <div className="p-4 flex flex-col gap-4 items-stretch mb-40 max-w-7xl mx-auto">
      <Header />
      <HeroSection />
      <DiversePalette />
      <FeaturedRecipes />
      <EmbarkOnJourney />
      <OurCulinaryChronicle />
      <SubscribeNow />
    </div>
  );
}
