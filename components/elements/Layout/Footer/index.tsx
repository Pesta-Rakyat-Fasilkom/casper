import { Youtube } from "@/components/icons/Youtube";
import { INSTAGRAM_URL, TWITTER_URL, YOUTUBE_URL } from "./constant";
import Image from "next/image";
import { Instagram } from "@/components/icons/Instagram";
import { Twitter } from "@/components/icons/Twitter";

// TODO: fix outline and typography
export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 sm:px-8 lg:px-20 bg-accents-pink-4 relative overflow-hidden">
      <Image
        src={"/footer-star-2.png"}
        alt="PERAK 2025 Logo"
        width={238}
        height={228}
        className="h-[50%] md:h-max w-auto absolute top-0 md:top-auto md:bottom-0 -left-16 md:left-0 rotate-90 md:rotate-0"
      />
      <Image
        src={"/footer-star-1.png"}
        alt="PERAK 2025 Logo"
        width={238}
        height={228}
        className="h-[50%] md:h-max w-auto absolute bottom-0 right-0"
      />
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
          <Image
            src={"/perak-logo.png"}
            alt="PERAK 2025 Logo"
            width={100}
            height={100}
            className="w-[75px] h-[75px] md:w-[100px] md:h-[100px]"
          />
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="font-husky-stash text-3xl text-text-dark-2 drop-shadow-[2px_2px_1px_#FFFFFF]">
              PERAK 2025
            </p>
            <div className="flex flex-row text-white drop-shadow-[2px_2px_1px_#4D1B51]">
              <p className="font-husky-stash text-sm">#PacilRiaNostalgia</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-text-light-3 drop-shadow-[0px_2px_3px_rgba(0,0,0,0.8)]">
            Ikuti Perak di
          </p>
          <div className="flex flex-row gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Instagram size="w-8 h-8" fill="fill-current" />
            </a>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
              <Youtube size="w-8 h-8" fill="fill-current" />
            </a>
            <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
              <Twitter size="w-8 h-8" fill="fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
