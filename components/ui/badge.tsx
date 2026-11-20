import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#1C1917] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-[#E5E3DF] bg-white text-[#1C1917] shadow-sm hover:bg-[#F5F5F4]",
        secondary:
          "border-transparent bg-[#F5F5F4] text-[#78716C] hover:bg-[#E7E5E4]",
        dark:
          "border-[#292524] bg-[#1C1917] text-white hover:bg-[#292524]",
        amber:
          "border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100",
        emerald:
          "border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100",
        sky:
          "border-sky-200 bg-sky-50 text-sky-800 hover:bg-sky-100",
        mono:
          "border-[#E7E5E4] bg-[#FAF8F5] text-[#44403C] font-mono text-[11px]",
        outline:
          "border-[#E5E3DF] text-[#1C1917] bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
