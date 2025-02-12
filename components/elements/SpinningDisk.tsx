import Image from "next/image";

const SpinningDisk = () => {
  return (
    <div className="flex justify-center items-center relative w-full">
      <div className="w-[80%] aspect-square absolute">
        <div className="w-[35%] aspect-square absolute -left-[12%] -top-[15%]">
          <Image
            src="/logo-thunder.png"
            fill
            alt="thunder"
            className="object-contain"
          />
        </div>
        <Image
          src="/auth-disk.png"
          alt="disk"
          fill
          style={{
            animation: "spin 3s linear infinite",
          }}
        />
        <Image
          src="/perak-logo-auth.png"
          fill
          alt="logo"
          className="object-contain scale-125"
        />
        <div className="w-[80%] aspect-square absolute -left-[30%] -bottom-[40%]">
          <Image
            src="/barcode.png"
            fill
            alt="barcode"
            className="object-contain hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default SpinningDisk;
