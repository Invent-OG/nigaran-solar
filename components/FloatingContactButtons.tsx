// components/FloatingContactButtons.tsx
"use client";

import { Phone, MessageSquare, Download } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function FloatingContactButtons() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <div className="fixed z-50 flex flex-col gap-3 bottom-5 right-5">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919600715993" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 text-white transition-transform transform bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-105"
        title="Chat on WhatsApp"
      >
        {/* <MessageSquare className="w-5 h-5" /> */}
        <FaWhatsapp className="w-5 h-5" />
      </a>

      {/* Download PDF Button */}
      <a
        href="https://drive.google.com/uc?export=download&id=1hb0g0RTYrj1sMfIeJJAkTQP8BOrldNdJ"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 text-white transition-transform transform bg-gray-700 rounded-full shadow-lg hover:bg-gray-800 hover:scale-105"
        title="Download PDF"
      >
        <Download className="w-5 h-5" />
      </a>
    </div>
  );
}
