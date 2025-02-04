"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Creative } from "./elements/creative";
import { Finance } from "./elements/finance";
import { Marketing } from "./elements/marketing";
import { League } from "./elements/league";

export const Recruitment = () => {
  return (
    <div className="mx-auto px-4 my-12 max-w-5xl flex flex-col gap-12">
      <h1 className="text-4xl text-center">Recruitment is open!</h1>

      <Tabs>
        <TabsList className="mb-5 align-center">
          <TabsTrigger value="creative">Creative</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="league">League</TabsTrigger>
        </TabsList>

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
      </Tabs>
    </div>
  );
};
