import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { useEffect } from "react";

interface NavLink {
  path: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
  onClose: () => void;
}

export default function MobileMenu({ links, onClose }: MobileMenuProps) {
  const location = useLocation();

  useEffect(() => {
    onClose();
  }, [location.pathname]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="text-white p-2"
        >
          <X size={28} />
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center flex-1 gap-8">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={`text-2xl font-semibold transition-colors ${
              location.pathname === link.path
                ? "text-orange-500"
                : "text-white hover:text-orange-400"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
