import Image from "next/image";
import Link from "next/link";
import { NavigationButtons } from "./NavigationButtons";
import { NavDropdown, NavLink } from "./interface";
import { Home } from "@/components/icons/Home";
import { Laptop } from "@/components/icons";
import { Computer, DoorOpen, House, Pen, User2 } from "lucide-react";
import { NavigationMobile } from "./NavigationMobile";

const NavbarLinks: (NavLink | NavDropdown)[] = [
  {
    href: "#",
    label: "Home",
    icon: <House />,
    className: "hover:bg-[#FF9900] hover:text-text-light-3 text-text-dark-1",
  },
  {
    href: "#",
    label: "Dashboard",
    icon: <Computer />,
    className: "hover:bg-[#FF9900] hover:text-text-light-3 text-text-dark-1",
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

export const Navbar = () => {
  return (
    <nav className="fixed z-[50] w-full h-[80px] bg-accents-pink-4">
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
              navbarLinks={NavbarLinks}
            />
            <NavigationMobile
              className="flex min-[1130px]:hidden"
              navbarLinks={NavbarLinks}
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
