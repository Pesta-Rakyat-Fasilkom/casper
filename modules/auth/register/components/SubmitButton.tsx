"use client";

import { useToast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type Props = ComponentProps<typeof Button> & {
  pendingText?: string;
};

export function SubmitButton({
  children,
  pendingText = "Submitting...",
  ...props
}: Props) {
  const { pending } = useFormStatus();
  const { toast } = useToast();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      {...props}
      onClick={() => {
        toast({
          variant: "loading",
          title: "Loading",
          description: "Please wait...",
        });
      }}
    >
      {pending ? pendingText : children}
    </Button>
  );
}
