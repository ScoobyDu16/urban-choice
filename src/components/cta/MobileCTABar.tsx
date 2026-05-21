import { MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_URL, PHONE_URL } from "../../constants";

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 md:hidden">
      <div className="flex gap-4">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <MessageCircle size={20} />
          <span className="font-medium">WhatsApp</span>
        </a>
        <a
          href={PHONE_URL}
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <Phone size={20} />
          <span className="font-medium">Call Now</span>
        </a>
      </div>
    </div>
  );
}
