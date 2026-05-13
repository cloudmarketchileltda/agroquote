'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  AtSign, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Info, 
  Zap 
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simular login estableciendo cookie
    document.cookie = "agroquote-session=true; path=/";
    setTimeout(() => {
      router.push('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 scale-105"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1594980519108-dbcc56c82664?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3) blur(2px)'
        }}
      />
      <div className="absolute inset-0 bg-[#003920]/40 z-[1] mix-blend-multiply" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-[480px] bg-white rounded-[16px] p-8 md:p-10 shadow-2xl animate-in fade-in zoom-in duration-500">
        <div className="flex flex-col items-center mb-6">
          {/* Logo - Robotic Arm */}
          <div className="w-14 h-14 bg-[#003920] rounded-xl flex items-center justify-center shadow-lg mb-4 border border-white/10">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 7h-9" />
              <path d="M14 17H5" />
              <circle cx="17" cy="17" r="2" />
              <circle cx="7" cy="7" r="2" />
              <path d="M7 9v6" />
              <path d="M17 15V9" />
              <path d="M11 7l3 10" />
            </svg>
          </div>
          <h1 className="text-3xl font-black text-[#003920] tracking-tighter text-center">AgroQuote Pro</h1>
          <p className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.25em] mt-2 text-center font-bold">
            Francisco Valenzuela Industrial Solutions
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.15em] ml-1 font-mono">
              Correo Electrónico
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-base">@</div>
              <input
                type="email"
                placeholder="nombre@empresa.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 pl-11 pr-4 text-xs font-medium outline-none focus:ring-2 focus:ring-primary/5 focus:border-primary transition-all font-mono"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between ml-1">
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.15em] font-mono">
                Contraseña
              </label>
              <button type="button" className="text-[9px] font-bold text-[#003920] hover:underline uppercase tracking-tight font-mono">
                ¿Olvidó su contraseña?
              </button>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 pl-11 pr-11 text-xs font-medium outline-none focus:ring-2 focus:ring-primary/5 focus:border-primary transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 ml-1">
            <input type="checkbox" id="remember" className="rounded border-slate-300 text-primary focus:ring-primary w-3.5 h-3.5" />
            <label htmlFor="remember" className="text-[10px] font-medium text-slate-500 font-mono">Mantener sesión iniciada</label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#003920] text-white py-4 rounded-lg font-black text-base shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100 mt-2"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-3 border-white/20 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span className="font-mono uppercase tracking-widest text-xs">Iniciar sesión</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
          {/* Demo Credentials Box */}
          <div className="bg-slate-50 rounded-xl p-4 flex flex-col gap-2 border border-slate-200/60">
            <div className="flex items-center gap-2 text-[#003920]">
              <Info className="w-3.5 h-3.5" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] font-mono">Credenciales Demo</span>
            </div>
            <div className="grid grid-cols-2 text-[10px] font-mono gap-y-1">
              <div className="text-slate-500">Usuario:</div>
              <div className="text-[#003920] font-black text-right">demo@fv.cl</div>
              <div className="text-slate-500">Password:</div>
              <div className="text-[#003920] font-black text-right">demo123</div>
            </div>
          </div>

          <p className="text-center text-[9px] font-bold text-slate-400 uppercase tracking-tight font-mono">
            ¿Ayuda técnica? <button className="text-slate-900 hover:underline font-black">Soporte FV</button>
          </p>
        </div>
      </div>

      {/* Footer outside card */}
      <div className="absolute bottom-6 left-0 right-0 px-10 flex flex-col md:flex-row items-center justify-between gap-4 z-10">
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Industrial CPQ v2.4</span>
        <div className="flex items-center gap-6 text-[10px] font-mono text-white/40 uppercase tracking-widest">
          <button className="hover:text-white transition-colors">Privacidad</button>
          <button className="hover:text-white transition-colors">Términos</button>
        </div>
      </div>
    </div>
  );
}
