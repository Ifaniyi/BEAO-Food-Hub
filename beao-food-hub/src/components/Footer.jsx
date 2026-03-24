// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

const categoryLinks = [
  { label: "Fruits" },
  { label: "Local Snacks" },
  { label: "Elubo" },
  { label: "Fish" },
  { label: "Yam" },
  { label: "Crayfish" },
  { label: "Soup & Spicy" },
  { label: "Pepper" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto w-full px-10 py-14">

        {/* Top Row */}
        <div className="grid grid-cols-3 gap-16 mb-12">

          {/* Column 1 - Logo + About */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2.5 w-fit">
              <div className="w-[38px] h-[38px] bg-[#1a6b3c] rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0">
                B
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[15px] font-bold text-white tracking-wide">BEAO</span>
                <span className="text-[11px] font-semibold text-[#1a6b3c] tracking-widest">FOOD HUB</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted source for authentic Nigerian food products. From local
              snacks to fresh spices, we deliver quality right to your doorstep.
            </p>
          </div>

          {/* Column 2 - Categories */}
          <div>
            <h4 className="text-white font-bold text-base mb-5">Categories</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {categoryLinks.map((link) => (
                <Link
                  key={link.label}
                  to="/"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-5">Contact Us</h4>
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gray-400 shrink-0" />
                <span className="text-sm text-gray-400">+234 xxx xxx xxxx</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gray-400 shrink-0" />
                <span className="text-sm text-gray-400">info@beaofoodhub.com.ng</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-gray-400 shrink-0" />
                <span className="text-sm text-gray-400">Lagos, Nigeria</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="/" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={16} className="text-white" />
              </a>
              <a href="/" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={16} className="text-white" />
              </a>
              <a href="/" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <MessageCircle size={16} className="text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-sm text-gray-500">
            © 2026 BEAO Food Hub. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}