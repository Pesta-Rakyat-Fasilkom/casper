import { JSX } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { House, Star } from "lucide-react";

interface SidebarProps {
  isSidebarOpen: boolean;
  Games: string[];
  Navigation: {
    href: string;
    label: string;
    icon: JSX.Element;
    children: {
      href: string;
      label: string;
      icon: JSX.Element;
      className?: string;
    }[];
  };
}

interface NavLink {
  href: string;
  label: string;
  className?: string;
  icon?: JSX.Element;
}

const DropdownItem: React.FC<NavLink> = ({ href, label, icon, className }) => {
  return (
    <Link
      href={href}
      className={cn(
        navigationMenuTriggerStyle({
          variant: "secondary",
        }),
        `text-text-dark-1 w-full rounded-sm justify-start ${className}`
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  Games,
  Navigation,
}) => {
  return (
    <div
      className={`${isSidebarOpen && "translate-x-0"} w-80 flex flex-col items-center px-8 inset-y-0 fixed bg-accents-pink-4 border-r-4 border-section-4 rounded-r-md -translate-x-full md:translate-x-0 transition z-[9999]`}
    >
      <div>
        <div className="w-full h-20 relative my-14">
          <Image
            src="/perak-logo-2.png"
            fill
            alt="logo"
            className="object-contain"
          />
        </div>
        <div className="w-full">
          <Button variant="tertiary" className="text-lg text-text-dark-1">
            <House />
            Dashboard
          </Button>
          <div className="border-t-4 border-b-4 border-text-dark-1 px-2 py-4 my-4">
            {Games.map((game, idx) => (
              <Button
                key={idx}
                variant="tertiary"
                className="text-lg text-text-dark-1"
              >
                <Star />
                {game}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="relative mt-12">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem key={Navigation.label}>
              <NavigationMenuTrigger>
                {Navigation.icon}
                <span>{Navigation.label}</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="min-w-32 bg-button-secondary rounded-sm p-2">
                  {Navigation.children.map((child) => (
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
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Sidebar;
