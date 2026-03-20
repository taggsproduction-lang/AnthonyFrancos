import { BUSINESS } from "@/lib/constants";

interface OrderButtonProps {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline";
  className?: string;
}

export default function OrderButton({
  size = "md",
  variant = "primary",
  className = "",
}: OrderButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary:
      "bg-brand-red text-white hover:bg-brand-red-dark",
    outline:
      "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white",
  };

  return (
    <a
      href={BUSINESS.orderUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full font-bold transition ${sizes[size]} ${variants[variant]} ${className}`}
    >
      Order Online
    </a>
  );
}
