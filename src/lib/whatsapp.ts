export const WHATSAPP_NUMBER = "918617209233";
export const WHATSAPP_DISPLAY = "+91 86172 09233";

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_INQUIRY_MESSAGE =
  "Hi Mantassa Crafts! I'd like to know more about your jewelry.";

export const WHATSAPP_COMMUNITY_LINK =
  "https://chat.whatsapp.com/KQy0SZXHrPv83H2YYNLCLI";
