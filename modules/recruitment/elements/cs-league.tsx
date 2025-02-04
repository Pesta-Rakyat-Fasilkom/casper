import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const CSLeague = () => {
  return (
    <div>
      <h2 className="text-2xl">Divisi Computer Science League</h2>

      <p>
        Computer Science League Perak 2025 tuh ngapain sih? Singkat saja, ini
        ajang yang wajib bin wajib lo ikutin! Acara ini terbuka buat seluruh
        masyarakat Fasilkom UI, mulai dari mahasiswa aktif, elemen, dosen, semua
        deh semua yang penting kita hepi 😋. Konsepnya? ya liga dong, nanti ada
        sistem gugur sampe juara. Cabang olahraganya? Ada
        <strong>basket</strong>
        sama
        <strong>futsal</strong>
        abangkuh. Mau yang seneng seneng? Slow ada fun matchnya juga yang bikin
        kite akrab deh ye. Ini semua kita adain memang biar kita makin akrab
        satu sama lain sambil jadi ajang buat nunjukin skill lo di lapangan.
        Daripada mikir kelamaan mending langsung aja daftar!
      </p>

      <Accordion type="single">
        <AccordionItem value="job-description">
          <AccordionTrigger>Job Description</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                - Nyari dan nyiapin hadiah (medali, piala, plakat, sertifikat).{" "}
              </li>
              <li>- Bikin RULESBOOK terfiral 2025🔥</li>
              <li>
                - Urus jadwal pertandingan, reschedule kalau butuh, dan
                technical meeting.{" "}
              </li>
              <li>
                - Jadi LO (Liaison Officer) buat tim yang daftar + pastiin
                konsumsi tim aman selama pertandingan bosh.
              </li>
              <li>- Ngurus registrasi peserta.</li>
              <li>
                - Atur dan pastiin sistem transfer pemain antar tim sesuai
                aturan.
              </li>
              <li>
                - Nyebarin hasil pertandingan, jadwal, dan box score pemain ke
                divisi lain.
              </li>
              <li>
                - Kerja sama sama divisi marketing buat lancarin konten dan
                publikasi. (NGONTEN BARENG MARKETING #pastifyp)
              </li>
              <li>
                - Rekap skor + stats pemain tiap match dan jagain waktu
                pertandingan (timekeeper).
              </li>
              <li>
                - Nyari wasit, pastiin mereka dateng, dan jagain konsumsi wasit.{" "}
              </li>
              <li>
                - Pastiin venue pertandingan siap + cari venue kalau butuh
                tambahan.{" "}
              </li>
              <li>
                - Nyiapin dan ngejalanin fun match selama CS League berlangsung.
              </li>
              <li>- PISLOVENGAUL</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="benefit">
          <AccordionTrigger>Benefit</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>- Kenalan sama banyak orang (jadi terkenal)</li>
              <li>- Melatih skill manajemen</li>
              <li>- Dapet skill team work</li>
              <li>- Jadi bagian dari Sejarah CSL </li>
              <li>- Cinlok🤫 (pengalaman staff tahun lalu) </li>
              <li>- Latihan jadi wasit kehidupan</li>
              <li>- Intinya lu daftar CSL lu keren😎 senggoool~~</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
