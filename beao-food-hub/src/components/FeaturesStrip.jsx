// src/components/FeaturesStrip.jsx
import { motion } from "framer-motion";
import { Truck, ShieldCheck, Clock } from "lucide-react";

const features = [
  {
    icon: <Truck size={22} strokeWidth={1.8} />,
    title: "Fast Delivery",
    subtitle: "Across Nigeria",
  },
  {
    icon: <ShieldCheck size={22} strokeWidth={1.8} />,
    title: "Quality Assured",
    subtitle: "100% Fresh",
  },
  {
    icon: <Clock size={22} strokeWidth={1.8} />,
    title: "24/7 Support",
    subtitle: "Always Here",
  },
];

export default function FeaturesStrip() {
  return (
    <section className="bg-[#f0f5f0] border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto w-full px-10 py-6 flex items-center justify-between">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-3"
          >
            {/* Icon */}
            <div className="w-10 h-10 bg-[#e0ede0] text-[#1a6b3c] rounded-full flex items-center justify-center shrink-0">
              {feature.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-sm font-bold text-gray-900">{feature.title}</h3>
              <p className="text-xs text-gray-500">{feature.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}