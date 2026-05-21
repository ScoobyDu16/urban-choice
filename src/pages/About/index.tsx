import { motion } from "framer-motion";
import { Award, Users, Target, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../../components/seo/SEO";
import BrandsStrip from "../../components/home/BrandsStrip";
import { company } from "../../data/company";
import { SITE_NAME, WHATSAPP_URL } from "../../constants";
import { SEO_TITLES, SEO_DESCRIPTIONS, SEO_KEYWORDS } from "../../constants/seo";

const values = [
  { icon: Award, title: "Quality First", description: "We source only the finest building materials from certified manufacturers worldwide." },
  { icon: Users, title: "Customer Focus", description: "Our customers are at the heart of everything we do — we strive to exceed expectations." },
  { icon: Target, title: "Reliability", description: "Consistent quality and dependable service have made us a trusted name in the industry." },
  { icon: Shield, title: "Integrity", description: "We conduct business with honesty, transparency, and ethical practices every day." },
];

const highlights = [
  "One-stop shop for all building materials",
  "50+ globally trusted brands",
  "Serving Dubai & UAE for over a decade",
  "Dedicated after-sales support",
  "Competitive pricing guaranteed",
  "Fast delivery across UAE",
];

export default function About() {
  return (
    <>
      <SEO
        title={SEO_TITLES.ABOUT}
        description={SEO_DESCRIPTIONS.ABOUT}
        keywords={SEO_KEYWORDS.ABOUT}
        pathname="/about"
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
              About {SITE_NAME}
            </h1>
            <p className="text-gray-300 text-lg">
              Your trusted building materials partner in Dubai — quality products, expert advice, unbeatable prices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Built on Trust &amp; Quality
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">{company.description}</p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Based in Dubai, UAE, we serve contractors, builders, architects, and homeowners across the region.
                Our extensive product range includes premium paints, sanitary ware, electrical items, hardware tools,
                plumbing supplies, and tiles from world-renowned brands.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-orange-500 mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
                  alt="Urban Choice building materials"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-orange-500 text-white rounded-2xl p-5 shadow-xl hidden md:block">
                <p className="text-3xl font-extrabold">500+</p>
                <p className="text-sm font-medium opacity-90">Products</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-gray-500 max-w-xl mx-auto">The principles that guide every decision we make.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-100 transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 bg-orange-50 group-hover:bg-orange-500 rounded-xl flex items-center justify-center mb-5 mx-auto transition-colors duration-300">
                  <value.icon size={24} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <BrandsStrip />

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Partner With Us Today
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-lg mx-auto">
              Whether you're a contractor, architect, or homeowner — we have everything you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 cursor-pointer"
              >
                WhatsApp Us <ArrowRight size={18} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
