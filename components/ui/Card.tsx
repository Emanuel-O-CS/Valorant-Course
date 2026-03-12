import { type HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  hoverable?: boolean;
};

export default function Card({
  hoverable = false,
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`
        rounded-xl border border-[#1f1f1f] bg-[#111111] p-6
        ${hoverable ? "transition-colors hover:border-[#2a2a2a] hover:bg-[#1a1a1a]" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
