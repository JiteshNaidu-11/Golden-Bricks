/**
 * Opens WhatsApp with a pre-filled message to the specified phone number
 * @param phone - Phone number in international format (e.g., 917738384100)
 * @param message - Default message to send
 */
export const openWhatsApp = (
  phone: string = '917738384100',
  message: string = 'Hi, I am interested in your real estate properties and would like more information.'
) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

/**
 * Returns the WhatsApp URL with pre-filled message
 * @param phone - Phone number in international format
 * @param message - Default message to send
 */
export const getWhatsAppUrl = (
  phone: string = '917738384100',
  message: string = 'Hi, I am interested in your real estate properties and would like more information.'
) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};