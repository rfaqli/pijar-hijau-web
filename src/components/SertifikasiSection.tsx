import { Zap, ShieldCheck, Award, Globe, CreditCard, ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';

export function SertifikasiSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  const certs = [
    { 
      icon: Zap, 
      title: 'Teknisi Energi Terbarukan', 
      desc: 'Sertifikasi kompetensi teknisi instalasi dan pemeliharaan sistem energi terbarukan.', 
      theme: { bg: 'bg-green-50', border: 'border-l-green-600', iconBg: 'bg-green-600', text: 'text-green-700', iconColor: 'text-white' }
    },
    { 
      icon: ShieldCheck, 
      title: 'K3 Lingkungan Hidup', 
      desc: 'Sertifikasi keselamatan dan kesehatan kerja di bidang pengelolaan lingkungan.', 
      theme: { bg: 'bg-amber-50', border: 'border-l-amber-500', iconBg: 'bg-amber-500', text: 'text-amber-700', iconColor: 'text-white' }
    },
    { 
      icon: Award, 
      title: 'Auditor Lingkungan', 
      desc: 'Sertifikasi profesional auditor lingkungan sesuai standar ISO 14001.', 
      theme: { bg: 'bg-blue-50', border: 'border-l-blue-600', iconBg: 'bg-blue-600', text: 'text-blue-700', iconColor: 'text-white' }
    },
    { 
      icon: Globe, 
      title: 'Sertifikasi Bahasa Mandarin', 
      desc: 'Kompetensi bahasa Mandarin untuk kerjasama internasional sektor hijau.', 
      theme: { bg: 'bg-red-50', border: 'border-l-red-600', iconBg: 'bg-red-600', text: 'text-red-700', iconColor: 'text-white' }
    },
    { 
      icon: CreditCard, 
      title: 'Pengelolaan Transfer Dana', 
      desc: 'Kompetensi manajemen transfer dana dan instrumen keuangan berkelanjutan.', 
      theme: { bg: 'bg-purple-50', border: 'border-l-purple-600', iconBg: 'bg-purple-600', text: 'text-purple-700', iconColor: 'text-white' }
    },
  ];

  return (
    <section className="page-section active pt-0 min-h-screen bg-[#f7fcf8] relative overflow-hidden" style={{ marginTop: '32px' }}>
      <div className="py-20 px-6 relative z-10 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            <h2 className="font-bold text-3xl md:text-4xl text-[#1a8b44] mb-4">Sertifikasi Industri Hijau</h2>
            <p className="text-[#8ac59d] font-medium text-lg max-w-2xl mx-auto mb-16 mt-4">Tingkatkan kredibilitas profesional Anda dengan sertifikasi yang diakui industri.</p>
            <h3 className="font-bold text-3xl text-[#1a8b44] mb-8">Program Sertifikasi Pilihan</h3>
          </div>

          <div className="mb-20">
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto pb-8 snap-x px-4 gap-6 scrollbar-hide hide-scrollbar w-full" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {certs.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <a key={idx} href="https://proglat.kemnaker.go.id/" target="_blank" rel="noopener noreferrer" 
                     className={`w-[320px] md:w-[400px] shrink-0 snap-start rounded-[24px] overflow-hidden border-y border-r border-gray-100 shadow-sm hover:shadow-md transition-all group p-8 flex flex-col justify-between border-l-4 ${c.theme.bg} ${c.theme.border}`}>
                    <div>
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 shadow-sm ${c.theme.iconBg}`}>
                        <Icon className={`w-7 h-7 ${c.theme.iconColor}`} />
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3">{c.title}</h3>
                      <p className="text-gray-500 text-[15px] leading-relaxed">{c.desc}</p>
                    </div>
                    <div className={`mt-8 flex items-center gap-2 font-medium text-[15px] transition-all ${c.theme.text}`}>
                      <span>Daftar</span><ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                );
              })}
              {/* Invisible spacer to allow scrolling past the last item */}
              <div className="w-4 shrink-0"></div>
            </div>
            
            {/* Scrollbar instruction/indicator visual from the screenshot */}
            <div className="max-w-[70%] mx-auto mt-4 flex items-center gap-2">
               <button 
                 onClick={() => {
                   if (scrollContainerRef.current) {
                     scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
                   }
                 }}
                 className="w-0 h-0 border-t-4 border-b-4 border-r-[6px] border-t-transparent border-b-transparent border-r-gray-400 cursor-pointer hover:border-r-gray-600 transition-colors"
                 aria-label="Scroll left"
               />
               <div className="h-4 bg-gray-400 rounded-full w-full overflow-hidden flex relative">
                 <div 
                   className="absolute top-0 bottom-0 bg-gray-500 w-[70px] rounded-full transition-all duration-100 ease-out"
                   style={{ left: `calc(${scrollProgress}% - ${scrollProgress * 0.7}px)` }}
                 ></div>
               </div>
               <button 
                 onClick={() => {
                   if (scrollContainerRef.current) {
                     scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
                   }
                 }}
                 className="w-0 h-0 border-t-4 border-b-4 border-l-[6px] border-t-transparent border-b-transparent border-l-gray-400 cursor-pointer hover:border-l-gray-600 transition-colors"
                 aria-label="Scroll right"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
