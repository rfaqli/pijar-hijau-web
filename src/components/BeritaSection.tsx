import { useState } from 'react';
import { Flame, Search, X } from 'lucide-react';
import { newsData } from '../data';

export function BeritaSection() {
  const [search, setSearch] = useState('');
  const [selectedNews, setSelectedNews] = useState<typeof newsData[0] | null>(null);

  const filteredNews = newsData.filter(news => 
    news.title.toLowerCase().includes(search.toLowerCase()) || 
    news.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  const parseDate = (dateStr: string) => {
    const months: Record<string, number> = {
      "Januari": 0, "Februari": 1, "Maret": 2, "April": 3, "Mei": 4, "Juni": 5,
      "Juli": 6, "Agustus": 7, "September": 8, "Oktober": 9, "November": 10, "Desember": 11
    };
    const parts = dateStr.split(" ");
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = months[parts[1]] || 0;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day).getTime();
    }
    return 0;
  };

  const viralNews = [...newsData].sort((a, b) => parseDate(b.date) - parseDate(a.date)).slice(0, 3);

  return (
    <section className="page-section active pt-0 min-h-screen relative overflow-hidden bg-[#f7fcf8]" style={{ marginTop: '32px' }}>
      <div className="py-8 sm:py-20 px-4 sm:px-6 relative z-10 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-8 sm:mb-16 relative">
            <h2 className="font-bold text-xl sm:text-3xl md:text-4xl text-[#1a8b44] mb-2 sm:mb-4">Berita & Informasi</h2>
            <p className="text-gray-500 font-medium text-[10px] sm:text-base">Perkembangan terkini dari dunia industri hijau Indonesia</p>
          </div>

          <div className="mb-8 sm:mb-16">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-6">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
              <h3 className="text-[#1a8b44] font-bold text-sm sm:text-lg">Berita Viral</h3>
            </div>
            
            <div className="flex gap-3 sm:gap-6 pb-2 sm:pb-4 overflow-x-auto carousel-container snap-x hide-scrollbar">
              {viralNews.map((news, idx) => (
                <div key={idx} className="snap-start flex-none w-[220px] sm:w-[320px] bg-white rounded-lg sm:rounded-xl overflow-hidden border border-[#fbdcbb] cursor-pointer transition hover:shadow-md group" onClick={() => setSelectedNews(news)}>
                  <div className="relative h-24 sm:h-40">
                    <img src={news.img} alt="viral" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-2 sm:p-4">
                    <p className="text-gray-400 text-[8px] sm:text-xs mb-1 sm:mb-2">{news.date}</p>
                    <h4 className="font-bold text-gray-900 text-[10px] sm:text-sm leading-tight sm:leading-snug group-hover:text-[#1a8b44] transition">{news.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-8 sm:mb-16">
            <div className="flex rounded-md sm:rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm">
              <input 
                type="text" 
                placeholder="Cari berita hijau..." 
                className="flex-1 px-3 py-2 sm:px-6 sm:py-4 outline-none text-[10px] sm:text-sm bg-transparent text-gray-900 placeholder-gray-400"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button className="bg-[#1a8b44] text-white px-4 sm:px-8 hover:bg-green-700 transition flex items-center justify-center">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {filteredNews.map((news, idx) => (
              <article key={idx} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col group border border-gray-100" onClick={() => setSelectedNews(news)}>
                <div className="h-24 sm:h-48 overflow-hidden relative shrink-0">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="flex flex-col flex-grow p-3 sm:p-6">
                  <p className="text-[8px] sm:text-xs text-gray-400 mb-1.5 sm:mb-3">{news.date}</p>
                  <h3 className="font-bold text-gray-900 text-[10px] sm:text-lg mb-1.5 sm:mb-3 group-hover:text-[#1a8b44] transition-colors leading-tight">{news.title}</h3>
                  <p className="text-gray-500 text-[8px] sm:text-sm leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-3">{news.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4 overflow-y-auto" onClick={(e) => { if (e.target === e.currentTarget) setSelectedNews(null); }}>
          <div className="bg-white border border-gray-200 rounded-2xl max-w-3xl w-full shadow-2xl my-8">
            <div className="sticky top-0 bg-white/95 backdrop-blur-md p-6 flex justify-between items-start border-b border-gray-200 z-10 rounded-t-2xl">
              <div className="flex-1 pr-4">
                <h2 className="text-gray-900 font-bold text-xl md:text-2xl mb-2">{selectedNews.title}</h2>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>{selectedNews.date}</span>
                  <span className="text-[#1a8b44]">{selectedNews.source}</span>
                </div>
              </div>
              <button onClick={() => setSelectedNews(null)} className="text-gray-400 hover:text-gray-700 p-2 rounded-lg transition flex-shrink-0">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <div className="aspect-[21/9] w-full rounded-xl overflow-hidden mb-8 relative border border-gray-200">
                <img src={selectedNews.img} className="w-full h-full object-cover" alt="" />
              </div>
              
              <div className="mb-10 text-gray-700 leading-relaxed text-base whitespace-pre-wrap">
                {selectedNews.content}
              </div>

              <div className="grid grid-cols-3 gap-4 border border-gray-100 bg-gray-50 p-6 rounded-xl mb-8">
                <div className="text-center border-r border-gray-200">
                  <p className="text-2xl font-bold text-gray-900">{(selectedNews.views / 1000).toFixed(1)}K</p>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Views</p>
                </div>
                <div className="text-center border-r border-gray-200">
                  <p className="text-2xl font-bold text-gray-900">{(selectedNews.shares / 1000).toFixed(1)}K</p>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Shares</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#1a8b44]">{Math.round((selectedNews.shares / selectedNews.views) * 100)}%</p>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Impact</p>
                </div>
              </div>
              
              {/* Button to original source */}
              <div className="text-center">
                <a 
                  href={'link' in selectedNews ? selectedNews.link : '#'} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-[#1a8b44] text-white px-8 py-3 rounded-full hover:bg-green-700 transition font-medium"
                >
                  Baca berita lengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="py-8 sm:py-20 px-4 sm:px-6 relative z-10 bg-gradient-to-r from-yellow-400 to-[#a3d95d]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold text-sm sm:text-2xl text-yellow-950 mb-1 sm:mb-3">Dapatkan Notifikasi Real-Time</h2>
          <p className="text-yellow-900 mb-4 sm:mb-8 font-medium text-[10px] sm:text-base leading-tight sm:leading-normal">Lowongan kerja, kelas baru, sertifikasi, dan peluang investasi langsung ke inbox Anda.</p>
          <form 
            className="flex flex-row sm:flex-row max-w-lg mx-auto gap-0 bg-white rounded-md sm:rounded-lg overflow-hidden shadow-sm border border-gray-100"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Terima kasih telah mendaftar!');
            }}
          >
            <input type="email" placeholder="Masukkan email Anda" className="flex-1 px-3 py-2 sm:px-6 sm:py-3 outline-none text-[10px] sm:text-sm text-gray-900 placeholder-gray-400" required />
            <button type="submit" className="bg-[#1a8b44] text-white hover:bg-green-700 transition px-4 py-2 sm:px-8 sm:py-3 font-medium text-[10px] sm:text-sm whitespace-nowrap">
              Daftar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
