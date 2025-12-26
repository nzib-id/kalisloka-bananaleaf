import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline-light";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        "px-6 py-3 rounded-full text-sm font-semibold transition-all",
        {
          "bg-white text-black hover:bg-gray-200":
            variant === "primary",

          "border-[1.5px] border-white text-white hover:bg-white/10":
            variant === "outline-light",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
