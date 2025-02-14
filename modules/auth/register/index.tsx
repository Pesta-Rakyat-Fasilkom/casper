"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SpinningDisk from "@/components/elements/SpinningDisk";
import Image from "next/image";
import Link from "next/link";

import * as React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

interface DropdownComponentProps {
  value: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  items: string[];
  disabled?: boolean;
  className?: string;
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  value,
  onChange,
  isOpen,
  onOpenChange,
  items,
  disabled = false,
  className = "",
}) => {
  return (
    <Dropdown
      className={`bg-accents-pink-1  ${className}`}
      onOpenChange={onOpenChange}
      isDisabled={disabled}
    >
      <DropdownTrigger>
        <button
          className={`md:text-base lg:text-lg rounded-[8px] px-2 py-1.5 outline-none text-sm w-full bg-accents-yellow-5 border-2 border-accents-pink-1 text-accents-pink-1`}
          disabled={disabled}
          aria-expanded="false"
        >
          <div className="text-left w-full flex flex-row items-center justify-between">
            <span className="font-extrabold lg:text-base md:text-xs text-[10px]">
              {value}
            </span>
            <div
              className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8751 9.50002L11.9951 13.38L8.1151 9.50002C7.7251 9.11002 7.0951 9.11002 6.7051 9.50002C6.3151 9.89002 6.3151 10.52 6.7051 10.91L11.2951 15.5C11.6851 15.89 12.3151 15.89 12.7051 15.5L17.2951 10.91C17.6851 10.52 17.6851 9.89002 17.2951 9.50002C16.9051 9.12002 16.2651 9.11002 15.8751 9.50002Z"
                  fill="#73476A"
                />
              </svg>
            </div>
          </div>
        </button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Single selection example"
        selectedKeys={new Set([value])}
        selectionMode="single"
        variant="flat"
        className="bg-accents-pink-1 font-extrabold text-accents-yellow-1 hover:bg-accents"
        onSelectionChange={(keys) =>
          onChange(Array.from(keys as Set<string>)[0])
        }
      >
        {items.map((item) => (
          <DropdownItem key={item}>{item}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

const RegistrationDropdowns = () => {
  const [elementValue, setElementValue] = React.useState("Mahasiswa");
  const [angkatanValue, setAngkatanValue] = React.useState("Cosmic - 2024");
  const [elementOpen, setElementOpen] = React.useState(false);
  const [angkatanOpen, setAngkatanOpen] = React.useState(false);

  const elementItems = ["Mahasiswa", "Kantin", "Dosen", "Alumni", "Staff"];

  const angkatanItems = [
    "Cosmic - 2024",
    "Gaung - 2023",
    "Apollo - 2022",
    "Bakung - 2021",
  ];

  return (
    <div className="w-full grid grid-cols-2 gap-2 mb-4">
      <div className="w-full">
        <p className="font-extrabold text-sm md:text-base mb-1">Elemen</p>
        <DropdownComponent
          value={elementValue}
          onChange={setElementValue}
          isOpen={elementOpen}
          onOpenChange={setElementOpen}
          items={elementItems}
        />
      </div>
      <div className="w-full">
        <p className="font-extrabold text-sm md:text-base mb-1">Angkatan</p>
        <DropdownComponent
          value={angkatanValue}
          onChange={setAngkatanValue}
          isOpen={angkatanOpen}
          onOpenChange={setAngkatanOpen}
          items={angkatanItems}
          disabled={elementValue != "Mahasiswa"}
        />
      </div>
    </div>
  );
};

export const Register = ({
  signUpAction,
}: {
  signUpAction: (formData: FormData) => Promise<never>;
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="w-full grid max-md:grid-rows-[2fr_3fr] md:grid-cols-2 items-center justify-center min-h-view-screen px-4 pt-12 pb-32">
      <SpinningDisk />
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
            <div className="bg-accents-yellow-5 font-poppins text-text-dark-1 font-public mb-0 text-lg px-10 py-8">
              <h1 className="font-orelega text-black mb-5 text-center text-3xl">
                Register
              </h1>
              <div className="flex flex-col justify-center items-center">
                <div className="w-full mb-4">
                  <p className="font-extrabold text-sm md:text-base mb-1">
                    E-mail
                  </p>
                  <input
                    type="text"
                    name="email"
                    placeholder="Masukkan E-mail"
                    className="w-full border-[2px] md:text-base text-sm rounded-[8px] focus:outline-yellow-400 border-accents-blue-3 bg-[#fff7df] py-2 px-4 placeholder-text-dark-3"
                  />
                </div>
                <div className="w-full mb-4">
                  <p className="font-extrabold text-sm md:text-base mb-1">
                    Buat Password
                  </p>
                  <div className="flex items-center relative">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      name="password"
                      placeholder="Masukkan Password"
                      className="w-full border-[2px] md:text-base text-sm rounded-[8px] focus:outline-yellow-400 border-accents-blue-3 bg-accents-yellow-5 py-2 px-4 placeholder-text-dark-3"
                    />
                    <button
                      onClick={togglePasswordVisibility}
                      className="absolute right-4"
                    >
                      {isPasswordVisible ? <Eye /> : <EyeOff />}
                    </button>
                  </div>
                </div>
                <RegistrationDropdowns />
                <div className="w-full mb-4">
                  <p className="font-extrabold text-sm md:text-base mb-1">
                    ID Line
                  </p>
                  <div className="flex items-center relative">
                    <input
                      type="text"
                      placeholder="Masukkan ID Line"
                      className="w-full border-[2px] md:text-base text-sm rounded-[8px] focus:outline-yellow-400 border-accents-blue-3 bg-accents-yellow-5 py-2 px-4 placeholder-text-dark-3"
                    />
                  </div>
                </div>
                <div className="w-full mb-4">
                  <p className="font-extrabold text-sm md:text-base mb-1">
                    Nomor WhatsApp
                  </p>
                  <div className="flex items-center relative">
                    <input
                      type="text"
                      placeholder="Masukkan No. WA"
                      className="w-full border-[2px] md:text-base text-sm rounded-[8px] focus:outline-yellow-400 border-accents-blue-3 bg-[#fff7df] py-2 px-4 placeholder-text-dark-3"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  formAction={signUpAction}
                  className="w-48 h-12 text-lg"
                >
                  Register
                </Button>
                <p className="mt-2 font-poppins text-sm md:text-lg text-black">
                  Sudah punya akun?{" "}
                  <span className="underline">
                    {" "}
                    <Link href="/auth/login">Login</Link>{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex h-10 border-none justify-end bg-[#d9d9d9] p-3"></div>
          </Card>
          <div className="w-full h-16 md:h-20 absolute z-10 -bottom-8 md:-bottom-10">
            <Image
              src="/groups-heart.png"
              fill
              alt="hearts"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
