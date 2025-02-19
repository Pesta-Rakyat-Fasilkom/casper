"use client";
import { useEffect } from "react";
import { toast } from "@/components/hooks/use-toast";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const removeToastParams = (searchParams: URLSearchParams): string => {
  const newSearchParams = new URLSearchParams(searchParams);

  // Remove all toast-related parameters
  const toastParams = ["toastSuccess", "toastWarning", "toastError"];
  toastParams.forEach((param) => {
    newSearchParams.delete(param);
  });

  // Convert to string, only include ? if there are remaining params
  const queryString = newSearchParams.toString();
  return queryString ? `?${queryString}` : "";
};

const ToastCallback = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.has("toastSuccess")) {
      toast({
        variant: "success",
        title: "Success",
        description: searchParams.get("toastSuccess"),
      });
    } else if (searchParams.has("toastWarning")) {
      toast({
        variant: "warning",
        title: "Warning",
        description: searchParams.get("toastWarning"),
      });
    } else if (searchParams.has("toastError")) {
      toast({
        variant: "error",
        title: "Error",
        description: searchParams.get("toastError"),
      });
    } else {
      return;
    }

    const newUrl = `${pathname}${removeToastParams(searchParams)}`;
    router.replace(newUrl, { scroll: false });
  }, [searchParams]);

  return null;
};

export default ToastCallback;
