export const CONTACT_NUMBER =
  (import.meta as any).env?.VITE_PHONE_NUMBER || "+971 54 586 8790";
export const WHATSAPP_NUMBER =
  (import.meta as any).env?.VITE_WHATSAPP_NUMBER || "971545868790";
export const EMAIL = "urbanchoicebmt@gmail.com";
export const POSTAL_BOX = "P.O Box: 379719";
export const TELEPHONE = "04 335 8298";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_URL = `tel:${CONTACT_NUMBER.replace(/\s/g, "")}`;
export const EMAIL_URL = `mailto:${EMAIL}`;

export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.981249893295!2d55.308872374474184!3d25.271216177663366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab43e34dd6e98fd3%3A0x59916d73e1db39e2!2sUrban%20Choice%20Building%20Materials%20Trading%20Co%20LLC!5e0!3m2!1sen!2sin!4v1779034792440!5m2!1sen!2sin";
export const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Urban+Choice+Dubai";

export const SITE_NAME = "Urban Choice";
export const SITE_TAGLINE = "Your Trusted Building Materials Partner in Dubai";
export const SITE_DESCRIPTION =
  "Premium building materials supplier in Dubai. Paint, sanitary, electrical items, hardware materials and more. Quality products at competitive prices.";

export const WORKING_HOURS =
  "Saturday - Thursday: 9:00 AM - 9:00 PM | Friday: 2:00 PM - 9:00 PM";

export const SOCIAL_LINKS = {
  whatsapp: WHATSAPP_URL,
  phone: PHONE_URL,
  email: EMAIL_URL,
  maps: GOOGLE_MAPS_LINK,
};
