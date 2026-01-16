import { menuItems } from "./constants";
import { SocialLinks } from "./SocialsLinks";

export function Footer() {
  return (
    <footer className="bg-dark rounded-4xl py-6 px-10">
      <div className="flex flex-col md:flex-row w-full items-center pb-6 border-b border-clear/10 mb-4">
        <img className="flex-none" src="./assets/logo-footer.svg" alt="" />
        <ul className="py-6 md:py-0 grow flex flex-col md:flex-row md:inline-flex md:items-center justify-center w-full md:w-auto">
          {menuItems.map((item) => (
            <li
              key={item.title}
              className="pb-3 md:pb-0 border-b md:border-r md:border-b-0 border-clear/25 last:border-none
              px-4 md:border-clear/10 md:mb-0 mb-4"
            >
              <a
                className="text-clear text-sm uppercase font-medium leading-none"
                href={item.href}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <SocialLinks />
      </div>
      <p className="text-clear/60 text-xs uppercase text-center w-full">
        Copyright: &copy; 2026 Cooks Delight.
      </p>
    </footer>
  );
}
