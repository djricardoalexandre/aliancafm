import { MessageCircle } from 'lucide-react';
import { radioConfig } from '../data/config';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(radioConfig.whatsapp.message);
    window.open(`https://wa.me/${radioConfig.whatsapp.number}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-6 shadow-2xl transform transition-all hover:scale-110 hover:rotate-12 animate-bounce"
      title="Peça sua música"
    >
      <MessageCircle size={32} />
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
        Peça sua música!
      </div>
    </button>
  );
}
