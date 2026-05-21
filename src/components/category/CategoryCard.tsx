import type { Category } from "../../types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to={`/products/${category.slug}`}
        className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
      >
        <div className="aspect-square bg-gray-100 relative overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold text-xl">{category.name}</h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
