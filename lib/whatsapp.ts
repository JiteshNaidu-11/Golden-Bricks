/**
 * WhatsApp number constant for easy switching
 */
export const WHATSAPP_NUMBER = '919819893359';

/**
 * Opens WhatsApp with a pre-filled message to the specified phone number
 * @param phone - Phone number in international format (default: WHATSAPP_NUMBER)
 * @param message - Default message to send
 */
export const openWhatsApp = (
  message: string = '',
  phone: string = WHATSAPP_NUMBER
) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

/**
 * Returns the WhatsApp URL with pre-filled message
 * @param phone - Phone number in international format (default: WHATSAPP_NUMBER)
 * @param message - Default message to send
 */
export const getWhatsAppUrl = (
  message: string,
  phone: string = WHATSAPP_NUMBER
) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};