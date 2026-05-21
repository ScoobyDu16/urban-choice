import { motion } from "framer-motion";
import SEO from "../../components/seo/SEO";
import CategoryGrid from "../../components/category/CategoryGrid";
import { useCategories } from "../../hooks/useCategories";
import { SEO_TITLES, SEO_DESCRIPTIONS, SEO_KEYWORDS } from "../../constants/seo";

export default function CategoriesPage() {
  const categories = useCategories();

  return (
    <>
      <SEO
        title={SEO_TITLES.CATEGORIES}
        description={SEO_DESCRIPTIONS.CATEGORIES}
        keywords={SEO_KEYWORDS.CATEGORIES}
        pathname="/categories"
      />

      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Categories</h1>
            <p className="text-xl text-gray-300">
              Explore our complete range of building material categories
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <CategoryGrid categories={categories} />
        </div>
      </section>
    </>
  );
}
