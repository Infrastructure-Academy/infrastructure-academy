// Shared utilities across all 5 apps

/**
 * Get nested translation value from i18n JSON
 */
export function t(translations: Record<string, any>, key: string, fallback?: string): string {
  const parts = key.split(".");
  let current: any = translations;
  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      return fallback || key;
    }
  }
  return typeof current === "string" ? current : fallback || key;
}

/**
 * Format date for display
 */
export function formatDate(date: Date | string | number, locale = "en"): string {
  const d = new Date(date);
  return d.toLocaleDateString(locale === "zh" ? "zh-CN" : locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Detect browser language and return supported locale
 */
export function detectLocale(supported: string[] = ["en", "zh", "ja", "ko", "hi", "ar", "es", "vi"]): string {
  if (typeof window === "undefined") return "en";
  const browserLang = navigator.language.split("-")[0];
  return supported.includes(browserLang) ? browserLang : "en";
}
