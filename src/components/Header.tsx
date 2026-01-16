import { Button } from "@/ui/Button/Button";
import { menuItems } from "./constants";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { SocialLinks } from "./SocialsLinks";

const bodyElement = document.querySelector("body");
const headerContainerClasses =
  "w-full border border-solid border-dark/25 px-4 md:px-6 py-4 rounded-[38px] mx-auto justify-between items-center z-50";

export function Header() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}

function DesktopNav() {
  const classes = {
    container: twMerge(headerContainerClasses, "hidden md:flex"),
  };

  return (
    <header className={classes.container}>
      <a href="#" className="flex-none">
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

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const classes = {
    container: twMerge(
      headerContainerClasses,
      classNames("flex md:hidden relative transition")
    ),
  };

  useEffect(() => {
    if (bodyElement) {
      bodyElement.style.overflow = isOpen ? "hidden" : "auto";
      if (isOpen) {
        bodyElement.scrollTop = 0;
      }
    }

    const handleResize = () => setIsOpen(false);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen ? (
        <div className="absolute inset-0 bg-dark/95 z-40 backdrop-blur-xs" />
      ) : null}

      <header className={classes.container}>
        <a href="#" className="flex-none relative z-10">
          <img
            className={classNames({
              hidden: isOpen,
            })}
            src="/assets/logo.svg"
          />
          <img
            className={classNames({
              hidden: !isOpen,
            })}
            src="/assets/logo-footer.svg"
          />
        </a>

        <Button
          onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
          variant="iconOnly"
          className={classNames("relative z-10", {
            "bg-light/15": isOpen,
          })}
        >
          <img
            className={classNames({
              hidden: !isOpen,
            })}
            src="./assets/icons/close-icon.svg"
          />
          <img
            className={classNames({
              hidden: isOpen,
            })}
            src="./assets/icons/menu-icon.svg"
          />
        </Button>

        <nav
          className={twMerge(
            "flex-col gap-10 absolute top-0 pt-17 -mt-px left-0 w-full bg-dark hidden rounded-[38px] px-6 pb-12",
            classNames({
              "flex flex-col": isOpen,
            })
          )}
        >
          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <li key={item.title} className="border-b border-clear/25 mb-3">
                <a
                  className="py-4 px-2 block text-clear text-base uppercase font-medium leading-none"
                  href={item.href}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <Button className="bg-clear/15 text-white border-none">
            Subscribe
          </Button>
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </nav>
      </header>
    </>
  );
}
