import "./App.css";
import { Button } from "./ui/Button/Button";

const menuItems = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Recipes",
    href: "#recipes",
  },
  {
    title: "Cooking Tips",
    href: "#tips",
  },
  {
    title: "About us",
    href: "#about",
  },
];

export function App() {
  return (
    <>
      <div className="p-4 flex flex-col gap-4 items-stretch">
        <header className="max-w-7xl w-full border border-solid border-dark/25 px-6 py-4 rounded-[38px] mx-auto flex justify-between items-center">
          <a href="#">
            <img src="/assets/logo.svg" />
          </a>
          <nav>
            <ul className="flex gap-6">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <a
                    className="text-black/40 hover:text-black hover:border-primary-3 uppercase pb-2 border-transparent border-b-2"
                    href={item.href}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <Button variant="secondary">Subscribe</Button>
          </div>
        </header>
        {/* <img src="<image_url>" alt="Delicious food" className="absolute inset-0 object-cover w-full h-full" /> */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="py-30 text-center bg-[url('./assets/hero-banner.png')] bg-cover text-white relative rounded-4xl overflow-hidden">
            <div className="absolute inset-0 bg-[#26252299]" />
            <div className="w-4x max-w-full mx-auto relative">
              <h1 className="text-7xl font-extrabold uppercase mb-3 px-6">
                Unleash Culinary <br /> Excellence
              </h1>
              <p className="text-xl w-md max-w-full mx-auto mb-10 px-4">
                Explore a world of flavors, discover handcrafted recipes, and
                let the aroma of our passion for cooking fill your kitchen
              </p>
              <Button variant="tertiary">Explore recipes</Button>
            </div>
          </div>
        </div>
        <DiversePalette />
      </div>
    </>
  );
}

const listItems = [
  {
    icon: "/assets/icons/breakfast-icon.svg",
    label: "Breakfast",
  },
  {
    icon: "/assets/icons/bowl-icon.svg",
    label: "Lunch",
  },
  {
    icon: "/assets/icons/burger-icon.svg",
    label: "Dinner",
  },
  {
    icon: "/assets/icons/pancakes-icon.svg",
    label: "Dessert",
  },
  {
    icon: "/assets/icons/burrito-icon.svg",
    label: "Quick bite!",
  },
];

function DiversePalette() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 bg-primary-4 p-10 rounded-4xl">
      <div className="self-end">
        <div className="text-sm uppercase font-medium bg-primary-3 inline-flex py-1 px-2 rounded-2xl text-white">
          Explore
        </div>
        <h2 className="text-4xl font-bold mt-4 uppercase font-montserrat mb-3">
          Our Diverse <br /> Palette
        </h2>
        <p className="font-light mb-10">
          If you are a breakfast enthusiast, a connoisseur of savory delights,
          or on the lookout for irresistible desserts, our curated selection has
          something to satisfy every palate.
        </p>
        <Button>See more</Button>
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          {listItems.map(({ label, icon }) => (
            <li key={label} className="flex py-4 border-b border-black/20">
              <img src={icon} />{" "}
              <span className="grow text-right text-lg uppercase font-montserrat font-semibold">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
