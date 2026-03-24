// src/components/Bestsellers.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowRight, Star, Eye, ShoppingCart } from "lucide-react";
import QuickViewModal from "./QuickViewModal";

import ofadaPepperMix from "../assets/ofadapeppermix.jpg";
import kingsVegetableOil from "../assets/kingsvegetableoil.jpg";
import crunchyGarri from "../assets/crunchygarri.jpg";
import cleanedBlendedCrayfish from "../assets/cleanedblendedcrayfish.jpg";

const products = [
  {
    id: 1,
    category: "PEPPER",
    name: "Fresh AYAMASE / OFADA PEPPER MIX",
    priceRange: "₦8,000 – ₦32,000",
    originalRange: null,
    discount: 91,
    basePrice: 8000,
    description: "Fresh Ayamase/Ofada pepper mix, perfect for Nigerian dishes.",
    image: ofadaPepperMix,
  },
  {
    id: 2,
    category: "OIL",
    name: "KINGS VEGETABLE OIL",
    priceRange: "₦18,500",
    originalRange: null,
    discount: 3,
    basePrice: 18500,
    description: "Premium quality vegetable oil for all your cooking needs.",
    image: kingsVegetableOil,
  },
  {
    id: 3,
    category: "GRAINS",
    name: "Crunchy Garri",
    priceRange: "₦2,500 – ₦50,000",
    originalRange: "₦1,500 – ₦65,000",
    discount: 27,
    basePrice: 2500,
    description: "Freshly processed crunchy garri, straight from the farm.",
    image: crunchyGarri,
  },
  {
    id: 4,
    category: "CRAYFISH",
    name: "Cleaned Blended Crayfish",
    priceRange: "₦2,500 – ₦10,000",
    originalRange: null,
    discount: 28,
    basePrice: 2500,
    description: "100% cleaned and blended crayfish for authentic Nigerian soups.",
    image: cleanedBlendedCrayfish,
  },
];

function ProductCard({ product, index, onQuickView }) {
  const [wished, setWished] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-[220px] object-cover transition-transform duration-500 ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />

        {/* Dark overlay on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20"
            />
          )}
        </AnimatePresence>

        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full">
          -{product.discount}% OFF
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => { e.stopPropagation(); setWished(!wished); }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-all ${
            wished ? "bg-red-50 border border-red-200" : "bg-white"
          }`}
        >
          <Heart
            size={15}
            className={wished ? "fill-red-500 text-red-500" : "text-gray-400"}
          />
        </button>

        {/* Eye Icon on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.button
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              onClick={() => onQuickView(product)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <Eye size={18} className="text-gray-700" />
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Card Body */}
      <div className="p-4">
        <p className="text-xs font-bold text-[#1a6b3c] mb-1 tracking-wide">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[40px]">
          {product.name}
        </h3>
        <div className="mb-3">
          <p className="text-base font-bold text-gray-900">{product.priceRange}</p>
          {product.originalRange && (
            <p className="text-xs text-gray-400 line-through">{product.originalRange}</p>
          )}
        </div>
        <button className="w-full bg-[#1a6b3c] hover:bg-[#155a32] text-white text-sm font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
          <ShoppingCart size={15} />
          Select Options
        </button>
      </div>
    </motion.div>
  );
}

export default function Bestsellers() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="bg-[#f0f5f0]">
      <div className="max-w-[1200px] mx-auto w-full px-10 py-14">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 text-orange-400 rounded-xl flex items-center justify-center">
              <Star size={20} className="fill-orange-400" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Bestsellers</h2>
              <p className="text-sm text-gray-500">Most loved by our customers</p>
            </div>
          </div>
          <button className="flex items-center gap-1.5 text-[#1a6b3c] font-semibold text-sm hover:gap-3 transition-all">
            View all <ArrowRight size={16} />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-5">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onQuickView={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}