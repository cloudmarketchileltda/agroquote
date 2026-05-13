'use client';

import React from 'react';
import { Shell } from '@/components/ui/Shell';
import { 
  Download, 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  Calendar,
  Users,
  MapPin,
  MoreHorizontal,
  ArrowUpRight,
  Target
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ChartCard = ({ title, subtitle, children, className }: any) => (
  <div className={cn("bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm flex flex-col", className)}>
    <div className="flex items-center justify-between mb-8">
      <div>
        <h3 className="text-xl font-black text-slate-900 tracking-tight">{title}</h3>
        {subtitle && <p className="text-xs text-slate-500 font-medium mt-1">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#003920]" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ACTUAL</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">OBJETIVO</span>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-1">
      {children}
    </div>
  </div>
);

const ProgressBar = ({ label, value, count, color = "bg-[#003920]" }: any) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <span className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{label}</span>
      <span className="text-[11px] font-black text-slate-400">{count} Cot.</span>
    </div>
    <div className="h-2.5 bg-slate-50 rounded-full overflow-hidden p-0.5 border border-slate-100">
      <div className={cn("h-full rounded-full transition-all duration-1000", color)} style={{ width: `${value}%` }} />
    </div>
  </div>
);

const StatusBadge = ({ status }: { status: string }) => {
  const configs: any = {
    'SUPERÓ META': { bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'border-emerald-500/20' },
    'EN OBJETIVO': { bg: 'bg-lime-500/10', text: 'text-lime-600', border: 'border-lime-500/20' },
    'EN RIESGO': { bg: 'bg-rose-500/10', text: 'text-rose-600', border: 'border-rose-500/20' }
  };
  const config = configs[status];
  return (
    <span className={cn("px-4 py-1.5 rounded-full text-[10px] font-black border tracking-wider", config.bg, config.text, config.border)}>
      {status}
    </span>
  );
};

export default function ReportsPage() {
  return (
    <Shell>
      <div className="space-y-8 animate-in fade-in duration-700">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Reportes Comerciales</h1>
          <div className="flex items-center gap-3">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Buscar reportes..."
                className="pl-9 pr-4 py-2 bg-slate-100/50 border-none rounded-xl text-xs font-bold focus:ring-2 focus:ring-primary/10 outline-none w-64"
              />
            </div>
          </div>
        </div>

        {/* Global Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Rango de Fecha</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-700 appearance-none outline-none focus:ring-2 focus:ring-primary/10">
                <option>Últimos 30 días</option>
                <option>Último Trimestre</option>
                <option>Año Actual</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Vendedor</label>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-700 appearance-none outline-none focus:ring-2 focus:ring-primary/10">
                <option>Todos los vendedores</option>
                <option>Carlos Mendoza</option>
                <option>Elena Rivas</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Zona Geográfica</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-700 appearance-none outline-none focus:ring-2 focus:ring-primary/10">
                <option>Todas las regiones</option>
                <option>Norte</option>
                <option>Maule</option>
              </select>
            </div>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-[#003920] text-white px-6 py-3.5 rounded-2xl text-xs font-black flex items-center justify-center gap-2 hover:bg-emerald-950 transition-all shadow-lg shadow-emerald-950/20">
              <Download className="w-4 h-4" />
              EXPORTAR RESUMEN
            </button>
          </div>
        </div>

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <ChartCard 
            title="Rendimiento de Ventas Mensual" 
            subtitle="Cifras expresadas en USD (Millones)"
            className="lg:col-span-9"
          >
            <div className="h-64 flex items-end justify-between px-4 pb-4 pt-12 relative">
              {[30, 45, 60, 55, 80, 95].map((h, i) => (
                <div key={i} className="flex flex-col items-center gap-4 flex-1 group">
                  <div className="w-full max-w-[40px] bg-slate-50 border border-slate-100 rounded-xl relative h-full flex flex-col justify-end overflow-hidden shadow-sm">
                    <div 
                      className="w-full bg-slate-200 transition-all duration-700" 
                      style={{ height: `${h-10}%` }}
                    />
                    <div 
                      className="w-full bg-[#003920] transition-all duration-700 relative z-10" 
                      style={{ height: `${h}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN'][i]}</span>
                </div>
              ))}
              {/* Reference Lines */}
              <div className="absolute left-0 right-0 top-1/2 border-t border-slate-100 border-dashed -z-10" />
            </div>
          </ChartCard>

          <ChartCard title="Tasa de Conversión" className="lg:col-span-3">
            <div className="flex flex-col items-center justify-center py-4">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-50" />
                  <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-lime-500" strokeDasharray="440" strokeDashoffset="140" />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-4xl font-black text-slate-900">68%</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ÉXITO</span>
                </div>
              </div>
              <div className="w-full space-y-3 mt-8">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-tight">Cotizaciones Totales</span>
                  <span className="text-sm font-black text-slate-900">1,248</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-tight">Proyectos Cerrados</span>
                  <span className="text-sm font-black text-slate-900">849</span>
                </div>
              </div>
            </div>
          </ChartCard>
        </div>

        {/* Secondary Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChartCard title="Top 5 Productos Más Cotizados">
            <div className="space-y-6">
              <ProgressBar label="Sembradora Precision 5000" value={95} count="428" />
              <ProgressBar label="Tractor Industrial X-Series" value={85} count="385" />
              <ProgressBar label="Sistema de Riego SmartPivot" value={70} count="312" />
              <ProgressBar label="Dron Topógrafo V3" value={55} count="245" />
              <ProgressBar label="Fungicida Industrial Pack" value={45} count="198" />
            </div>
          </ChartCard>

          <ChartCard title="Comparativa por Categoría">
            <div className="flex items-center gap-12 h-full">
              <div className="flex-1 space-y-6">
                {[
                  { label: 'MAQUINARIA', value: '45%', color: 'bg-[#003920]' },
                  { label: 'TECNOLOGÍA', value: '30%', color: 'bg-lime-500' },
                  { label: 'INSUMOS', value: '25%', color: 'bg-slate-400' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={cn("w-4 h-4 rounded-md", item.color)} />
                    <div className="flex-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                      <p className="text-lg font-black text-slate-900 leading-none">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative w-48 h-48 flex items-center justify-center">
                <svg className="w-full h-full">
                  <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="32" fill="transparent" className="text-slate-400" />
                  <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="32" fill="transparent" className="text-lime-500" strokeDasharray="502" strokeDashoffset="125" />
                  <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="32" fill="transparent" className="text-[#003920]" strokeDasharray="502" strokeDashoffset="376" />
                </svg>
                <div className="absolute w-12 h-12 rounded-full border-4 border-slate-100 flex items-center justify-center">
                   <Target className="w-5 h-5 text-slate-200" />
                </div>
              </div>
            </div>
          </ChartCard>
        </div>

        {/* Sales Executive Table */}
        <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-sm">
          <div className="px-8 py-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Resumen Ejecutivo de Ventas</h2>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-[10px] font-black text-slate-600 hover:bg-slate-50 transition-all shadow-sm uppercase tracking-widest">
              <Filter className="w-3.5 h-3.5" />
              Filtrar Tabla
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Vendedor</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Región</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Cotizado</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Cerrado</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Ratio</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-center">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { name: 'Carlos Mendoza', region: 'Norte', quoted: '$1,240,000', closed: '$890,000', ratio: '71%', status: 'SUPERÓ META' },
                  { name: 'Elena Rivas', region: 'Bajío', quoted: '$980,500', closed: '$720,000', ratio: '73%', status: 'EN OBJETIVO' },
                  { name: 'Marcos Soria', region: 'Sureste', quoted: '$650,000', closed: '$310,000', ratio: '47%', status: 'EN RIESGO' },
                  { name: 'Daniela Ortiz', region: 'Occidente', quoted: '$1,100,000', closed: '$815,000', ratio: '74%', status: 'SUPERÓ META' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-6">
                      <p className="text-xs font-black text-slate-900">{row.name}</p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-xs font-bold text-slate-500">{row.region}</p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-xs font-black text-slate-900">{row.quoted}</p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-xs font-black text-slate-900">{row.closed}</p>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-slate-700">{row.ratio}</span>
                        <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: row.ratio }} />
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <StatusBadge status={row.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-8 py-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
            <p className="text-[11px] font-bold text-slate-400 italic">
              Mostrando 4 de 12 ejecutivos comerciales
            </p>
            <div className="flex items-center gap-2">
              <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-white hover:text-primary transition-all">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-white hover:text-primary transition-all">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
