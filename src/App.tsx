import { useAtom } from 'jotai';
import { currentPageAtom } from './data';
import { Header, Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { TentangSection } from './components/TentangSection';
import { KarirSection } from './components/KarirSection';
import { KelasSection } from './components/KelasSection';
import { SertifikasiSection } from './components/SertifikasiSection';
import { InvestasiSection } from './components/InvestasiSection';
import { RoadmapSection } from './components/RoadmapSection';
import { BeritaSection } from './components/BeritaSection';
import { KontakSection } from './components/KontakSection';
import { ProfilSection } from './components/ProfilSection';

export default function App() {
  const [currentPage] = useAtom(currentPageAtom);

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col">
        {currentPage === 'hero' && <HeroSection />}
        {currentPage === 'tentang' && <TentangSection />}
        {currentPage === 'karir' && <KarirSection />}
        {currentPage === 'kelas' && <KelasSection />}
        {currentPage === 'sertifikasi' && <SertifikasiSection />}
        {currentPage === 'investasi' && <InvestasiSection />}
        {currentPage === 'roadmap' && <RoadmapSection />}
        {currentPage === 'berita' && <BeritaSection />}
        {currentPage === 'kontak' && <KontakSection />}
        {currentPage === 'profil' && <ProfilSection />}
      </main>

      <Navigation />
    </div>
  );
}
