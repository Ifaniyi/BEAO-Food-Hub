// src/components/SpecialOfferBanner.jsx
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function SpecialOfferBanner() {
  return (
    <section className="bg-[#f0f5f0]">
      <div className="max-w-[1200px] mx-auto w-full px-10 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a6b3c] rounded-2xl px-10 py-10 flex items-center justify-between gap-10 relative overflow-hidden"
        >
          {/* Background decorative circles */}
          <div className="absolute right-60 top-0 w-40 h-40 rounded-full bg-white/5" />
          <div className="absolute right-40 bottom-0 w-28 h-28 rounded-full bg-white/5" />
          <div className="absolute right-72 bottom-[-20px] w-52 h-52 rounded-full bg-white/5" />

          {/* LEFT - Text */}
          <div className="flex flex-col gap-3 z-10">
            {/* Special Offer label */}
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-orange-400" />
              <span className="text-orange-400 font-semibold text-sm">
                Special Offer
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl font-extrabold text-white leading-tight">
              Get 5% Off Your First Order
            </h2>

            {/* Subtext */}
            <p className="text-white/80 text-sm leading-relaxed max-w-[480px]">
              Use code{" "}
              <span className="bg-white/20 text-white font-bold px-2 py-0.5 rounded-md">
                D6QW4B
              </span>{" "}
              at checkout and enjoy fresh Nigerian food delivered to your doorstep.
            </p>
          </div>

          {/* RIGHT - Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 bg-orange-400 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 transition-colors z-10 text-sm"
          >
            Shop Now <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}