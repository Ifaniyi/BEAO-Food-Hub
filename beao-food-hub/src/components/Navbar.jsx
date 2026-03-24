// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { Search, Box, User, ShoppingCart } from "lucide-react";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

export default function Navbar({ searchQuery, onSearch }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-white border-b border-gray-100 px-6 md:px-10 h-[68px] flex items-center justify-between gap-6 sticky top-0 z-50">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-[38px] h-[38px] bg-[#1a6b3c] rounded-lg flex items-center justify-center text-white font-bold text-lg">
            B
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[15px] font-bold text-gray-900 tracking-wide ">BEAO</span>
            <span className="text-[11px] font-semibold text-[#1a6b3c] tracking-widest">FOOD HUB</span>
          </div>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-[480px] flex items-center gap-2.5 bg-gray-100 rounded-lg px-4 h-[42px]">
          <Search size={16} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="bg-transparent border-none outline-none text-sm text-gray-700 w-full placeholder:text-gray-400"
          />
          {searchQuery && (
            <button
              onClick={() => onSearch("")}
              className="text-gray-400 hover:text-gray-600 text-lg leading-none"
            >
              ×
            </button>
          )}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-1">

          {/* Cube - Order Tracking */}
          <button
            onClick={() => navigate("/track-order")}
            className="p-2 rounded-lg hover:bg-orange-200 hover:text-orange-400 transition-colors text-gray-700"
          >
            <Box size={20} strokeWidth={1.8} />
          </button>

          {/* User - Profile */}
          <button
            onClick={() => navigate("/profile")}
            className="p-2 rounded-lg hover:bg-orange-200 hover:text-orange-400 transition-colors text-gray-700"
          >
            <User size={20} strokeWidth={1.8} />
          </button>

          {/* Cart */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-2 rounded-lg hover:bg-orange-200 hover:text-[#1a6b3c] transition-colors text-gray-700"
          >
            <ShoppingCart size={20} strokeWidth={1.8} />
            <span className="absolute top-1 right-1 bg-[#1a6b3c] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>

        </div>
      </nav>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}