import { useEffect, useState } from "react";
import Logo from "@/assets/header/logo.svg";

const Header = ({ heroSectionRef }) => {
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 left-0 z-50 w-full px-8 py-4 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between">
        <img src={Logo} alt="Logo" className="w-32 h-auto" />

        <div className="flex items-center gap-8">
          <a
            href="#"
            className={scrolled ? "text-black" : "text-white"}
          >
            Home
          </a>

          <a
            href="#"
            className={scrolled ? "text-black" : "text-white"}
          >
            About
          </a>

          <a
            href="#"
            className={scrolled ? "text-black" : "text-white"}
          >
            Contact
          </a>
        </div>

      </nav>
      
    </header>
  );
};

export default Header;
