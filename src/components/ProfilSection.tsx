import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { profileCompletedAtom, userAvatarAtom, currentPageAtom, userNameAtom, userEducationAtom, userUniversityAtom, userFieldAtom, userLinkedinAtom } from '../data';
import { cn } from '../lib/utils';
import { Linkedin, Mail, School, BookOpen, MapPin, Lock, User, LogOut, ShieldAlert, Eye, EyeOff } from 'lucide-react';
import { auth, googleAuthProvider } from '../lib/firebase';
import { signInWithPopup, signOut as firebaseSignOut, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';

export function ProfilSection() {
  const [profileCompleted, setProfileCompleted] = useAtom(profileCompletedAtom);
  const [name, setName] = useAtom(userNameAtom);
  const [education, setEducation] = useAtom(userEducationAtom);
  const [university, setUniversity] = useAtom(userUniversityAtom);
  const [field, setField] = useAtom(userFieldAtom);
  const [linkedin, setLinkedin] = useAtom(userLinkedinAtom);
  const [, setCurrentPage] = useAtom(currentPageAtom);

  const [user, setUser] = useState<{ email: string; token: string; isFirebase: boolean } | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [authError, setAuthError] = useState('');
  const [loading, setLoading] = useState(true);
  const [usersList, setUsersList] = useState<any[]>([]);
  const [profileError, setProfileError] = useState('');

  const fetchUserData = async (token: string, emailStr: string) => {
    try {
      const resSync = await fetch('/api/auth/sync', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (resSync.ok) {
        const data = await resSync.json();
        if (data.education) {
          setProfileCompleted(true);
          setName(data.name || '');
          setEducation(data.education || '');
          setUniversity(data.university || '');
          setField(data.field || '');
          setLinkedin(data.linkedin || '');
        }
      }

      if (emailStr === 'rifkifadhilatilaqli@gmail.com') {
        const resUsers = await fetch('/api/users', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (resUsers.ok) {
          const udata = await resUsers.json();
          setUsersList(udata);
        }
      }
    } catch (e) {
      console.error("Error fetching user data", e);
    }
  };

  useEffect(() => {
    const checkCustomAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await fetch('/api/profile', {
            headers: { Authorization: `Bearer ${token}` }
          });
          if (res.ok) {
            const data = await res.json();
            setUser({ email: data.email, token, isFirebase: false });
            await fetchUserData(token, data.email);
            setLoading(false);
            return true; // handled by custom auth
          } else {
            localStorage.removeItem('token');
          }
        } catch (e) {
          localStorage.removeItem('token');
        }
      }
      return false;
    };

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      const isCustom = await checkCustomAuth();
      if (!isCustom) {
        if (currentUser && currentUser.email) {
          const token = await currentUser.getIdToken();
          setUser({ email: currentUser.email, token, isFirebase: true });
          await fetchUserData(token, currentUser.email);
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const validateEmail = (emailStr: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(emailStr)) return "Format email tidak valid";
    return "";
  };

  const validatePassword = (pwd: string) => {
    if (pwd.length < 8) return "Password minimal 8 karakter";
    if (!/[A-Z]/.test(pwd)) return "Password harus mengandung minimal satu huruf besar";
    if (!/[a-z]/.test(pwd)) return "Password harus mengandung minimal satu huruf kecil";
    if (!/[0-9]/.test(pwd)) return "Password harus mengandung minimal satu angka";
    return "";
  };

  const handleCustomAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    
    const emailErr = validateEmail(email);
    if (emailErr) {
      setAuthError(emailErr);
      return;
    }

    const pwdError = validatePassword(password);
    if (pwdError && !isLogin) {
      setAuthError(pwdError);
      return;
    }

    try {
      const endpoint = isLogin ? '/api/auth/custom-login' : '/api/auth/custom-register';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Autentikasi gagal');
      }
      localStorage.setItem('token', data.token);
      setUser({ email: data.user.email, token: data.token, isFirebase: false });
      await fetchUserData(data.token, data.user.email);
      setEmail('');
      setPassword('');
    } catch (err: any) {
      setAuthError(err.message || 'Terjadi kesalahan saat otentikasi.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setAuthError('');
      await signInWithPopup(auth, googleAuthProvider);
    } catch (err: any) {
      setAuthError(err.message || 'Terjadi kesalahan saat masuk dengan Google.');
    }
  };

  const handleSignOut = () => {
    if (user?.isFirebase) {
      firebaseSignOut(auth);
    } else {
      localStorage.removeItem('token');
      setUser(null);
    }
    setProfileCompleted(false);
  };

  const validateProfile = () => {
    if (/\d/.test(name)) return "Nama tidak boleh mengandung angka.";
    if (/\d/.test(university)) return "Nama institusi/universitas tidak boleh mengandung angka.";
    if (linkedin && !/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(linkedin)) return "Tautan LinkedIn tidak valid.";
    return "";
  };

  const saveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setProfileError('');
    
    const err = validateProfile();
    if (err) {
      setProfileError(err);
      return;
    }

    try {
      let token = user.token;
      if (user.isFirebase) {
        const currentUser = auth.currentUser;
        if (currentUser) {
          token = await currentUser.getIdToken();
        }
      }

      await fetch('/api/profile', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ name, education, university, field, linkedin })
      });
      setProfileCompleted(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  if (!user) {
    return (
      <section className="page-section active pt-0 min-h-screen relative overflow-hidden bg-slate-50" style={{ marginTop: '64px' }}>
        <div className="py-12 px-6 flex flex-col items-center justify-center min-h-[85vh]">
          <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">{isLogin ? 'Masuk ke' : 'Daftar di'} Pijar Hijau</h2>
            {authError && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4">{authError}</div>}
            
            <form onSubmit={handleCustomAuth} className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="nama@email.com" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 outline-none transition-shadow" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value={password} 
                    onChange={e=>setPassword(e.target.value)} 
                    required 
                    placeholder="Masukkan password"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 outline-none pr-10 transition-shadow" 
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {!isLogin && <p className="text-xs text-slate-500 mt-1">Min 8 karakter, ada huruf besar, kecil & angka.</p>}
              </div>
              <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white py-2.5 rounded-lg font-medium transition shadow-sm">
                {isLogin ? 'Masuk' : 'Daftar'}
              </button>
            </form>

            <div className="relative flex items-center justify-center my-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
              <span className="bg-white px-3 text-xs text-slate-400 relative z-10 uppercase font-medium">atau</span>
            </div>
            
            <button 
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 py-2.5 rounded-lg font-medium transition shadow-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <p className="text-center mt-6 text-sm text-slate-600">
              {isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'} {' '}
              <button onClick={() => {setIsLogin(!isLogin); setAuthError('');}} className="text-green-700 font-medium hover:underline">
                {isLogin ? 'Daftar sekarang' : 'Masuk di sini'}
              </button>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section active pt-0 min-h-screen relative overflow-hidden bg-slate-50" style={{ marginTop: '64px' }}>
      <div className="py-12 px-6 relative z-10 flex flex-col items-center justify-center min-h-[85vh]">
        <div className="max-w-xl w-full">
          
          {!profileCompleted ? (
            <div id="profile-form-panel">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
                <div className="mb-8 text-center flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full border-4 border-green-100 bg-white overflow-hidden shadow-sm flex items-center justify-center mb-6">
                    <img src="/maskot_sihijau.png" alt="Avatar" className="w-full h-full object-cover opacity-80 bg-green-50" />
                  </div>
                </div>

                {profileError && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6">{profileError}</div>}

                <form className="space-y-5" onSubmit={saveProfile}>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">Nama Lengkap</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Masukkan nama lengkap" className="w-full bg-slate-50 px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 text-slate-900 text-sm transition-colors" required />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">Email</label>
                    <input type="email" value={user.email} disabled className="w-full bg-slate-100 px-4 py-3 rounded-lg border border-slate-200 text-slate-500 text-sm cursor-not-allowed" title="Email terikat dengan akun dan tidak dapat diubah" />
                    <p className="text-xs text-slate-400 mt-1">Email terikat dengan akun Anda.</p>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">Pendidikan Terakhir</label>
                    <select value={education} onChange={(e)=>setEducation(e.target.value)} className="w-full bg-slate-50 px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 text-slate-900 text-sm transition-colors appearance-none" required>
                      <option value="" className="text-slate-400">Pilih Pendidikan</option>
                      <option value="sma">SMA/SMK</option>
                      <option value="diploma">Diploma (D3)</option>
                      <option value="sarjana">Sarjana (S1)</option>
                      <option value="master">Master (S2)</option>
                      <option value="doktor">Doktor (S3)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">Institusi / Universitas</label>
                    <input type="text" value={university} onChange={(e)=>setUniversity(e.target.value)} placeholder="Nama universitas/instansi" className="w-full bg-slate-50 px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 text-slate-900 text-sm transition-colors" required />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">Bidang yang Digeluti</label>
                    <select value={field} onChange={(e)=>setField(e.target.value)} className="w-full bg-slate-50 px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 text-slate-900 text-sm transition-colors appearance-none" required>
                      <option value="" className="text-slate-400">Pilih Bidang</option>
                      <option value="energi">Energi Terbarukan</option>
                      <option value="limbah">Pengelolaan Limbah</option>
                      <option value="pertanian">Pertanian Berkelanjutan</option>
                      <option value="teknologi">Teknologi Hijau</option>
                      <option value="keuangan">Keuangan & Investasi</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">Tautan LinkedIn</label>
                    <input type="url" value={linkedin} onChange={(e)=>setLinkedin(e.target.value)} placeholder="https://linkedin.com/in/namaanda" className="w-full bg-slate-50 px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 text-slate-900 text-sm transition-colors" />
                  </div>

                  <button type="submit" className="bg-[#1a8241] border border-[#1a8241] hover:bg-green-800 text-white w-full py-3.5 rounded-lg font-bold text-sm transition shadow-sm mt-6">
                    Simpan Profil
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center bg-white rounded-2xl p-10 border border-slate-200 shadow-sm relative">
                <button onClick={handleSignOut} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 p-2" title="Keluar">
                  <LogOut className="w-5 h-5" />
                </button>
                <div className="inline-flex justify-center w-full mb-6 relative">
                  <div className="w-28 h-28 rounded-full border-4 border-green-200 bg-green-50 overflow-hidden shadow-sm flex items-center justify-center">
                    <img src="/maskot_sihijau.png" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                </div>
                <h2 className="font-bold text-2xl text-slate-900">{name || 'Pengguna Pijar Hijau'}</h2>
                <p className="mt-1 text-green-700 font-medium text-sm capitalize">{field ? field.replace('-', ' ') : 'Penggiat Industri Hijau'}</p>
                <p className="text-sm text-slate-500 mb-6">{user.email}</p>
                
                <button 
                  onClick={() => setProfileCompleted(false)}
                  className="bg-green-100 text-green-700 hover:bg-green-200 px-6 py-2 rounded-lg font-medium text-sm transition-colors"
                >
                  Edit Profil
                </button>
                
                <div className="mt-8 space-y-4 text-left max-w-sm mx-auto p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3 text-slate-600">
                    <School className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-xs text-slate-400">Pendidikan</p>
                      <p className="font-medium text-slate-800 capitalize truncate">{education || '-'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <BookOpen className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-xs text-slate-400">Universitas/Institusi</p>
                      <p className="font-medium text-slate-800 truncate">{university || '-'}</p>
                    </div>
                  </div>
                  {linkedin && (
                    <div className="flex items-center gap-3 text-slate-600">
                      <Linkedin className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-xs text-slate-400">LinkedIn</p>
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-green-600 hover:text-green-800 underline truncate block max-w-[200px]">
                          Profil LinkedIn
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {user.email === 'rifkifadhilatilaqli@gmail.com' && (
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldAlert className="text-amber-500 w-5 h-5" />
                    <h3 className="font-bold text-slate-800">Super Admin Dashboard</h3>
                  </div>
                  <div className="space-y-3">
                    {usersList.map((u, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <div>
                          <p className="font-medium text-sm text-slate-800">{u.name || 'User'}</p>
                          <p className="text-xs text-slate-500">{u.email}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded">Storage: {(Math.random() * 5 + 1).toFixed(2)} MB</p>
                        </div>
                      </div>
                    ))}
                    {usersList.length === 0 && <p className="text-sm text-slate-500 text-center py-4">Belum ada pengguna lain terdaftar.</p>}
                  </div>
                </div>
              )}
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
}
