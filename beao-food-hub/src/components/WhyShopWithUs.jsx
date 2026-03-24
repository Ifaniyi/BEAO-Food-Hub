// src/components/WhyShopWithUs.jsx
import { motion } from "framer-motion";
import { Truck, ShieldCheck, RefreshCcw, Phone } from "lucide-react";

const reasons = [
  {
    icon: <Truck size={24} strokeWidth={1.8} />,
    iconBg: "bg-green-100",
    iconColor: "text-[#1a6b3c]",
    title: "Fast Delivery",
    description:
      "Same-day and next-day delivery available across Lagos and major cities in Nigeria.",
  },
  {
    icon: <ShieldCheck size={24} strokeWidth={1.8} />,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-400",
    title: "100% Quality Assured",
    description:
      "Every product is carefully selected and inspected before it reaches your door.",
  },
  {
    icon: <RefreshCcw size={24} strokeWidth={1.8} />,
    iconBg: "bg-green-100",
    iconColor: "text-[#1a6b3c]",
    title: "Easy Returns",
    description:
      "Not satisfied? We offer hassle-free returns and full refunds on all orders.",
  },
  {
    icon: <Phone size={24} strokeWidth={1.8} />,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-400",
    title: "24/7 Support",
    description:
      "Our customer service team is always available via WhatsApp, call, or email.",
  },
];

export default function WhyShopWithUs() {
  return (
    <section className="bg-[#f0f5f0]">
      <div className="max-w-[1200px] mx-auto w-full px-10 py-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Why Shop With Us?
          </h2>
          <p className="text-gray-500 text-sm max-w-[420px] mx-auto leading-relaxed">
            BEAO Food Hub is your most reliable source for authentic Nigerian groceries
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4"
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${reason.iconBg} ${reason.iconColor} rounded-full flex items-center justify-center`}>
                {reason.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}