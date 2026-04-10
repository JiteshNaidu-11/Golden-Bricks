"use client";

import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export const SOCIAL_URLS = {
  facebook: "https://www.facebook.com/sunitaestatenavimumbai",
  instagram: "https://www.instagram.com/sunita_real_estate/",
  linkedin: "https://www.linkedin.com/in/nitin-pandit-sonawale-1251bb37/",
  x: "https://x.com/NithinSonawalee",
} as const;

type Variant = "footer" | "sectionDark" | "sectionLight";

const variantClasses: Record<
  Variant,
  { btn: string; whatsappPath: string; labelClass: string }
> = {
  footer: {
    labelClass: "text-white/55",
    btn: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-white/90 shadow-sm transition-all duration-300 hover:scale-110 hover:border-[#C5A24A] hover:bg-[#C5A24A]/15 hover:text-[#EBD181] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A24A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#001F3F]",
    whatsappPath:
      "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-[#25D366] shadow-sm transition-all duration-300 hover:scale-110 hover:border-[#25D366]/60 hover:bg-[#25D366]/15 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#001F3F]",
  },
  sectionDark: {
    labelClass: "text-white/50",
    btn: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-white/90 transition-all duration-300 hover:scale-110 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/12 hover:text-[#EBD181] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]",
    whatsappPath:
      "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-[#25D366] transition-all duration-300 hover:scale-110 hover:border-[#25D366]/50 hover:bg-[#25D366]/12 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]",
  },
  sectionLight: {
    labelClass: "text-[#001F3F]/55",
    btn: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#C5A24A]/25 bg-white text-[#001F3F] shadow-sm transition-all duration-300 hover:scale-110 hover:border-[#C5A24A] hover:bg-[#C5A24A]/12 hover:text-[#C5A24A] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A24A] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    whatsappPath:
      "inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#25D366]/35 bg-white text-[#128C7E] shadow-sm transition-all duration-300 hover:scale-110 hover:border-[#25D366] hover:bg-[#25D366]/10 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
  },
};

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

type Props = {
  variant: Variant;
  className?: string;
  label?: string;
};

export default function SocialLinks({
  variant,
  className = "",
  label = "Follow us",
}: Props) {
  const v = variantClasses[variant];
  const iconSize =
    variant === "footer" ? "h-[18px] w-[18px]" : "h-5 w-5";

  return (
    <div className={className}>
      {label ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${v.labelClass}`}
        >
          {label}
        </p>
      ) : null}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
        <a
          href={SOCIAL_URLS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className={v.btn}
          aria-label="Facebook — Sunita Estate Navi Mumbai"
          title="Facebook"
        >
          <Facebook className={iconSize} strokeWidth={2} />
        </a>
        <a
          href={SOCIAL_URLS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={v.btn}
          aria-label="Instagram — sunita_real_estate"
          title="Instagram"
        >
          <Instagram className={iconSize} strokeWidth={2} />
        </a>
        <a
          href={SOCIAL_URLS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={v.btn}
          aria-label="LinkedIn — Nitin Pandit Sonawale"
          title="LinkedIn"
        >
          <Linkedin className={iconSize} strokeWidth={2} />
        </a>
        <a
          href={SOCIAL_URLS.x}
          target="_blank"
          rel="noopener noreferrer"
          className={v.btn}
          aria-label="X (Twitter)"
          title="X"
        >
          <X className={iconSize} strokeWidth={2} />
        </a>
        <button
          type="button"
          onClick={() => openWhatsApp()}
          className={v.whatsappPath}
          aria-label="WhatsApp — chat with Golden Brix"
          title="WhatsApp"
        >
          <WhatsAppGlyph className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
        </button>
      </div>
    </div>
  );
}
