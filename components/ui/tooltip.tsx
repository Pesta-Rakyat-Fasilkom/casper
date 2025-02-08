"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";
import Hazard from "../icons/Hazard";
import { X } from "lucide-react";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, children, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-visible rounded-md bg-background-3 px-3 py-1.5 text-sm text-popover-foreground shadow-xl animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  >
    {children}
    <TooltipPrimitive.Arrow
      width={11}
      height={5}
      className="fill-background-3 animate-in fade-in-0 zoom-in-95"
    />
  </TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

interface TooltipPerakProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  hasCloseButton?: boolean;
  side?: "top" | "right" | "bottom" | "left";
  maxWidth?: string;
}

// Here is the Tooltip for the Design System
// Example usage:
//
//  <TooltipPerak
//    content={
//      <p>
//        Tool Tip. Mauris tellus, eget ut aliquam aliquet tincidunt habitant
//        ipsum.
//      </p>
//    }
//  >
//    <Button>Tooltip Trigger</Button>
//  </TooltipPerak>
//
const TooltipPerak = ({
  children,
  content,
  className,
  icon = <Hazard size="32px" />,
  hasCloseButton = true,
  side = "top",
  maxWidth = "300px",
}: TooltipPerakProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <TooltipProvider>
      <Tooltip open={isOpen} onOpenChange={setIsOpen} defaultOpen={true}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className={className} side={side}>
          <div className="flex flex-row gap-3 overflow-hidden p-2 items-start">
            {icon}
            <div className={cn(`max-w-[${maxWidth}]`)}>{content}</div>
            {hasCloseButton && (
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:opacity-80"
              >
                <X className="stroke-[#858C94]" />
              </button>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipPerak;
