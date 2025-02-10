export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div className="flex flex-col p-10 min-h-screen bg-[url(/images/profilebg.png)] items-center relative">
        <img className="absolute  h-36 hidden top-1/3 left-16 z-0 md:inline-block"
            src="/images/tall-stars.png" height="5px" alt="" />
        <img className="absolute  h-10 hidden top-1/3 right-28 z-0 md:inline-block"
            src="/images/one-star.png" height="5px" alt="" />
        <div className="relative w-full">
            <p className="font-husky-stash text-center text-6xl md:text-start md:mx-32 md:text-5xl">profile</p>
            <img className="absolute  -left-1 -bottom-5 h-8 md:hidden"
                src="/images/8bitheart.png" height="5px" alt="" />
            <img className="absolute  h-36  -top-16 left-52 z-0 hidden md:inline-block"
                src="/images/halfstone-star.png" height="5px" alt="" />
            <img className="absolute  h-20  top-0 md:left-1/2 z-0 hidden md:inline-block"
                src="/images/star-pair.png" height="5px" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center relative h-full md:w-full">
            <img className="absolute -top-3 -right-6 sm:-right-9 md:right-24 lg:right-44"
            src="/images/pointy.png" alt="" />
            {children}
            <img className="absolute h-80 -bottom-56 -left-12 z-0"
            src="/images/barcode.png" alt="" />
            <img className="absolute h-96 -bottom-72 -right-10 z-0"
                src="/images/CD.png" height="5px" alt="" />
        </div>
    </div>
    );
  }