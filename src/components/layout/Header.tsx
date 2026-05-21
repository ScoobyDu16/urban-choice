import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { SITE_NAME } from "../../constants";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/categories", label: "Categories" },
  { path: "/products", label: "Products" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="bg-black text-white sticky top-0 z-40">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt={SITE_NAME} className="h-10 w-auto" />
              <span className="text-xl font-bold">{SITE_NAME}</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                    location.pathname === link.path ? "text-orange-500" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <MobileMenu links={navLinks} onClose={() => setMenuOpen(false)} />
      )}
    </>
  );
}
