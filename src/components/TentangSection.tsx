import { Briefcase, GraduationCap, TrendingUp } from 'lucide-react';
import { useAtom } from 'jotai';
import { currentPageAtom } from '../data';

export function TentangSection() {
  const [, setCurrentPage] = useAtom(currentPageAtom);

  return (
    <section className="page-section active pt-0">
      <div className="py-20 px-6 relative z-10" style={{ marginTop: '32px' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-bold text-3xl text-[#1a8b44] mb-6">Tentang Pijar Hijau</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Pijar Hijau (Pusat Informasi dan Jejaring Karier Hijau) adalah platform digital yang menghubungkan pencari kerja, akademisi, dan investor dengan peluang di sektor industri hijau Indonesia. Kami berkomitmen mendukung transisi ekonomi berkelanjutan.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="py-6 px-4 bg-[#eaf8f0] rounded-2xl">
                <Briefcase className="w-8 h-8 text-[#1a8b44] mx-auto mb-3" />
                <p className="text-sm font-medium text-[#1a8b44]">Pencari Kerja</p>
              </div>
              <div className="py-6 px-4 bg-[#eaf8f0] rounded-2xl">
                <GraduationCap className="w-8 h-8 text-[#1a8b44] mx-auto mb-3" />
                <p className="text-sm font-medium text-[#1a8b44]">Akademisi</p>
              </div>
              <div className="py-6 px-4 bg-[#eaf8f0] rounded-2xl">
                <TrendingUp className="w-8 h-8 text-[#1a8b44] mx-auto mb-3" />
                <p className="text-sm font-medium text-[#1a8b44]">Investor</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
              className="relative w-full h-[400px] object-cover rounded-3xl shadow-sm" 
              alt="Tim Pijar Hijau" 
            />
          </div>
        </div>
      </div>
      
      <div className="py-24 px-6 relative z-10 bg-[#1a8b44]">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Bergabunglah dengan Komunitas Hijau</h3>
          <p className="text-green-50 mb-10 text-base">
            Buat profil Anda dan dapatkan akses ke lowongan kerja, kelas online, sertifikasi, dan peluang investasi hijau.
          </p>
          <button 
            className="px-8 py-3 bg-[#facc15] text-yellow-950 font-bold rounded-full hover:bg-yellow-400 transition"
            onClick={() => setCurrentPage('profil')}
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
