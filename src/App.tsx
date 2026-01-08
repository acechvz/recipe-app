import "./App.css";
import { Header } from "./components/Header";
import { DiversePalette } from "./modules/home/DiversePalette";
import { FeaturedRecipes } from "./modules/home/FeaturedRecipes";
import { HeroSection } from "./modules/home/HeroSection";

export function App() {
  return (
    <div className="p-4 flex flex-col gap-4 items-stretch">
      <Header />
      <HeroSection />
      <DiversePalette />
      <FeaturedRecipes />
    </div>
  );
}
