import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Countdown } from "@/components/ui/countdown";
import Image from "next/image";

const images = ["/liga/cg.png", "/liga/csl.png", "/liga/fg.png"];

export const Hero = () => {
  return (
    <section className="min-h-view-screen relative overflow-hidden">
      <div className="w-full h-[60vw] bg-[#19369c] pt-[5%] px-[6%] -z-20 absolute min-h-[584px]">
        <div className="w-full h-full border border-[#02223E] bg-[#94CCFC] pt-12 px-10 rounded-[20px] z-20" />
      </div>
      <div className="w-full h-full relative pt-[5%] px-[6%] z-20">
        <div className="w-full h-full pt-[4%] px-[3.5%] relative flex justify-center">
          <div className="absolute pt-2 min-[876px]:pt-[5%] min-[876px]:pl-[8%] min-[876px]:grid grid-cols-[3fr_4fr] min-[876px]:pr-[5.5%] gap-[2%]">
            <div className="h-full bg-[#3FD8D6] rounded-2xl flex flex-col items-center p-2 min-[876px]:p-6">
              <div className="w-full flex justify-center bg-text-light-1 relative rounded-lg border-3 border-[#02223E] overflow-hidden">
                <Carousel className="w-[50%] min-[876px]:w-[70%] h-full absolute z-20 bg-transparent">
                  <CarouselContent className="w-full h-full">
                    {images.map((src, index) => (
                      <CarouselItem
                        key={index}
                        className="w-full h-16 min-[876px]:h-32 relative flex justify-center"
                      >
                        <Image
                          src={src}
                          alt={`Slide ${index + 1}`}
                          fill
                          className="object-contain"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="z-50" />
                  <CarouselNext className="z-50" />
                </Carousel>
                <div className="w-full grid gap-1.5 min-[876px]:gap-3">
                  <div className="w-full h-1.5 min-[876px]:h-3 bg-text-light-3" />
                  <div className="w-full h-1.5 min-[876px]:h-3 bg-text-light-3" />
                  <div className="w-full h-1.5 min-[876px]:h-3 bg-text-light-3" />
                  <div className="w-full h-1.5 min-[876px]:h-3 bg-text-light-3" />
                  <div className="w-full h-1.5 min-[876px]:h-3 bg-text-light-3" />
                  <div className="w-full h-1.5 min-[876px]:h-3 bg-text-light-3" />
                </div>
              </div>
              <div className="relative min-[876px]:px-6">
                <Countdown
                  targetDate="02-25-2025 12:00:00"
                  className="min-[876px]:my-6"
                />
              </div>
              <Button>Lihat Permainan</Button>
            </div>
            <div className="max-[876px]: relative flex items-center">
              <div className="w-full aspect-square relative max-[876px]:scale-90">
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
                <Image
                  src="/disk-spinner.png"
                  width={407}
                  height={197}
                  alt="spinner"
                  className="absolute w-[80%] -bottom-[12%] -right-[4%]"
                />
                <div className="absolute -bottom-[16%] right-[28%] w-[20%]">
                  <Image
                    src="/perak.png"
                    alt="perak"
                    width={207}
                    height={83}
                    className=""
                  />
                  <Image
                    src="/tahun.png"
                    alt="tahun"
                    width={101}
                    height={38}
                    className="ml-[30%]"
                  />
                </div>
                <div className="absolute -bottom-[12%] left-[16%] w-[30%]">
                  <Image
                    src="/check.png"
                    alt="check"
                    width={135}
                    height={126}
                  />
                </div>
                <div className="absolute -top-[4%] -right-[10%] w-[16%]">
                  <Image
                    src="/star-liga.png"
                    alt="star-liga"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/liga-hero.png"
            alt="liga-hero"
            width={1738}
            height={1196}
            className="min-h-[584px] hidden min-[876px]:block"
          />
          <Image
            src="/liga-hero-mobile.png"
            alt="liga-hero-mobile"
            width={320}
            height={586}
            className="min-[876px]:hidden "
          />
        </div>
      </div>
      <div className="relative h-[20.5rem] -mt-20 -z-10">
        <Image
          src="/liga-hero-bg.png"
          alt="hero-bg"
          fill
          className="object z-0"
        />
      </div>
    </section>
  );
};

export default Hero;
