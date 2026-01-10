import { Button } from "@/ui/Button/Button";

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

export function Header() {
  return (
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
  );
}
