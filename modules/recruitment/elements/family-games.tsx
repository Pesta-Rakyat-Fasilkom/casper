import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FamilyGames = () => {
  return (
    <div>
      <h2 className="text-2xl">Divisi Family Games</h2>

      <p>
        Family Games merupakan serangkaian acara perlombaan games berbasis tim
        yang disusun dengan konsep olimpiade. Setiap tim yang mengikuti Family
        Games PERAK 2025 akan berlomba-lomba untuk mendapatkan poin tertinggi.
        Permainan pada Family Games yang bersifat santai ditargetkan untuk dapat
        diikuti oleh semua elemen Fasilkom UI. Setiap tim harus memiliki anggota
        5 orang. Permainan yang hadir pada Family Games PERAK 2025 meliputi
        kategori Trivia, Tebak, dan Family 100 yang akan dilaksanakan secara
        online. Pada rangkaian game offline, Family Games akan mengadakan
        perlombaan benteng Takeshi, Pose, dan Quadrology. Selain itu, terdapat
        juga Weekly Challenge yang dapat membantu peserta dalam mendapat poin
        bonus. Staff Family Games akan terlibat dalam proses perencanaan
        tersebut, termasuk merancang konsep permainan, menyusun mekanisme
        kompetisi, serta memastikan setiap game berjalan dengan lancar.
      </p>

      <Accordion type="single">
        <AccordionItem value="job-description">
          <AccordionTrigger>Job Description</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>- Brainstorming teknis games.</li>
              <li>
                - Bertanggung jawab atas sistem registrasi untuk para peserta
                family games.
              </li>
              <li>- Bertanggung jawab atas koordinasi dengan divisi lain.</li>
              <li>- Bertugas untuk menyusun bagan dan jadwal pertandingan.</li>
              <li>- Bertanggungjawab atas pemberian hadiah dan sertifikat.</li>
              <li>- Bertanggung jawab atas dokumentasi untuk live report.</li>
              <li>
                - Bertanggung jawab atas lancarnya pelaksanaan game yang
                bersangkutan.
              </li>
              <li>- Berperan sebagai LO untuk peserta game.</li>
              <li>- Berperan sebagai MC.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="benefit">
          <AccordionTrigger>Benefit</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                - Melatih soft skill teamwork, public speaking, brainstorming,
                dan time management dalam mengelola jalannya permainan.
              </li>
              <li>
                - Kesempatan untuk memperluas jaringan relasi dengan menjadi
                bagian dari tim yang terlibat langsung dengan berbagai elemen
                fasilkom, mulai dari kating hingga alumni.
              </li>
              <li>
                - Gamesnya ngga kompetitif jadi bisa seru-seruan biar ngga
                stress kuliah.
              </li>
              <li>
                - Berkesempatan untuk mengekspresikan kreativitas dan memasukkan
                jokes-jokes garing kamu ke dalam soal games.
              </li>
              <li>
                - Kenalan sama temen temen baru yang asik seru keren bonding
                solid abis.
              </li>
              <li>
                - kenalan sama PIC VPIC terkeren tergokil terwow{" "}
                <strong>*STAFF NYA LEBIH KEREN & GOKYLLL.*</strong>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
