import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger  } from "@/components/ui/accordion"
import { Benefits } from "../components/benefits"
import { AccordionContent } from "@radix-ui/react-accordion"

export const Operational = () => {
  return (
    <div className="flex flex-col gap-5">
      <Card>
        <CardHeader>
          <CardTitle>E&S</CardTitle>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Field Controller</CardTitle>
        </CardHeader>
        <CardContent>
          <p>✨Divisi Field Controller PERAK 2025: Garda Terdepan Kelancaran Acara!✨</p>

          <br />

          <p>Divisi Field Controller PERAK 2025 adalah kunci di balik setiap kelancaran operasional dalam PERAK 2025! Kami memastikan segala kebutuhan konsumsi dan keamanan selama acara berjalan dengan sempurna, menciptakan pengalaman yang nyaman dan berkesan bagi semua peserta.</p>

          <Accordion type="single">
            <AccordionItem value="job-description">
              <AccordionTrigger>Job Description</AccordionTrigger>
              <AccordionContent>
                <p>Dalam setiap momen PERAK 2025, kami bertanggung jawab atas:</p>
                <ul className="list-disc ml-5">
                  <li>🍽️ Koordinasi Konsumsi – Berkomunikasi dengan divisi lain untuk memastikan kebutuhan konsumsi dalam acara terpenuhi.</li>
                  <li>📦 Pemesanan & Distribusi – Memesan dan mengatur distribusi konsumsi agar tepat waktu dan sesuai dengan kebutuhan.</li>
                  <li>🤝 Hubungan dengan Vendor – Menjalin koordinasi dengan vendor untuk memastikan kelancaran pengadaan konsumsi.</li>
                  <li>🛡️ Keamanan Acara – Mengawasi dan memastikan keamanan dalam berbagai acara PERAK 2025.</li>
                </ul>

                <br />

                <p>Kami tidak hanya bekerja di balik layar, tetapi juga menjadi tulang punggung kelancaran setiap rangkaian acara. Dengan ketelitian, komunikasi yang baik, dan kesiapan menghadapi tantangan, kami hadir untuk memastikan PERAK 2025 berlangsung dengan sukses!</p>

                <br />

                <p>Jadi, kalau kamu punya skill manajemen logistik yang baik, sigap dalam mengatasi masalah, jago koordinasi, dan siap jadi bagian dari tim yang menjaga kelancaran acara, yuk gabung dengan kami dan buat PERAK 2025 semakin luar biasa! 🚀🎊</p>
              </AccordionContent>
            </AccordionItem>

            <Benefits
              benefits={[
                "Memperluas relasi dengan para staff PERAK 2025",
                "Menambah wawasan terkait kepengurusan sebuah acara di bidang Field Controller ",
                "Mengasah keterampilan komunikasi dan kerja sama tim.",
                "Meningkatkan kemampuan dalam menyelesaikan masalah",
                "Memperluas jaringan dan relasi dengan banyak orang.",
              ]}
            />
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
