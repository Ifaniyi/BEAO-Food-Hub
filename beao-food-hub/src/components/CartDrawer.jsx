// src/components/CartDrawer.jsx
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";

export default function CartDrawer({ isOpen, onClose, cartItems = [], onUpdateQuantity, onRemove }) {

  const total = cartItems.reduce(
    (sum, item) => sum + item.basePrice * item.quantity, 0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-[420px] bg-white z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <ShoppingBag size={20} className="text-[#1a6b3c]" strokeWidth={1.8} />
                <h2 className="text-lg font-bold text-gray-900">Your Cart</h2>
                {cartItems.length > 0 && (
                  <span className="bg-[#1a6b3c] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartItems.reduce((t, i) => t + i.quantity, 0)}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
              >
                <X size={20} />
              </button>
            </div>

            {/* Empty State */}
            {cartItems.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <ShoppingBag size={36} className="text-gray-400" strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <p className="text-base font-bold text-gray-900 mb-1">Your cart is empty</p>
                  <p className="text-sm text-gray-400">Add some delicious Nigerian food!</p>
                </div>
                <button
                  onClick={onClose}
                  className="bg-[#1a6b3c] hover:bg-[#155a32] text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm mt-2"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3 bg-gray-50 rounded-xl p-3">

                      {/* Image */}
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg shrink-0"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
                          <ShoppingBag size={20} className="text-gray-400" />
                        </div>
                      )}

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-[#1a6b3c] mb-0.5">
                          {item.category || item.categoryLabel}
                        </p>
                        <p className="text-sm font-semibold text-gray-900 line-clamp-1 mb-1">
                          {item.name}
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                          ₦{(item.basePrice * item.quantity).toLocaleString()}
                        </p>
                      </div>

                      {/* Quantity + Remove */}
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => onRemove(item.id)}
                          className="text-gray-300 hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-2 py-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-bold text-gray-900 w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-6 py-5 border-t border-gray-100">

                  {/* Promo Code */}
                  <div className="flex gap-2 mb-4">
                    <input
                      type="text"
                      placeholder="Enter promo code (e.g. D6QW4B)"
                      className="flex-1 bg-gray-100 rounded-lg px-4 py-2.5 text-sm outline-none text-gray-700 placeholder:text-gray-400"
                    />
                    <button className="bg-[#1a6b3c] text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-[#155a32] transition-colors">
                      Apply
                    </button>
                  </div>

                  {/* Total */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Total</span>
                    <span className="text-lg font-extrabold text-gray-900">
                      ₦{total.toLocaleString()}
                    </span>
                  </div>

                  {/* Checkout Button */}
                  <button className="w-full bg-[#1a6b3c] hover:bg-[#155a32] text-white font-bold py-3.5 rounded-xl transition-colors text-sm">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}