import React from 'react';
import { FileText, Map, Settings, Zap, Database, Users } from 'lucide-react';

export function RoadmapSection() {
  const showNotification = (msg: string) => {
    alert(msg);
  };

  return (
    <section id="page-roadmap" className="page-section active pt-0 min-h-screen relative overflow-hidden bg-slate-50" style={{ marginTop: '64px' }}>
      
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-r from-green-800 to-green-600 text-white py-8 sm:py-16 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none splatter-bg" style={{ backgroundImage: 'radial-gradient(circle at center, #fff 10%, transparent 20%)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <img 
            src="/logokemnaker.png" 
            alt="Kemnaker Logo" 
            className="h-12 sm:h-24 object-contain mb-4 sm:mb-6 bg-white/10 p-1.5 sm:p-2 rounded-lg sm:rounded-xl backdrop-blur-sm"
          />
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 tracking-tight leading-tight">Pemerintah Terbuka, Rencana Nyata: Transparansi Roadmap Karier Hijau Indonesia</h1>
          <p className="text-[10px] sm:text-lg md:text-xl text-green-50 max-w-2xl mx-auto opacity-90 leading-relaxed sm:leading-normal">Kami percaya bahwa kebijakan publik yang baik dimulai dari keterbukaan informasi. Berikut adalah dokumen, rencana, dan program resmi pemerintah yang dapat diakses oleh seluruh masyarakat.</p>
        </div>
      </div>

      {/* Main Content - Dashboard Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 splatter-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          
          {/* Perencanaan Strategis */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-slate-200 shadow-sm card-hover relative overflow-hidden">
             <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-green-50 rounded-bl-full -z-0 opacity-50"></div>
             <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2 relative z-10">
               <div className="bg-green-100 p-1.5 sm:p-2 rounded-lg text-green-700"><Settings className="w-4 h-4 sm:w-6 sm:h-6" /></div>
               <h3 className="text-sm sm:text-xl font-bold text-slate-800 leading-tight">Perencanaan Strategis & Tata Kelola</h3>
             </div>
             <p className="text-slate-500 italic mb-3 sm:mb-6 text-[10px] sm:text-sm relative z-10">Rencana jangka panjang dan prioritas kebijakan hijau nasional.</p>
             <div className="flex flex-wrap gap-1.5 sm:gap-2 relative z-10">
                {['RPJPN 2025-2045', 'Peta Jalan Ekonomi Sirkular', 'IBSAP 2025-2045', 'Target NDC Indonesia', 'Rencana Aksi Nasional EBT', 'Investasi pada Ekosistem Green STEM', 'Sinergi Link and Match Industri dan Akademisi'].map((btn) => (
                  <button key={btn} onClick={() => showNotification('Dokumen sedang disiapkan. Terima kasih atas kesabaran Anda.')} className="bg-green-700 hover:bg-green-800 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-[8px] sm:text-sm font-medium transition shadow-sm">
                    {btn}
                  </button>
                ))}
             </div>
          </div>

          {/* Anggaran Hijau */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-slate-200 shadow-sm card-hover relative overflow-hidden">
             <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-green-50 rounded-bl-full -z-0 opacity-50"></div>
             <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2 relative z-10">
               <div className="bg-green-100 p-1.5 sm:p-2 rounded-lg text-green-700"><FileText className="w-4 h-4 sm:w-6 sm:h-6" /></div>
               <h3 className="text-sm sm:text-xl font-bold text-slate-800 leading-tight">Transparansi Anggaran Hijau</h3>
             </div>
             <p className="text-slate-500 italic mb-3 sm:mb-6 text-[10px] sm:text-sm relative z-10">Alokasi dana dan laporan keuangan sektor lingkungan.</p>
             <div className="flex flex-wrap gap-1.5 sm:gap-2 relative z-10">
                {['APBN Sektor Energi 2026 PDF', 'Dana Transisi Energi', 'Green Sukuk Report', 'Laporan JETP Indonesia'].map((btn) => (
                  <button key={btn} onClick={() => showNotification('Dokumen sedang disiapkan. Terima kasih atas kesabaran Anda.')} className="bg-green-700 hover:bg-green-800 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-[8px] sm:text-sm font-medium transition shadow-sm">
                    {btn}
                  </button>
                ))}
             </div>
          </div>

          {/* Infrastruktur */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-slate-200 shadow-sm card-hover relative overflow-hidden">
             <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-green-50 rounded-bl-full -z-0 opacity-50"></div>
             <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2 relative z-10">
               <div className="bg-green-100 p-1.5 sm:p-2 rounded-lg text-green-700"><Zap className="w-4 h-4 sm:w-6 sm:h-6" /></div>
               <h3 className="text-sm sm:text-xl font-bold text-slate-800 leading-tight">Infrastruktur & Proyek EBT</h3>
             </div>
             <p className="text-slate-500 italic mb-3 sm:mb-6 text-[10px] sm:text-sm relative z-10">Pelacakan proyek energi terbarukan yang sedang berjalan.</p>
             <div className="flex flex-wrap gap-1.5 sm:gap-2 relative z-10">
                {['Peta Proyek Solar Nasional', 'Tracker PLTA & Geotermal', 'EV Charging Infrastructure Map', 'Program Listrik Desa'].map((btn) => (
                  <button key={btn} onClick={() => showNotification('Dokumen sedang disiapkan. Terima kasih atas kesabaran Anda.')} className="bg-green-700 hover:bg-green-800 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-[8px] sm:text-sm font-medium transition shadow-sm">
                    {btn}
                  </button>
                ))}
             </div>
          </div>

          {/* Data */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-slate-200 shadow-sm card-hover relative overflow-hidden">
             <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-green-50 rounded-bl-full -z-0 opacity-50"></div>
             <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2 relative z-10">
               <div className="bg-green-100 p-1.5 sm:p-2 rounded-lg text-green-700"><Database className="w-4 h-4 sm:w-6 sm:h-6" /></div>
               <h3 className="text-sm sm:text-xl font-bold text-slate-800 leading-tight">Data & Indikator Kinerja</h3>
             </div>
             <p className="text-slate-500 italic mb-3 sm:mb-6 text-[10px] sm:text-sm relative z-10">Metrik real-time kemajuan transisi energi Indonesia.</p>
             <div className="flex flex-wrap gap-1.5 sm:gap-2 relative z-10">
                {['Dashboard Emisi Karbon', 'Indeks Green Jobs', 'Scorecard EBT 2025', 'Data Ketenagakerjaan Hijau'].map((btn) => (
                  <button key={btn} onClick={() => showNotification('Dokumen sedang disiapkan. Terima kasih atas kesabaran Anda.')} className="bg-green-700 hover:bg-green-800 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-[8px] sm:text-sm font-medium transition shadow-sm">
                    {btn}
                  </button>
                ))}
             </div>
          </div>

          {/* Partisipasi */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-slate-200 shadow-sm card-hover relative overflow-hidden md:col-span-2 max-w-3xl mx-auto w-full">
             <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-green-50 rounded-bl-full -z-0 opacity-50"></div>
             <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-1 sm:mb-2 relative z-10">
               <div className="bg-green-100 p-1.5 sm:p-2 rounded-lg text-green-700"><Users className="w-4 h-4 sm:w-6 sm:h-6" /></div>
               <h3 className="text-sm sm:text-xl font-bold text-slate-800 leading-tight">Partisipasi Publik</h3>
             </div>
             <p className="text-slate-500 italic mb-3 sm:mb-6 text-[10px] sm:text-sm text-left sm:text-center relative z-10">Survei, konsultasi publik, dan umpan balik masyarakat.</p>
             <div className="flex flex-wrap justify-start sm:justify-center gap-1.5 sm:gap-2 relative z-10">
                {['Survei Kebutuhan SDM Hijau', 'Konsultasi Publik RUPTL', 'Laporan Aspirasi Masyarakat PDF', 'Forum Green Jobs 2026', 'Investasi Hijau'].map((btn) => (
                  <button key={btn} onClick={() => showNotification('Dokumen sedang disiapkan. Terima kasih atas kesabaran Anda.')} className="bg-green-700 hover:bg-green-800 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-[8px] sm:text-sm font-medium transition shadow-sm">
                    {btn}
                  </button>
                ))}
             </div>
          </div>

        </div>

        {/* University Partners */}
        <div className="mt-10 sm:mt-20 text-center relative section-accent pt-6 sm:pt-12">
           <h2 className="text-xl sm:text-3xl font-bold text-green-800 mb-1 sm:mb-2">Mitra Universitas</h2>
           <p className="text-slate-600 italic mb-6 sm:mb-10 max-w-2xl mx-auto text-[10px] sm:text-base">Kolaborasi akademisi untuk memperkuat ekosistem karier hijau Indonesia</p>
           
           <div className="flex flex-row flex-nowrap overflow-x-auto gap-3 sm:gap-4 pb-4 snap-x hide-scrollbar">
              {[
                { src: '/logo-itb.png', name: 'Institut Teknologi Bandung' },
                { src: '/logo-ugm.png', name: 'Universitas Gadjah Mada' },
                { src: '/logo-ui.png', name: 'Universitas Indonesia' },
                { src: '/Logo-Unair.webp', name: 'Universitas Airlangga' },
                { src: '/Logo_Ub.png', name: 'Universitas Brawijaya' },
                { src: '/Logo_IPB.png', name: 'Institut Pertanian Bogor' },
                { src: '/logo-unhas.png', name: 'Universitas Hasanuddin' },
              ].map((uni, idx) => (
                <div key={idx} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm card-hover flex flex-col items-center justify-center min-w-[120px] sm:min-w-[160px] snap-center">
                   <img src={uni.src} alt={uni.name} className="h-10 sm:h-16 object-contain mb-2 sm:mb-3" />
                   <span className="text-[9px] sm:text-xs text-slate-500 text-center leading-tight font-medium">{uni.name}</span>
                </div>
              ))}
           </div>
           
           <button onClick={() => showNotification('Daftar lengkap mitra universitas sedang diperbarui.')} className="mt-6 sm:mt-10 px-6 sm:px-8 py-2 sm:py-3 border sm:border-2 border-green-700 text-green-700 rounded-full font-semibold text-[10px] sm:text-base hover:bg-green-50 transition shadow-sm">
             Lihat Selengkapnya &rarr;
           </button>
        </div>

      </div>
    </section>
  );
}
