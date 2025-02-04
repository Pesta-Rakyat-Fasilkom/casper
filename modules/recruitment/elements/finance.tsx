import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Finance = () => {
  return (
    <div className="flex flex-col gap-5">
      <p>
        Divisi Finance di PERAK 2025 berperan penting dalam menjamin stabilitas
        keuangan organisasi melalui pengelolaan dana yang transparan, efisien,
        dan akuntabel. Finance juga bertanggung jawab dalam merumuskan strategi
        pendanaan jangka panjang untuk memastikan setiap program dan kegiatan
        PERAK 2025 dapat berjalan dengan lancar tanpa hambatan finansial.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Sponsorship</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Divisi Sponsorship di PERAK 2025 berperan sebagai penghubung
            strategis antara organisasi dan mitra eksternal, memastikan
            terciptanya kerja sama yang saling menguntungkan, serta
            mengoptimalkan dukungan finansial bagi setiap program dan
            kegiatan. Sponsorship juga berfokus pada penguatan citra PERAK
            2025 di mata sponsor dan pemangku kepentingan lainnya. Staff
            Sponsorship akan terlibat langsung dalam proses negosiasi,
            pembuatan proposal, serta pemantauan pelaksanaan kerja sama, guna
            memastikan setiap kolaborasi berdampak positif dan berkelanjutan
            bagi PERAK 2025.
          </p>

          <ol className="list-disc ml-5">
            <li>
              Membangun Relasi dengan Sponsor &mdash; Menjalin dan menjaga
              hubungan dengan mitra eksternal, sponsor, dan stakeholder
              potensial guna memperoleh dukungan finansial yang berkelanjutan.
            </li>
            <li>
              Negosiasi dan Perjanjian Kerja Sama &mdash; Menyusun proposal,
              melakukan negosiasi, serta memastikan setiap kerja sama memiliki
              ketentuan yang jelas dan saling menguntungkan.
            </li>
            <li>
              Monitoring dan Evaluasi Sponsor &mdash; Melakukan pemantauan
              terhadap efektivitas dukungan sponsor serta mengevaluasi hasil
              kerja sama untuk pengembangan di masa mendatang.
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Business Development</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Divisi Business Development di PERAK 2025 berperan dalam
            mengidentifikasi dan menciptakan peluang pengembangan usaha,
            memastikan pertumbuhan finansial serta keberlanjutan organisasi.
            Business Development juga berfokus pada inovasi model bisnis dan
            diversifikasi pendapatan, agar PERAK 2025 mampu beradaptasi dengan
            perubahan lingkungan eksternal. Staff Business Development akan
            terlibat langsung dalam penyusunan strategi bisnis, analisis
            pasar, serta implementasi proyek-proyek baru, untuk memastikan
            setiap inisiatif berkontribusi positif terhadap perkembangan PERAK
            2025.
          </p>

          <ol className="list-disc ml-5">
            <li>
              Identifikasi Peluang Bisnis &mdash; Melakukan riset pasar dan
              tren industri untuk menemukan sumber pendapatan baru yang
              potensial bagi PERAK 2025.
            </li>
            <li>
              Perancangan Strategi Bisnis &mdash; Menyusun rencana
              pengembangan usaha jangka pendek dan jangka panjang, memastikan
              keberlanjutan finansial serta inovasi model bisnis.
            </li>
            <li>
              Kolaborasi dan Ekspansi &mdash; Bekerja sama dengan berbagai
              pihak, baik internal maupun eksternal, untuk memperluas jaringan
              dan meningkatkan skala operasi bisnis PERAK 2025.
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};
