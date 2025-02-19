"use client";
import Burger from "@/components/icons/Burger";
import { X } from "lucide-react";
import { useState } from "react";
import { NavItems, NavLink } from "./interface";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { User } from "@supabase/supabase-js";

const DropdownItem: React.FC<NavLink> = ({ href, label, icon, className }) => {
  return (
    <Link
      href={href}
      className={cn(
        navigationMenuTriggerStyle({
          variant: "secondary",
        }),
        `min-w-40 rounded-sm justify-end ${className}`,
      )}
    >
      <span>{label}</span>
      {icon}
    </Link>
  );
};

const MenuMobile = ({
  navbarLinks,
  user,
}: {
  navbarLinks: NavItems;
  user: User | null;
}) => {
  return (
    <div className="absolute top-24 right-[5%] bg-[#FFFFFF] dark:bg-[#101617]">
      <ul className="bg-button-secondary rounded-sm p-2 flex flex-col ">
        {navbarLinks.map((link) => {
          if (
            link.authenticated != null &&
            ((link.authenticated && !user) || (!link.authenticated && user))
          ) {
            return null;
          }
          if ("children" in link) {
            return link.children.map((child) => (
              <DropdownItem
                key={child.label}
                label={child.label}
                href={child.href}
                icon={child.icon}
                className={child.className}
              />
            ));
          }
          return (
            <DropdownItem
              key={link.label}
              label={link.label}
              href={link.href}
              icon={link.icon}
              className={link.className}
            />
          );
        })}
      </ul>
    </div>
  );
};

const Overlay = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="fixed left-0 top-0 w-screen h-screen z-[-1]"
      onClick={() => setIsOpen(false)}
    />
  );
};

export const NavigationMobile = ({
  navbarLinks,
  className,
  user,
}: {
  navbarLinks: NavItems;
  className?: string;
  user: User | null;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenNavbar() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={className}>
      <button onClick={handleOpenNavbar}>
        {isOpen ? (
          <X size={32} className="stroke-[#1A2223] dark:stroke-[#DDF7F9]" />
        ) : (
          <Burger
            className="stroke-[#1A2223] dark:stroke-[#DDF7F9]"
            size="32px"
          />
        )}
      </button>
      {isOpen && <MenuMobile navbarLinks={navbarLinks} user={user} />}
      {isOpen && <Overlay setIsOpen={setIsOpen} />}
    </div>
  );
};
