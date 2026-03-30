// src/components/ProductsSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Eye, ShoppingCart, ShoppingBag, Banana,
         Wheat, Cookie, Fish, Flame, Package } from "lucide-react";
import QuickViewModal from "./QuickViewModal";

import sisipelebe from "../assets/sisipelebe.jpg";
import ofadapeppermix from "../assets/ofadapeppermix.jpg";
import kokoro from "../assets/kokoro.jpg";
import kingsvegetableoil from "../assets/kingsvegetableoil.jpg";
import crunchykulikulialata from "../assets/crunchykulikulialata.jpg";
import crunchygarri from "../assets/crunchygarri.jpg";
import coconutcandy from "../assets/coconutcandy.jpg";
import cleanedblendedcrayfish from "../assets/cleanedblendedcrayfish.jpg";
import babadudu from "../assets/babadudu.jpg";

const categories = [
  { id: "all", label: "All", icon: <ShoppingBag size={15} /> },
  { id: "fruits", label: "Fruits", icon: <Banana size={15} /> },
  { id: "yam", label: "Yam", icon: <Wheat size={15} /> },
  { id: "local-snacks", label: "Local Snacks", icon: <Cookie size={15} /> },
  { id: "crayfish", label: "Crayfish", icon: <Fish size={15} /> },
  { id: "elubo", label: "Elubo", icon: <Package size={15} /> },
  { id: "perishable", label: "Perishable", icon: <Package size={15} /> },
  { id: "soup-spicy", label: "Soup & Spicy", icon: <Flame size={15} /> },
  { id: "snacks", label: "Snacks", icon: <Cookie size={15} /> },
  { id: "fish", label: "Fish", icon: <Fish size={15} /> },
];

const products = [
  {
    id: 101,
    category: "pepper",
    categoryLabel: "PEPPER",
    name: "Fresh AYAMASE / OFADA PEPPER MIX",
    priceRange: "₦8,000 – ₦32,000",
    originalRange: null,
    discount: 91,
    basePrice: 8000,
    inStock: true,
    description: "Fresh Ayamase/Ofada pepper mix, perfect for Nigerian dishes.",
    image: ofadapeppermix,
  },
  {
    id: 102,
    category: "oil",
    categoryLabel: "OIL",
    name: "KINGS VEGETABLE OIL",
    priceRange: "₦18,500",
    originalRange: null,
    discount: 3,
    basePrice: 18500,
    inStock: true,
    description: "Premium quality vegetable oil for all your cooking needs.",
    image: kingsvegetableoil,
  },
  {
    id: 103,
    category: "local-snacks",
    categoryLabel: "LOCAL SNACKS",
    name: "Sisi Pelebe",
    priceRange: "₦2,000 – ₦4,000",
    originalRange: "₦2,500 – ₦5,000",
    discount: 20,
    basePrice: 2000,
    inStock: true,
    description: "Delicious local Nigerian snack.",
    image: sisipelebe,
  },
  {
    id: 104,
    category: "local-snacks",
    categoryLabel: "LOCAL SNACKS",
    name: "Crunchy Kuli Kuli Alata",
    priceRange: "₦1,500",
    originalRange: "₦2,500 – ₦14,000",
    discount: 40,
    basePrice: 1500,
    inStock: true,
    description: "Crunchy and spicy kuli kuli snack.",
    image: crunchykulikulialata,
  },
  {
    id: 105,
    category: "local-snacks",
    categoryLabel: "LOCAL SNACKS",
    name: "KOKORO",
    priceRange: "₦1,000 – ₦3,000",
    originalRange: "₦1,500 – ₦3,500",
    discount: 33,
    basePrice: 1000,
    inStock: true,
    description: "Classic Nigerian kokoro snack, crispy and delicious.",
    image: kokoro,
  },
  {
    id: 106,
    category: "snacks",
    categoryLabel: "SNACKS",
    name: "Coconut Candy",
    priceRange: "₦2,000 – ₦3,000",
    originalRange: null,
    discount: null,
    basePrice: 2000,
    inStock: true,
    description: "Sweet and crunchy coconut candy.",
    image: coconutcandy,
  },
  {
    id: 107,
    category: "local-snacks",
    categoryLabel: "LOCAL SNACKS",
    name: "Babadudu",
    priceRange: "₦500 – ₦1,500",
    originalRange: null,
    discount: null,
    basePrice: 500,
    inStock: true,
    description: "Traditional Nigerian babadudu sweet.",
    image: babadudu,
  },
  {
    id: 108,
    category: "crayfish",
    categoryLabel: "CRAYFISH",
    name: "Cleaned Blended Crayfish",
    priceRange: "₦2,500 – ₦10,000",
    originalRange: null,
    discount: 28,
    basePrice: 2500,
    inStock: true,
    description: "100% cleaned and blended crayfish.",
    image: cleanedblendedcrayfish,
  },
  {
    id: 109,
    category: "grains",
    categoryLabel: "GRAINS",
    name: "Crunchy Garri",
    priceRange: "₦2,500 – ₦50,000",
    originalRange: "₦1,500 – ₦65,000",
    discount: 27,
    basePrice: 2500,
    inStock: true,
    description: "Freshly processed crunchy garri.",
    image: crunchygarri,
  },
  {
    id: 110,
    category: "soup-spicy",
    categoryLabel: "SOUP SPICY",
    name: "Gino Tin Tomatoes",
    priceRange: "₦1,800 – ₦35,000",
    originalRange: null,
    discount: null,
    basePrice: 1800,
    inStock: true,
    description: "Premium Gino tin tomatoes for your Nigerian dishes.",
    image: null,
  },
  {
    id: 111,
    category: "perishable",
    categoryLabel: "PERISHABLE",
    name: "Rubber Band",
    priceRange: "₦1,800",
    originalRange: null,
    discount: null,
    basePrice: 1800,
    inStock: false,
    description: "Standard rubber bands.",
    image: null,
  },
  {
    id: 112,
    category: "perishable",
    categoryLabel: "PERISHABLE",
    name: "Stapler Pin",
    priceRange: "₦2,000",
    originalRange: null,
    discount: null,
    basePrice: 2000,
    inStock: false,
    description: "Standard stapler pins.",
    image: null,
  },
];

function ProductCard({ product, onQuickView, addToCart }) {
  const [wished, setWished] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-[220px] object-cover transition-transform duration-500 ${
              hovered ? "scale-105" : "scale-100"
            }`}
          />
        ) : (
          <div className="w-full h-[220px] bg-[#f5f0e8] flex items-center justify-center">
            <ShoppingCart size={48} className="text-gray-300" />
          </div>
        )}

        <AnimatePresence>
          {hovered && product.image && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20"
            />
          )}
        </AnimatePresence>

        {!product.inStock && (
          <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full">
            Out of Stock
          </div>
        )}

        {product.discount && product.inStock && (
          <div className="absolute top-3 left-3 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full">
            -{product.discount}% OFF
          </div>
        )}

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

        <AnimatePresence>
          {hovered && product.inStock && product.image && (
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

      <div className="p-4">
        <p className="text-xs font-bold text-[#1a6b3c] mb-1 tracking-wide">
          {product.categoryLabel}
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

        {product.inStock ? (
          <button
            onClick={() => onQuickView(product)}
            className="w-full bg-[#1a6b3c] hover:bg-[#155a32] text-white text-sm font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart size={15} />
            {product.priceRange.includes("–") ? "Select Options" : "Add to Cart"}
          </button>
        ) : (
          <button
            disabled
            className="w-full bg-gray-100 text-gray-400 text-sm font-semibold py-2.5 rounded-lg cursor-not-allowed flex items-center justify-center"
          >
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
}

export default function ProductsSection({ searchQuery = "", addToCart }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="bg-[#f0f5f0]">
      <div className="max-w-[1200px] mx-auto w-full px-10 py-14">

        <div id="categories" className="flex items-center gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-[#1a6b3c] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-extrabold text-gray-900">
            {searchQuery ? `Results for "${searchQuery}"` : "All Products"}
          </h2>
          <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
            {filtered.length} items
          </span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setSelectedProduct}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <ShoppingBag size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-base font-semibold text-gray-500">No products found</p>
            <p className="text-sm mt-1">Try searching for something else</p>
          </div>
        )}

      </div>

      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        addToCart={addToCart}
      />
    </section>
  );
}