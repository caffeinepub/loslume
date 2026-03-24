import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About Us", to: "/about" },
  { label: "Our Socials", to: "/socials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-offwhite/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-2xl font-bold text-brown tracking-wide hover:text-golden transition-colors"
          data-ocid="nav.link"
        >
          LosLume
        </Link>

        <nav
          className="hidden md:flex gap-8 items-center"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm tracking-widest uppercase transition-colors hover:text-golden ${
                location.pathname === link.to
                  ? "text-golden border-b-2 border-golden pb-0.5"
                  : "text-brown"
              }`}
              data-ocid={`nav.${link.label.toLowerCase().replace(/\s+/g, "_")}.link`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden text-brown hover:text-golden transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-ocid="nav.menu.toggle"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-offwhite border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`font-body text-sm tracking-widest uppercase py-2 transition-colors hover:text-golden ${
                    location.pathname === link.to ? "text-golden" : "text-brown"
                  }`}
                  data-ocid={`nav.mobile.${link.label.toLowerCase().replace(/\s+/g, "_")}.link`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
