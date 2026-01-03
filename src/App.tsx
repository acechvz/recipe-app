import "./App.css";

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
      <div className="p-4">
        <header className="border-1 border-solid border-black rounded-4xl flex justify-center px-6 py-4 mb-4">
          <nav>
            <ul className="flex gap-6">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <a
                    className="text-black/40 hover:text-black hover:border-[#EE6352] uppercase pb-2 border-transparent border-b-2"
                    href={item.href}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {/* <img src="<image_url>" alt="Delicious food" className="absolute inset-0 object-cover w-full h-full" /> */}
        <div className="max-w-7xl mx-auto">
          <div className="py-30 text-center bg-[url('./assets/hero-banner.png')] text-white relative rounded-4xl overflow-hidden">
            <div className="absolute inset-0 bg-[#26252299]" />
            <div className="w-4x max-w-full mx-auto relative">
              <h1 className="text-7xl font-extrabold uppercase mb-3 px-6">
                Unleash Culinary <br /> Excellence
              </h1>
              <p className="text-xl w-md max-w-full mx-auto mb-10 px-4">
                Explore a world of flavors, discover handcrafted recipes, and
                let the aroma of our passion for cooking fill your kitchen
              </p>
              <button className="text-sm uppercase bg-amber-500 rounded-3xl py-3 px-6 text-black">
                Explore recipes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
