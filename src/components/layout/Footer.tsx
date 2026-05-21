import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT_NUMBER, EMAIL, POSTAL_BOX, TELEPHONE, WORKING_HOURS, SITE_NAME } from "../../constants";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{SITE_NAME}</h3>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted building materials partner in Dubai. Quality products at competitive prices.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-orange-500 transition-colors">
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href={`tel:${CONTACT_NUMBER.replace(/\s/g, "")}`} className="hover:text-orange-500 transition-colors">
                  {CONTACT_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <span>{TELEPHONE}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="mt-1 flex-shrink-0" />
                <span className="text-gray-400">{WORKING_HOURS}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>{POSTAL_BOX}</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
