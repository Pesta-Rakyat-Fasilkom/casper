import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Creative = () => {
  return (
    <div>
      <h2 className="text-2xl">Divisi Kreatif</h2>

      <p>
        Divisi Kreatif di PERAK 2025 adalah tempat bagi ekspresi visual dan artistik. Divisi ini bertanggung jawab menciptakan identitas visual, mendokumentasikan momen penting, dan memastikan setiap acara tampil menarik. Dengan berbagai peran di dalamnya, divisi ini menjadi wadah bagi individu kreatif untuk berkarya.
      </p>

      <Accordion type="single">
        <AccordionItem value="visual-design-visdes">
          <AccordionTrigger>Visual Design (Visdes)</AccordionTrigger>
          <AccordionContent>
            Visdes mengelola seluruh aspek visual yang mendukung branding dan komunikasi Perak, mulai dari logo, poster, hingga konten digital. Visdes memastikan tampilan acara tetap selaras dan menarik melalui desain yang estetis dan kreatif.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="documentation-dnc">
          <AccordionTrigger>Documentation (DNC)</AccordionTrigger>
          <AccordionContent>
            DNC mendokumentasikan setiap momen penting Perak 2025 melalui foto, video, dan laporan tertulis. DNC memastikan semua dokumentasi tersusun rapi untuk publikasi dan arsip.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="documentation-dnc">
          <AccordionTrigger>Dekorasi (Dekor)</AccordionTrigger>
          <AccordionContent>
            Dekor bertanggung jawab atas konsep dekorasi yang mendukung tema acara. Dari panggung hingga elemen dekoratif lainnya, Dekor menciptakan suasana yang mendukung pengalaman acara yang lebih berkesan.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};