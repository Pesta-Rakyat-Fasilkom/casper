"use client";

import { signOutAction } from "@/app/actions";
import { useToast } from "@/components/hooks/use-toast";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import { JSX } from "react/jsx-runtime";

export function LogoutButton({
  icon,
  className,
}: {
  icon: JSX.Element | undefined;
  className?: string;
}) {
  const { pending } = useFormStatus();
  const { toast } = useToast();

  return (
    <form action={signOutAction} className="w-full">
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
        className={cn(
          navigationMenuTriggerStyle({
            variant: "secondary",
          }),
          `w-full rounded-sm justify-start hover:bg-accents-red-1 hover:text-text-light-3 font-bold text-accents-red-1 ${className}`,
        )}
      >
        {icon}
        Keluar
      </button>
    </form>
  );
}
