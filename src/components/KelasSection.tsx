import { useState, useMemo } from 'react';
import { BookOpen, Zap, Award, BarChart3, ChevronDown, ClipboardCheck, ArrowLeft, RefreshCw, ArrowRight, Leaf } from 'lucide-react';
import { courseData } from '../data';
import { cn } from '../lib/utils';

type ViewState = 'list' | 'detail' | 'quiz' | 'result';

export function KelasSection() {
  const [view, setView] = useState<ViewState>('list');
  const [activeCourseId, setActiveCourseId] = useState<number>(0);
  
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set());
  const [earnedPoints, setEarnedPoints] = useState<number>(0);
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set());

  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showQuizForm, setShowQuizForm] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  
  const [quizScore, setQuizScore] = useState({ score: 0, total: 0, passed: false });

  const activeCourse = courseData[activeCourseId];
  const totalModulesCount = useMemo(() => courseData.reduce((acc, c) => acc + c.modules.length, 0), []);
  const completionPercentage = totalModulesCount > 0 ? Math.round((completedModules.size / totalModulesCount) * 100) : 0;
  
  const courseCompletionPercent = activeCourse ? Math.round((activeCourse.modules.filter((_, idx) => expandedModules.has(idx)).length / activeCourse.modules.length) * 100) : 0;

  const toggleModule = (idx: number, moduleTitle: string) => {
    const nextModules = new Set(expandedModules);
    if (nextModules.has(idx)) {
      nextModules.delete(idx);
    } else {
      nextModules.add(idx);
      const globalKey = `${activeCourseId}-${moduleTitle}`;
      if (!completedModules.has(globalKey)) {
        const nextCompleted = new Set(completedModules);
        nextCompleted.add(globalKey);
        setCompletedModules(nextCompleted);
        setEarnedPoints(prev => prev + 50);
      }
    }
    setExpandedModules(nextModules);
  };

  const submitQuiz = () => {
    if (Object.keys(quizAnswers).length < activeCourse.quiz.length) {
      alert("Silakan jawab semua pertanyaan kuis terlebih dahulu");
      return;
    }
    let score = 0;
    activeCourse.quiz.forEach((q, idx) => { if (quizAnswers[idx] === q.correct) score++; });
    const passed = score >= Math.ceil(activeCourse.quiz.length * 0.6);
    if (passed) setEarnedPoints(prev => prev + 200);
    setQuizScore({ score, total: activeCourse.quiz.length, passed });
    setView('result');
  };

  return (
    <section className="page-section active pt-0 relative overflow-hidden min-h-screen bg-[#eaf8f0]" style={{ marginTop: '64px' }}>
      {view === 'list' && (
        <div className="pt-6 pb-10 sm:py-20 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6 sm:mb-16">
              <h2 className="font-bold text-xl sm:text-3xl text-green-800 mb-2 sm:mb-3">Kelas Online</h2>
              <p className="text-slate-500 text-xs sm:text-base px-4 sm:px-0">Tingkatkan skill Anda dengan materi berkualitas dari para ahli industri hijau</p>
            </div>

            <div className="mb-10 sm:mb-16 bg-white rounded-2xl sm:rounded-[32px] shadow-sm border border-slate-100 p-2 sm:p-8 md:p-12 overflow-hidden relative">
              <div className="grid grid-cols-2 gap-2 sm:gap-12 items-center relative z-10">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center max-w-full mx-auto">
                    <img src="/maskot_sihijau.png" alt="Si Hijau" className="w-full h-full max-w-[120px] sm:max-w-[336px] object-contain animate-bounce drop-shadow-xl mt-4 sm:mt-8 md:mt-12" />
                  </div>
                  <p className="font-bold text-[#1a8b44] text-[7px] sm:text-base md:text-lg mt-2 sm:mt-4 flex items-center justify-center gap-1 sm:gap-2 flex-wrap">Hai! Aku Si Hijau, teman belajarmu! <span className="text-[10px] sm:text-xl">🌿</span></p>
                </div>
                <div className="space-y-2 sm:space-y-6 py-2">
                  <h3 className="text-[9px] sm:text-xl font-bold text-[#1a8b44] mb-1 sm:mb-6">Mari Belajar Bersama Kami</h3>
                  <div className="space-y-1.5 sm:space-y-4">
                    <div className="flex gap-1.5 sm:gap-4 items-start p-2 sm:p-5 bg-[#eaf8f0] rounded-xl">
                      <BookOpen className="w-3 h-3 sm:w-6 sm:h-6 text-[#1a8b44] mt-0.5 sm:mt-1 shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900 text-[7px] sm:text-sm leading-tight">Materi Lengkap & Terstruktur</p>
                        <p className="text-gray-500 text-[6px] sm:text-sm mt-0.5 sm:mt-1 leading-tight">Kurikulum disusun oleh ahli industri hijau dengan modul bertahap dari dasar hingga mahir.</p>
                      </div>
                    </div>
                    <div className="flex gap-1.5 sm:gap-4 items-start p-2 sm:p-5 bg-yellow-50 rounded-xl">
                      <Zap className="w-3 h-3 sm:w-6 sm:h-6 text-yellow-600 mt-0.5 sm:mt-1 shrink-0" />
                      <div>
                        <p className="font-bold text-yellow-700 text-[7px] sm:text-sm leading-tight">Sertifikat & Poin Pembelajaran</p>
                        <p className="text-gray-500 text-[6px] sm:text-sm mt-0.5 sm:mt-1 leading-tight">Dapatkan sertifikat kelulusan dan poin untuk setiap modul yang diselesaikan.</p>
                      </div>
                    </div>
                    <div className="flex gap-1.5 sm:gap-4 items-start p-2 sm:p-5 bg-[#eaf8f0] rounded-xl">
                      <Award className="w-3 h-3 sm:w-6 sm:h-6 text-[#1a8b44] mt-0.5 sm:mt-1 shrink-0" />
                      <div>
                        <p className="font-bold text-[#1a8b44] text-[7px] sm:text-sm leading-tight">Interaktif & Menyenangkan</p>
                        <p className="text-gray-500 text-[6px] sm:text-sm mt-0.5 sm:mt-1 leading-tight">Flashcard review, kuis evaluasi, dan progress tracking untuk pengalaman belajar terbaik.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-16">
              {['Energi Terbarukan', 'Pengelolaan Limbah', 'Pertanian Berkelanjutan'].map((cat, catIdx) => (
                <div key={catIdx}>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1a8b44] mb-4 sm:mb-8 flex items-center gap-2 sm:gap-3 px-2 sm:px-0">
                    {cat === 'Energi Terbarukan' && <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a8b44]" />}
                    {cat === 'Pengelolaan Limbah' && <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a8b44]" />}
                    {cat === 'Pertanian Berkelanjutan' && <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a8b44]" />}
                    {cat}
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 px-2 sm:px-0">
                    {courseData.filter(c => c.category === cat).map((course) => (
                      <div key={course.id} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
                        <div className="h-24 sm:h-48 overflow-hidden">
                          <img src={course.img} alt={course.title} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <div className="p-3 sm:p-6 flex flex-col flex-1">
                          <h3 className="font-bold text-gray-900 text-[11px] sm:text-lg mb-1 sm:mb-2 leading-tight">{course.title}</h3>
                          <p className="text-gray-500 text-[8px] sm:text-sm mb-2 sm:mb-4 line-clamp-2 flex-1 leading-tight sm:leading-normal">
                            {course.id === 0 ? "Pelajari fundamental teknologi energi bersih dan aplikasinya di Indonesia." :
                             course.id === 1 ? "Bangun kemampuan leadership untuk memimpin transformasi berkelanjutan." :
                             course.id === 2 ? "Kuasai teknik audit lingkungan sesuai standar ISO 14001." :
                             course.id === 3 ? "Pelajari klasifikasi, daur ulang, dan ekonomi sirkular." :
                             course.id === 4 ? "Pelajari teknik pertanian berkelanjutan dan organic farming." :
                             "Kuasai IoT, sensor, AI, dan teknologi untuk pertanian modern."}
                          </p>
                          <div className="mb-3 sm:mb-6 flex">
                            <span className={cn("text-[7px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full",
                              course.id === 1 ? "bg-amber-100 text-amber-800" : "bg-[#eaf8f0] text-[#1a8b44]"
                            )}>
                              {course.id === 1 ? "Soft Skill" : "Hard Skill"}
                            </span>
                          </div>
                          <button 
                            className="bg-[#1a8b44] hover:bg-green-800 text-white w-full py-1.5 sm:py-2.5 rounded-md sm:rounded-lg text-[9px] sm:text-sm font-bold transition"
                            onClick={() => {
                              setActiveCourseId(course.id);
                              setExpandedModules(new Set());
                              setView('detail');
                              window.scrollTo(0,0);
                            }}
                          >
                            Ikuti Kelas
                          </button>
                        </div>
                      </div>

                    ))}
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      )}

      {view === 'detail' && activeCourse && (
        <div className="py-20 px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => setView('list')} 
              className="mb-8 flex items-center gap-2 text-[#1a8b44] hover:text-green-800 font-medium transition"
            >
              <ArrowLeft className="w-5 h-5" />Kembali ke Kelas
            </button>
            <div className="bg-white rounded-[32px] shadow-sm p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a8b44] mb-2">{activeCourse.title}</h2>
              <p className="text-gray-500 mb-8">{activeCourse.category} • {activeCourse.modules.length} Modul</p>
              
              <div className="mb-10 p-5 bg-[#eaf8f0] rounded-xl flex items-center justify-between">
                <span className="font-semibold text-gray-800 text-sm">Progress</span>
                <div className="w-40 h-3 bg-gray-200/60 rounded-full overflow-hidden">
                  <div className="h-full bg-[#1a8b44] transition-all duration-500 rounded-full" style={{ width: `${courseCompletionPercent}%` }}></div>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {activeCourse.modules.map((m, idx) => {
                  const isExpanded = expandedModules.has(idx);
                  return (
                    <div key={idx} className="border border-green-50/50 rounded-xl overflow-hidden bg-[#eaf8f0]">
                      <button 
                        className="w-full p-5 text-left font-medium text-gray-800 flex items-center justify-between transition hover:bg-green-50" 
                        onClick={() => toggleModule(idx, m.title)}
                      >
                        <span className="flex items-center gap-3 text-sm">
                          {m.title}
                        </span>
                        <ChevronDown className={cn("w-5 h-5 text-gray-500 transition-transform", isExpanded ? "rotate-180" : "rotate-0")} />
                      </button>
                      <div className={cn("p-6 bg-white border-t border-green-50 text-gray-600 text-sm leading-relaxed transition-all", isExpanded ? "block" : "hidden")}>
                        {m.content}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-gray-100 pt-8">
                <button 
                  onClick={() => {
                    setFlashcardIndex(0);
                    setIsFlipped(false);
                    setShowQuizForm(false);
                    setQuizAnswers({});
                    setView('quiz');
                    window.scrollTo(0,0);
                  }} 
                  className="w-full bg-[#1a8b44] hover:bg-green-800 text-white font-bold py-4 px-6 rounded-xl transition flex items-center justify-center gap-3"
                >
                  <ClipboardCheck className="w-5 h-5" /> Kerjakan Kuis Evaluasi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quiz logic follows similar structure update */}
      {view === 'quiz' && activeCourse && (
        <div className="py-20 px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => setView('detail')} 
              className="mb-8 flex items-center gap-2 text-[#1a8b44] hover:text-green-800 font-medium transition"
            >
              <ArrowLeft className="w-5 h-5" />Kembali ke Materi
            </button>
            <div className="bg-white rounded-[32px] shadow-sm p-8 md:p-12 border border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a8b44] mb-8">
                {activeCourse.title}
              </h2>
              
              {!showQuizForm ? (
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                       <RefreshCw className="w-5 h-5 text-yellow-600" />
                       Review Ringkas
                     </h3>
                     <span className="text-sm font-medium text-gray-500">{flashcardIndex + 1} / {activeCourse.modules.length}</span>
                  </div>
                  <div className="flex flex-col items-center gap-6">
                    <div 
                      className="w-full h-64 bg-[#eaf8f0] border border-green-200 rounded-2xl p-8 cursor-pointer flex items-center justify-center text-center transition-all hover:bg-green-50 group shadow-sm" 
                      onClick={() => setIsFlipped(!isFlipped)}
                    >
                      <div className="text-lg text-gray-800 font-medium leading-relaxed transition-colors">
                        {isFlipped ? activeCourse.modules[flashcardIndex].content.split('.')[0] + '.' : activeCourse.modules[flashcardIndex].title}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">Klik kartu untuk membalik</p>
                    <div className="flex gap-4 w-full">
                      <button 
                        onClick={() => { if(flashcardIndex > 0) {setFlashcardIndex(prev=>prev-1); setIsFlipped(false);} }} 
                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 rounded-xl transition"
                      >
                        Sebelumnya
                      </button> 
                      <button 
                        onClick={() => { if(flashcardIndex < activeCourse.modules.length-1) {setFlashcardIndex(prev=>prev+1); setIsFlipped(false);} }} 
                        className="flex-1 bg-[#1a8b44] hover:bg-green-800 text-white font-medium py-3 rounded-xl transition"
                      >
                        Berikutnya
                      </button>
                    </div>
                    <button 
                      onClick={() => setShowQuizForm(true)} 
                      className="w-full bg-[#1a8b44] hover:bg-green-800 text-white font-bold py-4 rounded-xl transition mt-6"
                    >
                      Lanjut ke Kuis
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <ClipboardCheck className="w-6 h-6 text-[#1a8b44]" /> Kuis Evaluasi
                  </h3>
                  <div className="space-y-6">
                    {activeCourse.quiz.map((q, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <p className="font-bold text-gray-900 mb-5">{idx + 1}. {q.question}</p>
                        <div className="space-y-3">
                          {q.options.map((opt, oi) => (
                            <label key={oi} className={cn(
                                "flex items-center p-4 rounded-xl border cursor-pointer transition-colors",
                                quizAnswers[idx] === oi ? "bg-green-50 border-green-500 text-green-900" : "border-gray-200 hover:bg-gray-50 text-gray-700"
                              )}>
                              <input 
                                type="radio" 
                                name={`q${idx}`} 
                                value={oi} 
                                checked={quizAnswers[idx] === oi}
                                onChange={() => setQuizAnswers(prev => ({...prev, [idx]: oi}))}
                                className="w-4 h-4 hidden" 
                              />
                              <div className={cn("w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center", quizAnswers[idx] === oi ? "border-green-600" : "border-gray-300")}>
                                {quizAnswers[idx] === oi && <div className="w-2.5 h-2.5 bg-green-600 rounded-full" />}
                              </div>
                              <span className="font-medium">{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={submitQuiz} 
                    className="mt-10 w-full bg-[#1a8b44] hover:bg-green-800 text-white font-bold py-4 px-6 rounded-xl transition"
                  >
                    Kirim Jawaban
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {view === 'result' && activeCourse && (
        <div className="py-20 px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => setView('detail')} 
              className="mb-8 flex items-center gap-2 text-[#1a8b44] hover:text-green-800 font-medium transition"
            >
              <ArrowLeft className="w-5 h-5" /> Kembali ke Materi
            </button>
            <div className="bg-white rounded-[32px] shadow-sm p-8 md:p-12 border border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a8b44] mb-8 border-b border-gray-100 pb-8">
                {activeCourse.title}
              </h2>
              
              <div className="text-center py-10">
                <div className={cn("text-7xl font-bold mb-4", quizScore.passed ? "text-[#1a8b44]" : "text-[#1a8b44]")}>
                  {quizScore.score}/{quizScore.total}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {quizScore.passed ? '✓ LULUS' : 'X BELUM LULUS'}
                </h4>
                <p className="text-gray-500 mb-10">
                  {quizScore.passed ? 'Selamat! Anda berhak mendapatkan poin.' : 'Minimal 60% benar.'}
                </p>
                
                {quizScore.passed && (
                  <div className="inline-block bg-[#eaf8f0] text-[#1a8b44] font-medium rounded-xl py-2 px-6 mb-8">
                    +200 Poin
                  </div>
                )}
                
                <div className="flex gap-4 justify-center">
                  <button 
                    onClick={() => {
                      setShowQuizForm(true);
                      setQuizAnswers({});
                      setView('quiz');
                    }} 
                    className="px-8 py-3 bg-[#1a8b44] hover:bg-green-800 text-white rounded-lg font-medium transition"
                  >
                    Ulangi
                  </button>
                  <button 
                    onClick={() => setView('detail')} 
                    className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition"
                  >
                    Kembali
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
