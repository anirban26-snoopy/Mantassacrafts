import { buildWhatsAppLink, GENERAL_INQUIRY_MESSAGE } from "@/lib/whatsapp";

export default function WhatsAppFloatButton() {
  return (
    <a
      href={buildWhatsAppLink(GENERAL_INQUIRY_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-105"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.55 1.36 5.03L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.11c-.25.7-1.25 1.29-2.02 1.45-.53.11-1.22.2-3.56-.76-2.99-1.23-4.91-4.24-5.06-4.44-.15-.2-1.21-1.6-1.21-3.06s.76-2.16 1.03-2.46c.25-.28.55-.35.74-.35.19 0 .38.01.55.01.17.01.41-.06.64.49.25.6.83 2.08.9 2.23.07.15.12.33.02.52-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.05.17-.18.72-.84.91-1.13.19-.29.38-.24.63-.14.25.1 1.62.76 1.9.9.28.14.46.21.53.33.07.12.07.7-.18 1.4z" />
      </svg>
    </a>
  );
}
