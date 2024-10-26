import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "-/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border cursor-pointer py-1 px-2 text-xs font-base transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        reading:
          "border-transparent bg-gray-50 text-gray-300-foreground shadow hover:bg-gray-300/60",
        completed:
          "border-gray-300 bg-transparent text-gray-50-foreground shadow hover:bg-gray-50/60",
        planned:
          "border-gray-200 bg-transparent text-gray-300-foreground shadow hover:bg-gray-100/60",
      },
    },
    defaultVariants: {
      variant: "planned",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
