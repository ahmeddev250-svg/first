import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNum = '212771027788';
    const message = encodeURIComponent("Bonjour Dr. Khaoula Karim, je souhaite vous contacter concernant une consultation ORL.");
    window.open(`https://wa.me/${phoneNum}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      aria-label="Contact WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/40 flex items-center justify-center transition-transform hover:scale-110 group"
    >
      <MessageCircle className="w-7 h-7 fill-white" />
      <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Discuter sur WhatsApp
      </span>
    </button>
  );
}
