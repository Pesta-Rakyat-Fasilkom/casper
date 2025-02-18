"use client";
import { useEffect } from "react";
import { toast } from "@/components/hooks/use-toast";
import { useSearchParams } from "next/navigation";

const ToastCallback = () => {
  const searchParams = useSearchParams();

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
    }
  }, [searchParams]);

  return null;
};

export default ToastCallback;
