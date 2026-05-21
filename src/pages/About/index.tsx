import { motion } from "framer-motion";
import { Award, Users, Target, Shield } from "lucide-react";
import SEO from "../../components/seo/SEO";
import { company } from "../../data/company";
import { SITE_NAME, SITE_TAGLINE } from "../../constants";
import { SEO_TITLES, SEO_DESCRIPTIONS, SEO_KEYWORDS } from "../../constants/seo";

export default function About() {
  const values = [
    {
      icon: <Award className="text-orange-500" size={32} />,
      title: "Quality First",
      description: "We source only the finest building materials from trusted manufacturers worldwide.",
    },
    {
      icon: <Users className="text-orange-500" size={32} />,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do. We strive to exceed expectations.",
    },
    {
      icon: <Target className="text-orange-500" size={32} />,
      title: "Reliability",
      description: "Consistent quality and dependable service have made us a trusted name in the industry.",
    },
    {
      icon: <Shield className="text-orange-500" size={32} />,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices.",
    },
  ];

  const brands = [
    "Dulux",
    "Jotun",
    "Asian Paints",
    "Berger",
    "Grohe",
    "Kohler",
    "TOTO",
    "Hansgrohe",
    "Legrand",
    "Schneider",
    "Philips",
    "Havells",
  ];

  return (
    <>
      <SEO
        title={SEO_TITLES.ABOUT}
        description={SEO_DESCRIPTIONS.ABOUT}
        keywords={SEO_KEYWORDS.ABOUT}
        pathname="/about"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About {SITE_NAME}</h1>
            <p className="text-xl text-gray-300">{SITE_TAGLINE}</p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {company.description}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Based in Dubai, UAE, we serve contractors, builders, architects, and homeowners across the region.
              Our extensive product range includes premium paints, sanitary ware, electrical items, hardware tools,
              plumbing supplies, and tiles from world-renowned brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our business and relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted Brands</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We partner with leading manufacturers to bring you the best products
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-200"
              >
                <span className="font-medium text-gray-700">{brand}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Why Choose Us</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Extensive Product Range</h3>
                <p className="text-gray-600">
                  From paints to plumbing, we have everything you need for your construction projects under one roof.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  We offer premium quality products at prices that provide excellent value for money.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600">
                  Our knowledgeable team provides expert advice to help you choose the right products for your needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Reliable Service</h3>
                <p className="text-gray-600">
                  We are committed to timely delivery and exceptional customer service.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
