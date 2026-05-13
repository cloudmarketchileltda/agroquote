import React from 'react';
import { Sidebar } from './Sidebar';
import { Bell, Search, Moon, HelpCircle, ChevronDown } from 'lucide-react';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Modern Header */}
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between z-10">
          <div className="flex items-center gap-6 flex-1">
            <div className="relative w-full max-w-md group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Buscar clientes, ruts o contactos..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-2.5 pl-11 pr-4 text-sm focus:bg-white focus:ring-2 focus:ring-primary/5 focus:border-primary transition-all outline-none"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-50 rounded-xl transition-colors relative group">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-50 rounded-xl transition-colors">
              <Moon className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-50 rounded-xl transition-colors">
              <HelpCircle className="w-5 h-5" />
            </button>
            
            <div className="w-px h-8 bg-slate-200 mx-2" />
            
            <button className="flex items-center gap-3 p-1.5 hover:bg-slate-50 rounded-2xl transition-all group border border-transparent hover:border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black text-slate-900 leading-none">Agrónomo Senior</p>
                <p className="text-[10px] text-slate-400 mt-1 font-bold uppercase tracking-tighter">Zona Sur</p>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-slate-100 overflow-hidden shadow-sm group-hover:scale-105 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" 
                  alt="User profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth">
          <div className="p-8">
            <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
