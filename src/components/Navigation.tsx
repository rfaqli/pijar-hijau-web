import { useAtom } from 'jotai';
import { Home, Info, Briefcase, BookOpen, Award, TrendingUp, Newspaper, Mail, Map } from 'lucide-react';
import { currentPageAtom, Page, profileCompletedAtom } from '../data';
import { cn } from '../lib/utils';

export function Navigation() {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [hasProfile] = useAtom(profileCompletedAtom);

  const links = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'karir', label: 'Karir', icon: Briefcase },
    { id: 'kelas', label: 'Kelas', icon: BookOpen },
    { id: 'sertifikasi', label: 'Sertifikasi', icon: Award },
    { id: 'investasi', label: 'Investasi', icon: TrendingUp },
    { id: 'roadmap', label: 'Roadmap', icon: Map },
    { id: 'berita', label: 'Berita', icon: Newspaper },
    { id: 'kontak', label: 'Kontak', icon: Mail },
    { id: 'tentang', label: 'Tentang', icon: Info },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 bg-white border-t border-gray-200" style={{ height: 'max(60px, 7.4dvh)' }}>
      <div className="max-w-[1920px] mx-auto px-4 h-full flex items-center justify-start md:justify-center gap-2 sm:gap-4 overflow-x-auto hide-scrollbar">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = currentPage === link.id;
          return (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id as Page)}
              className={cn(
                "nav-link flex flex-col items-center justify-center gap-1 py-1 sm:py-2 transition flex-shrink-0 w-14 sm:w-[72px] md:w-20",
                isActive ? "text-green-600 font-semibold" : "text-gray-500 hover:text-gray-900"
              )}
            >
              <Icon className={cn("w-5 h-5 sm:w-[24px] sm:h-[24px]", isActive ? "text-green-600" : "")} />
              <span className="text-[9px] sm:text-[12px] leading-tight whitespace-nowrap">{link.label}</span>
            </button>
          );
        })}
        {hasProfile && (
          <button
            onClick={() => setCurrentPage('profil')}
            className={cn(
              "nav-link flex flex-col items-center justify-center gap-1 py-1 sm:py-2 transition flex-shrink-0 w-14 sm:w-[72px] md:w-20",
              currentPage === 'profil' ? "text-green-600 font-semibold" : "text-gray-500 hover:text-gray-900"
            )}
          >
            <div className={cn("w-5 h-5 sm:w-[24px] sm:h-[24px] rounded-full overflow-hidden border-2", currentPage === 'profil' ? "border-green-600" : "border-gray-300")}>
               <img src="/maskot_sihijau.png" alt="Profil" className="w-full h-full object-cover bg-green-50" />
            </div>
            <span className="text-[9px] sm:text-[12px] leading-tight whitespace-nowrap">Profil</span>
          </button>
        )}
      </div>
    </nav>
  );
}

export function Header() {
  const [, setCurrentPage] = useAtom(currentPageAtom);
  const [hasProfile] = useAtom(profileCompletedAtom);

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-100" style={{ height: 'max(60px, 7.4dvh)' }}>
      <div className="w-full max-w-[1920px] h-full mx-auto relative flex items-center justify-between">
        <div 
          className="cursor-pointer transition-transform hover:scale-105 flex items-center"
          style={{ paddingLeft: '21px', height: '100%' }}
          onClick={() => setCurrentPage('hero')}
        >
           <img src="/logo-pijarhijau.png" alt="Pijar Hijau Logo" style={{ maxHeight: '80%', height: '65px', width: 'auto' }} className="object-contain" />
        </div>
        {!hasProfile && (
          <button 
            className="bg-[#16a34a] text-white font-bold rounded-full hover:bg-[#15803d] transition-colors flex items-center justify-center flex-shrink-0"
            style={{ marginRight: '21px', height: 'max(36px, 4dvh)', paddingLeft: '24px', paddingRight: '24px', fontSize: 'clamp(12px, 1.4dvh, 16px)' }}
            onClick={() => setCurrentPage('profil')}
          >
            Mulai Sekarang
          </button>
        )}
      </div>
    </header>
  );
}
