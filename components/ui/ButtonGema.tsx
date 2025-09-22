import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonGemaProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "ghost" | "dark"; // <- nova opção
}

export function ButtonGema({
  children,
  variant = "default",
  ...props
}: ButtonGemaProps) {
  const base =
    "group/button relative inline-flex items-center justify-center overflow-hidden rounded-md px-4 md:px-6 py-2 transition-all duration-300 ease-in-out border-2 active:shadow-none active:translate-x-[3px] active:translate-y-[3px] cursor-pointer";

  const variantClasses =
    variant === "ghost"
      ? "bg-white border-black hover:bg-black/5 shadow-[3px_3px_0_0_black]"
      : variant === "dark"
      ? "bg-brand border-white hover:bg-brand/90 shadow-[3px_3px_0_0_white]"
      : "bg-brand backdrop-blur-lg border-black shadow-[3px_3px_0_0_black]";

  const textColor =
    variant === "ghost"
      ? "text-black"
      : variant === "dark"
      ? "text-white"
      : "text-black";

  const shineColor =
    variant === "ghost"
      ? "bg-gray-500/30"
      : variant === "dark"
      ? "bg-white/40"
      : "bg-white/30";

  return (
    <button {...props} className={`${base} ${variantClasses}`}>
      <span
        className={`text-sm md:text-base font-medium uppercase flex items-center gap-4 ${textColor}`}
      >
        {children}
      </span>

      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className={`relative h-full w-10 ${shineColor}`}></div>
      </div>
    </button>
  );
}
