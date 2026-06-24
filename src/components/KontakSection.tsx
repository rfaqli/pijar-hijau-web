import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function KontakSection() {
  const [isSent, setIsSent] = useState(false);

  return (
    <section className="page-section active pt-0 min-h-screen relative overflow-hidden bg-[#eaf8f0]" style={{ marginTop: '32px' }}>
      <div className="py-20 px-6 relative z-10 w-full overflow-hidden flex-grow flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl text-[#1a8b44] mb-4">Hubungi Kami</h2>
            <p className="text-gray-500 font-medium text-lg">Punya pertanyaan atau ingin bekerja sama? Kami siap membantu.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto items-start">
            <div className="flex flex-col gap-6 md:pr-8">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#1a8b44]" />
                <p className="text-[#334155] text-lg">pijarhijau@gmail.com</p>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#1a8b44]" />
                <p className="text-[#334155] text-lg">+62 812-3367-5706</p>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-[#1a8b44]" />
                <p className="text-[#334155] text-lg">Surabaya, Indonesia</p>
              </div>
            </div>

            <div className="w-full">
              {isSent ? (
                <div className="bg-white p-8 rounded-2xl border border-green-100 shadow-sm text-center flex flex-col items-center justify-center h-full min-h-[300px]">
                  <CheckCircle2 className="w-16 h-16 text-[#1a8b44] mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pesan Terkirim!</h3>
                  <p className="text-gray-600 mb-6">Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.</p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="bg-[#1a8b44] text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              ) : (
                <form 
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSent(true);
                  }}
                >
                  <div>
                    <input type="text" placeholder="Nama Anda" className="w-full bg-white px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#1a8b44] text-gray-900 placeholder-gray-400 transition-colors shadow-sm" required />
                  </div>
                  <div>
                    <input type="email" placeholder="Email Anda" className="w-full bg-white px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#1a8b44] text-gray-900 placeholder-gray-400 transition-colors shadow-sm" required />
                  </div>
                  <div>
                    <textarea rows={5} placeholder="Pesan Anda" className="w-full bg-white px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#1a8b44] text-gray-900 placeholder-gray-400 resize-none transition-colors shadow-sm" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#1a8b44] text-white hover:bg-green-700 py-4 rounded-xl font-bold transition shadow-sm">
                    Kirim Pesan
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="py-6 sm:py-12 px-6 bg-[#185e33] flex items-center justify-center text-center relative z-10 w-full mt-auto">
        <p className="text-green-50 font-medium text-[10px] sm:text-base">
          © {new Date().getFullYear()} Pijar Hijau. Platform Karir & Edukasi Industri Hijau Indonesia.
        </p>
      </footer>
    </section>
  );
}

