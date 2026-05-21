import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CategoryGrid from "../CategoryGrid";
import type { Category } from "../../../types/category.types";

interface CategorySectionProps {
  categories: Category[];
  showViewAll?: boolean;
}

export default function CategorySection({
  categories,
  showViewAll = true,
}: CategorySectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of building materials for all your construction needs
          </p>
        </motion.div>

        <CategoryGrid categories={categories} />

        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View All Categories
              <ArrowRight size={20} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
