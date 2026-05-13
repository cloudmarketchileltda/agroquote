'use client';

import React, { useState } from 'react';
import { Shell } from '@/components/ui/Shell';
import { 
  Search, 
  UserPlus, 
  Download,
  Filter,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  FileText,
  MousePointer2,
  MapPin,
  Users,
  Bell,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const clients = [
  {
    id: '1',
    initials: 'AS',
    name: 'Agroviveros SPA',
    rut: '76.452.XXX-K',
    contact: 'Ricardo Valdivia',
    email: 'r.valdivia@agroviveros.cl',
    lastActivity: 'Hace 2 horas',
    activityDetail: 'Llamada de seguimiento',
    status: 'NEGOCIACIÓN',
    statusColor: 'bg-blue-50 text-blue-600 border-blue-100'
  },
  {
    id: '2',
    initials: 'CS',
    name: 'Campos del Sur',
    rut: '94.211.XXX-2',
    contact: 'Elena Mendoza',
    email: 'emendoza@camposur.com',
    lastActivity: 'Ayer, 16:45',
    activityDetail: 'Envío catálogo maquinaria',
    status: 'CLIENTE ACTIVO',
    statusColor: 'bg-emerald-50 text-emerald-600 border-emerald-100'
  },
  {
    id: '3',
    initials: 'FA',
    name: 'Frutícola Andes',
    rut: '82.119.XXX-5',
    contact: 'Marcos Peña',
    email: 'm.pena@andesfrut.cl',
    lastActivity: '14 May, 2024',
    activityDetail: 'Cotización Generada #4421',
    status: 'COTIZACIÓN ENVIADA',
    statusColor: 'bg-orange-50 text-orange-600 border-orange-100'
  },
  {
    id: '4',
    initials: 'VT',
    name: 'Viña Tierras Altas',
    rut: '77.002.XXX-1',
    contact: 'Sofia Guerrero',
    email: 'sguerrero@tierrasaltas.cl',
    lastActivity: '12 May, 2024',
    activityDetail: 'Primer contacto web',
    status: 'PROSPECTO',
    statusColor: 'bg-slate-50 text-slate-600 border-slate-100'
  }
];

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Shell>
      <div className="space-y-8 pb-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Gestión de Clientes</h1>
            <p className="text-slate-500 mt-1 font-medium">Administra tu cartera comercial y el pipeline de ventas industriales.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all shadow-sm">
              <Download className="w-4 h-4" />
              Exportar
            </button>
            <Link href="/clients/new" className="flex items-center gap-2 px-6 py-2.5 bg-success text-primary rounded-xl font-black text-sm shadow-lg shadow-success/20 hover:scale-[1.02] transition-all">
              <UserPlus className="w-5 h-5" />
              Nuevo Cliente
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                <ArrowUpRight className="w-3 h-3" />
                +12% vs mes anterior
              </div>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Clientes</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">1,284</h3>
          </div>

          <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                14 activos
              </div>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cotizaciones Abiertas</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">$420M CLP</h3>
          </div>

          <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                Óptimo
              </div>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ratio Conversión</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">24.8%</h3>
          </div>

          <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Región Líder</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">Maule</h3>
          </div>
        </div>

        {/* Table & Filters Section */}
        <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
          {/* Filter Bar */}
          <div className="px-8 py-5 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <Filter className="w-4 h-4" />
                Filtrar por:
              </div>
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 shadow-sm flex items-center gap-2">
                Estado Pipeline: Todos
                <ChevronRight className="w-3 h-3 rotate-90" />
              </button>
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 shadow-sm flex items-center gap-2">
                Región: Todas
                <ChevronRight className="w-3 h-3 rotate-90" />
              </button>
            </div>
            <p className="text-xs font-medium text-slate-400">
              Mostrando <span className="text-slate-900 font-bold">25 de 1,284</span> clientes
            </p>
          </div>

          {/* Client Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-100">
                  <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Nombre del Cliente</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Contacto Principal</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Última Actividad</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Estado Pipeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {clients.map((client) => (
                  <tr key={client.id} className="hover:bg-slate-50/80 transition-all group cursor-pointer">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500 font-black text-sm border border-slate-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                          {client.initials}
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900 leading-tight">{client.name}</p>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">RUT: {client.rut}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm font-bold text-slate-900">{client.contact}</p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm font-medium text-slate-500">{client.email}</p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm font-black text-slate-900 leading-tight">{client.lastActivity}</p>
                      <p className="text-[10px] text-slate-400 mt-1 font-medium">{client.activityDetail}</p>
                    </td>
                    <td className="px-8 py-6">
                      <span className={cn(
                        "inline-flex px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border",
                        client.statusColor
                      )}>
                        {client.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-8 py-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
            <button className="flex items-center gap-2 text-xs font-black text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </button>
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((p) => (
                <button 
                  key={p}
                  className={cn(
                    "w-10 h-10 rounded-xl font-black text-sm transition-all",
                    p === 1 ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-500 hover:bg-slate-100"
                  )}
                >
                  {p}
                </button>
              ))}
              <span className="text-slate-300 mx-1">...</span>
              <button className="w-10 h-10 rounded-xl font-black text-sm text-slate-500 hover:bg-slate-100">12</button>
            </div>
            <button className="flex items-center gap-2 text-xs font-black text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">
              Siguiente
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Banner Section */}
        <div className="bg-[#002d1a] rounded-[40px] p-10 relative overflow-hidden group border border-emerald-900">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #84cc16 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-white leading-tight tracking-tight">Análisis de Pipeline Trimestral</h2>
              <p className="text-emerald-100/70 text-base leading-relaxed font-medium">
                Has incrementado la conversión de Prospectos a Cotización en un 14% este mes. Tienes 4 negociaciones críticas que requieren seguimiento antes del cierre de semana.
              </p>
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 bg-white text-[#002d1a] rounded-xl font-black text-sm shadow-xl hover:scale-[1.02] transition-all">
                  Ver Reporte Detallado
                </button>
                <button className="px-6 py-3 bg-emerald-900/50 text-emerald-400 border border-emerald-800 rounded-xl font-black text-sm hover:bg-emerald-800/50 transition-all">
                  Descartar Sugerencia
                </button>
              </div>
            </div>
            
            <div className="relative h-[240px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#002d1a] to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800" 
                alt="Pipeline Analysis Visualization" 
                className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-success/20 blur-[60px]" />
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
