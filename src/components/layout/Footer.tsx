import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import {
  CONTACT_NUMBER,
  EMAIL,
  POSTAL_BOX,
  TELEPHONE,
  WORKING_HOURS,
  SITE_NAME,
  WHATSAPP_URL,
  PHONE_URL,
} from "../../constants";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/categories", label: "Categories" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt={SITE_NAME} className="h-10 w-auto" />
              <span className="text-xl font-bold">{SITE_NAME}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Your trusted building materials partner in Dubai. Premium quality
              products at competitive prices.
            </p>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                WhatsApp
              </a>
              <a
                href={PHONE_URL}
                className="bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-orange-400 text-sm flex items-center gap-2 group transition-colors cursor-pointer"
                  >
                    <ArrowRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-200"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-base font-bold mb-5 text-white">Categories</h3>
            <ul className="space-y-3">
              {[
                "Paint",
                "Sanitary",
                "Electrical",
                "Hardware",
                "Plumbing",
                "Tiles",
              ].map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/products/${cat.toLowerCase()}`}
                    className="text-gray-400 hover:text-orange-400 text-sm flex items-center gap-2 group transition-colors cursor-pointer"
                  >
                    <ArrowRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-200"
                    />
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-5 text-white">
              Contact Info
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={15} className="mt-0.5 text-orange-500 shrink-0" />
                <span>
                  Dubai, United Arab Emirates
                  <br />
                  {POSTAL_BOX}
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={15} className="text-orange-500 shrink-0" />
                <div className="space-y-1">
                  <a
                    href={`tel:${CONTACT_NUMBER.replace(/\s/g, "")}`}
                    className="block hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    {CONTACT_NUMBER}
                  </a>
                  <a
                    href={`tel:${TELEPHONE.replace(/\s/g, "")}`}
                    className="block hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    {TELEPHONE}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={15} className="text-orange-500 shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <Clock size={15} className="mt-0.5 text-orange-500 shrink-0" />
                <span className="text-xs leading-relaxed">{WORKING_HOURS}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p>Building Materials Supplier · Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
}
