"use client";
import Image from "next/image";
import spothlight from "@/public/landing/spothlight landing.png";
import logo from "@/public/perak-logo.png";
import cursorClickIcon from "@/public/landing/cursor-click-01.svg";
import doddle from "@/public/landing/doddle landing.png";
import union from "@/public/landing/Union.png";
import spottedBg from "@/public/landing/spotted_bg.png";
import phone from "@/public/landing/Phone.png";
import ContainerPhone from "@/public/landing/Vector 2.png";
import higghlighterPhone from "@/public/landing/Vector 3.png";
import popUp from "@/public/landing/Pop up 2.png";
import openRec from "@/public/landing/Open Rec.png";
import rectangleLeague from "@/public/landing/rectangle_league.png";
import maskLeague from "@/public/landing/maskgroup_rectangle.png";
import leagueText from "@/public/landing/League.png";
import perakText from "@/public/landing/perak_text.png";
import halfStoneStar from "@/public/landing/Halfstones Star (3).png";
import FaqTitle from "@/public/landing/FAQ_title.png";
import pointy1 from "@/public/landing/Pointy Thing 1.png";
import pointy2 from "@/public/landing/Pointy Thing 2.png";
import ltlStar from "@/public/landing/littleStar.png";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useRef } from "react";

export const Landing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mainContainer flex flex-col justify-center items-center bg-[#f8dbe9] overflow-hidden relative">
      <div className="container1 w-full h-[750px] sm:h-[900px] relative">
        <div className="relative w-full h-full flex flex-col justify-start items-center py-36 ">
          <div className="z-40 w-fit h-fit relative ">
            <Image
              src={logo}
              alt="logo_perak"
              width={220}
              height={220}
              className="z-40"
              quality={100}
            />

            <Image
              src={pointy1}
              alt="pointy_things"
              className="z-40 absolute -top-16 -right-10 hidden sm:block"
            />

            <Image
              src={pointy2}
              alt="pointy_things"
              className="z-40 absolute -top-14 -right-20 hidden sm:block"
            />
          </div>

          <div className="z-20 relative flex w-full justify-center items-center h-fit py">
            <div className="flex flex-col max-w-[700px] sm:w-[80%] relative ">
              <Image
                src={ltlStar}
                alt="pointy_things"
                className="z-40 absolute -top-6 -left-12 hidden sm:block "
              />

              <h1 className="z-20 text-[50px] md:text-[57px] sm:text-[75px] text-[#480068] font-husky-stash mainly-stroke text-center">
                Pesta Rakyat Komputer
              </h1>
              <div className=" right-[10%] bottom-0 md:-right-5 md:-bottom-4  sm:right-0 sm:-bottom-2 absolute flex flex-col items-center">
                <h1 className="z-20 text-[25px] sm:text-[36px] text-[#FFE497] font-husky-stash -rotate-12 text-shadow ">
                  2025
                </h1>
                <div className="z-10   sm:top-1 bg-[#FCBBCA] sm:bg-[#F4F1FF] skew-x-[-20deg] w-28 h-11 sm:w-32 sm:h-14 absolute border-[2px] border-black -rotate-[15deg]"></div>
              </div>
            </div>
          </div>

          <p className="z-20 hidden sm:block text-[32px] font-orelega text-center mt-10">
            Siapkan dirimu untuk kembali ke masa keemasan 2000an dan nikmati
            setiap momen nostalgia di PERAK tahun ini!
          </p>

          <button
            className="w-[230px] h-[40px] sm:w-[221px] sm:h-[34px] mt-10 sm:mt-8 bg-[#F62455] rounded-[10px] flex gap-[10px] justify-center items-center z-20 hover:shadow-xl "
            onClick={() => handleScroll()}
          >
            <span className="text-[#FCFBFD] text-[16px] font-poppins z-20 ">
              {" "}
              Mulai jelajah{" "}
            </span>
            <Image
              src={cursorClickIcon}
              alt="cursor_icon"
              width={20}
              height={20}
              className="text-[#FCFBFD] font-poppins z-20 "
            />
          </button>
        </div>

        <Image
          src={spothlight}
          alt="spotlight_picture"
          fill
          priority
          className="z-10 absolute bottom-0 object-center"
        />

        <div className=" header_doddle w-full h-[520px] absolute top-0  hidden sm:flex ">
          <Image src={doddle} alt="doddle" className="opacity-90" />
          <Image src={doddle} alt="doddle" className="opacity-90" />
          <Image src={doddle} alt="doddle" className="opacity-90" />
          <Image src={doddle} alt="doddle" className="opacity-90" />
          <Image src={doddle} alt="doddle" className="opacity-90" />
          <Image src={doddle} alt="doddle" className="opacity-90" />
          <Image src={doddle} alt="doddle" className="opacity-90" />
          <Image src={doddle} alt="doddle" className="opacity-90" />

          <Image src={doddle} alt="doddle" className="opacity-90" />
          <Image src={doddle} alt="doddle" className="opacity-90" />
        </div>
      </div>

      <div
        className="container2 relative w-full h-[900px] sm:h-[1024px] bg-[#FFE1F9] flex flex-col justify-center items-center gap-8 pb-24 overflow-hidden"
        ref={sectionRef}
      >
        <Image
          src={union}
          alt="union_object"
          className="w-full z-10 hidden sm:block"
        />

        <div className=" doddle_container w-full h-[520px] absolute top-0  hidden sm:flex -z-0 ">
          <Image src={doddle} alt="doddle" className="opacity-90" />
          <Image src={doddle} alt="doddle" className="opacity-90" />
          <Image src={doddle} alt="doddle" className="opacity-90" />
          <Image src={doddle} alt="doddle" className="opacity-90" />
          <Image src={doddle} alt="doddle" className="opacity-90" />
          <Image src={doddle} alt="doddle" className="opacity-90" />
          <Image src={doddle} alt="doddle" className="opacity-90" />
          <Image src={doddle} alt="doddle" className="opacity-90" />
          <Image src={doddle} alt="doddle" className="opacity-90" />
          <Image src={doddle} alt="doddle" className="opacity-90" />
        </div>

        <div className="grid grid-cols-4 grid-rows-3 h-[900px] w-[90%] xl:size-[1100px] gap-5 z-10 p-6 sm:p-0">
          <div className="lg:col-span-3 sm:col-span-4 w-full h-full relative p-[2px] hidden sm:block  ">
            <Image
              src={ContainerPhone}
              alt="ContainerPhone"
              fill
              className="absolute hidden sm:block"
              loading="lazy"
            />

            <Image
              src={phone}
              alt="phone_image"
              className="absolute z-30 top-0 h-full aspect-auto hidden sm:block"
              loading="lazy"
            />

            <div className="w-[95%] h-full relative  overflow-hidden hidden sm:block ">
              <Image
                src={higghlighterPhone}
                alt="higlighter_for_phone"
                fill
                className="absolute aspect-auto"
                loading="lazy"
              />
            </div>

            <Image
              src={popUp}
              alt="Popup_fot_calling_out"
              className="absolute -top-20 z-40 right-0 w-[529px] hidden sm:block "
              loading="lazy"
            />

            <h1 className="absolute top-[45px] z-40 right-32 text-[46px] rotate-12 text-black hidden sm:block font-husky-stash">
              Calling Out <br /> Pacillians!{" "}
            </h1>
          </div>

          <div className="col-span-4 sm:col-span-1  relative w-full  h-full py-6 sm:py-0 flex sm:hidden lg:flex flex-col sm:flex-row justify-center items-center bg">
            <Image
              src={openRec}
              alt="open_rec_image"
              className="object-cover sm:-ml-16 w-[98%] h-auto"
              loading="lazy"
            />
            <h1 className="block sm:hidden text-[#387AB4] text-[8vw] text-shadow-perak-league -rotate-[6deg] absolute right-6 -bottom-[5%]">
              Perak League
            </h1>
          </div>

          <div className="relative row-span-2 w-full h-full hidden lg:flex">
            <Image
              src={rectangleLeague}
              alt="logo_perak"
              width={220}
              height={220}
              className="z-10"
              loading="lazy"
            />

            <Image
              src={maskLeague}
              alt="logo_perak"
              width={220}
              height={220}
              className="z-20 absolute top-0"
              loading="lazy"
            />

            <Image
              src={perakText}
              alt="logo_perak"
              className="z-20 absolute top-5 left-14"
              loading="lazy"
              quality={100}
            />

            <Image
              src={leagueText}
              alt="logo_perak"
              width={200}
              height={200}
              className="z-20 absolute -bottom-14 right-12"
              loading="lazy"
            />
          </div>

          <div className=" col-span-4 row-span-2  sm:row-span-2 lg:col-span-3 flex justify-center items-center w-full h-[600px] sm:h-full">
            <div className=" bg-[#EAE4FF] w-full h-full border-[4px] border-black text-[32px] font-orelega p-4">
              Pesta Rakyat Komputer (PERAK) adalah acara tahunan Fasilkom UI
              yang menghadirkan berbagai kegiatan seru untuk mempererat
              kebersamaan dan memberikan ruang bagi mahasiswa untuk melepas
              penat dari kesibukan akademik. Melalui kompetisi olahraga,
              permainan interaktif, dan berbagai acara spesial, PERAK menjadi
              ajang refreshing sekaligus wadah untuk mengekspresikan diri.
            </div>
          </div>
        </div>
      </div>

      <div
        className="container3 relative w-full h-[700px] sm:h-[800px] bg-[#F4F1FF] pt-32 overflow-hidden"
        style={{
          backgroundImage: `url(${spottedBg.src})`,
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className="w-full h-fit flex flex-col justify-center items-center z-10 ">
          <div className="z-40 relative">
            <Image
              src={FaqTitle}
              alt="bg_text"
              className=" z-10 w-[350px] sm:w-[450px]"
            />
          </div>
        </div>

        <Image
          src={halfStoneStar}
          alt="phone_image"
          className="z-10 absolute -bottom-0 -right-64 h-full aspect-auto opacity-60 hidden sm:block"
          loading="lazy"
        />

        <Image
          src={halfStoneStar}
          alt="phone_image"
          className="z-10 absolute -bottom-96 left-1/2 -translate-x-1/2 h-full aspect-auto scale-95 opacity-60 hidden sm:block"
          loading="lazy"
        />

        <Image
          src={halfStoneStar}
          alt="phone_image"
          className="z-10 absolute -bottom-36 -left-32 h-full aspect-auto rotate-45 opacity-60 hidden sm:block"
          loading="lazy"
        />
      </div>

      <div className="mt-[-26rem] pb-6 bottom-6 w-[90%] mx-auto z-50">
        <Accordion
          type="single"
          collapsible
          className="z-50 w-full flex flex-col gap-5 -mt-4"
        >
          <AccordionItem value="item-1" className="z-40">
            <AccordionTrigger>PERAK itu apa sih?</AccordionTrigger>
            <AccordionContent>
              <strong>Pesta Rakyat Komputer (PERAK)</strong> adalah acara
              tahunan Fasilkom UI yang menghadirkan berbagai kegiatan seru untuk
              mempererat kebersamaan dan memberikan ruang bagi mahasiswa untuk
              melepas penat dari kesibukan akademik. Melalui kompetisi olahraga,
              permainan interaktif, dan berbagai acara spesial, PERAK menjadi
              ajang refreshing sekaligus wadah untuk mengekspresikan diri.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="z-40">
            <AccordionTrigger>PERAK ini tentang apa sih?</AccordionTrigger>
            <AccordionContent>
              Tahun ini, PERAK mengusung tema "Nostalgia 2000an", mengajak kamu
              untuk kembali ke era penuh kenangan dengan nuansa, musik, dan
              keseruan khas masa itu.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="z-40">
            <AccordionTrigger>
              Di PERAK kita bakal ngapain aja sih?
            </AccordionTrigger>
            <AccordionContent>
              Berbagai acara menarik siap memeriahkan PERAK, mulai dari "Ada Apa
              Dengan peraC?" (penyambutan PERAK dan karaoke night bagi pecinta
              musik), "Pacil Gathering" (acara yang mempertemukan mahasiswa
              sampai alumni untuk menjalin kembali kebersamaan lintas angkatan),
              "LEt’s Go Outing" (kesempatan untuk bersantai dan menikmati
              suasana luar kampus), hingga "Malam PERAK Berpesta", acara puncak
              yang menghadirkan pertunjukan spesial dan kemeriahan yang tak
              terlupakan.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
