import { Card } from "@/components/ui/card";
import SpinningDisk from "@/components/elements/SpinningDisk";
import Image from "next/image";
import Link from "next/link";

import * as React from "react";
import { RegistrationDropdowns } from "./components/RegistrationDropdowns";
import { PasswordField } from "./components/PasswordField";
import { SubmitButton } from "./components/SubmitButton";
import { FormMessage } from "@/components/elements/FormMessage/FormMessage";
import { Message } from "@/components/elements/FormMessage/interface";
export const Register = ({
  signUpAction,
  searchParams,
}: {
  signUpAction: (formData: FormData) => Promise<never>;
  searchParams: Message;
}) => {
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
            <form className="bg-accents-yellow-5 font-poppins text-text-dark-1 font-public mb-0 text-lg px-10 py-8">
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
                    Username
                  </p>
                  <input
                    type="text"
                    name="username"
                    placeholder="Masukkan Username"
                    className="w-full border-[2px] md:text-base text-sm rounded-[8px] focus:outline-yellow-400 border-accents-blue-3 bg-[#fff7df] py-2 px-4 placeholder-text-dark-3"
                  />
                </div>
                <div className="w-full mb-4">
                  <p className="font-extrabold text-sm md:text-base mb-1">
                    Full Name
                  </p>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Masukkan Full Name"
                    className="w-full border-[2px] md:text-base text-sm rounded-[8px] focus:outline-yellow-400 border-accents-blue-3 bg-[#fff7df] py-2 px-4 placeholder-text-dark-3"
                  />
                </div>
                <div className="w-full mb-4">
                  <PasswordField />
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
                      name="line_id"
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
                      name="whatsapp_number"
                      placeholder="Masukkan No. WA"
                      className="w-full border-[2px] md:text-base text-sm rounded-[8px] focus:outline-yellow-400 border-accents-blue-3 bg-[#fff7df] py-2 px-4 placeholder-text-dark-3"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 w-full">
                  <SubmitButton
                    formAction={signUpAction}
                    className="w-48 h-12 text-lg"
                    pendingText="Registering..."
                  >
                    Register
                  </SubmitButton>
                  <FormMessage message={searchParams} />
                </div>
                <p className="mt-2 font-poppins text-sm md:text-lg text-black">
                  Sudah punya akun?{" "}
                  <span className="underline">
                    {" "}
                    <Link href="/auth/login">Login</Link>{" "}
                  </span>
                </p>
              </div>
            </form>
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
