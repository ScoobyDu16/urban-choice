import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Carousel from "../../common/Carousel";
import CategoryCard from "../CategoryCard";
import type { Category } from "../../../types/category.types";

interface CategorySectionProps {
  categories: Category[];
  showViewAll?: boolean;
}

export default function CategorySection({ categories, showViewAll = true }: CategorySectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
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
              Categories
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Browse by Category
            </h2>
          </div>
          {showViewAll && (
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-orange-500 font-semibold text-sm transition-colors shrink-0 cursor-pointer"
            >
              View All <ArrowRight size={16} />
            </Link>
          )}
        </motion.div>

        {/* Grid on desktop, carousel on mobile */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>

        <div className="lg:hidden">
          <Carousel opts={{ align: "start" }} showArrows showDots autoplay autoplayDelay={4000}>
            {categories.map((category) => (
              <div key={category.id} className="flex-none w-[85%] sm:w-[48%] pr-4">
                <CategoryCard category={category} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
