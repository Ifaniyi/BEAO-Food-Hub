// src/pages/OrderTracking.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowLeft, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function OrderTracking() {
  const [orderNumber, setOrderNumber] = useState("");

  const handleWhatsApp = () => {
    window.open("https://wa.me/2349158615692", "_blank");
  };

  const handleTrack = () => {
    if (!orderNumber.trim()) return;
    // Backend will handle real tracking later
    alert(`Tracking order: ${orderNumber}`);
  };

  return (
    <div className="min-h-screen bg-[#f0f5f0]">

      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 px-6 h-[68px] flex items-center gap-4">
        <Link
          to="/"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
        >
          <ArrowLeft size={20} />
        </Link>

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-[38px] h-[38px] bg-[#1a6b3c] rounded-lg flex items-center justify-center text-white font-bold text-lg">
            B
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[15px] font-bold text-gray-900 tracking-wide">BEAO</span>
            <span className="text-[11px] font-semibold text-[#1a6b3c] tracking-widest">FOOD HUB</span>
          </div>
        </div>

        <h1 className="text-lg font-bold text-gray-900 ml-2">Order Tracking</h1>
      </div>

      {/* Content */}
      <div className="max-w-[760px] mx-auto px-6 py-14">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            Track Your Order
          </h2>
          <p className="text-gray-500 text-sm">
            Enter your order number to see real-time delivery status
          </p>
        </motion.div>

        {/* Search Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-3 mb-6"
        >
          <div className="flex-1 flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 h-[54px]">
            <Search size={18} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Enter order number e.g. ORD-001"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleTrack()}
              className="flex-1 bg-transparent outline-none border-none text-sm text-gray-700 placeholder:text-gray-400"
            />
          </div>
          <button
            onClick={handleTrack}
            className="bg-[#1a6b3c] hover:bg-[#155a32] text-white font-bold px-8 rounded-xl transition-colors text-sm"
          >
            Track
          </button>
        </motion.div>

        {/* Help Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border border-gray-100 rounded-2xl px-8 py-8 text-center"
        >
          <h3 className="text-base font-bold text-gray-900 mb-1">
            Need help with your order?
          </h3>
          <p className="text-sm text-gray-500 mb-5">
            Our team is available 24/7 on WhatsApp
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-[#25d366] hover:bg-[#20b858] text-white font-semibold px-8 py-3 rounded-xl transition-colors flex items-center gap-2 mx-auto"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </button>
        </motion.div>

      </div>
    </div>
  );
}