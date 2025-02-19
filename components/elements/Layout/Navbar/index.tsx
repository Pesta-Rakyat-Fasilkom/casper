"use client";
import Image from "next/image";
import Link from "next/link";
import { NavigationButtons } from "./NavigationButtons";
import { NavDropdown, NavItems, NavLink } from "./interface";
import {
  Computer,
  DoorClosed,
  DoorOpen,
  House,
  Pen,
  User2,
} from "lucide-react";
import { NavigationMobile } from "./NavigationMobile";
import { User } from "@supabase/supabase-js";
import { usePathname } from "next/navigation";
import { profiles } from "@/lib/drizzle/schema";

let NavbarLinks: (NavLink | NavDropdown)[] = [
  {
    href: "/",
    label: "Home",
    icon: <House />,
    className: "hover:bg-[#FF9900] hover:text-text-light-3 text-text-dark-1",
  },
  {
    href: "/auth/login",
    label: "Masuk",
    icon: <DoorClosed />,
    authenticated: false,
    variant: "primary",
    className:
      "hover:bg-accents-red-1 hover:text-text-light-3 hover:text-text-light-3 text-text-dark-1",
  },
  {
    href: "/dashboard",
    label: "Dashboard",
    authenticated: true,
    icon: <Computer />,
    className: "hover:bg-[#FF9900] hover:text-text-light-3 text-text-dark-1",
  },
  {
    href: "#",
    label: "Username",
    icon: <User2 />,
    authenticated: true,
    children: [
      {
        href: "#",
        label: "Edit Profile",
        icon: <Pen />,
        authenticated: true,
        className: "hover:bg-[#FF9900] hover:text-text-light-3",
      },
      {
        href: "/auth/logout",
        label: "Keluar",
        authenticated: true,
        icon: <DoorOpen />,
        className:
          "hover:bg-accents-red-1 hover:text-text-light-3 font-bold text-accents-red-1",
      },
    ],
  },
];

export const Navbar = ({
  user,
  profile,
}: {
  user: User | null;
  profile: typeof profiles.$inferSelect | null;
}) => {
  const pathname = usePathname();
  if (pathname.includes("/dashboard")) return;

  const updatedNavbarLinks: NavItems = NavbarLinks.map((link) => {
    if (link.label === "Username" && user) {
      return { ...link, label: profile?.username as string };
    }
    return link;
  });

  return (
    <nav className="fixed inset-x-0 z-50 h-[80px] bg-accents-pink-4">
      <div className="h-full flex flex-row items-center justify-between px-2">
        <Image
          src={"/navbar-thunder.png"}
          alt="Navbar Thunder"
          width={500}
          height={500}
          className="h-[90%] w-auto hidden md:block"
        />
        <div className="h-full max-w-screen-2xl flex justify-between items-center py-3 px-6 md:px-12 mx-auto grow">
          <Link href={"/"} className="h-full block">
            <Image
              src={"/navbar-splash.png"}
              alt="PERAK 2025 Navbar Splash"
              width={400}
              height={400}
              className="h-[110%] w-auto"
            />
          </Link>
          <div className="flex items-center gap-3 md:gap-9">
            <NavigationButtons
              className="hidden min-[1130px]:flex"
              navbarLinks={updatedNavbarLinks} // Use the updated array
              user={user}
            />
            <NavigationMobile
              className="flex min-[1130px]:hidden"
              navbarLinks={updatedNavbarLinks} // Use the updated array
              user={user}
            />
          </div>
        </div>
        <Image
          src={"/navbar-thunder.png"}
          alt="Navbar Thunder"
          width={500}
          height={500}
          className="h-[90%] w-auto hidden md:block"
        />
      </div>
    </nav>
  );
};
