import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ProductGrid from "../ProductGrid";
import type { Product } from "../../../types/product.types";

interface ProductSectionProps {
  products: Product[];
  showViewAll?: boolean;
}

export default function ProductSection({
  products,
  showViewAll = true,
}: ProductSectionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular building materials from trusted brands
          </p>
        </motion.div>

        <ProductGrid products={products} />

        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
