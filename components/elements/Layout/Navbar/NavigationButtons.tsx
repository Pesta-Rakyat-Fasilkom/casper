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
import { NavItems, NavLink } from "./interface";
import { cn } from "@/lib/utils";
import { LogoutButton } from "./LogoutButton";
import { User } from "@supabase/supabase-js";

const DropdownItem: React.FC<NavLink> = ({ href, label, icon, className }) => {
  if (label === "Keluar") {
    return <LogoutButton icon={icon} />;
  }
  return (
    <Link
      href={href}
      className={cn(
        navigationMenuTriggerStyle({
          variant: "secondary",
        }),
        `text-text-dark-1 w-full rounded-sm justify-start ${className}`,
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export const NavigationButtons = ({
  navbarLinks,
  className,
  user,
}: {
  navbarLinks: NavItems;
  className?: string;
  user: User | null;
}) => {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className="gap-3">
        {navbarLinks.map((link) => {
          if (
            link.authenticated != null &&
            ((link.authenticated && !user) || (!link.authenticated && user))
          ) {
            return null;
          }
          if ("children" in link) {
            return (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuTrigger>
                  {link.icon}
                  <span> {link.label}</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="min-w-32 bg-button-secondary rounded-sm p-2">
                    {link.children.map((child) => {
                      if (child.authenticated && !user) {
                        return null;
                      }
                      return (
                        <DropdownItem
                          key={child.label}
                          label={child.label}
                          href={child.href}
                          icon={child.icon}
                          className={child.className}
                        />
                      );
                    })}
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
                      // Feel free to change this according to the design needs
                      variant: link.variant ?? "secondary",
                    }),
                    "min-w-32",
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
