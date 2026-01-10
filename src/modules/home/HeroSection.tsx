import { Button } from "@/ui/Button/Button";

export function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="py-30 text-center bg-[url('./assets/hero-banner.png')] bg-cover text-white relative rounded-4xl overflow-hidden">
        <div className="absolute inset-0 bg-[#26252299]" />
        <div className="w-4x max-w-full mx-auto relative">
          <h1 className="text-7xl font-extrabold uppercase mb-3 px-6">
            Unleash Culinary <br /> Excellence
          </h1>
          <p className="text-xl w-md max-w-full mx-auto mb-10 px-4">
            Explore a world of flavors, discover handcrafted recipes, and let
            the aroma of our passion for cooking fill your kitchen
          </p>
          <Button variant="tertiary">Explore recipes</Button>
        </div>
      </div>
    </div>
  );
}
