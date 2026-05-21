import type { Category } from "../../types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link to={`/products/${category.slug}`} className="block group cursor-pointer">
      <motion.div
        className="relative overflow-hidden rounded-2xl shadow-md"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
      >
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-white text-xl font-bold mb-1">{category.name}</h3>
          {category.description && (
            <p className="text-white/70 text-sm line-clamp-1 mb-3">{category.description}</p>
          )}
          <span className="inline-flex items-center gap-1.5 text-orange-400 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
            View Products <ArrowRight size={14} />
          </span>
        </div>

        {/* Featured badge */}
        {category.featured && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            Popular
          </div>
        )}
      </motion.div>
    </Link>
  );
}
