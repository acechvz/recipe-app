import { Badge } from "@/ui/Badge/Badge";
import { Button } from "@/ui/Button/Button";

export function OurCulinaryChronicle() {
  return (
    <div className="border border-dark/25 rounded-4xl p-4 flex flex-col md:flex-row gap-2">
      {/* Sección Izquierda */}
      <div className="flex-2">
        <div className="flex flex-col md:flex-row items-stretch md:items-center mb-2 md:mb-0">
          <div className="md:px-6 pt-5 md:pt-12 pb-3">
            <Badge label="About us" className="mb-3" />
            <h2 className="header-2 mb-3">Our Culinary Chronicle</h2>
            <p className="paragraph-2 mb-3">
              Our journey is crafted with dedication, creativity, and an
              unrelenting commitment to delivering delightful culinary
              experiences. Join us in savoring the essence of every dish and the
              stories that unfold.
            </p>
            <Button>Read more</Button>
          </div>
          <div className="md:flex-none">
            <img
              src="./assets/salmon-cooking.jpg"
              className="object-cover aspect-square sm:aspect-video md:aspect-auto sm:w-full rounded-3xl md:w-full md:min-w-80 md:h-full bg-primary-2/40 "
            />
          </div>
        </div>
        <div>
          <img
            src="./assets/pan-kitchen.jpg"
            className="object-cover aspect-square sm:aspect-video md:h-80 md:w-full rounded-3xl"
          />
        </div>
      </div>
      {/* Sección Derecha */}
      <div className="w-full md:flex-1 md:w-auto">
        <img
          src="./assets/about-us.jpg"
          alt=""
          className="object-cover aspect-square sm:aspect-video w-full md:h-full md:w-102 rounded-3xl"
        />
      </div>
    </div>
  );
}
