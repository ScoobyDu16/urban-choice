import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import SEO from "../../components/seo/SEO";
import ProductCard from "../../components/product/ProductCard";
import { categories } from "../../data/categories";
import { products } from "../../data/products";
import { SITE_NAME } from "../../constants";

export default function CategoryProductsPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchQuery, setSearchQuery] = useState("");

  const category = categories.find((cat) => cat.slug === categorySlug);

  const filteredProducts = useMemo(() => {
    if (!category) return [];
    return products
      .filter((product) => product.categorySlug === categorySlug)
      .filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.brand && product.brand.toLowerCase().includes(searchQuery.toLowerCase()))
      );
  }, [categorySlug, searchQuery]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">Category not found</h1>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${category.name} Products | Urban Choice`}
        description={`Browse our wide range of ${category.name.toLowerCase()} products in Dubai. ${category.description}`}
        keywords={`${category.name}, building materials, Dubai, ${category.name} shop`}
      />

      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-orange-500 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-600 hover:text-orange-500 transition-colors">
              Products
            </Link>
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

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={`Search ${category.name} products...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product: any, index: number) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found matching your search.</p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-orange-500 hover:text-orange-600 font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
