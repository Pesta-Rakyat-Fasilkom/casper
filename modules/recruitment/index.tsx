"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Creative } from "./elements/creative";
import { Finance } from "./elements/finance";
import { Marketing } from "./elements/marketing";
import { League } from "./elements/league";
import { Showrunner } from "./elements/showrunner";
import { Operational } from "./elements/operational";

export const Recruitment = () => {
  return (
    <div className="mx-auto px-4 my-12 max-w-5xl flex flex-col gap-12">
      <h1 className="text-4xl text-center">
        PERAK 2025 IS OPEN FOR RECRUITMENT!
      </h1>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
        <Button asChild variant="default">
          <Link
            href="https://forms.gle/3BQsnTqoF4GfTASd6"
            rel="noopener noreferrer"
            target="_blank"
          >
            Form Open Recruitment
          </Link>
        </Button>

        <Button asChild variant="default">
          <Link
            href="https://forms.gle/QBcxBLpaWrZ6QH1b9"
            rel="noopener noreferrer"
            target="_blank"
          >
            Form Pengumpulan Tugas
          </Link>
        </Button>
      </div>

      <Tabs>
        <TabsList className="mb-5 mx-auto w-full bg-[#ff3bde] border border-[#8a0e2d] text-white rounded-xl font-geist font-bold">
          <TabsTrigger value="showrunner">Showrunner</TabsTrigger>
          <TabsTrigger value="creative">Creative</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="league">League</TabsTrigger>
          <TabsTrigger value="operational">Operational</TabsTrigger>
        </TabsList>

        <TabsContent value="showrunner">
          <Showrunner />
        </TabsContent>
        <TabsContent value="creative">
          <Creative />
        </TabsContent>
        <TabsContent value="marketing">
          <Marketing />
        </TabsContent>
        <TabsContent value="finance">
          <Finance />
        </TabsContent>
        <TabsContent value="league">
          <League />
        </TabsContent>
        <TabsContent value="operational">
          <Operational />
        </TabsContent>
      </Tabs>
    </div>
  );
};
