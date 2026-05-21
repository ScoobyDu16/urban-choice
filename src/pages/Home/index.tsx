import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Phone, CheckCircle, MapPin,
  Truck, HeadphonesIcon, ShieldCheck, Banknote,
} from "lucide-react";
import SEO from "../../components/seo/SEO";
import Carousel from "../../components/common/Carousel";
import CategorySection from "../../components/category/CategorySection";
import ProductSection from "../../components/product/ProductSection";
import StatsSection from "../../components/home/StatsSection";
import BrandsStrip from "../../components/home/BrandsStrip";
import GoogleMap from "../../components/map/GoogleMap";
import { useFeaturedCategories } from "../../hooks/useCategories";
import { useProducts } from "../../hooks/useProducts";
import { company } from "../../data/company";
import { WHATSAPP_URL, PHONE_URL } from "../../constants";
import { SEO_TITLES, SEO_DESCRIPTIONS, SEO_KEYWORDS } from "../../constants/seo";
import { FEATURED_CATEGORIES_COUNT } from "../../constants/config";
import { buildLocalBusinessSchema } from "../../utils/seo";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    badge: "Dubai's Trusted Supplier",
    title: "Your Building Materials Partner in Dubai",
    subtitle: "Premium paints, sanitary ware, electrical, hardware & more — all under one roof.",
  },
  {
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&q=80",
    badge: "Premium Paints & Finishes",
    title: "Transform Every Surface with Premium Paints",
    subtitle: "Dulux, Jotun, Asian Paints & more — expert guidance included.",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    badge: "Complete Interior Solutions",
    title: "Tiles, Sanitary & Electrical for Every Project",
    subtitle: "World-class brands at competitive prices, delivered across Dubai.",
  },
];

const whyCards = [
  { icon: ShieldCheck, title: "Premium Quality", desc: "We source only certified, authentic products from trusted global manufacturers." },
  { icon: Banknote, title: "Competitive Pricing", desc: "Get the best value without compromising on quality — guaranteed." },
  { icon: Truck, title: "Fast Delivery", desc: "Reliable delivery across Dubai and the UAE to keep your project on schedule." },
  { icon: HeadphonesIcon, title: "Expert Support", desc: "Our knowledgeable team is ready to help you choose the right materials." },
  { icon: CheckCircle, title: "Wide Brand Range", desc: "50+ globally trusted brands across every product category." },
  { icon: MapPin, title: "Convenient Location", desc: "Centrally located in Dubai — easy access for contractors and homeowners." },
];

export default function Home() {
  const featuredCategories = useFeaturedCategories(FEATURED_CATEGORIES_COUNT);
  const allProducts = useProducts().slice(0, 8);

  const structuredData = buildLocalBusinessSchema({
    name: company.name, description: company.description,
    address: company.address, city: company.city, country: company.country,
    phone: company.phone, email: company.email,
    googleMapsLink: company.googleMapsLink, workingHours: company.workingHours,
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

      {/* ── HERO CAROUSEL ── */}
      <Carousel autoplay autoplayDelay={5000} showArrows showDots arrowVariant="overlay" className="h-[88vh] min-h-[560px]">
        {heroSlides.map((slide, i) => (
          <div key={i} className="flex-none w-full h-[88vh] min-h-[560px] relative">
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="max-w-2xl"
                >
                  <span className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                    {slide.badge}
                  </span>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
                    {slide.title}
                  </h1>
                  <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 cursor-pointer"
                    >
                      WhatsApp Us <ArrowRight size={16} />
                    </a>
                    <a
                      href={PHONE_URL}
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer"
                    >
                      <Phone size={16} /> Call Now
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* ── STATS BAR ── */}
      <StatsSection />

      {/* ── CATEGORIES ── */}
      <CategorySection categories={featuredCategories} showViewAll />

      {/* ── FEATURED PRODUCTS ── */}
      <ProductSection products={allProducts} showViewAll={false} />

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Why Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Urban Choice</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Thousands of contractors, builders, and homeowners trust us for their building needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-100 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 bg-orange-50 group-hover:bg-orange-500 rounded-xl flex items-center justify-center mb-5 mx-auto transition-colors duration-300">
                  <card.icon size={22} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80"
                  alt="Urban Choice building materials showroom"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white rounded-2xl p-5 shadow-xl hidden md:block">
                <p className="text-3xl font-extrabold">10+</p>
                <p className="text-sm font-medium opacity-90">Years in Business</p>
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Dubai's Premier Building Materials Supplier
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                {company.description}
              </p>
              <ul className="space-y-3 mb-8">
                {["Premium quality products from global brands", "Serving Dubai and UAE since over a decade", "Complete one-stop solution for all building needs"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle size={18} className="text-orange-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-orange-500 text-white px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BRANDS STRIP ── */}
      <BrandsStrip />

      {/* ── MAP ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Location</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Find Us in Dubai</h2>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <GoogleMap showLink />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
              Contact us today — our team will help you find the right materials at the best price.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 cursor-pointer"
              >
                WhatsApp Us <ArrowRight size={18} />
              </a>
              <a
                href={PHONE_URL}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 cursor-pointer"
              >
                <Phone size={18} /> Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 cursor-pointer"
              >
                <MapPin size={18} /> Contact Page
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
