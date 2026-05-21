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

      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
            <p className="text-xl text-gray-300">
              Browse our complete catalog of building materials
            </p>
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
