import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const CompetitiveGames = () => {
  return (
    <div>
      <h2 className="text-2xl">Divisi Competitive Games</h2>

      <p>
        Divisi Competitive Games (CG) di PERAK 2025 adalah wadah bagi para
        pecinta esports untuk menunjukkan kemampuan terbaiknya di arena
        kompetitif. Sebagai divisi yang mengelola berbagai turnamen game seperti
        Valorant, Mobile Legends, Catur, EAFC 25, DOTA 2, CG berperan dalam
        merancang, mengoordinasikan, dan memastikan setiap kompetisi berjalan
        dengan seru, adil, dan penuh sportivitas. Staff CG akan terlibat dalam
        penyelenggaraan turnamen mulai dari konsep, eksekusi, hingga memastikan
        pengalaman terbaik bagi para peserta.
        <br />
        <br /> Jadi, tunggu apa lagi, guys? Buat kalian yang pengen ngerasain
        serunya ngurus competitive game favorit kalian, ini kesempatan emas!
        Yuk, langsung gabung, dijamin bakal dapet pengalaman seru yang asik dan
        berkesan! 🎮🔥
      </p>

      <Accordion type="single">
        <AccordionItem value="job-description">
          <AccordionTrigger>Job Description</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>- Mengelola pendaftaran peserta dan technical meeting.</li>
              <li>
                - Mengatur jadwal pertandingan dan koordinasi dengan caster
                serta observer.
              </li>
              <li>
                - Memastikan fair play dan sportsmanship dalam setiap
                pertandingan.
              </li>
              <li>
                - Bekerja sama dengan divisi lain seperti desain, media, dan
                sponsorship untuk promosi serta dokumentasi turnamen.
              </li>
              <li>
                - Mengelola sistem bracket dan hasil pertandingan secara
                real-time.
              </li>
              <li>
                - Menangani kendala teknis selama pertandingan berlangsung.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="benefit">
          <AccordionTrigger>Benefit</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>- Belajar langsung gimana ngelola turnamen skala kecil</li>
              <li>- Nambah relasi/temen</li>
              <li>
                - Ngelatih kemampuan koordinasi dan komunikasi dan softskill
                lainnya
              </li>
              <li>- Jadi bagian PERAK 2025</li>
              <li>
                - <strong>+ dimentorin farrel athallah muljawan</strong>
              </li>
              <li>- Daftar ae lah pokoknya</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
