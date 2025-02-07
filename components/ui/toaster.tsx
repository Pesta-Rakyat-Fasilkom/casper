"use client";
import { useToast } from "@/components/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import {
  CheckCircle,
  AlertCircle,
  XCircle,
  LucideIcon,
  Loader2,
} from "lucide-react";

const variantIcons: Record<string, LucideIcon> = {
  success: CheckCircle,
  warning: AlertCircle,
  error: XCircle,
  loading: Loader2,
};

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        variant = "success",
        ...props
      }) {
        const Icon = variantIcons[variant ?? "success"];

        return (
          <Toast key={id} {...props} variant={variant}>
            <div className="flex items-center gap-3">
              {Icon && (
                <Icon
                  className={`h-8 w-8 ${variant === "loading" ? "animate-spin" : ""}`}
                />
              )}
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
