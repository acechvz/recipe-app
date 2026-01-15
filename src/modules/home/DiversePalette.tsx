import { Badge } from "@/ui/Badge/Badge";
import { Button } from "@/ui/Button/Button";

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

export function DiversePalette() {
  return (
    <div className="grid grid-cols-2 gap-20 bg-primary-4 p-10 rounded-4xl">
      <div className="self-end">
        <Badge label="Explore" />
        {/* <div className="text-sm uppercase font-medium bg-primary-3 inline-flex py-1 px-2 rounded-2xl text-white">
          Explore
        </div> */}
        <h2 className="header-2 mt-4 mb-3">
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
