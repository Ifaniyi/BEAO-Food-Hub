// components/AnnouncementBar.jsx
import { Tag } from "lucide-react";
import { motion } from "framer-motion";

const messages = [
  "ENJOY 5% discount on your total purchase using code D6QW4B",
  "ENJOY 5% discount on your total purchase using code D6QW4B",
  "ENJOY 5% discount on your total purchase using code D6QW4B",
  "ENJOY 5% discount on your total purchase using code D6QW4B",
];

export default function AnnouncementBar() {
  return (
    <div className="bg-[#1a6b3c] text-white overflow-hidden py-2.5">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...messages, ...messages].map((msg, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-9 text-sm font-medium tracking-wide whitespace-nowrap"
          >
            <Tag size={14} className="opacity-80" />
            {msg.split("D6QW4B")[0]}
            <strong>D6QW4B</strong>
          </span>
        ))}
      </motion.div>
    </div>
  );
}