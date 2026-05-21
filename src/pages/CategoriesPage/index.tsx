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

      <section className="relative min-h-[42vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative container mx-auto px-4 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Browse
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">All Categories</h1>
            <p className="text-gray-300 text-lg">Explore our complete range of building material categories.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <CategoryGrid categories={categories} />
        </div>
      </section>
    </>
  );
}
