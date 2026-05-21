export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatPhoneDisplay(phone: string): string {
  return phone.replace(/(\+\d{3})(\d{2})(\d{3})(\d{4})/, "$1 $2 $3 $4");
}

export function buildWhatsAppUrl(number: string, message?: string): string {
  const base = `https://wa.me/${number.replace(/\D/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
