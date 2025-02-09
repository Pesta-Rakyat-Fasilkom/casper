export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div className="flex flex-col p-10 min-h-screen bg-[url(/images/profilebg.png)] items-center">
        <div className="relative w-full">
            <p className="font-husky text-center text-6xl md:text-start md:mx-32 md:text-5xl">profile</p>
            <img className="absolute  -left-1 -bottom-5 h-8 md:hidden"
                src="/images/8bitheart.png" height="5px" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center relative h-full md:w-3/5">
            <img className="absolute -top-3 -right-6"
            src="/images/pointy.png" alt="" />
            {children}
            <img className="absolute h-52 -bottom-36 -left-10 z-0"
            src="/images/barcode.png" alt="" />
        </div>
    </div>
    );
  }