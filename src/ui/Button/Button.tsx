import type { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const ButtonVariants = {
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
} as const;

type ButtonVariant = (typeof ButtonVariants)[keyof typeof ButtonVariants];

const buttonVariants = {
  [ButtonVariants.Primary]: "border-black",
  [ButtonVariants.Secondary]: "bg-dark text-white",
  [ButtonVariants.Tertiary]: "bg-primary-2 text-black",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

export function Button({
  children,
  variant = "primary",
  className,
  ...restProps
}: ButtonProps) {
  const buttonVariantClasses = buttonVariants[variant];

  const classes = {
    button: twMerge(
      "border py-3 px-6 rounded-3xl uppercase text-sm cursor-pointer",
      buttonVariantClasses,
      className
    ),
  };

  return (
    <button className={classes.button} {...restProps}>
      {children}
    </button>
  );
}
