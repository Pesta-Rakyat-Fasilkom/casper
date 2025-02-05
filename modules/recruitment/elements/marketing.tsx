import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const Marketing = () => {
  return (
    <div className="flex flex-col gap-5">
      <Card className="bg-[#ff3bde] text-white">
        <CardHeader>
          <CardTitle>Bidang Marketing</CardTitle>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Direct Marketing</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            As a direct marketer, we only bring joy and excitement to PERAK!
            Divisi Direct Marketing (DRM) bertugas untuk meramaikan PERAK;
            berkesempatan untuk berperan sebagai MC, membuat konten menarik
            untuk liga dan berbagai mata acara, serta memasarkan PERAK ke
            internal maupun eksternal Fasilkom UI. Sebagai staff, kamu akan
            dibimbing untuk mengasah keterampilan komunikasi dan kreativitas,
            sehingga tidak hanya berkontribusi, tetapi juga berkembang bersama.
          </p>
          <br />
          <p>
            Dengan kreativitas pemasaran yang inovatif, kita akan berusaha untuk
            memperluas jangkauan dan awareness tentang PERAK 2025!
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Strategic Marketing</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            What’s an event without the hype? That’s where we come in! Di divisi
            Strategic Marketing (SGM), kita yang memastikan PERAK selalu jadi
            topik hangat! Dari bikin caption catchy, nge-live report keseruan
            acara, sampai nge-blast info penting ke semua peserta, kita yang
            pegang kendali! Di sini, kamu bakal belajar seni komunikasi digital,
            ngasah skill copywriting, dan jadi tangan kanan utama dalam
            publikasi acara.
          </p>
          <br />
          <p>
            Kalau suka dunia media sosial, marketing, atau sekadar pengen
            eksplorasi gimana caranya bikin orang tertarik lewat kata-kata, SGM
            PERAK 2025 tempat yang pas buat kamu!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
