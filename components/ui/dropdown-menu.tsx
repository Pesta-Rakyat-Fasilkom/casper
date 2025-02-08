"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ children, className, ...props }, ref) => (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Menu
        </button>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Content
        ref={ref}
        className={cn(
          "bg-white border border-gray-200 rounded-md shadow-md p-2",
          className
        )}
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Root>
  )
);

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  
}

const DropdownMenuItem = React.forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ children, className, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        "px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  )
);

DropdownMenu.displayName = DropdownMenuPrimitive.Root.displayName;
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
export { DropdownMenu, DropdownMenuItem };