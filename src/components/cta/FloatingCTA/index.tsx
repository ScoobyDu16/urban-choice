import { useState, useEffect, useRef } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL, PHONE_URL } from "../../../constants";

const actions = [
  {
    href: WHATSAPP_URL,
    label: "WhatsApp",
    icon: <MessageCircle size={20} />,
    className: "bg-green-500 hover:bg-green-600",
    external: true,
  },
  {
    href: PHONE_URL,
    label: "Call Now",
    icon: <Phone size={20} />,
    className: "bg-orange-500 hover:bg-orange-600",
    external: false,
  },
];

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /* True on desktop (mouse), false on touch screens */
  const supportsHover =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* Close on outside click (used by both modes) */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 flex flex-col items-center gap-3"
      onMouseEnter={() => supportsHover && setOpen(true)}
      onMouseLeave={() => supportsHover && setOpen(false)}
    >
      <AnimatePresence>
        {open &&
          actions.map((action, i) => (
            <motion.a
              key={action.label}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              aria-label={action.label}
              className={`${action.className} text-white rounded-full shadow-lg flex items-center justify-center transition-colors cursor-pointer w-10 h-10 md:w-12 md:h-12`}
              initial={{ opacity: 0, scale: 0.5, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 8 }}
              transition={{ duration: 0.18, delay: i * 0.05 }}
            >
              {action.icon}
            </motion.a>
          ))}
      </AnimatePresence>

      <motion.button
        /* Mobile: tap to toggle. Desktop: hover handled by parent — click still works as fallback */
        onClick={() => !supportsHover && setOpen((v) => !v)}
        aria-label={open ? "Close contact options" : "Open contact options"}
        className="bg-black border-2 border-orange-500 text-white rounded-full shadow-xl flex items-center justify-center transition-colors hover:bg-gray-900 cursor-pointer w-11 h-11 md:w-14 md:h-14"
        animate={{ rotate: open ? 90 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </motion.button>
    </div>
  );
}
