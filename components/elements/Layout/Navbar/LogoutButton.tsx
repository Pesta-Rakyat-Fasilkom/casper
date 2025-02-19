"use client";

import { useToast } from "@/components/hooks/use-toast";
import { useFormStatus } from "react-dom";
import { JSX } from "react/jsx-runtime";

export function LogoutButton({ icon }: { icon: JSX.Element | undefined }) {
  const { pending } = useFormStatus();
  const { toast } = useToast();

  return (
    <>
      {icon}
      <button
        type="submit"
        aria-disabled={pending}
        disabled={pending}
        onClick={() => {
          toast({
            variant: "loading",
            title: "Loading",
            description: "Please wait...",
          });
        }}
      >
        Keluar
      </button>
    </>
  );
}
