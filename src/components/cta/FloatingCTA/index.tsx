import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL, PHONE_URL } from "../../../constants";

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);

  const actions = [
    {
      href: WHATSAPP_URL,
      label: "WhatsApp",
      icon: <MessageCircle size={20} className="md:w-7 md:h-7" />,
      className: "bg-green-500 hover:bg-green-600",
      external: true,
    },
    {
      href: PHONE_URL,
      label: "Call Now",
      icon: <Phone size={20} className="md:w-7 md:h-7" />,
      className: "bg-orange-500 hover:bg-orange-600",
      external: false,
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 flex flex-col items-center gap-3">
      <AnimatePresence>
        {open &&
          actions.map((action, i) => (
            <motion.a
              key={action.label}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              aria-label={action.label}
              className={`${action.className} text-white rounded-full shadow-lg flex items-center justify-center transition-colors
                w-10 h-10 md:w-14 md:h-14`}
              initial={{ opacity: 0, scale: 0.4, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.4, y: 10 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
            >
              {action.icon}
            </motion.a>
          ))}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact options" : "Open contact options"}
        className="bg-black border-2 border-orange-500 text-white rounded-full shadow-xl flex items-center justify-center transition-colors hover:bg-gray-900 cursor-pointer
          w-11 h-11 md:w-14 md:h-14"
        animate={{ rotate: open ? 90 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {open ? <X size={20} className="md:w-6 md:h-6" /> : <MessageCircle size={20} className="md:w-6 md:h-6" />}
      </motion.button>
    </div>
  );
}
