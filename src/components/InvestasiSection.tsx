import { TrendingUp, X, ArrowUpRight } from 'lucide-react';
import { investmentData } from '../data';
import { useState } from 'react';

export function InvestasiSection() {
  const [selectedInvest, setSelectedInvest] = useState<typeof investmentData[0] | null>(null);

  // Styling maps based on the item index to match screenshot
  const cardThemes = [
    { topBg: 'bg-[#eaf8f0]', titleColor: 'text-[#1a8b44]', btnBg: 'bg-[#1a8b44]' }
  ];

  return (
    <section className="page-section active pt-0 min-h-screen bg-white" style={{ marginTop: '32px' }}>
      
      {/* Top Banner Section */}
      <div className="pt-10 pb-8 sm:py-20 px-4 sm:px-6 relative z-10 bg-[#22c55e]">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center mb-4 sm:mb-6 mt-4 sm:mt-0">
            <div className="bg-[#facc15] text-yellow-950 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-bold text-[10px] sm:text-sm flex items-center gap-1 sm:gap-2">
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" /> Investasi Hijau
            </div>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl text-white font-bold mb-3 sm:mb-4 px-2 sm:px-0">Wujudkan Masa Depan Hijau Melalui Investasi Cerdas</h2>
          <p className="text-green-50 text-xs sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-12 max-w-3xl mx-auto px-2 sm:px-0">
            Berinvestasi di sektor industri hijau bukan hanya tentang keuntungan finansial, tetapi juga berkontribusi pada keberlanjutan planet kita.
          </p>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-[#4ade80]/30 border border-[#86efac]/50 rounded-xl sm:rounded-2xl p-2 sm:p-6 text-center flex flex-col justify-center">
              <p className="text-sm sm:text-3xl md:text-4xl font-bold text-[#facc15] mb-0.5 sm:mb-2">Rp 1T+</p>
              <p className="text-white text-[7px] sm:text-sm font-medium leading-tight">Nilai Investasi Hijau</p>
            </div>
            <div className="bg-[#4ade80]/30 border border-[#86efac]/50 rounded-xl sm:rounded-2xl p-2 sm:p-6 text-center flex flex-col justify-center">
              <p className="text-sm sm:text-3xl md:text-4xl font-bold text-[#facc15] mb-0.5 sm:mb-2">150+</p>
              <p className="text-white text-[7px] sm:text-sm font-medium leading-tight">Perusahaan Terverifikasi</p>
            </div>
            <div className="bg-[#4ade80]/30 border border-[#86efac]/50 rounded-xl sm:rounded-2xl p-2 sm:p-6 text-center flex flex-col justify-center">
              <p className="text-sm sm:text-3xl md:text-4xl font-bold text-[#facc15] mb-0.5 sm:mb-2">12-18%</p>
              <p className="text-white text-[7px] sm:text-sm font-medium leading-tight">ROI Rata-Rata</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl text-[#1a8b44] mb-3">Investasi Hijau</h2>
            <p className="text-gray-500">Pilih peluang investasi yang sejalan dengan visi Indonesia berkelanjutan</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentData.map((inv, idx) => {
              const theme = cardThemes[idx % cardThemes.length];
              return (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col" onClick={() => setSelectedInvest(inv)}>
                  <div className={`h-48 relative overflow-hidden flex items-center justify-center p-6 ${theme.topBg}`}>
                    <img src={inv.img} alt={inv.title} className="max-h-full max-w-full object-contain rounded-lg shadow-sm" loading="lazy" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className={`font-bold text-lg mb-2 ${theme.titleColor}`}>{inv.title}</h3>
                    <p className="text-sm text-gray-500 mb-6 flex-grow">{inv.product}</p>
                    <button className={`${theme.btnBg} hover:opacity-90 text-white w-full py-3 rounded-lg text-sm font-bold transition mt-auto`}>
                      Informasi Lanjut
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal Section */}
      {selectedInvest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4" onClick={(e) => { if (e.target === e.currentTarget) setSelectedInvest(null); }}>
          <div className="bg-white border border-gray-200 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden">
            <div className="bg-gray-50 p-6 flex justify-between items-start border-b border-gray-200">
              <div>
                <h2 className="text-gray-900 font-bold text-2xl mb-1">{selectedInvest.title}</h2>
                <p className="text-[#1a8b44] text-sm font-medium">{selectedInvest.product}</p>
              </div>
              <button onClick={() => setSelectedInvest(null)} className="text-gray-400 hover:text-gray-600 p-2 rounded-lg transition">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <p className="text-gray-600 leading-relaxed mb-8">{selectedInvest.desc}</p>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
                <p className="text-xs text-blue-800 font-bold tracking-widest uppercase mb-2">METADATA INVESTASI</p>
                <p className="text-sm text-blue-900">{selectedInvest.info}</p>
              </div>
              <a href={selectedInvest.link} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#1a8b44] hover:bg-green-700 text-white font-bold py-4 px-4 rounded-xl text-center transition tracking-wide shadow-md">
                Akses Terminal Transaksi
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

