"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Recruitment = () => {
  return (
    <div className="mx-auto px-4 my-12 max-w-5xl">
      <h1 className="text-xl text-center">Recruitment is open!</h1>
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Divisi 1</AccordionTrigger>
          <AccordionContent>
            Deskripsi Divisi 1
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Divisi 2</AccordionTrigger>
          <AccordionContent>
            Deskripsi Divisi 2
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
