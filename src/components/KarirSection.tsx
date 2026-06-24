import { useState, useEffect } from 'react';
import { Search, Globe, TrendingUp, Heart, Check, X } from 'lucide-react';
import { jobsData } from '../data';
import { Reveal } from './Reveal';
import { cn } from '../lib/utils';
import { useAtom } from 'jotai';
import { currentPageAtom } from '../data';

function AnimatedCounter({ end, duration = 2, isFormatted = false }: { end: number, duration?: number, isFormatted?: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(ease * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{isFormatted ? count.toLocaleString('id-ID') : count}</>;
}

export function KarirSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedJob, setSelectedJob] = useState<typeof jobsData[0] | null>(null);

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.searchtext.includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'all' || job.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="page-section active pt-0 relative overflow-hidden min-h-screen bg-[#f8faec]">
      
      <div className="py-20 px-6 relative z-10" style={{ marginTop: '64px' }}>
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-8">
            <h2 className="font-extrabold text-2xl md:text-3xl text-[#148348] mb-2">Pencarian Kerja Hijau</h2>
            <p className="text-gray-600 text-sm md:text-base">Temukan karir impian Anda di industri berkelanjutan Indonesia</p>
          </div>

          <div className="max-w-3xl mx-auto mb-10">
            <div className="flex rounded-md overflow-hidden shadow-sm border border-gray-300 bg-white">
              <input 
                type="text" 
                placeholder="Cari lowongan industri hijau..." 
                className="flex-1 px-6 py-3 outline-none text-sm bg-transparent text-gray-800 placeholder-gray-400 font-sans"
                value={search}
                onChange={e => setSearch(e.target.value)}
              /> 
              <button className="bg-[#148348] text-white px-8 hover:bg-[#106b3a] transition-colors flex items-center justify-center">
                <Search className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <button 
                onClick={() => setActiveCategory('all')} 
                className={cn("px-5 py-2 rounded-full text-xs font-semibold transition-colors border", activeCategory === 'all' ? "bg-[#2e7d32] text-white border-[#2e7d32]" : "border-[#2e7d32] text-[#2e7d32] hover:bg-green-50")}
              >Semua</button>
              <button 
                onClick={() => setActiveCategory('energi')} 
                className={cn("px-5 py-2 rounded-full text-xs font-semibold transition-colors border", activeCategory === 'energi' ? "bg-[#2e7d32] text-white border-[#2e7d32]" : "border-[#2e7d32] text-[#2e7d32] hover:bg-green-50")}
              >Energi Terbarukan</button>
              <button 
                onClick={() => setActiveCategory('limbah')} 
                className={cn("px-5 py-2 rounded-full text-xs font-semibold transition-colors border", activeCategory === 'limbah' ? "bg-[#2e7d32] text-white border-[#2e7d32]" : "border-[#2e7d32] text-[#2e7d32] hover:bg-green-50")}
              >Pengelolaan Limbah</button>
              <button 
                onClick={() => setActiveCategory('pertanian')} 
                className={cn("px-5 py-2 rounded-full text-xs font-semibold transition-colors border", activeCategory === 'pertanian' ? "bg-[#2e7d32] text-white border-[#2e7d32]" : "border-[#2e7d32] text-[#2e7d32] hover:bg-green-50")}
              >Pertanian Berkelanjutan</button>
            </div>
          </div>

          <Reveal type="reveal-scale">
            <div className="mb-12 bg-[#128f76] rounded-2xl shadow-md overflow-hidden p-8">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Industri Hijau Indonesia: Pertumbuhan & Peluang</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-6 mb-8">
                <div className="text-center p-2 sm:p-4 md:p-6 border border-[#2fa18b] bg-[#1a9c82] rounded-xl shadow-sm flex flex-col justify-center overflow-hidden">
                  <p className="text-xl sm:text-2xl md:text-4xl font-black text-[#facc15] mb-1 md:mb-2 tracking-tighter sm:tracking-tight"><AnimatedCounter end={500000} isFormatted={true} duration={2.5} /></p>
                  <p className="text-[7px] sm:text-[10px] md:text-xs font-bold text-white uppercase tracking-tighter sm:tracking-wide leading-tight whitespace-nowrap">Lapangan Kerja Hijau</p>
                  <p className="text-[6px] sm:text-[8px] md:text-[10px] text-green-100 mt-1 md:mt-2 tracking-normal sm:tracking-widest uppercase">Target 2025</p>
                </div>
                <div className="text-center p-2 sm:p-4 md:p-6 border border-[#2fa18b] bg-[#1a9c82] rounded-xl shadow-sm flex flex-col justify-center overflow-hidden">
                  <p className="text-xl sm:text-2xl md:text-4xl font-black text-[#facc15] mb-1 md:mb-2 tracking-tighter sm:tracking-tight"><AnimatedCounter end={28} duration={2.5} /></p>
                  <p className="text-[7px] sm:text-[10px] md:text-xs font-bold text-white uppercase tracking-tighter sm:tracking-wide leading-tight whitespace-nowrap">% Pertumbuhan Tahunan</p>
                  <p className="text-[6px] sm:text-[8px] md:text-[10px] text-green-100 mt-1 md:mt-2 tracking-normal sm:tracking-widest uppercase">Energi Terbarukan</p>
                </div>
                <div className="text-center p-2 sm:p-4 md:p-6 border border-[#2fa18b] bg-[#1a9c82] rounded-xl shadow-sm flex flex-col justify-center overflow-hidden">
                  <p className="text-xl sm:text-2xl md:text-4xl font-black text-[#facc15] mb-1 md:mb-2 tracking-tighter sm:tracking-tight"><AnimatedCounter end={23} duration={2.5} /></p>
                  <p className="text-[7px] sm:text-[10px] md:text-xs font-bold text-white uppercase tracking-tighter sm:tracking-wide leading-tight whitespace-nowrap">% Target EBT 2025</p>
                  <p className="text-[6px] sm:text-[8px] md:text-[10px] text-green-100 mt-1 md:mt-2 tracking-normal sm:tracking-widest uppercase">Bauran Energi Indonesia</p>
                </div>
                <div className="text-center p-2 sm:p-4 md:p-6 border border-[#2fa18b] bg-[#1a9c82] rounded-xl shadow-sm flex flex-col justify-center overflow-hidden">
                  <p className="text-xl sm:text-2xl md:text-4xl font-black text-[#facc15] mb-1 md:mb-2 tracking-tighter sm:tracking-tight"><AnimatedCounter end={1} duration={2.5} /></p>
                  <p className="text-[7px] sm:text-[10px] md:text-xs font-bold text-white uppercase tracking-tighter sm:tracking-wide leading-tight whitespace-nowrap">Triliun Rupiah</p>
                  <p className="text-[6px] sm:text-[8px] md:text-[10px] text-green-100 mt-1 md:mt-2 tracking-normal sm:tracking-widest uppercase">Investasi Hijau 2024</p>
                </div>
              </div>

              <div className="border border-[#2fa18b] rounded-xl p-4 bg-[#148348]/20 flex items-center gap-3">
                <span className="text-xl shrink-0">🌱</span>
                <p className="text-sm text-white font-medium">Indonesia memiliki potensi luar biasa di sektor energi terbarukan dengan radiasi matahari 4-5 kWh/m²/hari. Pertumbuhan sektor hijau menciptakan peluang karir bagi jutaan orang dan berkontribusi pada target net-zero 2060.</p>
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job, idx) => (
              <div 
                key={idx}
                className="card-hover bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer flex flex-col" 
                onClick={() => setSelectedJob(job)}
              >
                <img src={job.img} alt={job.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-900 mb-1 text-lg leading-tight">{job.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 flex-1">{job.company}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-[10px] font-bold px-3 py-1 pb-1.5 rounded-full bg-[#fefce8] text-[#854d0e] uppercase tracking-widest">
                      {job.location}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">{job.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

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
                href={selectedJob.link || `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(selectedJob.title + ' ' + selectedJob.company)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full bg-[#2563eb] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors shadow-sm"
              >
                {selectedJob.link ? 'Lamar Sekarang' : 'Cari di LinkedIn'}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
