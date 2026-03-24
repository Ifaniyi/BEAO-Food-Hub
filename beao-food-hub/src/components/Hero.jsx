// src/components/Hero.jsx
import { motion } from "framer-motion";
import { ArrowRight, Truck, ShieldCheck, Clock } from "lucide-react";
import foodImage1 from "../assets/food1.jpg";
import foodImage2 from "../assets/food2.jpg";
import foodImage3 from "../assets/food3.jpg";
import foodImage4 from "../assets/food4.jpg";

const features = [
  { icon: <Truck size={20} strokeWidth={1.8} />, title: "Fast Delivery", subtitle: "Across Nigeria" },
  { icon: <ShieldCheck size={20} strokeWidth={1.8} />, title: "Quality Assured", subtitle: "100% Fresh" },
  { icon: <Clock size={20} strokeWidth={1.8} />, title: "24/7 Support", subtitle: "Always Here" },
];

export default function Hero() {
  return (
    <section className="bg-[#f0f5f0]">
      <div className="max-w-[1200px] mx-auto w-full px-10 py-12">

        {/* HERO ROW */}
        <div className="flex items-start justify-between gap-10">

          {/* LEFT SIDE */}
          <div className="flex flex-col flex-1 max-w-[480px]">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#e0ede0] text-[#1a6b3c] text-sm font-medium px-4 py-1.5 rounded-full mb-5 w-fit"
            >
              <span>🇳🇬</span>
              <span>Proudly Nigerian</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[48px] font-extrabold text-gray-900 leading-tight mb-4"
            >
              Fresh Food,{" "}
              <span className="text-[#1a6b3c]">Delivered</span>{" "}
              to Your Door
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 text-sm leading-relaxed mb-7"
            >
              Discover authentic Nigerian groceries — from local snacks to fresh
              spices, all at the best prices with fast delivery.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 mb-10"
            >
              <button
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 bg-[#1a6b3c] hover:bg-[#155a32] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Shop Now <ArrowRight size={16} />
              </button>
              <button
                onClick={() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-[#1a6b3c] text-[#1a6b3c] hover:bg-[#e0ede0] font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                View Categories
              </button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-[#e0ede0] text-[#1a6b3c] rounded-full flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-tight">{feature.title}</p>
                    <p className="text-xs text-gray-500">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* RIGHT SIDE - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 max-w-[560px] grid grid-cols-2 gap-3"
          >
            <img
              src={foodImage1}
              alt="Fresh food bowl"
              className="w-full h-[280px] object-cover rounded-2xl"
            />
            <img
              src={foodImage3}
              alt="Fresh fruits"
              className="w-full h-[280px] object-cover rounded-2xl"
            />
            <img
              src={foodImage2}
              alt="Fresh tomatoes"
              className="w-full h-[200px] object-cover rounded-2xl"
            />
            <img
              src={foodImage4}
              alt="Fresh vegetables"
              className="w-full h-[200px] object-cover rounded-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}