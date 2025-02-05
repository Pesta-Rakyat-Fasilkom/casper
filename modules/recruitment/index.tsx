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
      <h1 className="text-4xl text-center">PERAK 2025 is open for recruitment!</h1>

      <div className="flex flex-row gap-4 justify-center">
        <Button asChild variant='outline'>
          <Link href="https://forms.gle/3BQsnTqoF4GfTASd6" rel="noopener noreferrer" target="_blank">
            Form Open Recruitment
          </Link>
        </Button>

        <Button asChild variant='outline'>
          <Link href="https://forms.gle/QBcxBLpaWrZ6QH1b9" rel="noopener noreferrer" target="_blank">
            Form Pengumpulan Tugas
          </Link>
        </Button>
      </div>

      <Tabs>
        <TabsList className="mb-5 align-center">
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
