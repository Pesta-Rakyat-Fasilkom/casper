import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Creative = () => {
  return (
    <div className="flex flex-col gap-5">
      <p>
        Divisi Kreatif di PERAK 2025 adalah tempat bagi ekspresi visual dan
        artistik. Divisi ini bertanggung jawab menciptakan identitas visual,
        mendokumentasikan momen penting, dan memastikan setiap acara tampil
        menarik. Dengan berbagai peran di dalamnya, divisi ini menjadi wadah
        bagi individu kreatif untuk berkarya.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Visual Design (Visdes)</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Visdes mengelola seluruh aspek visual yang mendukung branding dan
            komunikasi Perak, mulai dari logo, poster, hingga konten digital.
            Visdes memastikan tampilan acara tetap selaras dan menarik melalui
            desain yang estetis dan kreatif.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Documentation (DNC)</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            DNC mendokumentasikan setiap momen penting Perak 2025 melalui foto,
            video, dan laporan tertulis. DNC memastikan semua dokumentasi
            tersusun rapi untuk publikasi dan arsip.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dekorasi (Dekor)</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Dekor bertanggung jawab atas konsep dekorasi yang mendukung tema
            acara. Dari panggung hingga elemen dekoratif lainnya, Dekor
            menciptakan suasana yang mendukung pengalaman acara yang lebih
            berkesan.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
