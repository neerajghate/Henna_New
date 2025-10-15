// components/Logo.tsx
import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"          // place your final logo at /public/logo.svg
      alt="RS — Henna Artist"
      width={140}
      height={40}
      priority
      className={className}
    />
  );
}
