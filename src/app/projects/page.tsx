'use client';

import React from 'react';
import { Shell } from '@/components/ui/Shell';
import { mockProjects, Project } from '@/lib/mock-data';
import { 
  Download, 
  Plus, 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  Building2,
  Calendar,
  Activity
} from 'lucide-react';
import { cn } from '@/lib/utils';

const StatCard = ({ title, value, subtitle, trend, icon: Icon, trendType = 'positive' }: any) => (
  <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md transition-all">
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
        <Icon className="w-6 h-6 text-slate-400" />
      </div>
      {trend && (
        <span className={cn(
          "text-[10px] font-black px-2 py-1 rounded-lg border",
          trendType === 'positive' ? "text-success bg-success/5 border-success/10" : "text-amber-500 bg-amber-500/5 border-amber-500/10"
        )}>
          {trend}
        </span>
      )}
    </div>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-1">{title}</p>
    <h3 className="text-2xl font-black text-slate-900 leading-none">{value}</h3>
    {subtitle && <p className="text-[10px] font-bold text-slate-500 mt-2 uppercase tracking-tight">{subtitle}</p>}
  </div>
);

const StatusBadge = ({ status }: { status: Project['status'] }) => {
  const configs = {
    'on-track': { label: 'EN CURSO', bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'border-emerald-500/20' },
    'at-risk': { label: 'RETRASADO', bg: 'bg-rose-500/10', text: 'text-rose-600', border: 'border-rose-500/20' },
    'completed': { label: 'FINALIZADO', bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-500/20' }
  };
  const config = configs[status];
  return (
    <span className={cn("px-4 py-1.5 rounded-full text-[10px] font-black border tracking-wider", config.bg, config.text, config.border)}>
      {config.label}
    </span>
  );
};

export default function ProjectsPage() {
  return (
    <Shell>
      <div className="space-y-8 animate-in fade-in duration-700">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Gestión de Proyectos</h1>
            <p className="text-slate-500 mt-2 font-medium">Administra la ejecución y seguimiento de tus proyectos industriales.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-black text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
              <Download className="w-4 h-4" />
              EXPORTAR
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl text-xs font-black hover:scale-[1.02] transition-all shadow-lg shadow-primary/20">
              <Plus className="w-4 h-4" />
              NUEVO PROYECTO
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Total Proyectos" 
            value="156" 
            trend="+8% vs mes anterior"
            icon={Activity}
          />
          <StatCard 
            title="Presupuesto Ejecutado" 
            value="$1.2B CLP" 
            subtitle="12 ACTIVOS"
            icon={TrendingUp}
          />
          <StatCard 
            title="Cumplimiento SLA" 
            value="92.4%" 
            subtitle="ÓPTIMO"
            icon={CheckCircle2}
          />
          <StatCard 
            title="Región Crítica" 
            value="Valparaíso" 
            icon={MapPin}
            trend="Atención"
            trendType="negative"
          />
        </div>

        {/* Filters and Search */}
        <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-sm">
          <div className="px-8 py-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-black text-slate-500">
                <Filter className="w-3 h-3" />
                FILTRAR POR:
              </div>
              <div className="flex items-center gap-3">
                <select className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-[11px] font-bold text-slate-700 outline-none focus:ring-2 focus:ring-primary/10">
                  <option>Estado: Todos</option>
                  <option>En Curso</option>
                  <option>Retrasado</option>
                  <option>Finalizado</option>
                </select>
                <select className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-[11px] font-bold text-slate-700 outline-none focus:ring-2 focus:ring-primary/10">
                  <option>Región: Todas</option>
                  <option>Metropolitana</option>
                  <option>Maule</option>
                  <option>Valparaíso</option>
                </select>
              </div>
            </div>
            <p className="text-[11px] font-bold text-slate-400 italic">
              Mostrando 25 de 156 proyectos
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Nombre del Proyecto</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Cliente</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Fecha Entrega</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Progreso</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-center">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {mockProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black border shadow-sm group-hover:scale-105 transition-transform",
                          project.status === 'at-risk' ? "bg-rose-50 text-rose-600 border-rose-100" : "bg-emerald-50 text-emerald-600 border-emerald-100"
                        )}>
                          {project.id.split('-')[1]}
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900 leading-tight mb-1">{project.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter flex items-center gap-1.5">
                            ID: {project.id} <span className="w-1 h-1 rounded-full bg-slate-300" /> {project.type}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-black text-slate-700">{project.client}</p>
                          <p className="text-[10px] font-medium text-slate-400">Sector Industrial</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-slate-300" />
                        <span className="text-xs font-bold text-slate-600">{project.dueDate}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="w-48">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-tight">Avance de Obra</span>
                          <span className="text-xs font-black text-primary">{project.progress}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/50">
                          <div 
                            className={cn(
                              "h-full rounded-full transition-all duration-1000",
                              project.status === 'at-risk' ? "bg-rose-500" : "bg-success"
                            )}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <StatusBadge status={project.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="px-8 py-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
            <button className="flex items-center gap-2 text-[11px] font-black text-slate-400 hover:text-primary transition-colors uppercase tracking-widest group">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Anterior
            </button>
            <div className="flex items-center gap-2">
              {[1, 2, 3, '...', 12].map((page, i) => (
                <button 
                  key={i}
                  className={cn(
                    "w-8 h-8 rounded-lg text-xs font-black transition-all",
                    page === 1 ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-400 hover:bg-slate-100"
                  )}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 text-[11px] font-black text-slate-400 hover:text-primary transition-colors uppercase tracking-widest group">
              Siguiente
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Insight Banner */}
        <div className="relative overflow-hidden bg-[#003920] rounded-[40px] p-10 text-white shadow-2xl shadow-emerald-950/20">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black mb-4 tracking-tight">Análisis de Ejecución Trimestral</h2>
            <p className="text-emerald-50/70 text-lg mb-8 leading-relaxed font-medium">
              Has incrementado el cumplimiento de hitos en un 14% este mes. Tienes 4 proyectos en ruta crítica que requieren supervisión inmediata antes del cierre de semana.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-white text-[#003920] px-8 py-4 rounded-2xl font-black text-sm hover:bg-emerald-50 transition-all shadow-xl">
                Ver Reporte Detallado
              </button>
              <button className="bg-emerald-800/40 text-emerald-100 border border-emerald-700/50 px-8 py-4 rounded-2xl font-black text-sm hover:bg-emerald-800/60 transition-all">
                Descartar Sugerencia
              </button>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-emerald-800/20 to-transparent pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]" />
          
          {/* Mock Chart/Image Representation */}
          <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="w-72 h-48 bg-emerald-800/30 rounded-3xl border border-emerald-700/50 backdrop-blur-sm p-6 relative overflow-hidden">
              <div className="flex items-end gap-2 h-full justify-between">
                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                  <div key={i} className="w-6 bg-emerald-400/20 rounded-t-lg transition-all hover:bg-success/40" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
