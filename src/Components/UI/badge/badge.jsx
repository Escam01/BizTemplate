import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import st from './badge/badge.module.scss';
const badgeVariants = cva(
  `${st.badge} ${st.base}`,
  {
    variants: {
      variant: {
        default: `${st.default}`,
        secondary: `${st.secondary}`,
        destructive: `${st.destructive}`,
        outline: `${st.outline}`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
export { Badge, badgeVariants };