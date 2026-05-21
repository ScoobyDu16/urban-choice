import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({ children, className = "", narrow = false }: ContainerProps) {
  return (
    <div className={`mx-auto px-4 ${narrow ? "max-w-4xl" : "container"} ${className}`}>
      {children}
    </div>
  );
}
