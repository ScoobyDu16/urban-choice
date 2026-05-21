import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import SEO from "../../components/seo/SEO";
import CategorySection from "../../components/category/CategorySection";
import ProductSection from "../../components/product/ProductSection";
import GoogleMap from "../../components/map/GoogleMap";
import { useFeaturedCategories } from "../../hooks/useCategories";
import { useFeaturedProducts } from "../../hooks/useProducts";
import { company } from "../../data/company";
import {
  SITE_NAME,
  SITE_TAGLINE,
  WHATSAPP_URL,
  PHONE_URL,
} from "../../constants";
import { SEO_TITLES, SEO_DESCRIPTIONS, SEO_KEYWORDS } from "../../constants/seo";
import { FEATURED_CATEGORIES_COUNT, FEATURED_PRODUCTS_COUNT } from "../../constants/config";
import { buildLocalBusinessSchema } from "../../utils/seo";

const whyChooseUs = [
  "Premium Quality Products",
  "Competitive Pricing",
  "Wide Range of Brands",
  "Expert Advice",
  "Fast Delivery",
  "Excellent Customer Service",
];

export default function Home() {
  const featuredCategories = useFeaturedCategories(FEATURED_CATEGORIES_COUNT);
  const featuredProducts = useFeaturedProducts(FEATURED_PRODUCTS_COUNT);

  const structuredData = buildLocalBusinessSchema({
    name: company.name,
    description: company.description,
    address: company.address,
    city: company.city,
    country: company.country,
    phone: company.phone,
    email: company.email,
    googleMapsLink: company.googleMapsLink,
    workingHours: company.workingHours,
  });

  return (
    <>
      <SEO
        title={SEO_TITLES.HOME}
        description={SEO_DESCRIPTIONS.HOME}
        keywords={SEO_KEYWORDS.HOME}
        pathname="/"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-black to-gray-900 text-white py-12 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-6 leading-tight">
              {SITE_TAGLINE}
            </h1>
            <p className="hidden sm:block text-base md:text-xl text-gray-300 mb-6 md:mb-8">
              {company.description}
            </p>
            <p className="sm:hidden text-sm text-gray-400 mb-6">
              Premium building materials supplier in Dubai — paint, sanitary, electrical &amp; more.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 md:px-8 md:py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2 text-sm md:text-base"
              >
                WhatsApp Us
                <ArrowRight size={16} className="md:w-5 md:h-5" />
              </a>
              <a
                href={PHONE_URL}
                className="bg-white hover:bg-gray-100 text-black px-5 py-2.5 md:px-8 md:py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2 text-sm md:text-base"
              >
                Call Now
                <Phone size={16} className="md:w-5 md:h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <CategorySection categories={featuredCategories} showViewAll />

      {/* Featured Products Section */}
      <ProductSection products={featuredProducts} showViewAll />

      {/* About Preview */}
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

      {/* Why Choose Us */}
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
              We are committed to providing the best building materials and service
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

      {/* Google Map */}
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
            <GoogleMap showLink={false} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
