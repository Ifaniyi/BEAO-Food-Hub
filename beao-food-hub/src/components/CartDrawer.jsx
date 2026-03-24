// src/components/CartDrawer.jsx
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";

export default function CartDrawer({ isOpen, onClose }) {
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
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
              >
                <X size={20} />
              </button>
            </div>

            {/* Empty State */}
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

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}