import { type ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  subtitle?: string;
  level?: 1 | 2 | 3;
  center?: boolean;
  className?: string;
}

export default function Heading({
  children,
  subtitle,
  level = 2,
  center = false,
  className = "",
}: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3";
  const sizes = { 1: "text-4xl md:text-6xl", 2: "text-3xl md:text-4xl", 3: "text-2xl md:text-3xl" };

  return (
    <div className={`${center ? "text-center" : ""} mb-12 ${className}`}>
      <Tag className={`${sizes[level]} font-bold text-gray-900 mb-4`}>{children}</Tag>
      {subtitle && (
        <p className={`text-gray-600 max-w-2xl ${center ? "mx-auto" : ""}`}>{subtitle}</p>
      )}
    </div>
  );
}
