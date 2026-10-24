import Logo from "@/assets/header/logo.svg";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#A8B9A0]/40 bg-[#FAF7F0] px-5 py-6 sm:px-8 sm:py-8 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row sm:items-center sm:gap-8">

        {/* Left Side - Vertical Links */}
        <nav
          aria-label="Footer navigation"
          className="flex items-start self-start gap-3 mt-5"
        >
          <a
            href="/privacy"
            className="text-sm text-[#292F2B] transition-colors hover:text-[#355847]"
          >
            Privacy
          </a>

          <a
            href="/terms"
            className="text-sm text-[#292F2B] transition-colors hover:text-[#355847]"
          >
            Terms and Conditions
          </a>

          <a
            href="/game"
            className="text-sm text-[#292F2B] transition-colors hover:text-[#355847]"
          >
            Games
          </a>
        </nav>

        {/* Right Side - Logo and Copyright */}
        <div className="flex flex-col items-center gap-3 sm:items-end">
          <img
            src={Logo}
            alt="Mentor Me logo"
            className="h-8 w-auto object-contain"
          />

          <p className="text-center text-xs text-[#292F2B]/70 sm:text-right sm:text-sm">
            © {new Date().getFullYear()} Mentor Me. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
