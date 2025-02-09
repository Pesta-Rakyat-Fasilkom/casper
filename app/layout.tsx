import { Geist,Poppins } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

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
  subsets: ["latin"],
});

const poppins = Poppins({
  display: "swap",
  subsets : ["latin"],
  weight : ['400','500','700']
})

const huskyStash = localFont({
  src:"../public/fonts/HuskyStash.otf",
  display:'swap',
  variable:"--husky"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.className} ${huskyStash.variable} ${poppins.className}`} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
