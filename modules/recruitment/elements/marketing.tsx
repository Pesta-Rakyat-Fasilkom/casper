import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Marketing = () => {
  return (
    <div>
      <h2 className="text-2xl">Divisi Marketing</h2>

      <Accordion type="single">
        <AccordionItem value="visual-design-visdes">
          <AccordionTrigger>Direct Marketing</AccordionTrigger>
          <AccordionContent>
            As a direct marketer, we only bring joy and excitement to PERAK! Divisi Direct Marketing (DRM) bertugas untuk meramaikan PERAK; berkesempatan untuk berperan sebagai MC, membuat konten menarik untuk liga dan berbagai mata acara, serta memasarkan PERAK ke internal maupun eksternal Fasilkom UI. Sebagai staff, kamu akan dibimbing untuk mengasah keterampilan komunikasi dan kreativitas, sehingga tidak hanya berkontribusi, tetapi juga berkembang bersama.
            <br />
            Dengan kreativitas pemasaran yang inovatif, kita akan berusaha untuk memperluas jangkauan dan awareness tentang PERAK 2025!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="documentation-dnc">
          <AccordionTrigger>Documentation (DNC)</AccordionTrigger>
          <AccordionContent>
            What’s an event without the hype? That’s where we come in! Di divisi Strategic Marketing (SGM), kita yang memastikan PERAK selalu jadi topik hangat! Dari bikin caption catchy, nge-live report keseruan acara, sampai nge-blast info penting ke semua peserta, kita yang pegang kendali! Di sini, kamu bakal belajar seni komunikasi digital, ngasah skill copywriting, dan jadi tangan kanan utama dalam publikasi acara.
            <br />
            Kalau suka dunia media sosial, marketing, atau sekadar pengen eksplorasi gimana caranya bikin orang tertarik lewat kata-kata, SGM PERAK 2025 tempat yang pas buat kamu!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};