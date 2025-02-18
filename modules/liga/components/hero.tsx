import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/ui/countdown";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="min-h-view-screen relative">
      <div className="w-full h-[60vw] bg-[#19369c] pt-[5%] px-[6%] -z-20 absolute">
        <div className="w-full h-full border border-[#02223E] bg-[#94CCFC] pt-12 px-10 rounded-[20px] z-20" />
      </div>
      <div className="w-full h-full relative pt-[5%] px-[6%] z-20">
        <div className="w-full h-full pt-[4%] px-[3.5%] relative">
          <div className="absolute pt-[5%] pl-[8%] grid grid-cols-[3fr_4fr]">
            <div className="h-full bg-[#3FD8D6] rounded-2xl flex flex-col items-center p-6">
              <div className="w-full bg-text-light-1 rounded-lg border-3 border-[#02223E] overflow-hidden">
                <div className="grid gap-3">
                  <div className="w-full h-3 bg-text-light-3" />
                  <div className="w-full h-3 bg-text-light-3" />
                  <div className="w-full h-3 bg-text-light-3" />
                  <div className="w-full h-3 bg-text-light-3" />
                  <div className="w-full h-3 bg-text-light-3" />
                  <div className="w-full h-3 bg-text-light-3" />
                </div>
              </div>
              <div className="relative px-6">
                <Countdown targetDate="02-25-2025 12:00:00" className="my-6" />
              </div>
              <Button>Lihat Permainan</Button>
            </div>
            <div className="relative overflow-hidden">
              <Image
                src="/liga-disk.png"
                fill
                alt="liga-disk"
                className="object-contain translate-x-12"
                style={{
                  animation: "spin 3s linear infinite",
                  scale: "125%",
                }}
              />
            </div>
          </div>
          <Image
            src="/liga-hero.png"
            alt="liga-hero"
            width={1738}
            height={1196}
          />
        </div>
      </div>
      <div className="relative h-[20.5rem] -mt-20 -z-10">
        <Image
          src="/liga-hero-bg.png"
          alt="hero-bg"
          fill
          className="object-contain z-0"
        />
      </div>
    </section>
  );
};

export default Hero;
