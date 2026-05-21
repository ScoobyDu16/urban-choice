import { motion } from "framer-motion";
import { Package, Award, Clock, Users } from "lucide-react";

const stats = [
  { icon: Package, value: "500+", label: "Products" },
  { icon: Award, value: "50+", label: "Trusted Brands" },
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Users, value: "1,000+", label: "Happy Clients" },
];

export default function StatsSection() {
  return (
    <section className="bg-orange-500 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center text-center text-white"
            >
              <stat.icon size={28} className="mb-2 opacity-90" />
              <span className="text-3xl md:text-4xl font-bold">{stat.value}</span>
              <span className="text-sm md:text-base font-medium opacity-90 mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
