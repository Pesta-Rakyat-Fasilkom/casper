import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import SpinningDisk from "@/components/elements/SpinningDisk";
import { PasswordField } from "../register/components/PasswordField";

export const Login = ({
  signInAction,
}: {
  signInAction: (formData: FormData) => Promise<never>;
}) => {
  return (
    <div className="w-full grid max-md:grid-rows-[2fr_3fr] md:grid-cols-2 items-center justify-center min-h-view-screen px-4 pt-12 pb-32">
      <SpinningDisk />
      <div className="flex flex-col items-center px-4">
        <div className="w-full max-w-[420px] md:max-w-[480px] relative mr-3 mb-3">
          <div className="absolute w-16 h-16 -top-16 -right-16">
            <Image
              fill
              src="/pointy-thing.png"
              alt="pointy"
              className="object-contain z-10"
            />
          </div>
          <div className="h-full w-full absolute rounded-[18px] bg-black -z-10 -right-3 -bottom-3" />
          <Card className="border-none rounded-[18px] overflow-hidden relative">
            <div className="flex border-none justify-end bg-accents-yellow-4 p-3">
              <div className="flex flex-row gap-2 mr-4">
                <div className="w-4 h-4 bg-[#d9d9d9] rounded-full"></div>
                <div className="w-4 h-4 bg-accents-grey-5 rounded-full"></div>
                <div className="w-4 h-4 bg-accents-pink-1 rounded-full"></div>
              </div>
            </div>
            <form className="bg-accents-yellow-5 font-poppins text-text-dark-1 font-public mb-0 text-lg p-10">
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
                    name="email"
                    placeholder="Masukkan E-mail"
                    className="w-full border-[2px] md:text-base text-sm rounded-[8px] focus:outline-yellow-400 border-accents-blue-3 bg-[#fff7df] py-2 px-4 placeholder-[#340717]"
                  />
                </div>
                <div className="w-full mb-6">
                  <PasswordField />
                </div>
                <Button className="w-48 h-12 text-lg" formAction={signInAction}>
                  Login
                </Button>
                <p className="mt-2 font-poppins text-sm md:text-lg text-black">
                  Belum punya akun?{" "}
                  <span className="underline">
                    {" "}
                    <Link href="/auth/register">Register</Link>{" "}
                  </span>
                </p>
              </div>
            </form>
            <div className="flex h-10 border-none justify-end bg-[#d9d9d9] p-3"></div>
          </Card>
          <div className="w-full h-16 md:h-20 absolute z-10 -bottom-8 md:-bottom-12">
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
