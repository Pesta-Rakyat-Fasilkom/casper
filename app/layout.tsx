import { Geist, Orelega_One, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Layout } from "@/components/elements/Layout";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "PERAK 2025",
  description: "PERAK 2025 - Pacil Ria Nostalgia",
};

const geistSans = Geist({
  display: "swap",
  variable: "--font-geist",
  subsets: ["latin"],
});

const orelegaOne = Orelega_One({
  weight: "400",
  variable: "--orelega-one",
  subsets: ["latin"],
});

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const huskyStash = localFont({
  src: "./husky-stash.otf",
  variable: "--font-husky-stash",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        huskyStash.variable,
        geistSans.variable,
        orelegaOne.variable,
        // poppins.variable,
        "bg-[#ff9eeb] bg-[url(/doodle-pink-1.png)] text-[#8a0e2d]"
      )}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
