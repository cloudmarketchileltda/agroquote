'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Shell } from '@/components/ui/Shell';
import { mockQuotes, Quote } from '@/lib/mock-data';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  FileText, 
  CheckCircle2, 
  Clock, 
  XCircle,
  Download,
  Eye,
  Send,
  Trash2,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function QuotesPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredQuotes = mockQuotes.filter(quote => {
    const matchesSearch = quote.project.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         quote.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quote.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || quote.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const StatusBadge = ({ status }: { status: Quote['status'] }) => {
    const styles = {
      approved: "bg-emerald-50 text-emerald-600 border-emerald-100",
      sent: "bg-blue-50 text-blue-600 border-blue-100",
      draft: "bg-slate-50 text-slate-500 border-slate-100",
      rejected: "bg-rose-50 text-rose-600 border-rose-100",
    };

    const labels = {
      approved: "Aprobada",
      sent: "Enviada",
      draft: "Borrador",
      rejected: "Rechazada",
    };

    const Icons: any = {
      approved: CheckCircle2,
      sent: Send,
      draft: Clock,
      rejected: XCircle,
    };

    const Icon = Icons[status];

    return (
      <span className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border",
        styles[status]
      )}>
        <Icon className="w-3 h-3" />
        {labels[status]}
      </span>
    );
  };

  return (
    <Shell>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Gestión de Cotizaciones</h1>
            <p className="text-slate-500 mt-1">Administra y haz seguimiento a todas las propuestas comerciales.</p>
          </div>
          <Link 
            href="/quotes/new"
            className="bg-primary text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all flex items-center gap-2 w-fit"
          >
            <Plus className="w-5 h-5" />
            Nueva Cotización
          </Link>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Mensual</p>
            <h3 className="text-2xl font-bold text-slate-900">$42.8M</h3>
            <div className="flex items-center gap-1 mt-2 text-emerald-600 text-xs font-bold">
              <ArrowUpRight className="w-3 h-3" />
              <span>+14.2% vs mes anterior</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Tasa de Cierre</p>
            <h3 className="text-2xl font-bold text-slate-900">68%</h3>
            <div className="flex items-center gap-1 mt-2 text-emerald-600 text-xs font-bold">
              <ArrowUpRight className="w-3 h-3" />
              <span>Meta: 75%</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Pendientes</p>
            <h3 className="text-2xl font-bold text-slate-900">12</h3>
            <div className="flex items-center gap-1 mt-2 text-amber-600 text-xs font-bold">
              <Clock className="w-3 h-3" />
              <span>Requieren seguimiento</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Ticket Promedio</p>
            <h3 className="text-2xl font-bold text-slate-900">$3.5M</h3>
            <div className="flex items-center gap-1 mt-2 text-slate-500 text-xs font-bold">
              <FileText className="w-3 h-3" />
              <span>Proyectos Industriales</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Buscar por ID, Proyecto o Cliente..."
              className="w-full bg-white border border-slate-200 rounded-2xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-primary/5 focus:border-primary transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            {['all', 'approved', 'sent', 'draft'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={cn(
                  "px-4 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider border transition-all shadow-sm",
                  filterStatus === status 
                    ? "bg-primary text-white border-primary" 
                    : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
                )}
              >
                {status === 'all' ? 'Todos' : status === 'approved' ? 'Aprobadas' : status === 'sent' ? 'Enviadas' : 'Borradores'}
              </button>
            ))}
          </div>
        </div>

        {/* Quotes Table */}
        <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cotización</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cliente</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Estado</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Monto Total</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredQuotes.map((quote) => (
                  <tr 
                    key={quote.id} 
                    className="hover:bg-slate-50/80 transition-all group cursor-pointer"
                    onClick={() => router.push(`/quotes/${quote.id}`)}
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{quote.id}</p>
                          <p className="text-xs text-slate-500 mt-1 font-medium">{quote.project}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-[10px] border border-slate-200">
                          {quote.client.substring(0, 2).toUpperCase()}
                        </div>
                        <span className="text-sm font-semibold text-slate-700">{quote.client}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <StatusBadge status={quote.status} />
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm font-bold text-slate-900">
                        {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(quote.total)}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1 font-mono uppercase">Neto + IVA</p>
                    </td>
                    <td className="px-8 py-6 text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          href={`/quotes/${quote.id}`}
                          className="p-2 text-slate-400 hover:text-primary hover:bg-white rounded-xl transition-all border border-transparent hover:border-slate-200 shadow-none hover:shadow-sm"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-white rounded-xl transition-all border border-transparent hover:border-slate-200 shadow-none hover:shadow-sm">
                          <Download className="w-4 h-4" />
                        </button>
                        <div className="w-px h-4 bg-slate-200 mx-1" />
                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-xl transition-all border border-transparent hover:border-slate-200 shadow-none hover:shadow-sm">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredQuotes.length === 0 && (
            <div className="py-20 flex flex-col items-center justify-center text-slate-400">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 opacity-20" />
              </div>
              <p className="text-lg font-bold text-slate-900">No se encontraron resultados</p>
              <p className="text-sm">Intenta ajustar los filtros o términos de búsqueda.</p>
            </div>
          )}
        </div>
      </div>
    </Shell>
  );
}
