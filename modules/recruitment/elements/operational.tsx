import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger  } from "@/components/ui/accordion"
import { Benefits } from "../components/benefits"
import { AccordionContent } from "@radix-ui/react-accordion"
import { JobDescription } from "../components/job-description"

export const Operational = () => {
  return (
    <div className="flex flex-col gap-5">
      <Card>
        <CardHeader>
          <CardTitle>E&S</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Divisi Equipment and Support (EnS) PERAK 2025 bertugas dalam memenuhi permintaan kebutuhan dari divisi lain seperti peminjaman tempat dan pengadaan barang. Selain itu, divis EnS juga bertugas untuk membantu divisi lain dalam melakukan kegiatan seperti melakukan live streaming dan pengoperasian platform Zoom meeting.</p>

          <br />

          <p>Kami mencari individu yang detail-oriented, komunikatif, dan siap jadi backbone acara PERAK 2025. Di divisi ini, kamu akan jadi problem solver yang memastikan semua perlengkapan, ruangan, dan teknologi siap mendukung kesuksesan acara. Mulai dari persiapan streaming untuk Competitive Games, pengoperasian platform Zoom untuk Family Games, hingga distribusi logistik dan akomodasi, semua akan berada di tanganmu!</p>

          <Accordion type="single">
            <JobDescription
              description={[
                "🛠️ Jadi Master of Equipment: Pastikan semua perlengkapan dan peralatan siap digunakan, dari awal acara hingga selesai.",
                "📦 Jadi Logistic Hero: Atur pemesanan dan distribusi barang-barang yang dibutuhkan untuk mendukung acara.",
                "🎥 Jadi Tech Supporter: Bantu persiapan streaming dan platform digital untuk Competitive Games dan Family Games.",
                "🤝 Jadi Liaison Expert: Jadilah penghubung antara vendor, penanggung jawab properti, dan divisi-divisi lainnya.",
                "🔒 Jadi Guardian of Security: Pastikan semua peralatan dan lokasi acara aman dan siap digunakan.",
              ]}
            />
            <Benefits
              benefits={[
                "🛠️ Skill Development - Dengan jadi staf EnS, kalian bakal belajar problem solving, manajemen logistik, dan juga koordinasi dengan banyak pihak lain (karena buat nyari barang dan minjem venue butuh koordinasi dan komunikasi yang baik guys!). Selain itu, kalian juga kemungkinan belajar pengoperasian platform-platform digital seperti Zoom Meeting dan juga live streaming.",
                "🚀 Networking Opportunity - Dengan jadi staf EnS, kalian bakalan banyak berkomunikasi dengan pihak lain, seperti dengan divisi lain (seperti Competitive Games, Family Games, dan lain-lain) ataupun vendor eksternal. Jadi, kalian pasti bakalan memperluas relasi kalian dan juga belajar berkomunikasi dengan orang lain secara profesional! 😎😎😎",
                "💡 Pengalaman Organisasi Berharga - Dapatkan pengalaman langsung dalam menyiapkan dan mengawal acara besar seperti PERAK 2025. Dengan pengalaman menjadi staf EnS di PERAK 2025, kalian juga bisa menambah portofolio kalian sebagai ope profesional buat kepanitiaan selanjutnya😎",
              ]}
            />
          </Accordion>
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
