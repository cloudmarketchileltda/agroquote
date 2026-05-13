'use client';

import React from 'react';
import { Shell } from '@/components/ui/Shell';
import { 
  Settings, 
  Users, 
  Globe, 
  Database, 
  Mail, 
  Package, 
  ChevronRight, 
  Upload, 
  Palette, 
  FileText,
  UserPlus,
  Pencil,
  Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ConfigCard = ({ title, icon: Icon, children, className }: any) => (
  <div className={cn("bg-white rounded-[40px] border border-slate-200 p-10 shadow-sm overflow-hidden", className)}>
    <div className="flex items-center gap-4 mb-10">
      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-400">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">{title}</h3>
    </div>
    {children}
  </div>
);

const UserRow = ({ name, role, photo }: any) => (
  <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-2xl transition-all group">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 shadow-sm">
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="text-xs font-black text-slate-900 leading-none mb-1">{name}</p>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{role}</p>
      </div>
    </div>
    <button className="p-2 text-slate-300 hover:text-primary transition-colors">
      <Pencil className="w-3.5 h-3.5" />
    </button>
  </div>
);

const IntegrationTile = ({ name, status, statusColor, icon: Icon, buttonText }: any) => (
  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-primary/20 transition-all group">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-black text-slate-900">{name}</p>
          <div className="flex items-center gap-1.5 mt-0.5">
             <div className={cn("w-1.5 h-1.5 rounded-full", statusColor)} />
             <p className={cn("text-[9px] font-black uppercase tracking-widest", statusColor.replace('bg-', 'text-'))}>{status}</p>
          </div>
        </div>
      </div>
      {buttonText && (
        <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[9px] font-black text-slate-600 hover:bg-slate-50 transition-all uppercase tracking-tighter shadow-sm">
          {buttonText}
        </button>
      )}
    </div>
  </div>
);

export default function SettingsPage() {
  return (
    <Shell>
      <div className="space-y-8 animate-in fade-in duration-700 pb-24">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Configuración del Sistema</h1>
          <p className="text-slate-500 mt-2 font-medium">Administra los parámetros técnicos, usuarios y la identidad visual de tu plataforma CPQ.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1 */}
          <div className="lg:col-span-8 space-y-8">
            <ConfigCard title="General & Finanzas" icon={Globe}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Moneda Base</label>
                  <select className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-primary/10 transition-all appearance-none cursor-pointer">
                    <option>CLP - Peso Chileno</option>
                    <option>USD - Dólar Estadounidense</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Impuesto Predeterminado (IVA)</label>
                  <div className="relative">
                    <input type="text" defaultValue="19" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-primary/10 transition-all" />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">%</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 border-dashed relative overflow-hidden group">
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div>
                    <h4 className="text-sm font-black text-slate-900">Tasa de Cambio Manual</h4>
                    <p className="text-[10px] text-slate-500 mt-1 font-medium">Ajuste técnico para cotizaciones internacionales.</p>
                  </div>
                  <span className="text-[9px] font-black bg-emerald-500/10 text-emerald-600 px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-500/10">ACTUALIZADO HACE 2H</span>
                </div>
                
                <div className="flex items-center gap-6 relative z-10">
                  <div className="flex-1 flex items-center gap-4">
                    <div className="bg-white px-6 py-4 rounded-2xl border border-slate-200 flex items-center gap-4 shadow-sm group-focus-within:border-primary transition-all">
                       <span className="text-xl font-black text-slate-900">1</span>
                       <span className="text-xs font-black text-slate-400 uppercase">USD</span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all cursor-pointer shadow-sm">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div className="bg-white px-6 py-4 rounded-2xl border border-slate-200 flex items-center gap-4 flex-1 shadow-sm group-focus-within:border-primary transition-all">
                       <span className="text-xl font-black text-slate-900">942.50</span>
                       <span className="text-xs font-black text-slate-400 uppercase">CLP</span>
                    </div>
                  </div>
                  <button className="bg-[#003920] text-white px-8 py-4 rounded-2xl text-xs font-black hover:bg-emerald-950 transition-all shadow-lg shadow-emerald-950/20 active:scale-95">
                    Guardar Tasa
                  </button>
                </div>
              </div>
            </ConfigCard>

            <ConfigCard title="Identidad & PDF" icon={Palette}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div className="space-y-4">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Logotipo Empresarial</label>
                   <div className="h-40 border-2 border-dashed border-slate-200 rounded-[32px] flex flex-col items-center justify-center gap-3 bg-slate-50/50 hover:bg-white hover:border-primary transition-all cursor-pointer group">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                        <Upload className="w-6 h-6" />
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-black text-slate-900">Arrastra tu logo (PNG, SVG)</p>
                        <p className="text-[9px] text-slate-400 font-bold mt-1 leading-relaxed">Máx 2MB. Recomendado fondo<br/>transparente.</p>
                      </div>
                   </div>
                </div>
                <div className="space-y-6">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Paleta de Colores PDF</label>
                   <div className="space-y-4">
                     <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <span className="text-xs font-bold text-slate-600">Color Primario</span>
                        <div className="flex items-center gap-3">
                           <span className="text-xs font-black text-slate-900">#003920</span>
                           <div className="w-8 h-8 rounded-lg bg-[#003920] border border-white shadow-sm" />
                        </div>
                     </div>
                     <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <span className="text-xs font-bold text-slate-600">Color Secundario</span>
                        <div className="flex items-center gap-3">
                           <span className="text-xs font-black text-slate-900">#84CC16</span>
                           <div className="w-8 h-8 rounded-lg bg-[#84CC16] border border-white shadow-sm" />
                        </div>
                     </div>
                   </div>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block mb-6">Plantillas de Cotización</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                   {[
                     { name: 'Industrial Pro', active: true },
                     { name: 'Minimal Technical', active: false },
                     { name: 'Agro Modern', active: false },
                   ].map((t, i) => (
                     <div key={i} className={cn(
                       "relative rounded-[28px] border-2 overflow-hidden cursor-pointer group transition-all p-2",
                       t.active ? "border-[#003920] bg-[#003920]/5 shadow-lg" : "border-slate-100 hover:border-slate-200 bg-slate-50"
                     )}>
                        <div className="aspect-[4/5] bg-white rounded-2xl shadow-sm border border-slate-100 p-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                           <div className="space-y-2 mb-4">
                              <div className="h-2 w-1/2 bg-slate-100 rounded-full" />
                              <div className="h-2 w-1/3 bg-slate-50 rounded-full" />
                           </div>
                           <div className="h-20 bg-slate-50 rounded-xl mb-4" />
                           <div className="space-y-1 mb-8">
                              <div className="h-1.5 w-full bg-slate-50 rounded-full" />
                              <div className="h-1.5 w-full bg-slate-50 rounded-full" />
                              <div className="h-1.5 w-full bg-slate-50 rounded-full" />
                           </div>
                           <div className="h-8 w-1/2 bg-slate-200 rounded-lg absolute bottom-4 left-4" />
                           {t.active && (
                             <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center border-2 border-white shadow-sm">
                                <FileText className="w-3 h-3 text-white" />
                             </div>
                           )}
                        </div>
                        <p className={cn("text-center py-4 text-[10px] font-black uppercase tracking-widest", t.active ? "text-[#003920]" : "text-slate-400")}>
                          {t.name}
                        </p>
                     </div>
                   ))}
                </div>
              </div>
            </ConfigCard>
          </div>

          {/* Column 2 */}
          <div className="lg:col-span-4 space-y-8">
            <ConfigCard title="Usuarios" icon={Users} className="p-8">
              <div className="flex items-center justify-between mb-8">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Colaboradores Activos</p>
                <button className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary transition-colors border border-slate-100">
                  <UserPlus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2 mb-8">
                <UserRow name="Carlos Mendoza" role="Administrador" photo="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" />
                <UserRow name="Lucia Valenzuela" role="Vendedor Senior" photo="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" />
                <UserRow name="Roberto Díaz" role="Vendedor Junior" photo="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" />
              </div>
              <button className="w-full py-4 bg-white border border-slate-200 rounded-2xl text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
                Ver todos los roles
              </button>
            </ConfigCard>

            <ConfigCard title="Integraciones" icon={Database} className="p-8">
              <div className="space-y-4">
                <IntegrationTile name="Supabase DB" status="CONECTADO" statusColor="bg-emerald-500" icon={Database} />
                <IntegrationTile name="SendGrid API" status="DESCONECTADO" statusColor="bg-slate-300" icon={Mail} buttonText="CONECTAR" />
                <IntegrationTile name="SAP Business One" status="NO CONFIGURADO" statusColor="bg-slate-200" icon={Package} />
              </div>
            </ConfigCard>

            <div className="bg-emerald-50 rounded-[40px] p-8 border border-emerald-100 flex flex-col items-center text-center group overflow-hidden relative">
               <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform relative z-10 border border-emerald-100">
                  <Package className="w-8 h-8" />
               </div>
               <div className="relative z-10">
                 <h4 className="text-lg font-black text-emerald-900 tracking-tight">Ecosistema Industrial</h4>
                 <p className="text-xs text-emerald-700/70 mt-2 font-medium leading-relaxed">
                   Conecta tus procesos de venta con ERPs y bases de datos personalizadas.
                 </p>
               </div>
               <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-emerald-100 rounded-full blur-[60px]" />
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="fixed bottom-8 left-[300px] right-8 z-50 bg-white/80 backdrop-blur-xl border border-white/50 rounded-[32px] p-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.1)] px-8 animate-in slide-in-from-bottom-8 duration-700">
          <button className="text-xs font-black text-slate-400 hover:text-slate-600 uppercase tracking-widest transition-colors">
            Cancelar Cambios
          </button>
          <div className="flex items-center gap-4">
            <button className="bg-[#003920] text-white px-10 py-4 rounded-2xl font-black text-xs hover:bg-emerald-950 transition-all shadow-xl shadow-emerald-950/20 hover:scale-[1.02] active:scale-[0.98]">
              Guardar Configuración Global
            </button>
          </div>
        </div>
      </div>
    </Shell>
  );
}
