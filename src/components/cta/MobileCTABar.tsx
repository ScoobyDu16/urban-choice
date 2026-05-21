import { MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_URL, PHONE_URL } from "../../constants";

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-6 py-2 md:hidden">
      <div className="flex gap-4 justify-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-md"
        >
          <MessageCircle size={22} />
        </a>
        <a
          href={PHONE_URL}
          aria-label="Call Now"
          className="bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-md"
        >
          <Phone size={22} />
        </a>
      </div>
    </div>
  );
}
