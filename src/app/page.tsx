'use client';

import React from 'react';
import { Shell } from '@/components/ui/Shell';
import { 
  FileText, 
  DollarSign, 
  Zap, 
  Users, 
  TrendingUp,
  ChevronRight,
  MoreHorizontal,
  Plus,
  Play,
  CheckCircle2,
  RotateCcw
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const StatCard = ({ label, value, change, changeLabel, icon: Icon, trend }: any) => (
  <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
    <div className="flex justify-between items-start mb-6">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
          <Icon className="w-3.5 h-3.5 text-slate-300" />
        </div>
        <h3 className="text-3xl font-black text-slate-900 tracking-tight">{value}</h3>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className={cn(
        "text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter",
        trend === 'up' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
      )}>
        {change}
      </span>
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{changeLabel}</span>
    </div>
  </div>
);

const PipelineItem = ({ label, value, progress }: any) => (
  <div className="space-y-2">
    <div className="flex justify-between items-end">
      <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">{label}</span>
      <span className="text-xs font-black text-slate-900">{value}</span>
    </div>
    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
      <div 
        className="h-full bg-slate-900 rounded-full transition-all duration-1000"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

const ActivityItem = ({ icon: Icon, title, description, time, iconColor, iconBg }: any) => (
  <div className="flex gap-4 relative group">
    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-white shadow-sm z-10", iconBg, iconColor)}>
      <Icon className="w-4 h-4" />
    </div>
    <div className="pb-6 last:pb-0 flex-1 min-w-0">
      <div className="text-sm text-slate-600 leading-snug whitespace-normal break-words">
        {title.split(' ').map((word: string, i: number) => {
          const isHighlight = word.startsWith('Q-') || word === 'Europrogress' || word === 'Agroviveros' || word === '2034';
          return (
            <span key={i} className={cn(
              "mr-1",
              isHighlight ? "font-black text-slate-900" : ""
            )}>
              {word}
            </span>
          );
        })}
      </div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-1">{time}</p>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <Shell>
      <div className="space-y-8 animate-in fade-in duration-1000">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <StatCard label="Cotizaciones Mes" value="142" change="+12%" changeLabel="vs mes anterior" icon={FileText} trend="up" />
          <StatCard label="Ventas Proyectadas" value="$2.4M" change="+5.4%" changeLabel="forecast Q3" icon={DollarSign} trend="up" />
          <StatCard label="Proyectos Activos" value="28" change="8" changeLabel="en fase final" icon={Zap} trend="up" />
          <StatCard label="Clientes Nuevos" value="14" change="+3" changeLabel="este mes" icon={Users} trend="up" />
          <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-slate-400">Conversión</span>
                  <TrendingUp className="w-3.5 h-3.5 text-slate-300" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">34%</h3>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Objetivo: 40%</span>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-8 bg-white rounded-[40px] border border-slate-200 p-10 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Ventas por Categoría</h2>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#003920]" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Riego</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E2F37C]" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Invernaderos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#A8C4B8]" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Automatización</span>
                </div>
              </div>
            </div>
            
            <div className="h-[300px] w-full relative">
              <div className="absolute inset-0 flex items-end justify-between px-4">
                {['ENE', 'FEB', 'MAR', 'ABR', 'MAY'].map((month, i) => (
                  <div key={month} className="flex flex-col items-center gap-6 w-full group">
                    <div className="flex items-end gap-1.5 h-48 w-full justify-center">
                       <div className="w-3.5 bg-[#003920] rounded-t-lg transition-all duration-500 hover:brightness-125" style={{ height: `${[60, 75, 45, 85, 70][i]}%` }} />
                       <div className="w-3.5 bg-[#E2F37C] rounded-t-lg transition-all duration-500 hover:brightness-110" style={{ height: `${[45, 40, 65, 55, 80][i]}%` }} />
                       <div className="w-3.5 bg-[#A8C4B8] rounded-t-lg transition-all duration-500 hover:brightness-110" style={{ height: `${[35, 42, 25, 48, 40][i]}%` }} />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 tracking-widest">{month}</span>
                  </div>
                ))}
              </div>
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-12">
                <div className="border-b border-slate-50 w-full" />
                <div className="border-b border-slate-50 w-full" />
                <div className="border-b border-slate-50 w-full" />
                <div className="border-b border-slate-100 w-full" />
              </div>
            </div>
          </div>

          {/* Pipeline */}
          <div className="lg:col-span-4 bg-white rounded-[40px] border border-slate-200 p-10 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase mb-10">Pipeline Comercial</h2>
            <div className="space-y-8">
              <PipelineItem label="Prospección" value="$840k" progress={75} />
              <PipelineItem label="Propuesta Enviada" value="$1.2M" progress={45} />
              <PipelineItem label="Negociación" value="$420k" progress={25} />
              <PipelineItem label="Cierre" value="$150k" progress={10} />
            </div>
          </div>
        </div>

        {/* Recent Activity & Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Activity */}
          <div className="lg:col-span-5 bg-white rounded-[40px] border border-slate-200 p-8 shadow-sm relative overflow-hidden">
             <div className="flex items-center justify-between mb-10">
               <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Actividad Reciente</h2>
               <button className="text-[11px] font-black text-slate-400 hover:text-primary transition-colors uppercase tracking-widest">Ver todo</button>
             </div>
             
             <div className="relative pl-0">
                <div className="absolute left-[19px] top-4 bottom-4 w-px bg-slate-100" />
                <div className="space-y-2">
                  <ActivityItem 
                    icon={Play} 
                    title="Cotización Q-2034 enviada a Frutales del Valle S.A." 
                    time="Hace 15 minutos • Por Carlos M." 
                    iconColor="text-white"
                    iconBg="bg-[#D4E956]"
                  />
                  <ActivityItem 
                    icon={CheckCircle2} 
                    title="Proyecto Europrogress aprobado para instalación en etapa 2." 
                    time="Hace 2 horas • Por Gerencia" 
                    iconColor="text-[#003920]"
                    iconBg="bg-white"
                  />
                  <ActivityItem 
                    icon={RotateCcw} 
                    title="Cliente Agroviveros SPA respondió a la propuesta comercial." 
                    time="Hace 4 horas • Inbox" 
                    iconColor="text-[#A8C4B8]"
                    iconBg="bg-white"
                  />
                </div>
             </div>
          </div>

          {/* Projects Table */}
          <div className="lg:col-span-7 bg-white rounded-[40px] border border-slate-200 p-10 shadow-sm relative">
             <div className="flex items-center justify-between mb-10">
               <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Proyectos en Curso</h2>
               <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
                 <MoreHorizontal className="w-6 h-6" />
               </button>
             </div>
             
             <div className="overflow-x-auto">
               <table className="w-full">
                 <thead>
                   <tr className="text-left border-b border-slate-100">
                     <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Proyecto</th>
                     <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Cliente</th>
                     <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Estado</th>
                     <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Total</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                   {[
                     { name: 'Smart Irrigation 4.0', client: 'Hacienda Real', status: 'Activo', total: '$124,500', sColor: 'bg-[#D4E956]/10 text-[#003920]' },
                     { name: 'Climate Control Pro', client: 'AgroExport Chile', status: 'Pendiente', total: '$89,200', sColor: 'bg-[#E2F37C]/40 text-slate-700' },
                     { name: 'Hydro-Modular Gen 2', client: 'Verde Vertical', status: 'Firma', total: '$210,000', sColor: 'bg-[#A8C4B8]/10 text-[#003920]' },
                   ].map((p, i) => (
                     <tr key={i} className="group hover:bg-slate-50/50 transition-colors cursor-pointer">
                       <td className="py-5">
                          <p className="text-xs font-black text-slate-900 group-hover:text-primary transition-colors">{p.name}</p>
                       </td>
                       <td className="py-5">
                          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-tighter">{p.client}</p>
                       </td>
                       <td className="py-5">
                          <span className={cn("inline-flex px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/50 shadow-sm", p.sColor)}>
                            {p.status}
                          </span>
                       </td>
                       <td className="py-5 text-right">
                          <p className="text-xs font-black text-slate-900">{p.total}</p>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>

             {/* Floating FAB */}
             <button className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#003920] text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-950/40 hover:scale-110 transition-all group z-20">
                <Plus className="w-8 h-8 group-hover:rotate-90 transition-transform duration-500" />
             </button>
          </div>
        </div>
      </div>
    </Shell>
  );
}
