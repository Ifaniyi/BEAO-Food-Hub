// src/components/QuickViewModal.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Minus, Plus, ShoppingCart, Tag, Check } from "lucide-react";

export default function QuickViewModal({ product, onClose, addToCart }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const basePrice = product.basePrice || 0;

  const handleAddToCart = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-2xl w-[760px] max-w-[95vw] overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
            >
              <X size={18} className="text-gray-600" />
            </button>

            <div className="flex">
              {/* LEFT - Image */}
              <div className="relative w-[320px] shrink-0">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover min-h-[380px]"
                  />
                ) : (
                  <div className="w-full min-h-[380px] bg-gray-100 flex items-center justify-center">
                    <ShoppingCart size={48} className="text-gray-300" />
                  </div>
                )}
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                    -{product.discount}% OFF
                  </div>
                )}
              </div>

              {/* RIGHT - Details */}
              <div className="flex-1 p-7 flex flex-col justify-between">
                <div>
                  {/* Category */}
                  <p className="text-xs font-bold text-[#1a6b3c] tracking-widest mb-2">
                    {product.category || product.categoryLabel}
                  </p>

                  {/* Name */}
                  <h2 className="text-xl font-extrabold text-gray-900 mb-3 leading-tight">
                    {product.name}
                  </h2>

                  {/* Stars */}
                  <div className="flex items-center gap-1.5 mb-3">
                    {[1, 2, 3, 4].map((s) => (
                      <Star key={s} size={16} className="fill-orange-400 text-orange-400" />
                    ))}
                    <Star size={16} className="text-gray-300 fill-gray-200" />
                    <span className="text-sm text-gray-500 ml-1">(4.0)</span>
                  </div>

                  {/* Price */}
                  <p className="text-2xl font-extrabold text-gray-900 mb-1">
                    {product.priceRange}
                  </p>
                  {product.originalRange && (
                    <p className="text-sm text-gray-400 line-through mb-3">
                      {product.originalRange}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                    {product.description || "Fresh and authentic Nigerian product."}
                  </p>

                  {/* In Stock */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#1a6b3c]" />
                    <span className="text-sm font-semibold text-[#1a6b3c]">In Stock</span>
                  </div>

                  {/* Promo Code */}
                  <div className="flex items-start gap-2.5 bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 mb-5">
                    <Tag size={15} className="text-orange-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-700">
                      Use code <strong>D6QW4B</strong> for 5% off your total order
                    </p>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-semibold text-gray-700">Qty:</span>
                    <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2">
                      <button
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-bold w-5 text-center">{qty}</span>
                      <button
                        onClick={() => setQty((q) => q + 1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="text-sm text-gray-500">
                      = <strong className="text-gray-900">₦{(basePrice * qty).toLocaleString()}</strong>
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all ${
                      added
                        ? "bg-green-500"
                        : "bg-[#1a6b3c] hover:bg-[#155a32]"
                    }`}
                  >
                    {added ? (
                      <>
                        <Check size={17} />
                        Added to Cart!
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={17} />
                        Add to Cart
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => window.open("https://wa.me/2349158615692", "_blank")}
                    className="px-5 bg-[#25d366] hover:bg-[#20b858] text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}