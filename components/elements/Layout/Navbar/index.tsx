import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed z-[50] w-full h-[80px] bg-accents-pink-4">
      <div className="h-full max-w-screen-2xl flex justify-between items-center py-3 px-6 md:px-12 mx-auto">
        <Link href={"/"} className="h-full block">
          <Image
            src={"/navbar-splash.png"}
            alt="PERAK 2025 Navbar Splash"
            width={400}
            height={400}
            className="h-[110%] w-auto"
          />
        </Link>
        <div className="flex items-center gap-3 md:gap-9">test</div>
      </div>
    </nav>
  );
};
