import type { Product } from "../../types";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "../../constants";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in ${product.name}. Can you provide more details?`
  );
  const whatsappLink = `${WHATSAPP_URL}?text=${whatsappMessage}`;

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{product.name}</h3>
        {product.brand && (
          <p className="text-sm text-gray-600 mb-3">{product.brand}</p>
        )}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
        >
          Inquire on WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
