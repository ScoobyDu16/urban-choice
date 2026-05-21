import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../../components/seo/SEO";
import ProductGrid from "../../components/product/ProductGrid";
import ProductFilters from "../../components/product/ProductFilters";
import { useCategoryBySlug } from "../../hooks/useCategories";
import { useProductsByCategory } from "../../hooks/useProducts";
import { filterProductsBySearch } from "../../utils/filters";
import { SITE_NAME } from "../../constants";

export default function CategoryProductsPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [query, setQuery] = useState("");

  const category = useCategoryBySlug(categorySlug);
  const categoryProducts = useProductsByCategory(categorySlug);
  const filteredProducts = query
    ? filterProductsBySearch(categoryProducts, query)
    : categoryProducts;

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category not found</h1>
          <Link to="/categories" className="text-orange-500 hover:text-orange-600 font-medium">
            Browse all categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${category.name} Products | ${SITE_NAME}`}
        description={`Browse our wide range of ${category.name.toLowerCase()} products in Dubai. ${category.description}`}
        keywords={`${category.name}, building materials Dubai, ${category.name} shop Dubai`}
        pathname={`/products/${categorySlug}`}
      />

      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm" aria-label="Breadcrumb">
            <Link to="/" className="text-gray-600 hover:text-orange-500 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-600 hover:text-orange-500 transition-colors">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-orange-500 font-medium">{category.name}</span>
          </nav>
        </div>
      </section>

      {/* Category Banner */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name} Products</h1>
            <p className="text-xl text-gray-300">{category.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <ProductFilters
            query={query}
            onQueryChange={setQuery}
            categorySlug={null}
            onCategoryChange={() => {}}
            categories={[]}
            searchPlaceholder={`Search ${category.name} products...`}
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ProductGrid
            products={filteredProducts}
            onClearFilters={query ? () => setQuery("") : undefined}
          />
        </div>
      </section>
    </>
  );
}
