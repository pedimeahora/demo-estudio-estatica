import { MessageCircle } from 'lucide-react';

export function WhatsappFab() {
  return (
    <a
      href="https://wa.me/5491112345678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-40"
      title="Contactanos por WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
