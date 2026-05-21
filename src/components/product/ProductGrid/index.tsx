import { motion } from "framer-motion";
import ProductCard from "../ProductCard";
import EmptyState from "../../common/EmptyState";
import type { Product } from "../../../types/product.types";

interface ProductGridProps {
  products: Product[];
  onClearFilters?: () => void;
}

export default function ProductGrid({ products, onClearFilters }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <EmptyState
        message="No products found matching your search."
        actionLabel={onClearFilters ? "Clear filters" : undefined}
        onAction={onClearFilters}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
}
