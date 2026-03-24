import { Link } from "@tanstack/react-router";
import { Flame } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer className="bg-brown text-cream py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Flame size={20} className="text-golden" />
              <span className="font-display text-2xl font-bold text-golden">
                LosLume
              </span>
            </div>
            <p className="font-body text-cream/70 text-sm leading-relaxed">
              Handcrafted luxury candles for your most treasured spaces.
            </p>
          </div>

          <div>
            <h4 className="font-display text-golden text-sm tracking-widest uppercase mb-4">
              Navigate
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "Shop", to: "/shop" },
                { label: "About Us", to: "/about" },
                { label: "Our Socials", to: "/socials" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-cream/70 text-sm hover:text-golden transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-golden text-sm tracking-widest uppercase mb-4">
              Connect
            </h4>
            <p className="font-body text-cream/70 text-sm">@LosLumeCandles</p>
            <p className="font-body text-cream/70 text-sm mt-1">
              hello@loslume.com
            </p>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="font-body text-cream/50 text-xs">
            &copy; {year} LosLume. All rights reserved.
          </p>
          <p className="font-body text-cream/50 text-xs">
            Built with &#10084;&#65039; using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-golden transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
