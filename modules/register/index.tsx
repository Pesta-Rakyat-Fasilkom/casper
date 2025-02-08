"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LoveIcon from "../../public/groups-heart.png";
import PointyThing from "../../public/pointy-thing.png";
import AuthDisk from "../../public/auth-disk.png";
import PerakLogo from "../../public/group-perak-icon.png";
import PerakLogoMobile from "@/public/group-perak-icon-mobile.png";
import Barcode from "@/public/barcode-mobile.png";
import Image from "next/image";
import Link from "next/link";

import * as React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { Button as HeroButton } from "@heroui/react";

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
      className={`bg-[#73476a]  ${className}`}
      onOpenChange={onOpenChange}
      isDisabled={disabled}
    >
      <DropdownTrigger>
        <button
          className={`capitalize md:text-xl rounded-xl px-2 py-2 outline-none  text-sm w-full bg-[#fff7df] border-2 border-[#73476a] text-[#73476a]`}
          disabled={disabled}
          aria-expanded="false"
        >
          <div className="text-left w-full flex flex-row items-center justify-between">
            <div>{value}</div>
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
        className="bg-[#73476a] font-extrabold text-[#fff7df]"
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
    "Bakung-2021",
  ];

  return (
    <div className="w-full flex flex-col md:flex-row gap-5">
      <div className="w-full sm:w-1/2">
        <p className="font-extrabold text-sm md:text-md mb-1">Elemen</p>
        <DropdownComponent
          value={elementValue}
          onChange={setElementValue}
          isOpen={elementOpen}
          onOpenChange={setElementOpen}
          items={elementItems}
        />
      </div>
      <div className="w-full sm:w-1/2">
        <p className="font-extrabold text-sm md:text-md mb-1">Angkatan</p>
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

export const Register = () => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="flex items-center justify-center min-h-screen md:mt-0 mt-28">
      <div className="md:grid md:w-[700px] lg:w-[1500px] md:grid-cols-2 sm:flex sm:flex-row items-center space-y-14">
        <div className="md:h-screen flex flex-col items-center justify-center">
          <Image
            src={AuthDisk}
            alt="Disk"
            style={{
              animation: "spin 6s linear infinite",
            }}
            className="relative  md:absolute max-w-[350px] md:translate-y-0 md:max-w-[300px] lg:max-w-[550px] lg:w-1/4"
          />
          <Image
            src={PerakLogo}
            alt="Perak Logo"
            className="absolute hidden md:block md:-translate-x-4 lg:-translate-x-12 w-1/2 md:max-w-[350px] lg:max-w-[577px] lg:w-1/3"
          />
          <Image
            src={PerakLogoMobile}
            alt="Perak Logo"
            className="absolute block md:hidden -translate-y-24 -translate-x-6 max-w-96"
          />
        </div>
        <div className="relative flex flex-col items-center">
          <div className="absolute top-0 right-0">
            <Image
              src={PointyThing}
              alt="Pointy Thing"
              className=" lg:w-36 lg:block hidden md:-translate-y-20 lg:-translate-y-32 md:translate-x-16 lg:translate-x-10"
            />
          </div>
          <Card
            style={{
              boxShadow: "15px 18px 1px rgba(0, 0, 0, 1)",
            }}
            className="border-none md:w-full md:max-w-[587px] max-w-[320px]"
          >
            <div className="flex rounded-t-xl border-none justify-end bg-[#ffe497] p-3 ">
              <div className="flex flex-row gap-2 mr-6">
                <div className="w-4 h-4 bg-[#d9d9d9] rounded-full"></div>
                <div className="w-4 h-4 bg-[#fbfbfb] rounded-full"></div>
                <div className="w-4 h-4 bg-[#73476a] rounded-full"></div>
              </div>
            </div>
            <div className="bg-[#fff7df] font-poppins text-[#340717] rounded-b-xl font-public -mb-10 md:mb-0 text-lg md:p-5 p-10">
              <h1 className="font-orelega text-black mb-5 text-center text-4xl md:mt-5">
                Register
              </h1>
              <div className="flex mb-8 flex-col justify-center items-center space-y-4">
                <div className="w-full">
                  <p className="font-extrabold text-sm md:text-md mb-1">
                    E-mail
                  </p>
                  <input
                    type="text"
                    placeholder="Masukkan e-mail Anda"
                    className="w-full border-[2px] md:text-xl text-sm rounded-[8px] focus:outline-[#2a3d92] border-[#2a3d92] bg-[#fff7df] py-2 px-4 placeholder-[#340717]"
                  />
                </div>
                <div className="w-full">
                  <p className="font-extrabold text-sm md:text-md mb-1">
                    Password
                  </p>
                  <div className="flex">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder="Masukkan password Anda"
                      className="w-full  border-[2px] mb-3 md:text-xl text-sm rounded-[8px] focus:outline-[#2a3d92] border-[#2a3d92] bg-[#fff7df] py-2 px-4 placeholder-[#340717]"
                    />
                  </div>
                  <div className="flex justify-end items-center pr-4">
                    <button
                      onClick={togglePasswordVisibility}
                      className="relative flex md:-translate-y-11 -translate-y-10 justify-center relative-0 focus:outline-none"
                    >
                      {isPasswordVisible ? (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.76029 9.24731C1.66124 9.09046 1.61171 9.01204 1.58398 8.89107C1.56315 8.80021 1.56315 8.65692 1.58398 8.56605C1.61171 8.44509 1.66124 8.36666 1.76029 8.20981C2.57889 6.91363 5.01552 3.6369 8.7288 3.6369C12.4421 3.6369 14.8787 6.91363 15.6973 8.20981C15.7964 8.36666 15.8459 8.44509 15.8736 8.56605C15.8944 8.65692 15.8944 8.80021 15.8736 8.89107C15.8459 9.01204 15.7964 9.09046 15.6973 9.24731C14.8787 10.5435 12.4421 13.8202 8.7288 13.8202C5.01552 13.8202 2.57889 10.5435 1.76029 9.24731Z"
                            stroke="#340717"
                            strokeWidth="1.45476"
                            strokeLinecap="round"
                          />
                          <path
                            d="M8.7288 10.9107C9.93396 10.9107 10.9109 9.93373 10.9109 8.72856C10.9109 7.5234 9.93396 6.54642 8.7288 6.54642C7.52364 6.54642 6.54666 7.5234 6.54666 8.72856C6.54666 9.93373 7.52364 10.9107 8.7288 10.9107Z"
                            stroke="#340717"
                            strokeWidth="1.45476"
                            strokeLinecap="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_9571_25723)">
                            <path
                              d="M7.93732 3.82165C8.23293 3.77795 8.53789 3.7545 8.85198 3.7545C12.5653 3.7545 15.0019 7.03124 15.8205 8.32741C15.9196 8.48429 15.9691 8.56273 15.9968 8.68372C16.0176 8.77458 16.0176 8.91793 15.9968 9.00879C15.969 9.12977 15.9192 9.20873 15.8194 9.36665C15.6013 9.71185 15.2687 10.197 14.8282 10.7231M5.01425 5.00199C3.4416 6.06881 2.37396 7.55097 1.88418 8.32629C1.78466 8.48383 1.7349 8.56261 1.70716 8.68358C1.68633 8.77444 1.68632 8.91777 1.70714 9.00863C1.73487 9.12961 1.7844 9.20805 1.88347 9.36492C2.70207 10.6611 5.1387 13.9378 8.85198 13.9378C10.3492 13.9378 11.6389 13.4051 12.6987 12.6843M2.30556 2.29974L15.3984 15.3926M7.30897 7.30316C6.91408 7.69805 6.66984 8.24358 6.66984 8.84616C6.66984 10.0513 7.64682 11.0283 8.85198 11.0283C9.45456 11.0283 10.0001 10.7841 10.395 10.3892"
                              stroke="#340717"
                              strokeWidth="1.45476"
                              strokeLinecap="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_9571_25723">
                              <rect
                                width="17.4571"
                                height="17.4571"
                                fill="white"
                                transform="translate(0.123169 0.117615)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <RegistrationDropdowns />
                <div className="w-full">
                  <p className="font-extrabold text-sm md:text-md mb-1">
                    Id Line
                  </p>
                  <input
                    type="text"
                    placeholder="Masukkan id Line Anda"
                    className="w-full border-[2px] rounded-[8px] md:text-xl text-sm focus:outline-[#2a3d92] border-[#2a3d92] bg-[#fff7df] py-2 px-4 placeholder-[#340717]"
                  />
                </div>
                <div className="w-full">
                  <p className="font-extrabold text-sm md:text-md mb-1">
                    Nomor Whatsapp
                  </p>
                  <input
                    type="number"
                    placeholder="Masukkan no. Whatsapp"
                    className="w-full border-[2px] mb-5 rounded-[8px] focus:outline-[#2a3d92] border-[#2a3d92] md:text-xl text-sm bg-[#fff7df] py-2 px-4 placeholder-[#340717]"
                  />
                </div>
                <Button className="w-full sm:w-56 h-12 text-lg z-10">
                  Register
                </Button>
                <p className="mt-2 font-poppins text-sm md:text-lg text-black z-30">
                  Sudah punya akun?{" "}
                  <span className="underline">
                    {" "}
                    <Link href="/auth/login">Login</Link>{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex h-12 rounded-b-xl border-none justify-end bg-[#d9d9d9] p-3"></div>
          </Card>
          <div className="absolute bottom-20">
            <Image
              src={LoveIcon}
              alt="Love Icon"
              className="w-[241px] md:translate-y-32 translate-y-12"
            />
          </div>
          <div className="relative w-screen flex justify-end -bottom-32 md:hidden ">
            <Image
              src={Barcode}
              alt="Barcode mobile"
              className="block md:hidden w-56"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
