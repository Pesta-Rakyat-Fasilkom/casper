"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import ChevronDown from "../icons/ChevronDown";
import ChevronUp from "../icons/ChevronUp";

interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  triggerLabel: string;
}

const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ triggerLabel, children, className, ...props }, ref) => {
    const [selected, setSelected] = React.useState<string | null>(null);
    const [open, setOpen] = React.useState<boolean>(false);

    const handleSelect = (value: string) => {
      setSelected(value);
    };

    return (
      <DropdownMenuPrimitive.Root open={open} onOpenChange={setOpen}>
        <DropdownMenuPrimitive.Trigger asChild>
        <button className="w-[328px] sm:w-[388px] h-11 p-2.5 bg-[#bf5989] rounded-[10px] justify-between items-center gap-2.5 inline-flex hover:bg-[#fff7df] hover:text-[#bf5989] group border-2 border-[#bf5989] data-[state=open]:bg-[#fff7df]">
          <div className="text-[#fff7df] text-sm font-bold font-['Poppins'] leading-tight tracking-tight group-hover:text-[#bf5989] group-data-[state=open]:text-[#bf5989]">
            {selected || triggerLabel}
          </div>
          {open ? (
              <ChevronUp className="w-5 h-5 text-[#bf5989] group-hover:text-[#fff7df]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#fff7df] group-hover:text-[#bf5989]" />
          )}
        </button>
        </DropdownMenuPrimitive.Trigger>
        <DropdownMenuPrimitive.Content
          ref={ref}
          className={cn(
            "w-[328px] sm:w-[388px] bg-[#bf5989] rounded-[10px] flex-col justify-start items-start inline-flex",
            className
          )}
          {...props}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child as React.ReactElement<any>, {
                onSelect: () => handleSelect((child.props as any).children),
                'data-selected': selected === (child.props as any).children,
              });
            }
            return child;
          })}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
    )
  });

DropdownMenu.displayName = "DropdownMenu";

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onSelect?: () => void;
}

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ children, className, onSelect, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "self-stretch h-11 p-2.5 bg-[#bf5989] rounded-[10px] justify-start items-center gap-2.5 inline-flex hover:bg-[#fff7df] group border-2 border-[#bf5989]",
      className
    )}
    onSelect={onSelect}
    {...props}
  >
    <div className="text-[#fff7df] text-xs font-bold font-['Poppins'] leading-none tracking-wide group-hover:text-[#bf5989]">
      {children}
    </div>
  </DropdownMenuPrimitive.Item>
));

DropdownMenuItem.displayName = "DropdownMenuItem";

export { DropdownMenu, DropdownMenuItem };
