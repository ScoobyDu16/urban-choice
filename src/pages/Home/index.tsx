import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import SEO from "../../components/seo/SEO";
import CategoryCard from "../../components/category/CategoryCard";
import ProductCard from "../../components/product/ProductCard";
import { categories } from "../../data/categories";
import { products } from "../../data/products";
import { company } from "../../data/company";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  GOOGLE_MAPS_EMBED_URL,
  WHATSAPP_URL,
  PHONE_URL,
} from "../../constants";

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const featuredCategories = categories.slice(0, 3);

  const whyChooseUs = [
    "Premium Quality Products",
    "Competitive Pricing",
    "Wide Range of Brands",
    "Expert Advice",
    "Fast Delivery",
    "Excellent Customer Service",
  ];

  return (
    <>
      <SEO
        title="Home"
        description={SITE_DESCRIPTION}
        keywords="building materials, paint shop, sanitary shop, electrical items, hardware materials, Dubai"
      />

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-black to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {SITE_TAGLINE}
            </h1>
            <p className="text-xl text-gray-300 mb-8">{SITE_DESCRIPTION}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                Contact on WhatsApp
                <ArrowRight size={20} />
              </a>
              <a
                href={PHONE_URL}
                className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                Call Now
                <Phone size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of building materials for all your
              construction needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((category: any, index: number) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View All Categories
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular building materials from trusted brands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product: any, index: number) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Short Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About {SITE_NAME}
            </h2>
            <p className="text-gray-600 text-lg mb-8">{company.description}</p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors"
            >
              Learn More About Us
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing the best building materials and
              service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <CheckCircle className="text-orange-500 mb-3" size={32} />
                <h3 className="font-semibold text-lg text-gray-900">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our store in Dubai or contact us for inquiries
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              className="w-full h-96 rounded-xl shadow-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact us today for all your building materials needs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                <Mail size={20} />
                WhatsApp Us
              </a>
              <a
                href={PHONE_URL}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                <MapPin size={20} />
                Visit Contact Page
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
