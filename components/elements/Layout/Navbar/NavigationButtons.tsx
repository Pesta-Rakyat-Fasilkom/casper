import { Laptop } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import { NavDropdown, NavLink } from "./interface";
import { Home } from "@/components/icons/Home";
import { DoorOpen, Pen, User2 } from "lucide-react";
import { cn } from "@/lib/utils";

const NavbarLinks: (NavLink | NavDropdown)[] = [
  {
    href: "#",
    label: "Home",
    icon: (
      <Home size="w-6 h-6" fill="fill-text-dark-1" className="stroke-[0.5]" />
    ),
  },
  {
    href: "#",
    label: "Dashboard",
    icon: (
      <Laptop size="w-6 h-6" fill="fill-text-dark-1" className="stroke-[0.5]" />
    ),
  },
  {
    href: "#",
    label: "Username",
    icon: <User2 />,
    children: [
      {
        href: "#",
        label: "Edit Profile",
        icon: <Pen />,
        className: "hover:bg-[#FF9900] hover:text-text-light-3",
      },
      {
        href: "#",
        label: "Keluar",
        icon: <DoorOpen />,
        className:
          "hover:bg-accents-red-1 hover:text-text-light-3 font-bold text-accents-red-1",
      },
    ],
  },
];

const DropdownItem: React.FC<NavLink> = ({ href, label, icon, className }) => {
  return (
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink
        className={cn(
          navigationMenuTriggerStyle({
            variant: "secondary",
          }),
          `text-text-dark-1 w-full rounded-sm justify-start ${className}`,
        )}
      >
        {icon}
        <span>{label}</span>
      </NavigationMenuLink>
    </Link>
  );
};

export const NavigationButtons = ({ className }: { className?: string }) => {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className="*:min-w-32 gap-3">
        {NavbarLinks.map((link) => {
          if ("children" in link) {
            return (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuTrigger>
                  {link.icon}
                  <span> {link.label}</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="min-w-32 bg-button-secondary rounded-sm p-2">
                    {link.children.map((child) => (
                      <DropdownItem
                        key={child.label}
                        label={child.label}
                        href={child.href}
                        icon={child.icon}
                        className={child.className}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem key={link.label}>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle({
                      variant: "secondary",
                    }),
                    "text-text-dark-1",
                  )}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
