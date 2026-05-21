import type { Product } from "../../types";
import { motion } from "framer-motion";
import { MessageCircle, Tag } from "lucide-react";
import { WHATSAPP_URL } from "../../constants";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappLink = `${WHATSAPP_URL}?text=${encodeURIComponent(
    `Hi, I'm interested in ${product.name}. Can you provide more details and pricing?`
  )}`;

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group"
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
      transition={{ duration: 0.25 }}
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-gray-50 relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.featured && (
          <div className="absolute top-2.5 left-2.5 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        {product.brand && (
          <div className="flex items-center gap-1 mb-1.5">
            <Tag size={11} className="text-orange-500" />
            <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">
              {product.brand}
            </span>
          </div>
        )}
        <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-3 line-clamp-2">
          {product.name}
        </h3>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-orange-500 text-white text-sm font-medium py-2.5 rounded-xl transition-colors duration-200 cursor-pointer"
        >
          <MessageCircle size={15} />
          Enquire Now
        </a>
      </div>
    </motion.div>
  );
}
