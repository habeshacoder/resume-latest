import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C1917] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#1C1917] text-white hover:bg-[#292524] shadow-sm active:scale-[0.98]",
        light:
          "bg-white text-[#1C1917] border border-[#E5E3DF] hover:bg-[#F5F5F4] shadow-sm active:scale-[0.98]",
        outline:
          "border border-[#E5E3DF] bg-transparent text-[#1C1917] hover:bg-white hover:border-[#D6D3D1] active:scale-[0.98]",
        secondary:
          "bg-[#F5F5F4] text-[#44403C] hover:bg-[#E7E5E4] active:scale-[0.98]",
        ghost:
          "text-[#78716C] hover:text-[#1C1917] hover:bg-[#F5F5F4]",
        link:
          "text-[#1C1917] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3.5 text-xs",
        lg: "h-12 px-7 text-base font-semibold",
        icon: "h-9 w-9 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
