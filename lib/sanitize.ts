/**
 * Escapes HTML special characters so untrusted, user-supplied strings can be
 * safely interpolated into HTML email templates without allowing markup/script
 * injection into the rendered email.
 */
export const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
