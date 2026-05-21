import { motion } from "framer-motion";
import SEO from "../../components/seo/SEO";
import ProductGrid from "../../components/product/ProductGrid";
import ProductFilters from "../../components/product/ProductFilters";
import { useProducts } from "../../hooks/useProducts";
import { useSearch } from "../../hooks/useSearch";
import { categories } from "../../data/categories";
import { SEO_TITLES, SEO_DESCRIPTIONS, SEO_KEYWORDS } from "../../constants/seo";

export default function ProductsPage() {
  const allProducts = useProducts();
  const { query, setQuery, categorySlug, setCategorySlug, results } = useSearch(allProducts);

  return (
    <>
      <SEO
        title={SEO_TITLES.PRODUCTS}
        description={SEO_DESCRIPTIONS.PRODUCTS}
        keywords={SEO_KEYWORDS.PRODUCTS}
        pathname="/products"
      />

      <section className="relative min-h-[42vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative container mx-auto px-4 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Catalog
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">All Products</h1>
            <p className="text-gray-300 text-lg">Browse our complete catalog of building materials.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <ProductFilters
            query={query}
            onQueryChange={setQuery}
            categorySlug={categorySlug}
            onCategoryChange={setCategorySlug}
            categories={categories}
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ProductGrid
            products={results}
            onClearFilters={() => { setQuery(""); setCategorySlug(null); }}
          />
        </div>
      </section>
    </>
  );
}
