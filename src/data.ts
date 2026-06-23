import { atom } from 'jotai';

export type Page = 'hero' | 'tentang' | 'karir' | 'kelas' | 'sertifikasi' | 'investasi' | 'berita' | 'kontak' | 'profil' | 'roadmap';

export const currentPageAtom = atom<Page>('hero');
export const profileCompletedAtom = atom<boolean>(false);
export const userAvatarAtom = atom<string>('');
export const userNameAtom = atom<string>('');
export const userEducationAtom = atom<string>('');
export const userUniversityAtom = atom<string>('');
export const userFieldAtom = atom<string>('');
export const userLinkedinAtom = atom<string>('');

export const newsData = [
  {
    "title": "Energi Hijau Jadi Fokus Pertemuan Presiden Prabowo dengan Jusuf Kalla",
    "date": "11 Juni 2026",
    "excerpt": "Berita ini menyoroti pertemuan tingkat tinggi yang membahas fokus strategi pemerintah pada transisi energi hijau di tingkat nasional.",
    "content": "Berita ini menyoroti pertemuan tingkat tinggi yang membahas fokus strategi pemerintah pada transisi energi hijau di tingkat nasional. Selengkapnya di Sekretariat Kabinet Republik Indonesia.",
    "views": 84520,
    "shares": 15300,
    "source": "Sekretariat Kabinet",
    "img": "/berita1.jpeg",
    "link": "https://setkab.go.id/energi-hijau-jadi-fokus-pertemuan-presiden-prabowo-dengan-jusuf-kalla/"
  },
  {
    "title": "Kemnaker Perkuat Pembekalan Mahasiswa Hadapi Green Jobs dan Dunia Kerja Digital",
    "date": "21 Juni 2026",
    "excerpt": "Langkah konkret Polteknaker dalam menyiapkan generasi muda untuk transisi ke pekerjaan hijau dan ekonomi berkelanjutan.",
    "content": "Berita ini membahas langkah konkret pemerintah melalui Politeknik Ketenagakerjaan (Polteknaker) dalam menyiapkan generasi muda untuk menghadapi transisi ke pekerjaan hijau dan peluang karier baru di ekonomi berkelanjutan. Selengkapnya di Kemnaker.",
    "views": 65100,
    "shares": 12200,
    "source": "Kemnaker",
    "img": "/berita2.jpg",
    "link": "https://kemnaker.go.id/news/detail/kemnaker-perkuat-pembekalan-mahasiswa-hadapi-green-jobs-dan-dunia-kerja-digital"
  },
  {
    "title": "Pemerintah Gulirkan lagi Insentif Kendaraan Listrik mulai awal Juni 2026",
    "date": "20 Juni 2026",
    "excerpt": "Pemerintah merumuskan ulang insentif bagi dunia usaha untuk memperkuat sektor industri di tanah air.",
    "content": "Pemerintah merumuskan ulang insentif bagi dunia usaha untuk memperkuat sektor industri di tanah air. Selengkapnya di Kompas.id.",
    "views": 62100,
    "shares": 8500,
    "source": "Kompas.id",
    "img": "/berita3.webp",
    "link": "https://www.kompas.id/artikel/pemerintah-bahas-insentif-untuk-perkuat-industri"
  },
  {
    "title": "Indonesia Melampaui Target Energi Hijau di Kuartal Kedua: Akhir dari Tren Lambat",
    "date": "20 Maret 2026",
    "excerpt": "Indonesia Melampaui Target Energi Hijau di Kuartal Kedua: Akhir dari Tren Lambat. Selengkapnya di Langit7.id.",
    "content": "Membahas Indonesia Melampaui Target Energi Hijau di Kuartal Kedua: Akhir dari Tren Lambat. Selengkapnya dapat Anda temukan melalui sumber: Langit7.id.",
    "views": 48112,
    "shares": 4361,
    "source": "Langit7.id",
    "img": "/berita4.jpg",
    "link": "https://langit7.id/read/59215/1/indonesia-melampaui-target-energi-hijau-di-kuartal-kedua-akhir-dari-tren-lambat-1782014772"
  },
  {
    "title": "Energi bersih RI mulai bergerak lebih cepat",
    "date": "21 Mei 2026",
    "excerpt": "Energi bersih RI mulai bergerak lebih cepat. Selengkapnya di ANTARA News.",
    "content": "Membahas Energi bersih RI mulai bergerak lebih cepat. Selengkapnya dapat Anda temukan melalui sumber: ANTARA News.",
    "views": 57700,
    "shares": 4997,
    "source": "ANTARA News",
    "img": "/berita5.webp",
    "link": "https://www.antaranews.com/berita/5615963/energi-bersih-ri-mulai-bergerak-lebih-cepat"
  },
  {
    "title": "Target bauran EBT 2026 tercapai lebih cepat",
    "date": "6 Februari 2026",
    "excerpt": "Target bauran EBT 2026 tercapai lebih cepat. Selengkapnya di ANTARA News (Infografik).",
    "content": "Membahas Target bauran EBT 2026 tercapai lebih cepat. Selengkapnya dapat Anda temukan melalui sumber: ANTARA News (Infografik).",
    "views": 36628,
    "shares": 1828,
    "source": "ANTARA News (Infografik)",
    "img": "/berita6.jpeg",
    "link": "https://www.antaranews.com/infografik/5612335/target-bauran-ebt-2026-tercapai-lebih-cepat"
  },
  {
    "title": "Bauran EBT Pembangkit Listrik April 2026 Lampaui Target",
    "date": "3 April 2026",
    "excerpt": "Bauran EBT Pembangkit Listrik April 2026 Lampaui Target. Selengkapnya di Direktorat Jenderal Ketenagalistrikan ESDM.",
    "content": "Membahas Bauran EBT Pembangkit Listrik April 2026 Lampaui Target. Selengkapnya dapat Anda temukan melalui sumber: Direktorat Jenderal Ketenagalistrikan ESDM.",
    "views": 47061,
    "shares": 3785,
    "source": "Direktorat Jenderal Ketenagalistrikan ESDM",
    "img": "/berita7.jpg",
    "link": "https://gatrik.esdm.go.id/berita/?slug=bauran-ebt-pembangkit-listrik-april-2026-lampaui-target&category="
  },
  {
    "title": "Transisi Energi dan Ketahanan Energi Indonesia: Dilema Regulasi di Tengah Dominasi Batubara",
    "date": "11 Juni 2026",
    "excerpt": "Transisi Energi dan Ketahanan Energi Indonesia: Dilema Regulasi di Tengah Dominasi Batubara. Selengkapnya di BINUS Business Law.",
    "content": "Membahas Transisi Energi dan Ketahanan Energi Indonesia: Dilema Regulasi di Tengah Dominasi Batubara. Selengkapnya dapat Anda temukan melalui sumber: BINUS Business Law.",
    "views": 38153,
    "shares": 3097,
    "source": "BINUS Business Law",
    "img": "/berita8.webp",
    "link": "https://business-law.binus.ac.id/2026/06/13/transisi-energi-dan-ketahanan-energi-indonesia-dilema-regulasi-di-tengah-dominasi-batubara/"
  },
  {
    "title": "Tamaris Hidro Perkuat Pendanaan untuk Akselerasi Proyek Energi Hijau",
    "date": "28 Februari 2026",
    "excerpt": "Tamaris Hidro Perkuat Pendanaan untuk Akselerasi Proyek Energi Hijau. Selengkapnya di Infobanknews.",
    "content": "Membahas Tamaris Hidro Perkuat Pendanaan untuk Akselerasi Proyek Energi Hijau. Selengkapnya dapat Anda temukan melalui sumber: Infobanknews.",
    "views": 16388,
    "shares": 1425,
    "source": "Infobanknews",
    "img": "/berita9.webp",
    "link": "https://infobanknews.com/tamaris-hidro-perkuat-pendanaan-untuk-akselerasi-proyek-energi-hijau"
  },
  {
    "title": "Transisi Energi Bersih Indonesia: Momentum PLTS dan Tantangan di 2026",
    "date": "12 April 2026",
    "excerpt": "Transisi Energi Bersih Indonesia: Momentum PLTS dan Tantangan di 2026. Selengkapnya di Taalenta.",
    "content": "Membahas Transisi Energi Bersih Indonesia: Momentum PLTS dan Tantangan di 2026. Selengkapnya dapat Anda temukan melalui sumber: Taalenta.",
    "views": 58315,
    "shares": 5349,
    "source": "Taalenta",
    "img": "/berita10.jpg",
    "link": "https://taalenta.id/blog/transisi-energi-bersih-indonesia-momentum-plts-dan-tantangan-di-2026/"
  },
  {
    "title": "Pertamina Kebut PLTS Koperasi Merah Putih, Progres 80 Persen dan Siap Beroperasi Tahun Ini",
    "date": "26 Januari 2026",
    "excerpt": "Pertamina Kebut PLTS Koperasi Merah Putih, Progres 80 Persen dan Siap Beroperasi Tahun Ini. Selengkapnya di Kompas.com.",
    "content": "Membahas Pertamina Kebut PLTS Koperasi Merah Putih, Progres 80 Persen dan Siap Beroperasi Tahun Ini. Selengkapnya dapat Anda temukan melalui sumber: Kompas.com.",
    "views": 55636,
    "shares": 5929,
    "source": "Kompas.com",
    "img": "/berita11.jpeg",
    "link": "http://money.kompas.com/read/2026/06/21/201105726/pertamina-kebut-plts-koperasi-merah-putih-progres-80-persen-dan-siap"
  },
  {
    "title": "YLKI dukung pembangunan 100 GW PLTS untuk diversifikasi energi",
    "date": "22 Januari 2026",
    "excerpt": "YLKI dukung pembangunan 100 GW PLTS untuk diversifikasi energi. Selengkapnya di ANTARA News.",
    "content": "Membahas YLKI dukung pembangunan 100 GW PLTS untuk diversifikasi energi. Selengkapnya dapat Anda temukan melalui sumber: ANTARA News.",
    "views": 33586,
    "shares": 1868,
    "source": "ANTARA News",
    "img": "/berita12.webp",
    "link": "https://www.antaranews.com/berita/5616917/ylki-dukung-pembangunan-100-gw-plts-untuk-diversifikasi-energi"
  },
  {
    "title": "Rupiah Melemah, PLN Sulawesi Evaluasi Proyek dan Prioritaskan EBT",
    "date": "2 Januari 2026",
    "excerpt": "Rupiah Melemah, PLN Sulawesi Evaluasi Proyek dan Prioritaskan EBT. Selengkapnya di Kompas.id.",
    "content": "Membahas Rupiah Melemah, PLN Sulawesi Evaluasi Proyek dan Prioritaskan EBT. Selengkapnya dapat Anda temukan melalui sumber: Kompas.id.",
    "views": 14001,
    "shares": 1084,
    "source": "Kompas.id",
    "img": "/berita13.jpeg",
    "link": "https://www.kompas.id/artikel/rupiah-melemah-pln-sulawesi-evaluasi-proyek-dan-prioritaskan-ebt"
  },
  {
    "title": "Kemnaker Proyeksi 3,88 Juta Green Jobs Tercipta pada 2026, Ini Bidang Industrinya",
    "date": "4 Februari 2026",
    "excerpt": "Kemnaker Proyeksi 3,88 Juta Green Jobs Tercipta pada 2026, Ini Bidang Industrinya. Selengkapnya di IDXChannel via RCTI+.",
    "content": "Membahas Kemnaker Proyeksi 3,88 Juta Green Jobs Tercipta pada 2026, Ini Bidang Industrinya. Selengkapnya dapat Anda temukan melalui sumber: IDXChannel via RCTI+.",
    "views": 27409,
    "shares": 4964,
    "source": "IDXChannel via RCTI+",
    "img": "/berita14.webp",
    "link": "https://www.rctiplus.com/news/detail/idxchannel/5411706/kemnaker-proyeksi-3-88-juta-green-jobs-tercipta-pada-2026--ini-bidang-industrinya"
  },
  {
    "title": "3,88 Juta Lowongan Kerja Ramah Lingkungan Bakal Terbuka di 2026, Catat Sektor Industrinya",
    "date": "21 Januari 2026",
    "excerpt": "3,88 Juta Lowongan Kerja Ramah Lingkungan Bakal Terbuka di 2026, Catat Sektor Industrinya. Selengkapnya di SindoNews.",
    "content": "Membahas 3,88 Juta Lowongan Kerja Ramah Lingkungan Bakal Terbuka di 2026, Catat Sektor Industrinya. Selengkapnya dapat Anda temukan melalui sumber: SindoNews.",
    "views": 20001,
    "shares": 1197,
    "source": "SindoNews",
    "img": "/berita15.jpg",
    "link": "https://ekbis.sindonews.com/read/1720249/34/388-juta-lowongan-kerja-ramah-lingkungan-bakal-terbuka-di-2026-catat-sektor-industrinya-1782108416"
  },
  {
    "title": "Transisi Energi dan Hilirisasi Buka Peluang 3,88 Juta Green Jobs di Indonesia",
    "date": "18 Februari 2026",
    "excerpt": "Transisi Energi dan Hilirisasi Buka Peluang 3,88 Juta Green Jobs di Indonesia. Selengkapnya di Arahkita.",
    "content": "Membahas Transisi Energi dan Hilirisasi Buka Peluang 3,88 Juta Green Jobs di Indonesia. Selengkapnya dapat Anda temukan melalui sumber: Arahkita.",
    "views": 44548,
    "shares": 5486,
    "source": "Arahkita",
    "img": "/berita16.jpg",
    "link": "https://www.arahkita.com/green_economy_insight/116203_transisi-energi-dan-hilirisasi-buka-peluang-388-juta-green-jobs-di-indonesia"
  },
  {
    "title": "GREEN JOBS: Tren Pekerjaan Masa Depan Indonesia",
    "date": "9 April 2026",
    "excerpt": "GREEN JOBS: Tren Pekerjaan Masa Depan Indonesia. Selengkapnya di Disnakertrans ESDM Buleleng.",
    "content": "Membahas GREEN JOBS: Tren Pekerjaan Masa Depan Indonesia. Selengkapnya dapat Anda temukan melalui sumber: Disnakertrans ESDM Buleleng.",
    "views": 43088,
    "shares": 2056,
    "source": "Disnakertrans ESDM Buleleng",
    "img": "/berita17.jpeg",
    "link": "https://disnakertransesdm.bulelengkab.go.id/informasi/detail/artikel/94_green-jobs-tren-pekerjaan-masa-depan-indonesia"
  },
  {
    "title": "Menerka Kendaraan Listrik di Indonesia pada 2026",
    "date": "6 Februari 2026",
    "excerpt": "Menerka Kendaraan Listrik di Indonesia pada 2026. Selengkapnya di Indonesiabaik.id.",
    "content": "Membahas Menerka Kendaraan Listrik di Indonesia pada 2026. Selengkapnya dapat Anda temukan melalui sumber: Indonesiabaik.id.",
    "views": 32778,
    "shares": 1257,
    "source": "Indonesiabaik.id",
    "img": "/berita18.webp",
    "link": "https://indonesiabaik.id/infografis/menerka-kendaraan-listrik-di-indonesia-pada-2026"
  },
  {
    "title": "Insentif Kendaraan Listrik Mundur, Pemerintah Tunda Program EV hingga Juli 2026",
    "date": "18 Februari 2026",
    "excerpt": "Insentif Kendaraan Listrik Mundur, Pemerintah Tunda Program EV hingga Juli 2026. Selengkapnya di Ikatan Konsultan Pajak Indonesia.",
    "content": "Membahas Insentif Kendaraan Listrik Mundur, Pemerintah Tunda Program EV hingga Juli 2026. Selengkapnya dapat Anda temukan melalui sumber: Ikatan Konsultan Pajak Indonesia.",
    "views": 50644,
    "shares": 4441,
    "source": "Ikatan Konsultan Pajak Indonesia",
    "img": "/berita19.jpeg",
    "link": "https://ikpi.or.id/en/insentif-kendaraan-listrik-mundur-pemerintah-tunda-program-ev-hingga-juli-2026/"
  },
  {
    "title": "Juli 2026 Regulasi Insentif EV Terbit, Motor Listrik Disuntik Subsidi Rp 5 Juta",
    "date": "20 Maret 2026",
    "excerpt": "Juli 2026 Regulasi Insentif EV Terbit, Motor Listrik Disuntik Subsidi Rp 5 Juta. Selengkapnya di GridOto.",
    "content": "Membahas Juli 2026 Regulasi Insentif EV Terbit, Motor Listrik Disuntik Subsidi Rp 5 Juta. Selengkapnya dapat Anda temukan melalui sumber: GridOto.",
    "views": 38649,
    "shares": 5694,
    "source": "GridOto",
    "img": "/berita20.jpg",
    "link": "https://www.gridoto.com/read/224389610/juli-2026-regulasi-insentif-ev-terbit-motor-listrik-disuntik-subsidi-rp-5-juta"
  },
  {
    "title": "Mobil Listrik BAIC Meluncur di GIIAS 2026",
    "date": "14 April 2026",
    "excerpt": "Mobil Listrik BAIC Meluncur di GIIAS 2026. Selengkapnya di Kompas.com.",
    "content": "Membahas Mobil Listrik BAIC Meluncur di GIIAS 2026. Selengkapnya dapat Anda temukan melalui sumber: Kompas.com.",
    "views": 44521,
    "shares": 3102,
    "source": "Kompas.com",
    "img": "/berita21.jpg",
    "link": "http://otomotif.kompas.com/read/2026/06/19/084200015/mobil-listrik-baic-meluncur-di-giias-2026"
  },
  {
    "title": "AISMOLI Usulkan Penerapan Insentif Kendaraan Listrik Multi-Tahun",
    "date": "29 Mei 2026",
    "excerpt": "AISMOLI Usulkan Penerapan Insentif Kendaraan Listrik Multi-Tahun. Selengkapnya di ANTARA News.",
    "content": "Membahas AISMOLI Usulkan Penerapan Insentif Kendaraan Listrik Multi-Tahun. Selengkapnya dapat Anda temukan melalui sumber: ANTARA News.",
    "views": 29845,
    "shares": 1943,
    "source": "ANTARA News",
    "img": "/berita22.webp",
    "link": "https://www.antaranews.com/berita/5617591/aismoli-usulkan-penerapan-insentif-kendaraan-listrik-multi-tahun"
  },
  {
    "title": "Presiden Jokowi Resmikan PLTS Terapung Cirata 192 MWp",
    "date": "9 November 2023",
    "excerpt": "PLTS Terapung terbesar di Asia Tenggara dan ketiga di dunia resmi beroperasi di Waduk Cirata, Jawa Barat.",
    "content": "Presiden RI Joko Widodo meresmikan Pembangkit Listrik Tenaga Surya (PLTS) Terapung Cirata berkapasitas 192 Megawatt peak (MWp). Proyek raksasa kerja sama PLN dan Masdar (UEA) ini menjadi PLTS terapung terbesar di Asia Tenggara. Keberadaannya akan menambah kapasitas energi terbarukan Indonesia, mengurangi emisi karbon, dan menjadi percontohan energi hijau di masa depan.",
    "views": 45200,
    "shares": 12000,
    "source": "Kementerian ESDM",
    "img": "/berita23.jpeg",
    "link": "https://www.esdm.go.id/id/media-center/arsip-berita/presiden-ri-resmikan-plts-terapung-terbesar-di-asia-tenggara"
  },
  {
    "title": "Bursa Karbon Indonesia (IDXCarbon) Resmi Diluncurkan",
    "date": "26 September 2023",
    "excerpt": "Langkah konkret Indonesia mengatasi perubahan iklim melalui perdagangan kredit karbon nasional.",
    "content": "Otoritas Jasa Keuangan (OJK) bersama Bursa Efek Indonesia (BEI) meresmikan Bursa Karbon Indonesia atau IDXCarbon. Peluncuran ini merupakan tonggak sejarah penting (milestone) bagi komitmen Indonesia menuju Net Zero Emission 2060. Melalui bursa ini, perusahaan yang berhasil menekan emisi dapat menjual kredit karbonnya, mendorong ekosistem industri ramah lingkungan.",
    "views": 38500,
    "shares": 8900,
    "source": "Bursa Efek Indonesia",
    "img": "/berita24.jpeg",
    "link": "https://www.idx.co.id/id/berita/siaran-pers/2016"
  }
];

export const jobsData = [
  { searchtext: 'solar engineer teknisi panel surya xurya', category: 'energi', img: '/solar engineer.jpg', title:'Solar Project Engineer', company:'Xurya Daya Indonesia', location:'Jakarta Selatan', experience:'2-5 tahun', type:'Full-time', industry:'Energi Terbarukan', description:'Merancang dan mengimplementasi sistem PLTS Atap (Rooftop Solar) untuk klien komersial dan industrial di seluruh Indonesia.', requirements:['S1 Teknik Elektro/Mesin','Pengalaman desain PLTS 2+ tahun','Menguasai AutoCAD, PVSyst, SketchUp','Memahami standar kelistrikan nasional (BPUIL/PUIL)'], benefits:'Asuransi kesehatan lengkap (termasuk keluarga), bonus proyek, pelatihan sertifikasi', link:'https://id.linkedin.com/company/xuryadaya' },
  { searchtext: 'wind turbine technician teknisi angin', category: 'energi', img: '/windturbin engineer.webp', title:'Wind Turbine Technician', company:'UPC Renewables Indonesia', location:'Sidrap, Sulawesi Selatan', experience:'2-4 tahun', type:'Full-time', industry:'Energi Terbarukan', description:'Melakukan perawatan preventif dan perbaikan pada turbin angin skala besar di PLTB Sidrap.', requirements:['D3/S1 Teknik Mesin atau Elektro','Sertifikasi GWO (Global Wind Organisation) Basic Safety Training','Berani bekerja di ketinggian (100m+)','Kondisi fisik prima'], benefits:'Akomodasi site, asuransi nyawa & kecelakaan kerja, bonus performa', link:'https://id.linkedin.com/company/upc-renewables' },
  { searchtext: 'sustainability manager esg pertamina', category: 'energi', img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=300&fit=crop', title:'ESG & Sustainability Manager', company:'Pertamina Geothermal Energy (PGE)', location:'Jakarta Pusat', experience:'7-10 tahun', type:'Full-time', industry:'Energi Terbarukan', description:'Memimpin inisiatif ESG, penyusunan laporan sustainability, dan memastikan proyek geothermal memenuhi standar global.', requirements:['S1/S2 Ilmu Lingkungan/Teknik/Manajemen','Pengalaman 7+ tahun di bidang sustainability','Sertifikasi GRI Certified Sustainability Professional','Fasih berbahasa Inggris'], benefits:'Remunerasi BUMN yang kompetitif, asuransi, dana pensiun', link:'https://id.linkedin.com/company/pt-pertamina-geothermal-energy' },
  { searchtext: 'waste management specialist pengelolaan limbah waste4change', category: 'limbah', img: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop', title:'Solid Waste Management Consultant', company:'Waste4Change', location:'Bekasi, Jawa Barat', experience:'3-5 tahun', type:'Full-time', industry:'Pengelolaan Limbah', description:'Memberikan advis kepada klien B2B terkait manajemen sampah zero waste to landfill dan sirkular ekonomi.', requirements:['S1 Teknik Lingkungan','Pengalaman 3 tahun di waste management','Pemahaman kuat mengenai regulasi persampahan di Indonesia','Kemampuan analisis data lingkungan'], benefits:'Lingkungan kerja fleksibel, asuransi kesehatan, subsidi transportasi publik', link:'https://id.linkedin.com/company/waste4change' },
  { searchtext: 'recycling operator daur ulang rekosistem', category: 'limbah', img: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=400&h=300&fit=crop', title:'Material Recovery Facility (MRF) Supervisor', company:'Rekosistem', location:'Surabaya', experience:'3-5 tahun', type:'Full-time', industry:'Pengelolaan Limbah', description:'Mengawasi operasional harian di fasilitas pemulihan material, mengatur jadwal pekerja, dan memastikan target recovery rate tercapai.', requirements:['D3/S1 Teknik Industri/Lingkungan','Pengalaman supervisor di pabrik/gudang/fasilitas daur ulang','Leadership yang kuat','Bersedia bekerja shift'], benefits:'Gaji kompetitif, lembur, BPJS Kesehatan & Ketenagakerjaan', link:'https://id.linkedin.com/company/rekosistem' },
  { searchtext: 'compliance officer lingkungan audit', category: 'limbah', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop', title:'HSE & Environmental Compliance Officer', company:'Danuta Waste Management', location:'Cikarang', experience:'4-6 tahun', type:'Full-time', industry:'Pengelolaan Limbah', description:'Memastikan seluruh armada dan fasilitas pengolahan limbah B3 mematuhi peraturan KLHK dan standar K3.', requirements:['S1 Teknik Lingkungan/Kesehatan Masyarakat','Memiliki sertifikat AK3 Umum','Lisensi Pengendalian Pencemaran Air/Udara (POPA/PPPU) diutamakan','Pengalaman dengan limbah B3'], benefits:'Asuransi kesehatan swasta, BPJS, tunjangan komunikasi', link:'https://www.linkedin.com/jobs/search/?keywords=HSE%20Danuta' },
  { searchtext: 'agriculture specialist agronomi efishery', category: 'pertanian', img: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=400&h=300&fit=crop', title:'Aquaculture Field Integration Expert', company:'eFishery', location:'Bandung (Tugas Luar Kota)', experience:'2-5 tahun', type:'Full-time', industry:'Agrikultur Pintar', description:'Mendampingi peternak ikan/udang lokal dalam menggunakan auto-feeder berbasis IoT untuk efisiensi pakan dan keberlanjutan air.', requirements:['S1 Perikanan/Akuakultur','Pengalaman luas di tambak/kolam budidaya','Familiar dengan IoT dan data monitoring','Mampu membangun relasi dengan peternak lokal'], benefits:'Gaji di atas rata-rata startup, tunjangan lapangan (mobil operasional), stok opsi', link:'https://id.linkedin.com/company/efishery' },
  { searchtext: 'agritech developer software programmer pertanian', category: 'pertanian', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop', title:'Agritech Backend Engineer (Python/Go)', company:'Habibi Garden', location:'Bandung (Hybrid)', experience:'3+ tahun', type:'Full-time', industry:'Pertanian Berkelanjutan (IoT)', description:'Membangun backend system untuk alat monitoring pertanian presisi yang memantau kelembapan tanah, suhu, dan nutrisi secara real-time.', requirements:['S1 Ilmu Komputer/Informatika','Pengalaman kuat dengan Python atau Golang','Pengalaman integrasi IoT / MQTT protocol','Pemahaman tentang arsitektur cloud (AWS/GCP)'], benefits:'Peralatan kerja (Macbook/Laptop spesifikasi tinggi), WFA (Work From Anywhere) terstruktur', link:'https://id.linkedin.com/company/habibi-garden' },
  { searchtext: 'farming coordinator organik pertanian', category: 'pertanian', img: 'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?w=400&h=300&fit=crop', title:'Agroforestry Coordinator', company:'WRI Indonesia', location:'Pekanbaru, Riau', experience:'4-6 tahun', type:'Contract', industry:'Konservasi & Pertanian Berkelanjutan', description:'Mengelola proyek wanatani (agroforestry) yang memberdayakan masyarakat sekitar gambut dan hutan secara berkelanjutan.', requirements:['S1/S2 Kehutanan/Pertanian','Pengalaman bekerja dengan masyarakat adat atau petani lokal','Pemahaman kuat isu deforestasi dan perubahan iklim','Kemampuan manajemen proyek'], benefits:'Gaji standar NGO internasional, asuransi, cuti tahunan 20 hari', link:'https://id.linkedin.com/company/wri-indonesia' },
  { searchtext: 'ev charging infrastructure engineer', category: 'energi', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=300&fit=crop', title:'EV Charging Infrastructure Engineer', company:'Casion', location:'Tangerang', experience:'2+ tahun', type:'Full-time', industry:'Mobilitas Hijau', description:'Merancang infrastruktur kelistrikan untuk pemasangan Stasiun Pengisian Kendaraan Listrik Umum (SPKLU) di berbagai lokasi.', requirements:['S1 Teknik Elektro','Pengalaman kelistrikan tegangan menengah/rendah','Memahami protokol komunikasi EV charger (OCPP)','Memiliki sertifikasi Ahli K3 Listrik diutamakan'], benefits:'Asuransi kesehatan lengkap, tunjangan transport', link:'https://id.linkedin.com/company/casion' },
  { searchtext: 'carbon project developer', category: 'pertanian', img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=300&fit=crop', title:'Carbon Project Developer (NBS)', company:'Fairatmos', location:'Jakarta (Remote Base)', experience:'5+ tahun', type:'Full-time', industry:'Konservasi & Karbon', description:'Memimpin inisiatif Nature-Based Solutions (NBS) untuk menghasilkan kredit karbon berkualitas tinggi dari proyek kehutanan/mangrove.', requirements:['S1/S2 Kehutanan/Lingkungan/Biologi','Pengalaman dalam verifikasi karbon (Verra VCS, Gold Standard)','Kemampuan spasial (GIS)','Fasih berbahasa Inggris lisan dan tulisan'], benefits:'Lingkungan kerja remote 100%, kompensasi USD/Local benchmark', link:'https://id.linkedin.com/company/fairatmos' },
  { searchtext: 'sustainability analyst', category: 'energi', img: 'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=400&h=300&fit=crop', title:'Sustainability Analyst', company:'MIND ID', location:'Jakarta Pusat', experience:'1-3 tahun', type:'Full-time', industry:'Manajemen Energi', description:'Menganalisis data profil emisi karbon dan inisiatif keberlanjutan dari grup holding pertambangan menuju emisi net-zero.', requirements:['S1 Teknik Lingkungan/Statistika','Mampu melakukan kalkulasi Gas Rumah Kaca (GHG accounting)','Ahli mengoperasikan Excel/Python untuk analisis data','Pengalaman menyusun SR (Sustainability Report)'], benefits:'Gaji korporat, bonus tahunan besar, asuransi premium', link:'https://id.linkedin.com/company/mind-id' },
  { searchtext: 'hydro power plant operator', category: 'energi', img: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=400&h=300&fit=crop', title:'Hydro Power Operation Supervisor', company:'Kalla Kars (Kalla Group)', location:'Poso, Sulawesi Tengah', experience:'4-7 tahun', type:'Full-time', industry:'Energi Terbarukan', description:'Mengawasi jalannya operasional Pembangkit Listrik Tenaga Air (PLTA) agar menghasilkan daya optimal sesuai beban PLN.', requirements:['S1 Teknik Elektro/Mesin','Pengalaman operasional pembangkit listrik minimal 4 tahun','Paham SCADA system','Sistem kerja site (roster)'], benefits:'Akomodasi & makan ditanggung penuh di site, cuti roster, bonus kinerja', link:'https://id.linkedin.com/company/kallagroup' },
  { searchtext: 'circular economy specialist', category: 'limbah', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop', title:'Circular Economy Program Officer', company:'Gringgo Indonesia', location:'Denpasar, Bali', experience:'2-4 tahun', type:'Full-time', industry:'Pengelolaan Limbah', description:'Membangun program ekonomi sirkular dengan mendampingi komunitas banjar dan pengelola sampah lokal menggunakan teknologi platform Gringgo.', requirements:['S1 Komunikasi/Pemberdayaan Masyarakat/Teknik Lingkungan','Bersemangat tinggi untuk merubah sistem persampahan lokal','Kemampuan public speaking yang baik','Mengerti budaya lokal Bali diutamakan'], benefits:'Fleksibel working hours, asuransi kesehatan', link:'https://id.linkedin.com/company/gringgo-indonesia-foundation' }
];

export const investmentData = [
  { img: '/investasi1.jpeg', title:'Bank Mandiri', product:"Livin' by Mandiri - Sukuk Tabungan Hijau/SBN Ritel", desc:'Platform digital Bank Mandiri menyediakan akses mudah untuk berinvestasi pada Sukuk Tabungan Hijau.', info:'Aplikasi mobile yang user-friendly untuk investor pemula hingga profesional.', link:'https://www.bankmandiri.co.id/esg-investment' },
  { img: '/investasi2.jpg', title:'BNP Paribas Asset Management', product:'Reksa Dana BNP Paribas Indonesia ESG Equity', desc:'Produk reksa dana yang fokus pada perusahaan-perusahaan di Indonesia dengan komitmen kuat terhadap ESG.', info:'Dikelola oleh tim profesional BNP Paribas dengan track record internasional.', link:'https://www.bnpparibas-am.com' },
  { img: '/investasi3.jpg', title:'PT Pertamina Geothermal Energy', product:'Kode Saham: PGEO - Energi Bersih Terbarukan', desc:'Perusahaan subsidiary Pertamina yang fokus pada eksplorasi dan produksi energi geothermal.', info:'Saham yang terdaftar di BEI dengan dividend yield menarik.', link:'https://pertamina.com' },
  { img: '/investasi4.jpg', title:'PT Bank Central Asia', product:'Kode Saham: BBCA - Pembiayaan Kredit Hijau', desc:'Bank terbesar di Indonesia dengan inisiatif pembiayaan hijau terbesar.', info:'Pelopor dalam penerapan prinsip keberlanjutan di sektor perbankan Indonesia.', link:'https://www.bca.co.id/id/tentang-bca/sustainability' },
  { img: '/investasi5.png', title:'Bibit', product:'Platform Reksa Dana Berbasis ESG', desc:'Platform robo-advisor yang memudahkan investasi pada reksa dana hijau dengan fitur goal-setting otomatis.', info:'Sangat cocok untuk pemula dengan teknologi otomatisasi investasi yang cerdas.', link:'https://bibit.id' },
  { img: '/investasi6.jpg', title:'Bareksa', product:'Marketplace Reksa Dana Berkelanjutan', desc:'Platform investasi terintegrasi yang menawarkan berbagai pilihan produk reksa dana ESG dan SBN Hijau.', info:'Menyediakan akses investasi langsung dengan analisis pasar yang mendalam.', link:'https://www.bareksa.com' }
];

export const servicesData = [
  { img: 'https://images.unsplash.com/photo-1541888081622-6e2d93e114bc?w=300&h=300&fit=crop', title:'Pelaksanaan Lapangan Pekerjaan Gedung', desc:'Tim profesional untuk supervisi dan manajemen proyek konstruksi hijau', info:'Layanan end-to-end mencakup perencanaan, pelaksanaan, dan inspeksi berkala sesuai standar green building.', link:'https://www.pertamina.com' },
  { img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=300&fit=crop', title:'Pembawaan Uang Kertas Asing untuk Bank', desc:'Jaminan keamanan transfer valutas domestik dan internasional', info:'Armada transport aman dengan GPS tracking dan asuransi penuh untuk transfer dana bank.', link:'https://www.bankmandiri.co.id' },
  { img: 'https://images.unsplash.com/photo-1580519542036-ed47f3ae3c88?w=300&h=300&fit=crop', title:'Penukaran Valuta Asing (Money Changer)', desc:'Layanan tukar uang dengan rate kompetitif dan transparan', info:'Daftar mata uang lengkap dengan harga real-time dan layanan konsultasi keuangan.', link:'https://www.bca.co.id' }
];

export const courseData = [
  { id:0, img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop', title:'Dasar Energi Terbarukan', category:'Energi Terbarukan', modules:[
    {title:'Modul 1: Pengenalan Energi Terbarukan',content:'Energi terbarukan adalah energi yang berasal dari sumber alami yang terus-menerus diperbaharui oleh alam. Berbeda dengan energi fosil yang terbatas, energi terbarukan seperti matahari, angin, air, dan biomassa adalah sumber daya yang berkelanjutan. Indonesia memiliki potensi energi terbarukan yang luar biasa dengan iklim tropis, garis pantai yang panjang, dan curah hujan tinggi. Materi modul ini mencakup definisi energi terbarukan, jenis-jenisnya, potensi di Indonesia, dan keuntungan lingkungan serta ekonomi dari penggunaan energi terbarukan. Anda akan memahami mengapa transisi ke energi terbarukan adalah prioritas global dan lokal untuk mencapai net-zero emissions pada 2050.'},
    {title:'Modul 2: Fisika Energi Solar',content:'Panel surya bekerja dengan mengkonversi foton dari matahari menjadi energi listrik melalui efek fotoelektrik. Materi ini menjelaskan prinsip dasar fisika kuantum yang mendasari sel fotovoltaik, termasuk bagaimana material semikonduktor (seperti silikon) menyerap energi foton dan menghasilkan arus listrik. Anda akan mempelajari konstruksi sel surya berlapis (n-layer dan p-layer), mekanisme pembentukan electric field, dan bagaimana efisiensi panel surya dipengaruhi oleh sudut kemiringan, temperatur, dan intensitas radiasi matahari. Modul ini juga mencakup perhitungan dasar energi yang dihasilkan panel surya dengan rumus P = VI dan faktor-faktor yang mempengaruhi power output sepanjang hari.'},
    {title:'Modul 3: Sistem Instalasi Solar',content:'Sistem panel surya on-grid dan off-grid terdiri dari komponen utama: Panel surya (menghasilkan listrik DC), Inverter (mengubah DC ke AC untuk perangkat rumah), Charge controller (mengatur aliran energi ke baterai), dan Baterai penyimpanan (untuk sistem off-grid). Materi ini menjelaskan perbedaan antara sistem on-grid (terhubung ke jaringan listrik nasional) dan off-grid (mandiri penuh dengan baterai penyimpanan), termasuk keuntungan dan tantangan masing-masing. Anda akan mempelajari sizing sistem (menghitung kebutuhan panel dan inverter berdasarkan konsumsi listrik rumah), proses instalasi yang aman, pemilihan kabel dan safety equipment, serta operasi dan pemeliharaan rutin. Studi kasus instalasi solar system di berbagai iklim Indonesia (dari gunung hingga pulau terpencil) akan membantu Anda memahami adaptasi teknis sesuai kondisi lokal.'},
    {title:'Modul 4: Studi Kasus Indonesia',content:'Indonesia memiliki potensi energi matahari luar biasa dengan rata-rata intensitas solar radiation 4-5 kWh/m²/hari, hampir dua kali lipat dari negara Eropa. Modul ini menampilkan studi kasus nyata implementasi solar di berbagai sektor: (1) Residential solar untuk keluarga di Jakarta dan Bandung yang menghemat biaya listrik hingga 60%, (2) Commercial solar di hotel dan mall di Bali yang menghasilkan revenue dari excess energy yang dijual ke grid, (3) Solar farm di Gowa, Sulawesi Selatan dengan kapasitas 100MW yang mensuplai ribuan rumah, dan (4) Telemedicine center di Jayapura yang menggunakan off-grid solar untuk melayani masyarakat terpencil. Setiap studi kasus mencakup investasi awal, ROI, payback period, dan dampak sosial-lingkungan yang terukur. Anda akan belajar bagaimana memilih solusi solar yang tepat sesuai konteks geografis, demografi, dan ekonomi lokal.'},
    {title:'Modul 5: Regulasi dan Insentif',content:'Pemerintah Indonesia menyediakan berbagai mekanisme untuk mempercepat adopsi energi terbarukan melalui Peraturan Presiden No. 4 Tahun 2022 tentang Akselerasi Energi Terbarukan. Program utama mencakup: (1) Net Metering untuk konsumen rumah tangga yang menjual kelebihan energi ke PLN dengan tarif khusus, (2) Subsidi investasi melalui Green Banking Program dari berbagai bank nasional, (3) Tax Incentive berupa pajak penghasilan 0% untuk instalasi solar tertentu, dan (4) Feed-in Tariff untuk proyek solar skala besar. Modul ini menjelaskan persyaratan legal, proses perizinan di tingkat daerah, standar teknis yang harus dipenuhi (SNI 7909-2016 untuk panel surya), dan bagaimana mengakses skema pembiayaan ramah lingkungan. Anda juga akan mempelajari komitmen Indonesia dalam Paris Agreement dan target 23% energi terbarukan pada 2025, serta peran individu dan bisnis dalam mencapai target tersebut.'}
  ], quiz:[{question:'Apa itu efek fotoelektrik dalam panel surya?',options:['Pemanasan panel akibat sinar matahari','Konversi foton menjadi energi listrik','Penyerapan cahaya oleh inverter','Proses penyimpanan energi dalam baterai'],correct:1},{question:'Jenis panel surya mana yang paling efisien?',options:['Polikristalin','Monokristalin','Thin-film','Hybrid'],correct:1},{question:'Berapa rata-rata intensitas solar radiation di Indonesia?',options:['1-2 kWh/m²/hari','3-4 kWh/m²/hari','4-5 kWh/m²/hari','6-7 kWh/m²/hari'],correct:2},{question:'Komponen mana yang mengubah arus DC menjadi AC?',options:['Panel surya','Baterai','Inverter','Trafo'],correct:2},{question:'Target energi terbarukan Indonesia pada 2025?',options:['15%','23%','31%','50%'],correct:1}]},
  { id:1, img: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=400&h=300&fit=crop', title:'Kepemimpinan Hijau', category:'Energi Terbarukan', modules:[
    {title:'Modul 1: Visi Kepemimpinan Berkelanjutan',content:'Pemimpin hijau memiliki komitmen kuat meminimalkan dampak lingkungan sambil menciptakan nilai ekonomi dan sosial jangka panjang. Modul ini menjelaskan filosofi kepemimpinan berkelanjutan yang berbasis pada Triple Bottom Line (people, planet, profit).'},
    {title:'Modul 2: Strategi Komunikasi ESG',content:'ESG adalah kerangka kerja komprehensif untuk menilai komitmen organisasi terhadap keberlanjutan melalui tiga pilar: Environmental, Social, dan Governance.'},
    {title:'Modul 3: Manajemen Stakeholder',content:'Pemimpin hijau mengelola hubungan kompleks dengan investor yang mengharapkan return finansial sekaligus impact sosial-lingkungan.'},
    {title:'Modul 4: Perencanaan Proyek Hijau',content:'Perencanaan proyek energi terbarukan memerlukan keseimbangan kompleks antara kerekayasaan teknis yang solid, kelayakan ekonomi yang menarik bagi investor, dan dampak sosial-lingkungan.'},
    {title:'Modul 5: Kasus Studi Pemimpin Hijau Global',content:'Menunjukkan bagaimana pemimpin visioner dapat mentransformasi perusahaan teknologi raksasa menjadi sustainability leader.'}
  ], quiz:[{question:'Apa kepanjangan dari ESG?',options:['Energy Saving Green','Environmental Social Governance','Ecological System Guide','Efficiency Sustainability Goal'],correct:1}]},
  { id:2, img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop', title:'Audit Lingkungan', category:'Pengelolaan Limbah', modules:[
    {title:'Modul 1: Pengantar Audit Lingkungan',content:'Audit lingkungan adalah evaluasi sistematis terhadap kepatuhan perusahaan terhadap regulasi lingkungan, praktik manajemen lingkungan, dan potensi risiko.'},
    {title:'Modul 2: Regulasi Lingkungan Indonesia',content:'UU No. 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup adalah payung hukum utama di Indonesia yang mengatur perlindungan lingkungan.'},
    {title:'Modul 3: Teknik Sampling dan Pengukuran',content:'Sampling air, udara, dan limbah B3 harus dilakukan oleh laboratorium tersertifikasi.'},
    {title:'Modul 4: Analisis Gap dan Rekomendasi',content:'Auditor melakukan analisis gap sistematis antara status quo dengan target regulatory requirements.'},
    {title:'Modul 5: Dokumentasi dan Pelaporan',content:'Laporan audit lingkungan yang efektif harus mengkombinasikan temuan teknis mendalam dengan executive summary yang jelas.'}
  ], quiz:[{question:'Standar internasional untuk audit lingkungan?',options:['ISO 9001','ISO 14001','ISO 45001','ISO 50001'],correct:1},{question:'UU Perlindungan Lingkungan Hidup di Indonesia?',options:['UU No. 23 Tahun 1997','UU No. 32 Tahun 2009','UU No. 41 Tahun 1999','UU No. 5 Tahun 1992'],correct:1},{question:'Tujuan utama audit lingkungan?',options:['Memaksimalkan produksi','Mengevaluasi kepatuhan regulasi dan keberlanjutan','Mengurangi biaya operasional','Meningkatkan penjualan'],correct:1},{question:'Teknik paling penting dalam pengumpulan data audit?',options:['Wawancara saja','Pengamatan langsung dan sampling yang valid','Perkiraan dari karyawan','Data historis tanpa verifikasi'],correct:1},{question:'Elemen penting dalam laporan audit?',options:['Hanya findings negatif','Findings, analysis, recommendations, dan timeline','Hanya data statistik','Tidak perlu dokumentasi'],correct:1}]},
  { id:3, img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop', title:'Pengelolaan Limbah Padat', category:'Pengelolaan Limbah', modules:[
    {title:'Modul 1: Klasifikasi Limbah',content:'Limbah padat diklasifikasikan berdasarkan karakteristik fisik, sumber origin, dan tingkat hazard.'},
    {title:'Modul 2: Sistem Pengumpulan dan Transportasi',content:'Sistem pengumpulan limbah terintegrasi mencakup source separation, intermediate storage, transportation, dan dokumentasi tracking penuh.'},
    {title:'Modul 3: Teknologi Daur Ulang',content:'Teknologi daur ulang modern mengubah limbah menjadi resource baru melalui proses mechanical, chemical, composting, dll.'},
    {title:'Modul 4: Operasional TPA Berkelanjutan',content:'TPA (Tempat Pembuangan Akhir) modern menerapkan standar engineering dan environmental protection tinggi.'},
    {title:'Modul 5: Ekonomi Sirkular dan Zero Waste',content:'Ekonomi sirkular adalah paradigma produksi-konsumsi-recovery yang menutup loop material, berbeda dengan linear economy.'}
  ], quiz:[{question:'Apa perbedaan limbah B3 dan non-B3?',options:['B3 lebih banyak dari non-B3','B3 bersifat berbahaya/beracun, non-B3 tidak','Tidak ada perbedaan','B3 hanya dari industri besar'],correct:1},{question:'Teknik terbaik untuk menangani limbah organik?',options:['Buang ke TPA langsung','Composting atau anaerobic digestion','Bakar tanpa kontrol','Dumping ke sungai'],correct:1},{question:'Apa fungsi utama HDPE lining di TPA?',options:['Mempercepat dekomposisi','Mencegah rembesan ke groundwater','Mengurangi bau','Meningkatkan efisiensi gas'],correct:1},{question:'Berapa persen target diversion rate untuk zero waste?',options:['30%','50%','70%','90%+'],correct:3},{question:'Produk mana yang sulit di-recycle?',options:['Plastik PET','Plastik berlaminasi kompleks','Logam aluminium','Kertas'],correct:1}]},
  { id:4, img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop', title:'Pertanian Organik Berkelanjutan', category:'Pertanian Berkelanjutan', modules:[
    {title:'Modul 1: Prinsip Pertanian Organik',content:'Pertanian organik menghindari pestisida sintetis dan pupuk kimia, fokus pada kesehatan tanah dan biodiversity.'},
    {title:'Modul 2: Manajemen Kesehatan Tanah',content:'Kesehatan tanah adalah foundation pertanian organik melalui practices seperti composting, mulching, dan crop rotation.'},
    {title:'Modul 3: Pengendalian Hama Alami (IPM)',content:'IPM (Integrated Pest Management) meminimalkan pest damage dengan pendekatan ekologis.'},
    {title:'Modul 4: Sertifikasi dan Transisi',content:'Proses sertifikasi organik memerlukan 3 tahun periode transisi.'},
    {title:'Modul 5: Pemasaran Organik',content:'Strategi pemasaran organik multi-channel mencakup direct-to-consumer, retail channels, dan ekspor.'}
  ], quiz:[{question:'Prinsip utama pertanian organik?',options:['Menggunakan banyak pestisida','Menghindari sintetis, bekerja dengan alam','Produksi maksimal tanpa batas','Fokus keuntungan jangka pendek'],correct:1},{question:'Teknik manajemen tanah organik paling efektif?',options:['Pupuk kimia berlebihan','Composting, crop rotation, cover cropping','Monokultur tanpa rotasi','Lahan dibiarkan tandus'],correct:1},{question:'Apa yang dimaksud IPM?',options:['International Profit Maximization','Integrated Pest Management','Industry Performance Metric','Information Processing Module'],correct:1},{question:'Berapa tahun periode sertifikasi organik?',options:['1 tahun','2 tahun','3 tahun','5 tahun'],correct:2},{question:'Keuntungan harga produk organik vs konvensional?',options:['Sama','10-15% lebih mahal','20-40% lebih mahal','Lebih murah'],correct:2}]},
  { id:5, img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop', title:'Pertanian Presisi & Teknologi', category:'Pertanian Berkelanjutan', modules:[
    {title:'Modul 1: Teknologi Sensor dan IoT',content:'IoT mengintegrasikan network sensor di lahan untuk monitoring kelembapan, suhu, dan parameter lainnya.'},
    {title:'Modul 2: Varietas Unggul dan Breeding',content:'Pemuliaan modern menggunakan genomic untuk akselerasi varietas unggul.'},
    {title:'Modul 3: Sistem Irigasi Efisien',content:'Drip irrigation menghemat hingga 60% air.'},
    {title:'Modul 4: Pertanian Vertikal dan Hidroponik',content:'Vertical farming menggunakan hidroponik untuk produksi efisien dalam ruang terbatas.'},
    {title:'Modul 5: Data Analytics dan AI',content:'AI memprediksi hasil panen dan deteksi dini penyakit.'}
  ], quiz:[{question:'Teknologi apa yang paling mengurangi penggunaan air?',options:['Flood irrigation','Sprinkler irrigation','Drip irrigation','Manual watering'],correct:2},{question:'Berapa kali panen per tahun di vertical farm?',options:['2-3 kali','5-7 kali','8-10 kali','Tidak terbatas'],correct:2},{question:'Keuntungan utama marker-assisted breeding?',options:['Lebih murah','Lebih cepat mengidentifikasi traits','Hasil lebih tinggi','Tidak ada keuntungan'],correct:1},{question:'Apa sensor paling penting untuk precision agriculture?',options:['Sound sensor','Soil moisture dan nutrient sensor','Color sensor','Vibration sensor'],correct:1},{question:'Akurasi AI dalam prediksi hasil panen?',options:['50-60%','70-75%','85-90%','100%'],correct:2}]}
];
