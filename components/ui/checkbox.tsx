"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps
>(({ value, className, ...props }, ref) => (
  <div className="h-6 sm:h-[8] justify-start items-start inline-flex">
    <div className="justify-center items-center gap-2 flex">
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          "peer h-6 w-6 sm:h-[8] sm:w-[8] shrink-0 rounded-md border border-black/20 bg-[#f62455] hover:bg-white hover:border-black/40 data-[state=checked]:bg-[#f62455] data-[state=checked]:border-black/30",
          "sm:border-black/20 sm:bg-white sm:hover:border-black/40 sm:data-[state=checked]:bg-[#f62455] sm:data-[state=checked]:border-black/30",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn("flex items-center justify-center text-white")}
        >
          <Check className="h-4 w-4 sm:h-5 sm:w-5" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <div className="text-[#340717] text-lg sm:text-sm font-normal font-['Poppins'] leading-snug sm:leading-none tracking-wide">
        {value}
      </div>
    </div>
  </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };