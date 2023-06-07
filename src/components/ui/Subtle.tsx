import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const subtleVariants = cva("text-neutral-400 font-semibold", {
  variants: {
    variant: {
      default: "text-center",
    },
    size: {
      default: "text-2xl", // mb-16
      lg: "text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-left font-semibold",
      sm: "text-2xl md:text-3xl lg:text-4xl",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

interface SubtleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof subtleVariants> {}

const Subtle = forwardRef<HTMLHeadingElement, SubtleProps>(
  ({ className, size, variant, children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        {...props}
        className={cn(subtleVariants({ size, variant, className }))}
      >
        {children}
      </h2>
    );
  }
);

Subtle.displayName = "Subtle";

export default Subtle;