import Image from "next/image";
import Link from "next/link";
import { NavigationButtons } from "./NavigationButtons";

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
            <NavigationButtons className="hidden lg:flex" />
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
