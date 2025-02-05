import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion } from "@/components/ui/accordion"
import { JobDescription } from "../components/job-description"
import { Benefits } from "../components/benefits"

export const Showrunner = () => {
  return (
    <div className="flex flex-col gap-5">
      <Card>
        <CardHeader>
          <CardTitle>Event</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Divisi Event merupakan bagian yang bertanggung jawab atas perencanaan, pelaksanaan, serta evaluasi setiap mata acara dalam PERAK 2025. Dengan enam mata acara utama yaitu:
          </p>

          <br />

          <ul className="list-disc ml-5">
            <li>Grand Launching &mdash; Peluncuran resmi PERAK 2025 melalui video pembuka yang menampilkan kilas balik PERAK sebelumnya, pengenalan tema dan slogan, serta pembukaan simbolis oleh PO dan VPO.</li>
            <li>AADC (Ada Apa Dengan peraC) &mdash; Acara pembuka yang memberikan kesan pertama tentang PERAK 2025 dengan konsep nostalgia tahun 2000-an. Kegiatan meliputi Karaoke Night, Dress to Impress, Mini Games, dan Bilik Kenangan (Festival Zone).</li>
            <li>Pacil Gathering &mdash; Ajang temu kangen mahasiswa, dosen, alumni, dan elemen Fasilkom dengan berbagai kegiatan seperti Networking Session, Talkshow, Performances, Bilik Kenangan, Nostalgic Corner, Stand-Up Comedy, dan Buka Puasa Bersama.</li>
            <li>LEGO (Let’s Go Outing) &mdash; Piknik santai sambil menonton final Family Games. Acara ini menghadirkan Interactive Art Space, Picnic Zone, Mini Performance, dan Treasure Hunt (Amazing Race Pacil Edition).</li>
            <li>Perak Idol &mdash; Kompetisi untuk menentukan performance favorit dari rangkaian acara PERAK. Pemenang ditentukan melalui voting di media sosial dan akan tampil kembali di MAPRES sebagai highlight pilihan publik.</li>
            <li>MAPRES (Malam Perak Berpesta) &mdash; Acara penutupan PERAK 2025 yang menghadirkan penampilan berbagai elemen Fasilkom serta pasar malam penuh hiburan, menjadi puncak euforia PERAK 2025.</li>
          </ul>

          <br />

          <p>
            Divisi ini memastikan seluruh rangkaian kegiatan berjalan dengan lancar, sesuai dengan tema dan nilai yang diusung.
          </p>

          <br />

          <p>
            Kami membuka kesempatan bagi individu yang memiliki kemampuan event management, problem solving, kreativitas, ketelitian, komunikasi yang baik, serta manajemen waktu yang optimal untuk bergabung sebagai Staff Event.  
          </p>

          <Accordion type="single">
            <JobDescription
              description={[
                "Perencanaan Acara – Merancang konsep, tema, serta menyusun teknis pelaksanaan setiap mata acara.",
                "Koordinasi dan Pelaksanaan – Berperan aktif dalam persiapan dan pelaksanaan acara, bekerja sama dengan berbagai pihak internal maupun eksternal.",
                "Pengelolaan Teknis Acara – Mengatur aspek teknis dalam penyelenggaraan acara agar berjalan sesuai rencana.",
                "Kreativitas dan Inovasi – Mengembangkan ide-ide kreatif untuk meningkatkan keterlibatan serta pengalaman peserta acara.",
                "Penyelesaian Masalah – Menyusun strategi untuk mengatasi kendala atau situasi tak terduga selama acara berlangsung.",
              ]}
            />
            <Benefits
              benefits={[
                "Pengalaman Langsung dalam Manajemen Acara – Kesempatan untuk terlibat dalam perencanaan dan pelaksanaan event kampus berskala besar.",
                "Pengembangan Soft Skills – Meningkatkan kemampuan komunikasi, kepemimpinan, kerja sama tim, serta manajemen waktu.",
                "Jaringan dan Relasi Luas – Berinteraksi dengan mahasiswa, alumni, dosen, serta berbagai elemen lain yang terlibat dalam PERAK 2025.",
                "Nilai Tambah dalam Portofolio – Pengalaman yang dapat menjadi poin unggulan dalam CV serta meningkatkan personal branding.",
                "Momen Berkesan dan Tak Terlupakan – Berkontribusi dalam menciptakan acara yang akan menjadi bagian dari perjalanan sejarah PERAK.",
              ]}
            />
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Festival</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Divisi Festival bertanggung jawab dalam menciptakan suasana yang mendukung dan menghidupkan setiap acara utama PERAK 2025. Melalui booth permainan, stand makanan, serta elemen hiburan lainnya, divisi ini memastikan bahwa setiap peserta dapat merasakan pengalaman yang menyenangkan dan berkesan sepanjang rangkaian acara PERAK. Divisi ini memiliki 6 mata acara utama yaitu:
          </p>

          <br />

          <ul className="list-disc ml-5">
            <li>Grand Launching &mdash; Peluncuran resmi PERAK 2025 melalui video pembuka yang menampilkan kilas balik PERAK sebelumnya, pengenalan tema dan slogan, serta pembukaan simbolis oleh PO dan VPO.</li>
            <li>AADC (Ada Apa Dengan peraC) &mdash; Acara pembuka yang memberikan kesan pertama tentang PERAK 2025 dengan konsep nostalgia tahun 2000-an. Kegiatan meliputi Karaoke Night, Dress to Impress, Mini Games, dan Bilik Kenangan (Festival Zone).</li>
            <li>Pacil Gathering &mdash; Ajang temu kangen mahasiswa, dosen, alumni, dan elemen Fasilkom dengan berbagai kegiatan seperti Networking Session, Talkshow, Performances, Bilik Kenangan, Nostalgic Corner, Stand-Up Comedy, dan Buka Puasa Bersama.</li>
            <li>LEGO (Let’s Go Outing) &mdash; Piknik santai sambil menonton final Family Games. Acara ini menghadirkan Interactive Art Space, Picnic Zone, Mini Performance, dan Treasure Hunt (Amazing Race Pacil Edition).</li>
            <li>MAPRES (Malam Perak Berpesta) &mdash; Acara penutupan PERAK 2025 yang menghadirkan penampilan berbagai elemen Fasilkom serta pasar malam penuh hiburan, menjadi puncak euforia PERAK 2025.</li>
            <li>Perak Corner &mdash; Sebagai bagian dari strategi engagement, Divisi Festival juga menghadirkan PERAK Corner, sebuah inisiatif offline marketing yang berfungsi sebagai sarana interaktif bagi peserta untuk mengenal lebih dalam tentang PERAK serta menikmati berbagai aktivitas menarik.</li>
          </ul>

          <br />

          <p>
            Dengan mengusung kreativitas, interaksi, dan nuansa yang sesuai dengan tema acara, Divisi Festival berperan dalam menciptakan pengalaman yang tak terlupakan bagi seluruh peserta PERAK 2025.
          </p>

          <Accordion type="single">
            <JobDescription
              description={[
                "Koordinasi dan Pelaksanaan - Berperan aktif dalam persiapan dan pelaksanaan acara, bekerja sama dengan berbagai pihak internal maupun eksternal.  ",
                "Perancangan Konsep Festival - Merancang konsep booth permainan, stand makanan, serta elemen dekorasi untuk menciptakan suasana yang sesuai dengan tema acara PERAK 2025.",
                "Koordinasi dan Pelaksanaan Booth - Mengelola persiapan serta operasional booth selama acara berlangsung, termasuk pengaturan logistik, koordinasi dengan vendor, serta memastikan pengalaman terbaik bagi peserta.",
                "Pengembangan PERAK Corner (Offline Marketing) - Menjalankan PERAK Corner sebagai sarana offline marketing yang interaktif, menarik minat peserta, serta meningkatkan keterlibatan dalam acara.",
              ]}
            />
            <Benefits
              benefits={[
                "Pengalaman Event Management - Belajar langsung bagaimana merancang, mengelola, dan menjalankan festival dalam acara berskala besar, termasuk koordinasi booth, dekorasi, serta manajemen peserta.",
                "Mengasah Kreativitas - Memiliki kebebasan dalam mengembangkan konsep acara, menciptakan aktivitas interaktif, serta menghadirkan pengalaman yang unik bagi peserta PERAK 2025.",
                "Memperluas Relasi - Berinteraksi dan bekerja sama dengan berbagai elemen dalam acara, termasuk panitia lainnya, peserta, vendor, hingga alumni dan stakeholder acara.",
                "Skill Problem Solving & Manajemen Crowd - Melatih kemampuan berpikir cepat dalam mengatasi kendala selama acara berlangsung serta mengelola keramaian dengan baik agar acara tetap nyaman dan kondusif.",
                "Membawa Kegembiraan bagi Peserta - Menjadi bagian dari tim yang menghadirkan atmosfer meriah serta menciptakan momen tak terlupakan bagi seluruh peserta PERAK 2025.",
              ]}
            />
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
