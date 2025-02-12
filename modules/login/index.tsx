"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LoveIcon from "@/public/groups-heart.png";
import PointyThing from "@/public/pointy-thing.png";
import AuthDisk from "@/public/auth-disk.png";
import Barcode from "@/public/barcode-mobile.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeClosed, EyeOff } from "lucide-react";

export const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="w-full grid max-md:grid-rows-[2fr_3fr]  md:grid-cols-2 items-center justify-center min-h-view-screen px-4 py-12">
      {/* <div className="absolute top-0 right-0">
            <Image
              src={PointyThing}
              alt="Pointy Thing"
              className="  lg:w-36 lg:block hidden md:-translate-y-20 lg:-translate-y-32 md:translate-x-16 lg:translate-x-10"
            />
          </div> */}
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
            className=""
            style={{
              animation: "spin 3s linear infinite",
            }}
          />
          <Image
            src="/perak-logo-auth.png"
            fill
            alt="logo"
            className="object-contain scale-125a"
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
      <div className="flex flex-col items-center px-4">
        <div className="w-full max-w-[420px] md:max-w-[480px] relative mr-3 mb-3">
          <div className="h-full w-full absolute rounded-[18px] bg-black -z-10 -right-3 -bottom-3" />
          <Card className="border-none rounded-[18px] overflow-hidden">
            <div className="flex border-none justify-end bg-accents-yellow-4 p-3">
              <div className="flex flex-row gap-2 mr-4">
                <div className="w-4 h-4 bg-[#d9d9d9] rounded-full"></div>
                <div className="w-4 h-4 bg-accents-grey-5 rounded-full"></div>
                <div className="w-4 h-4 bg-accents-pink-1 rounded-full"></div>
              </div>
            </div>
            <div className="bg-accents-yellow-5 font-poppins text-text-dark-1 font-public mb-0 text-lg p-10">
              <h1 className="font-orelega text-black mb-5 text-center text-3xl">
                Login
              </h1>
              <div className="flex flex-col justify-center items-center">
                <div className="w-full mb-4">
                  <p className="font-extrabold text-sm md:text-base mb-1">
                    E-mail
                  </p>
                  <input
                    type="text"
                    placeholder="Masukkan E-mail"
                    className="w-full border-[2px] md:text-base text-sm rounded-[8px] focus:outline-yellow-400 border-accents-blue-3 bg-[#fff7df] py-2 px-4 placeholder-[#340717]"
                  />
                </div>
                <div className="w-full mb-6">
                  <p className="font-extrabold text-sm md:text-base mb-1">
                    Password
                  </p>
                  <div className="flex items-center relative">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder="Masukkan Password"
                      className="w-full border-[2px] md:text-base text-sm rounded-[8px] focus:outline-yellow-400 border-accents-blue-3 bg-[#fff7df] py-2 px-4 placeholder-[#340717]"
                    />
                    <button
                      onClick={togglePasswordVisibility}
                      className="absolute right-4"
                    >
                      {isPasswordVisible ? <Eye /> : <EyeOff />}
                    </button>
                  </div>
                </div>
                <Button className="w-48 h-12 text-lg">Login</Button>
                <p className="mt-2 font-poppins text-sm md:text-lg text-black">
                  Belum punya akun?{" "}
                  <span className="underline">
                    {" "}
                    <Link href="/auth/register">Register</Link>{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex h-10 border-none justify-end bg-[#d9d9d9] p-3"></div>
          </Card>
          <div className="w-full h-16 md:h-24 absolute z-10 -bottom-8 md:-bottom-14">
            <Image
              src="/groups-heart.png"
              fill
              alt="hearts"
              className="object-contain"
            />
          </div>
        </div>
        <div className="relative h-20 w-full">
          <div className="absolute w-full h-full top-6 -right-24">
            <Image
              src="/barcode.png"
              fill
              alt="barcode"
              className="object-contain block md:hidden top-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
