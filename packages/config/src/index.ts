// Domain configuration for all 5 apps
// Update these when DNS is pointed to Vercel

export const DOMAINS = {
  academy: {
    production: "www.infrastructure-academy.com",
    preview: "academy-preview.vercel.app",
  },
  memorial: {
    production: "memorial.infrastructure-academy.com",
    preview: "memorial-preview.vercel.app",
  },
  quest: {
    production: "quest.infrastructure-academy.com",
    preview: "quest-preview.vercel.app",
  },
  xchange: {
    production: "xchange.infrastructure-academy.com",
    preview: "xchange-preview.vercel.app",
  },
  news: {
    production: "news.infrastructure-academy.com",
    preview: "news-preview.vercel.app",
  },
} as const;

export const NETWORK_LINKS = [
  { key: "academy", label: "ACADEMY", href: "https://www.infrastructure-academy.com" },
  { key: "quest", label: "QUEST", href: "https://quest.infrastructure-academy.com" },
  { key: "xchange", label: "XCHANGE", href: "https://xchange.infrastructure-academy.com" },
  { key: "memorial", label: "MEMORIAL", href: "https://memorial.infrastructure-academy.com" },
  { key: "news", label: "NEWS", href: "https://news.infrastructure-academy.com" },
] as const;

export const AUTHOR = {
  name: "Ir. Nigel T. Dearden CEng MICE",
  handle: "@dearden_n37258",
} as const;
