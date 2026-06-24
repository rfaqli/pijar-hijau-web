import { Briefcase, GraduationCap, TrendingUp } from 'lucide-react';
import { useAtom } from 'jotai';
import { currentPageAtom } from '../data';

export function TentangSection() {
  const [, setCurrentPage] = useAtom(currentPageAtom);

  return (
    <section className="page-section active pt-0">
      <div className="py-10 sm:py-20 px-4 sm:px-6 relative z-10" style={{ marginTop: '32px' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-12 items-center">
          <div>
            <h2 className="font-bold text-lg sm:text-3xl text-[#1a8b44] mb-2 sm:mb-6">Tentang Pijar Hijau</h2>
            <p className="text-gray-600 leading-tight sm:leading-relaxed mb-4 sm:mb-8 text-[9px] sm:text-base pr-2 sm:pr-0">
              Pijar Hijau (Pusat Informasi dan Jejaring Karier Hijau) adalah platform digital yang menghubungkan pencari kerja, akademisi, dan investor dengan peluang di sektor industri hijau Indonesia. Kami berkomitmen mendukung transisi ekonomi berkelanjutan.
            </p>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-6 text-center">
              <div className="py-2 px-1 sm:py-6 sm:px-4 bg-[#eaf8f0] rounded-lg sm:rounded-2xl flex flex-col items-center justify-center">
                <Briefcase className="w-3 h-3 sm:w-8 sm:h-8 text-[#1a8b44] mx-auto mb-1 sm:mb-3" />
                <p className="text-[7px] sm:text-sm font-medium text-[#1a8b44] leading-tight">Pencari<br className="sm:hidden" /> Kerja</p>
              </div>
              <div className="py-2 px-1 sm:py-6 sm:px-4 bg-[#eaf8f0] rounded-lg sm:rounded-2xl flex flex-col items-center justify-center">
                <GraduationCap className="w-3 h-3 sm:w-8 sm:h-8 text-[#1a8b44] mx-auto mb-1 sm:mb-3" />
                <p className="text-[7px] sm:text-sm font-medium text-[#1a8b44] leading-tight">Akademisi</p>
              </div>
              <div className="py-2 px-1 sm:py-6 sm:px-4 bg-[#eaf8f0] rounded-lg sm:rounded-2xl flex flex-col items-center justify-center">
                <TrendingUp className="w-3 h-3 sm:w-8 sm:h-8 text-[#1a8b44] mx-auto mb-1 sm:mb-3" />
                <p className="text-[7px] sm:text-sm font-medium text-[#1a8b44] leading-tight">Investor</p>
              </div>
            </div>
          </div>
          <div className="relative mt-0 sm:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
              className="relative w-full h-[140px] sm:h-[400px] object-cover rounded-xl sm:rounded-3xl shadow-sm" 
              alt="Tim Pijar Hijau" 
            />
          </div>
        </div>
      </div>
      
      <div className="py-12 sm:py-24 px-4 sm:px-6 relative z-10 bg-[#1a8b44]">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4">Bergabunglah dengan Komunitas Hijau</h3>
          <p className="text-green-50 mb-8 sm:mb-10 text-xs sm:text-base px-2 sm:px-0">
            Buat profil Anda dan dapatkan akses ke lowongan kerja, kelas online, sertifikasi, dan peluang investasi hijau.
          </p>
          <button 
            className="px-6 py-3 sm:px-8 sm:py-3 bg-[#facc15] text-yellow-950 font-bold text-xs sm:text-base rounded-full hover:bg-yellow-400 transition"
            onClick={() => setCurrentPage('profil')}
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
