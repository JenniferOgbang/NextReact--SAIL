import { useEffect, useState } from "react";
import LogoDark from "@/assets/header/logo.svg";
import LogoWhite from "@/assets/header/logowhite.svg";
import Arrow from "@/assets/header/arrowdown.svg";
import MenuIcon from "@/assets/header/hambuger.svg";
import CloseIcon from "@/assets/header/cancel.svg";

const navLinks = [
  {
    label: "About",
    items: ["Our Story", "Our Mission", "Our Team"],
  },
  {
    label: "Articles",
    items: ["Latest Articles", "News", "Resources"],
  },
  {
    label: "Collaborate",
    items: ["Partner With Us", "Become a Volunteer"],
  },
  {
    label: "Support",
    items: ["Contact Us", "FAQs", "Get Involved"],
  },
];

const LanguageControl = ({ light }) => (
  <div className="flex items-end gap-1">
    <a href="#" className={light ? "text-black" : "text-white"}>
      language
    </a>
    <img
      src={Arrow}
      alt=""
      className={`w-5 h-auto ${light ? "" : "brightness-0 invert"}`}
    />
  </div>
);

const Header = ({ heroSectionRef }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const lightHeader = scrolled || menuOpen;

  useEffect(() => {
    const updateScrolled = () => {
      const heroSection = heroSectionRef.current;
      setScrolled(heroSection ? heroSection.getBoundingClientRect().bottom <= 0 : false);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, [heroSectionRef]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full px-4 py-3 transition-colors duration-300 sm:px-6 sm:py-4 lg:px-8 ${
        lightHeader ? "bg-white shadow-md" : "bg-[#355847]"
      }`}
    >
      <nav className="flex items-center justify-between">
        <img
          src={lightHeader ? LogoDark : LogoWhite}
          alt="SAIL"
          className="h-auto w-28 sm:w-32"
        />

        <div className="hidden items-center gap-6 lg:flex xl:gap-10">
          {navLinks.map(({ label }) => (
            <a
              key={label}
              href="#"
              className={scrolled ? "text-black" : "text-white"}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <LanguageControl light={scrolled} />
        </div>

        <button
          type="button"
          className={`rounded p-2 lg:hidden ${lightHeader ? "text-black" : "text-white"}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setMenuOpen((open) => !open);
            setOpenDropdown(null);
          }}
        >
          <img
            src={menuOpen ? CloseIcon : MenuIcon}
            alt=""
            className={`h-6 w-6 ${lightHeader ? "" : "brightness-0 invert"}`}
          />
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`absolute left-0 top-full w-full border-t border-gray-200 bg-white px-4 py-3 shadow-md lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col">
          {navLinks.map(({ label, items }) => {
            const isExpanded = openDropdown === label;
            const submenuId = `${label.toLowerCase()}-submenu`;

            return (
              <div key={label} className="border-b border-gray-200">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-left text-black"
                  aria-expanded={isExpanded}
                  aria-controls={submenuId}
                  onClick={() =>
                    setOpenDropdown(isExpanded ? null : label)
                  }
                >
                  <span>{label}</span>
                  <img
                    src={Arrow}
                    alt=""
                    className={`h-auto w-5 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div id={submenuId} className="flex flex-col pb-3 pl-4">
                    {items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="py-3 text-black"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="py-4">
            <LanguageControl light />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
