"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* ─── Avatar primitives ─────────────────────────────── */
const Avatar = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover", className)}
    alt={props.alt ?? ""}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-600",
      className
    )}
    {...props}
  >
    {children}
  </span>
));
AvatarFallback.displayName = "AvatarFallback";

/* ─── Hero Section ──────────────────────────────────── */
export interface HeroSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  animatedTexts: string[];
  subtitle: string;
  infoBadgeText: string;
  ctaButtonText: string;
  ctaHref?: string;
  socialProofText: string;
  socialProofSubText?: string;
  avatars: { src: string; alt: string; fallback: string }[];
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title,
      animatedTexts,
      subtitle,
      infoBadgeText,
      ctaButtonText,
      ctaHref = "#",
      socialProofText,
      socialProofSubText,
      avatars,
      ...props
    },
    ref
  ) => {
    const [textIndex, setTextIndex] = React.useState(0);
    const [displayText, setDisplayText] = React.useState("");
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
      const fullText = animatedTexts[textIndex];
      const typingSpeed = isDeleting ? 60 : 130;

      const typeInterval = setInterval(() => {
        if (isDeleting) {
          setDisplayText((prev) => prev.substring(0, prev.length - 1));
        } else {
          setDisplayText((prev) => fullText.substring(0, prev.length + 1));
        }
      }, typingSpeed);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % animatedTexts.length);
      }

      return () => clearInterval(typeInterval);
    }, [displayText, isDeleting, textIndex, animatedTexts]);

    return (
      <section
        ref={ref}
        className={cn(
          "relative flex flex-col items-center justify-center text-center overflow-hidden",
          "bg-gradient-to-br from-brandblue via-blue-900 to-slate-900 text-white",
          "py-20 lg:py-36 px-4",
          className
        )}
        {...props}
      >
        {/* Glow orbs */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-brandyellow opacity-10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-400 opacity-20 blur-[120px]" />

        <div className="relative z-10 max-w-4xl w-full mx-auto">
          {/* Info badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm font-semibold text-brandyellow tracking-wide shadow-inner">
            <span className="h-2 w-2 rounded-full bg-brandyellow animate-pulse" />
            {infoBadgeText}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4">
            {title}
          </h1>

          {/* Animated region */}
          <div className="mx-auto mt-2 mb-8 flex justify-center">
            <span className="relative inline-block px-4 py-2">
              {/* Dashed border box */}
              <span className="absolute inset-0 rounded-xl border-2 border-dashed border-brandyellow/70" />
              <span className="relative text-brandyellow text-3xl sm:text-4xl lg:text-5xl font-black min-h-[1.3em] inline-block">
                {displayText}
                <span className="animate-pulse ml-0.5 font-thin">|</span>
              </span>
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto mb-10">
            {subtitle}
          </p>

          {/* CTA */}
          <a
            href={ctaHref}
            className="inline-flex items-center gap-3 rounded-2xl bg-brandyellow px-8 py-4 text-xl font-black text-brandblue shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <svg
              className="h-6 w-6 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {ctaButtonText}
          </a>

          {/* Social proof */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((avatar, i) => (
                <Avatar key={i} className="h-10 w-10 border-2 border-white/30 shadow-lg">
                  <AvatarImage src={avatar.src} alt={avatar.alt} />
                  <AvatarFallback>{avatar.fallback}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">{socialProofText}</p>
              {socialProofSubText && (
                <p className="text-xs text-blue-200">{socialProofSubText}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";
export { HeroSection };
