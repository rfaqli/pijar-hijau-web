import { useState } from 'react';
import { useAtom } from 'jotai';
import { currentPageAtom, jobsData } from '../data';
import { Briefcase, Book, TrendingUp, Search, Check, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function HeroSection() {
  const [, setCurrentPage] = useAtom(currentPageAtom);
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedJob, setSelectedJob] = useState<typeof jobsData[0] | null>(null);

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.searchtext.includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'all' || job.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="page-section active" style={{ paddingTop: 'max(60px, 7.4dvh)' }}>
      <header className="relative w-full flex flex-col justify-center items-center overflow-hidden bg-cover bg-center" style={{ height: '380px', backgroundImage: 'url(/hero-bg.png)' }}>
        <div className="absolute inset-0 bg-[#14532d]/40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[#064e3b]/50"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center w-full max-w-[1920px] mx-auto">
          
          <div className="flex flex-col items-center justify-center gap-0">
            <img src="/logo-pijarhijau.png" alt="Pijar Hijau Logo" className="object-contain drop-shadow-xl mb-4" style={{ maxWidth: 'min(420px, 80vw)', width: '100%' }} />

            <h1 className="font-medium text-[#facc15] tracking-wide mb-8 relative z-10 px-4" style={{ fontSize: 'clamp(18px, 1.8dvh, 18px)' }}>
              Platform Pusat Informasi dan Jejaring Karier Hijau
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <button 
                className="bg-[#facc15] text-[#14532d] font-bold rounded-full hover:bg-yellow-400 transition-colors shadow-md border border-transparent flex items-center justify-center"
                style={{ height: 'max(40px, 4.4dvh)', paddingLeft: '32px', paddingRight: '32px', fontSize: 'clamp(11px, 1.5dvh, 16px)' }}
                onClick={() => setCurrentPage('profil')}
              >
                Mulai Sekarang
              </button> 
              <button 
                className="bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white hover:bg-white/20 transition-colors shadow-md flex items-center justify-center"
                style={{ height: 'max(40px, 4.4dvh)', paddingLeft: '32px', paddingRight: '32px', fontSize: 'clamp(11px, 1.5dvh, 16px)' }}
                onClick={() => setCurrentPage('kelas')}
              >
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <section className="relative z-10 bg-white border-b border-gray-100 py-4 sm:py-8">
        <div className="w-full max-w-[1920px] mx-auto grid grid-cols-3 gap-2 sm:gap-8 px-2 sm:px-6 items-start justify-items-center">
          <div className="flex flex-col items-center text-center max-w-[300px]">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#dcfce7] flex items-center justify-center mb-2 sm:mb-3">
              <Briefcase className="text-[#16a34a] w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <span className="font-bold text-[#16a34a] mb-0.5 sm:mb-1 text-[9px] sm:text-[15px] leading-tight">Peluang Karir</span>
            <span className="text-gray-500 leading-tight sm:leading-snug text-[7px] sm:text-[13px]">Temukan lowongan kerja di sektor industri hijau yang berkembang pesat.</span>
          </div>
          <div className="flex flex-col items-center text-center max-w-[300px]">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#fefce8] flex items-center justify-center mb-2 sm:mb-3">
              <Book className="text-[#d97706] w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <span className="font-bold text-[#b45309] mb-0.5 sm:mb-1 text-[9px] sm:text-[15px] leading-tight">Pendidikan Berkualitas</span>
            <span className="text-gray-500 leading-tight sm:leading-snug text-[7px] sm:text-[13px]">Pelajari keterampilan industri hijau dari para ahli dengan sertifikasi terstandar.</span>
          </div>
          <div className="flex flex-col items-center text-center max-w-[300px]">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#dcfce7] flex items-center justify-center mb-2 sm:mb-3">
              <TrendingUp className="text-[#16a34a] w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <span className="font-bold text-[#16a34a] mb-0.5 sm:mb-1 text-[9px] sm:text-[15px] leading-tight">Investasi Berkelanjutan</span>
            <span className="text-gray-500 leading-tight sm:leading-snug text-[7px] sm:text-[13px]">Wujudkan masa depan hijau dengan investasi cerdas yang menguntungkan.</span>
          </div>
        </div>
      </section>

      <section className="bg-[#f8faec] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-8">
            <h2 className="font-extrabold text-2xl md:text-3xl text-[#148348] mb-2">Pencarian Kerja Hijau</h2>
            <p className="text-gray-600 text-sm md:text-base">Temukan karir impian Anda di industri berkelanjutan Indonesia</p>
          </div>

          <div className="max-w-3xl mx-auto mb-10 overflow-hidden w-full">
            <div className="flex rounded-md overflow-hidden shadow-sm border border-gray-300 bg-white mx-4 sm:mx-0">
              <input 
                type="text" 
                placeholder="Cari lowongan industri hijau..." 
                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 outline-none text-xs sm:text-sm bg-transparent text-gray-800 placeholder-gray-400 font-sans"
                value={search}
                onChange={e => setSearch(e.target.value)}
              /> 
              <button className="bg-[#148348] text-white px-5 sm:px-8 hover:bg-[#106b3a] transition-colors flex items-center justify-center">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            
            <div className="flex overflow-x-auto gap-2 sm:gap-3 px-4 sm:px-0 justify-start sm:justify-center mt-6 pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <button 
                onClick={() => setActiveCategory('all')} 
                className={cn("whitespace-nowrap px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold transition-colors border", activeCategory === 'all' ? "bg-[#2e7d32] text-white border-[#2e7d32]" : "border-[#2e7d32] text-[#2e7d32] hover:bg-green-50")}
              >Semua</button>
              <button 
                onClick={() => setActiveCategory('energi')} 
                className={cn("whitespace-nowrap px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold transition-colors border", activeCategory === 'energi' ? "bg-[#2e7d32] text-white border-[#2e7d32]" : "border-[#2e7d32] text-[#2e7d32] hover:bg-green-50")}
              >Energi Terbarukan</button>
              <button 
                onClick={() => setActiveCategory('limbah')} 
                className={cn("whitespace-nowrap px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold transition-colors border", activeCategory === 'limbah' ? "bg-[#2e7d32] text-white border-[#2e7d32]" : "border-[#2e7d32] text-[#2e7d32] hover:bg-green-50")}
              >Pengelolaan Limbah</button>
              <button 
                onClick={() => setActiveCategory('pertanian')} 
                className={cn("whitespace-nowrap px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold transition-colors border", activeCategory === 'pertanian' ? "bg-[#2e7d32] text-white border-[#2e7d32]" : "border-[#2e7d32] text-[#2e7d32] hover:bg-green-50")}
              >Pertanian Berkelanjutan</button>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 px-2 sm:px-0">
            {filteredJobs.map((job, idx) => (
              <div 
                key={idx}
                className="card-hover bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer flex flex-col" 
                onClick={() => setSelectedJob(job)}
              >
                <img src={job.img} alt={job.title} className="w-full h-24 sm:h-48 object-cover" loading="lazy" />
                <div className="p-3 sm:p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-900 mb-1 text-[11px] sm:text-lg leading-tight">{job.title}</h3>
                  <p className="text-gray-500 text-[9px] sm:text-sm mb-3 sm:mb-6 flex-1">{job.company}</p>
                  <div className="flex justify-between items-end sm:items-center mt-auto gap-1">
                    <span className="text-[7px] sm:text-[10px] font-bold px-1.5 sm:px-3 py-0.5 sm:py-1 sm:pb-1.5 rounded-full bg-[#fefce8] text-[#854d0e] uppercase tracking-widest truncate max-w-[65%]">
                      {job.location}
                    </span>
                    <span className="text-[7px] sm:text-xs text-gray-400 font-mono whitespace-nowrap">{job.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={(e) => { if (e.target === e.currentTarget) setSelectedJob(null); }}>
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
            <div className="sticky top-0 bg-[#16a34a] p-6 flex justify-between items-start shrink-0">
              <div>
                <h2 className="text-white font-bold text-xl mb-1">{selectedJob.title}</h2>
                <p className="text-green-50 text-sm font-medium">{selectedJob.company}</p>
              </div>
              <button onClick={() => setSelectedJob(null)} className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm">
                  <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1">LOKASI</p>
                  <p className="text-gray-900 font-semibold">{selectedJob.location}</p>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm">
                  <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1">PENGALAMAN</p>
                  <p className="text-gray-900 font-semibold">{selectedJob.experience}</p>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm">
                  <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1">TIPE PEKERJAAN</p>
                  <p className="text-gray-900 font-semibold">{selectedJob.type}</p>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm">
                  <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1">INDUSTRI</p>
                  <p className="text-gray-900 font-semibold">{selectedJob.industry}</p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Deskripsi</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{selectedJob.description}</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Persyaratan</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {selectedJob.requirements.map((req, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <div className="mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                <p className="text-[10px] text-green-700 font-bold tracking-widest uppercase mb-2">BENEFIT</p>
                <p className="text-sm text-gray-700">{selectedJob.benefits}</p>
              </div>
              <a 
                href={`https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(selectedJob.title + ' ' + selectedJob.location)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full bg-[#2563eb] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors shadow-sm"
              >
                Lihat di LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
