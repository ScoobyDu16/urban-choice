import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Carousel from "../../common/Carousel";
import ProductCard from "../ProductCard";
import type { Product } from "../../../types/product.types";

interface ProductSectionProps {
  products: Product[];
  showViewAll?: boolean;
}

export default function ProductSection({ products, showViewAll = true }: ProductSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4"
        >
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">
              Products
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Featured Products
            </h2>
          </div>
          {showViewAll && (
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-orange-500 font-semibold text-sm transition-colors shrink-0 cursor-pointer"
            >
              View All <ArrowRight size={16} />
            </Link>
          )}
        </motion.div>

        <Carousel
          opts={{ align: "start" }}
          showArrows
          showDots
          autoplay
          autoplayDelay={3500}
          arrowVariant="outside"
          className="px-6"
        >
          {products.map((product) => (
            <div key={product.id} className="flex-none w-[80%] sm:w-[45%] md:w-[30%] lg:w-[23%] pr-5">
              <ProductCard product={product} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
