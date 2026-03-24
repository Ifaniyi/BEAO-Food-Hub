// src/pages/Profile.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, User, Mail, Phone, MapPin, Heart, ShoppingBag, Pencil, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";

const tabs = [
  { id: "profile", label: "My Profile", icon: <User size={15} /> },
  { id: "wishlist", label: "Wishlist (0)", icon: <Heart size={15} /> },
  { id: "orders", label: "My Orders", icon: <ClipboardList size={15} /> },
];

const dummyUser = {
  name: "Adebiyi Ayomide",
  email: "adebiyiayomide33@gmail.com",
  phone: null,
  address: null,
  role: "Admin",
};

export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState(dummyUser);
  const [form, setForm] = useState(dummyUser);
  const navigate = useNavigate();

  const handleSave = () => {
    setUser(form);
    setEditing(false);
  };

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="min-h-screen bg-[#f0f5f0]">

      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 px-6 h-[68px] flex items-center gap-3">
        <Link
          to="/"
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
        >
          <ArrowLeft size={20} />
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-[38px] h-[38px] bg-[#1a6b3c] rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0">
            B
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[15px] font-bold text-gray-900 tracking-wide">BEAO</span>
            <span className="text-[11px] font-semibold text-[#1a6b3c] tracking-widest">FOOD HUB</span>
          </div>
        </div>
      </div>

      <div className="max-w-[860px] mx-auto px-6 py-10">

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-5 mb-8"
        >
          <div className="w-[80px] h-[80px] bg-[#e0ede0] rounded-2xl flex items-center justify-center shrink-0">
            <span className="text-2xl font-extrabold text-[#1a6b3c]">{initials}</span>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-0.5">{user.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{user.email}</p>
            <span className="bg-[#e0ede0] text-[#1a6b3c] text-xs font-bold px-3 py-1 rounded-full">
              {user.role}
            </span>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-gray-200 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 pb-3 text-sm font-semibold transition-colors border-b-2 -mb-[1px] ${
                activeTab === tab.id
                  ? "border-[#1a6b3c] text-[#1a6b3c]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* MY PROFILE TAB */}
        {activeTab === "profile" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Personal Information Card */}
            <div className="bg-white rounded-2xl p-6 mb-5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-bold text-gray-900">Personal Information</h3>
                {!editing ? (
                  <button
                    onClick={() => setEditing(true)}
                    className="flex items-center gap-1.5 border border-gray-200 text-gray-600 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Pencil size={14} />
                    Edit
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditing(false)}
                      className="border border-gray-200 text-gray-600 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="bg-[#1a6b3c] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#155a32] transition-colors"
                    >
                      Save
                    </button>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-4">
                {/* Full Name */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                    <User size={16} className="text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 mb-0.5">Full Name</p>
                    {editing ? (
                      <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full text-sm font-semibold text-gray-900 border-b border-gray-300 outline-none pb-1 bg-transparent"
                      />
                    ) : (
                      <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 mb-0.5">Email Address</p>
                    {editing ? (
                      <input
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full text-sm font-semibold text-gray-900 border-b border-gray-300 outline-none pb-1 bg-transparent"
                      />
                    ) : (
                      <p className="text-sm font-semibold text-gray-900">{user.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 mb-0.5">Phone Number</p>
                    {editing ? (
                      <input
                        value={form.phone || ""}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Enter phone number"
                        className="w-full text-sm font-semibold text-gray-900 border-b border-gray-300 outline-none pb-1 bg-transparent placeholder:text-gray-400"
                      />
                    ) : (
                      <p className={`text-sm font-semibold ${user.phone ? "text-gray-900" : "text-gray-400 italic"}`}>
                        {user.phone || "Not set"}
                      </p>
                    )}
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 mb-0.5">Delivery Address</p>
                    {editing ? (
                      <input
                        value={form.address || ""}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        placeholder="Enter delivery address"
                        className="w-full text-sm font-semibold text-gray-900 border-b border-gray-300 outline-none pb-1 bg-transparent placeholder:text-gray-400"
                      />
                    ) : (
                      <p className={`text-sm font-semibold ${user.address ? "text-gray-900" : "text-gray-400 italic"}`}>
                        {user.address || "Not set"}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 2 Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6">
                <Heart size={24} className="text-red-400 mb-3" />
                <p className="text-2xl font-extrabold text-gray-900">0</p>
                <p className="text-sm text-gray-500">Saved items</p>
              </div>
              <button
                onClick={() => navigate("/track-order")}
                className="bg-white rounded-2xl p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <ShoppingBag size={24} className="text-[#1a6b3c] mb-3" />
                <p className="text-2xl font-extrabold text-gray-900">Track</p>
                <p className="text-sm text-gray-500">Your orders</p>
              </button>
            </div>
          </motion.div>
        )}

        {/* WISHLIST TAB */}
        {activeTab === "wishlist" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <Heart size={52} className="text-gray-200 mx-auto mb-5" strokeWidth={1.5} />
            <p className="text-base font-bold text-gray-900 mb-1">No saved items yet</p>
            <p className="text-sm text-gray-400 mb-6">
              Tap the heart icon on any product to save it here
            </p>
            <Link
              to="/"
              className="bg-[#1a6b3c] hover:bg-[#155a32] text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
            >
              Browse Products
            </Link>
          </motion.div>
        )}

        {/* ORDERS TAB */}
        {activeTab === "orders" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl px-8 py-16 flex flex-col items-center text-center"
          >
            <ShoppingBag size={52} className="text-gray-200 mx-auto mb-5" strokeWidth={1.5} />
            <p className="text-base font-bold text-gray-900 mb-1">Track your orders</p>
            <p className="text-sm text-gray-400 mb-6">
              Use your order number to check delivery status
            </p>
            <button
              onClick={() => navigate("/track-order")}
              className="bg-[#1a6b3c] hover:bg-[#155a32] text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
            >
              Track an Order
            </button>
          </motion.div>
        )}

      </div>
    </div>
  );
}