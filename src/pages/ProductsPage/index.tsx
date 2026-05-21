import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import SEO from "../../components/seo/SEO";
import ProductCard from "../../components/product/ProductCard";
import { products } from "../../data/products";
import { categories } from "../../data/categories";
import { SITE_NAME } from "../../constants";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by category
    if (selectedCategory) {
      result = result.filter((product) => product.categorySlug === selectedCategory);
    }

    // Filter by search
    if (searchQuery) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (product.brand && product.brand.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <SEO
        title="All Building Materials | Urban Choice"
        description="Browse our complete catalog of building materials including paint, sanitary, electrical, hardware, plumbing, and tiles products in Dubai."
        keywords="building materials, Dubai, construction materials, paint, sanitary, electrical, hardware, plumbing, tiles"
      />

      {/* Page Header */}
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

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.slug
                      ? "bg-orange-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.name}
                </button>
              ))}
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
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                }}
                className="mt-4 text-orange-500 hover:text-orange-600 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
