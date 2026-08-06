import React from "react";
import { GrAndroid } from "react-icons/gr";
import { Globe } from "lucide-react";

export type Platform = "android" | "ios" | "web";

export function getPlatformType(url: string): Platform {
  if (url.includes("play.google.com") || url.includes("android")) {
    return "android";
  } else if (
    url.includes("apps.apple.com") ||
    url.includes("itunes.apple.com")
  ) {
    return "ios";
  } else {
    return "web";
  }
}

export function getPlatformTitle(url: string): string {
  switch (getPlatformType(url)) {
    case "android":
      return "View on Google Play Store";
    case "ios":
      return "View on Apple App Store";
    default:
      return "View Live Project";
  }
}

export function getPlatformLabel(url: string): string {
  switch (getPlatformType(url)) {
    case "android":
      return "Play Store";
    case "ios":
      return "App Store";
    default:
      return "Live Demo";
  }
}

function IOSIcon({ className, size }: { className?: string; size: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export function getPlatformIcon(
  url: string,
  className?: string,
  size: number = 14,
) {
  switch (getPlatformType(url)) {
    case "android":
      return <GrAndroid className={className} size={size} />;
    case "ios":
      return <IOSIcon className={className} size={size} />;
    default:
      return <Globe className={className} size={size} />;
  }
}
