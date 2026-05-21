import { Phone } from "lucide-react";
import { PHONE_URL } from "../../constants";
import { motion } from "framer-motion";

export default function PhoneCTA() {
  return (
    <motion.a
      href={PHONE_URL}
      className="fixed bottom-6 left-6 z-50 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Call us now"
    >
      <Phone size={28} />
    </motion.a>
  );
}
