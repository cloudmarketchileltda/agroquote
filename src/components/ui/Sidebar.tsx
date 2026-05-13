'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Package, 
  Settings, 
  BarChart3, 
  ChevronRight,
  Zap,
  Briefcase,
  Layers,
  LogOut,
  Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Cotizaciones', href: '/quotes', icon: FileText },
  { name: 'Clientes', href: '/clients', icon: Users },
  { name: 'Proyectos', href: '/projects', icon: Zap },
  { name: 'Catálogo', href: '/inventory', icon: Package },
  { name: 'Reportes', href: '/reports', icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-primary flex flex-col h-screen sticky top-0 z-20 shadow-2xl relative overflow-hidden shrink-0">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-success/5 rounded-full blur-[100px] -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -ml-32 -mb-32" />

      {/* Logo Section */}
      <div className="p-8 relative z-10">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-success rounded-2xl flex items-center justify-center shadow-lg shadow-success/20 group-hover:rotate-6 transition-transform duration-300">
            <Zap className="text-primary w-7 h-7 fill-current" />
          </div>
          <div>
            <h1 className="font-black text-white text-xl tracking-tight leading-none">AgroQuote</h1>
            <p className="text-[10px] font-mono text-success font-bold tracking-[0.2em] uppercase mt-1 opacity-80 italic">Industrial Tech</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-1.5 relative z-10 overflow-y-auto custom-scrollbar">
        <p className="px-4 text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4 mt-2">Menú Principal</p>
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 group relative",
                isActive 
                  ? "bg-white/10 text-white shadow-lg border border-white/5" 
                  : "text-white/50 hover:bg-white/5 hover:text-white"
              )}
            >
              <div className="flex items-center gap-4">
                <item.icon className={cn("w-5 h-5 transition-all duration-300", isActive ? "text-success scale-110" : "text-white/30 group-hover:text-white")} />
                <span className={cn("font-bold text-sm tracking-wide", isActive ? "text-white" : "text-white/60 group-hover:text-white")}>
                  {item.name}
                </span>
              </div>
              {isActive && (
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-success shadow-[0_0_12px_#84CC16]" />
                </div>
              )}
            </Link>
          );
        })}

        <div className="pt-8 px-4">
          <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">Acciones Rápidas</p>
          <Link 
            href="/quotes/new"
            className="flex items-center gap-4 px-4 py-4 bg-success text-primary rounded-2xl transition-all shadow-lg shadow-success/20 hover:scale-[1.02] active:scale-95 group border border-success/50"
          >
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
              <Plus className="w-5 h-5 text-primary" />
            </div>
            <span className="font-black text-sm tracking-tight uppercase">Nueva Cotización</span>
          </Link>
        </div>

        <div className="pt-8 px-4">
          <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">Soporte y Sistema</p>
          <div className="space-y-1.5">
            <Link 
              href="/settings"
              className={cn(
                "flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all text-white/50 hover:bg-white/5 hover:text-white",
                pathname === '/settings' && "bg-white/10 text-white"
              )}
            >
              <Settings className="w-5 h-5 text-white/30" />
              <span className="font-bold text-sm tracking-wide">Configuración</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Footer / User Profile */}
      <div className="p-4 relative z-10">
        <div className="bg-white/5 backdrop-blur-md rounded-[24px] p-4 border border-white/10 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-primary font-black text-sm shadow-xl">
              FV
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-white truncate">F. Valenzuela</p>
              <p className="text-[10px] text-success font-mono uppercase tracking-tighter truncate font-bold">Admin Enterprise</p>
            </div>
          </div>
          <button 
            onClick={() => {
              document.cookie = "agroquote-session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
              window.location.href = '/login';
            }}
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-rose-500/10 text-rose-400 rounded-xl text-xs font-bold hover:bg-rose-500/20 transition-all border border-rose-500/20"
          >
            <LogOut className="w-4 h-4" />
            Cerrar Sesión
          </button>
        </div>
      </div>
    </aside>
  );
}
