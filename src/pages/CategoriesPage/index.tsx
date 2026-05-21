import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../../components/seo/SEO";
import { categories } from "../../data/categories";
import { SITE_NAME } from "../../constants";

export default function CategoriesPage() {
  return (
    <>
      <SEO
        title="All Categories | Urban Choice"
        description="Browse our wide range of building material categories including paint, sanitary, electrical, hardware, plumbing, and tiles in Dubai."
        keywords="building materials categories, Dubai, construction materials, paint, sanitary, electrical, hardware, plumbing, tiles"
      />

      {/* Page Header */}
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

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={`/products/${category.slug}`}
                  className="block group"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <div className="flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                        <span>View Products</span>
                        <svg
                          className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
