"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
export const PasswordField = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <>
      <p className="font-extrabold text-sm md:text-base mb-1">Password</p>
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
          type="button"
        >
          {isPasswordVisible ? <Eye /> : <EyeOff />}
        </button>
      </div>
    </>
  );
};
