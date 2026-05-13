'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Shell } from '@/components/ui/Shell';
import { mockQuotes, mockProducts, mockClients } from '@/lib/mock-data';
import { 
  ChevronLeft, 
  Download, 
  Send, 
  Printer, 
  FileText, 
  Building2, 
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Clock,
  XCircle,
  Zap,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function QuoteDetailPage() {
  const params = useParams();
  const router = useRouter();
  const quote = mockQuotes.find(q => q.id === params.id);

  if (!quote) {
    return (
      <Shell>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold">Cotización no encontrada</h1>
          <button onClick={() => router.back()} className="text-primary mt-4 flex items-center gap-2 mx-auto">
            <ChevronLeft className="w-4 h-4" /> Volver
          </button>
        </div>
      </Shell>
    );
  }

  const client = mockClients.find(c => c.company === quote.client);
  const subtotal = quote.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.19;
  const total = subtotal + tax;

  const StatusIcon = {
    approved: CheckCircle2,
    sent: Send,
    draft: Clock,
    rejected: XCircle
  }[quote.status];

  return (
    <Shell>
      <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Header Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 no-print">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.back()}
              className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-primary transition-all shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{quote.id}</h1>
              <div className="flex items-center gap-2 mt-0.5">
                <StatusIcon className={cn(
                  "w-3 h-3",
                  quote.status === 'approved' ? "text-emerald-500" :
                  quote.status === 'sent' ? "text-blue-500" :
                  quote.status === 'rejected' ? "text-rose-500" : "text-slate-400"
                )} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{quote.status}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="px-4 py-2.5 bg-white text-slate-700 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm text-sm">
              <Printer className="w-4 h-4" />
              Imprimir
            </button>
            <button className="px-4 py-2.5 bg-white text-slate-700 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm text-sm">
              <Download className="w-4 h-4" />
              Descargar PDF
            </button>
            <button className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all flex items-center gap-2 text-sm">
              <Send className="w-4 h-4" />
              Enviar a Cliente
            </button>
          </div>
        </div>

        {/* Quote Document */}
        <div className="bg-white rounded-[32px] border border-slate-200 shadow-xl overflow-hidden print:border-none print:shadow-none">
          {/* Document Header */}
          <div className="bg-primary p-12 text-white relative overflow-hidden">
            <Zap className="absolute -right-12 -bottom-12 w-64 h-64 text-white/5 opacity-10 rotate-12" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-success rounded-2xl flex items-center justify-center shadow-lg shadow-success/20">
                    <Zap className="text-primary w-8 h-8 fill-current" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold leading-none">AgroQuote</h2>
                    <p className="text-[10px] font-mono text-success tracking-[0.3em] uppercase mt-1">Industrial Tech</p>
                  </div>
                </div>
                <div className="space-y-1 text-sm text-white/60">
                  <p>Francisco Valenzuela Ltda.</p>
                  <p>Av. Industrial 4500, Santiago</p>
                  <p>RUT: 76.543.210-K</p>
                  <p>contacto@agroquote.cl</p>
                </div>
              </div>
              
              <div className="text-right flex flex-col justify-end">
                <h2 className="text-4xl font-black mb-2 uppercase tracking-tighter">Cotización</h2>
                <div className="space-y-1 text-sm">
                  <p className="font-mono text-success">{quote.id}</p>
                  <p className="text-white/60">Fecha: {new Date(quote.date).toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  <p className="text-white/60">Válida por 15 días</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 space-y-12">
            {/* Parties Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 pb-2">Preparado para</p>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{quote.client}</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Building2 className="w-4 h-4" />
                      <span>{client?.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Mail className="w-4 h-4" />
                      <span>{client?.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Phone className="w-4 h-4" />
                      <span>{client?.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 pb-2">Proyecto / Referencia</p>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900">{quote.project}</h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    Configuración técnica personalizada según requerimientos industriales específicos del cliente.
                  </p>
                </div>
              </div>
            </div>

            {/* Line Items Table */}
            <div className="space-y-4">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-slate-900 text-slate-900">
                    <th className="py-4 text-xs font-black uppercase tracking-widest">Descripción del Item</th>
                    <th className="py-4 text-xs font-black uppercase tracking-widest text-center">Cant.</th>
                    <th className="py-4 text-xs font-black uppercase tracking-widest text-right">Precio Unit.</th>
                    <th className="py-4 text-xs font-black uppercase tracking-widest text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {quote.items.map((item, index) => {
                    const product = mockProducts.find(p => p.id === item.productId);
                    return (
                      <tr key={index} className="group">
                        <td className="py-6">
                          <p className="font-bold text-slate-900">{product?.name}</p>
                          <p className="text-[10px] font-mono text-slate-400 uppercase mt-1">{product?.sku}</p>
                        </td>
                        <td className="py-6 text-center font-mono text-sm text-slate-600">{item.quantity}</td>
                        <td className="py-6 text-right font-mono text-sm text-slate-600">
                          {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(item.price)}
                        </td>
                        <td className="py-6 text-right font-bold text-slate-900">
                          {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(item.price * item.quantity)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Totals Section */}
            <div className="flex flex-col md:flex-row justify-between gap-12 pt-8">
              <div className="flex-1 space-y-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 pb-2">Términos y Condiciones</p>
                <ul className="space-y-2">
                  {[
                    'Forma de Pago: 50% anticipo, 50% contra entrega.',
                    'Tiempo de entrega estimado: 15-20 días hábiles.',
                    'Garantía técnica de 24 meses incluida.',
                    'Los valores no incluyen costos de envío fuera de RM.'
                  ].map((term, i) => (
                    <li key={i} className="flex gap-2 text-xs text-slate-500 italic">
                      <span className="text-success">•</span> {term}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="w-full md:w-80 space-y-4">
                <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 space-y-4">
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>Subtotal Neto</span>
                    <span className="font-mono font-bold text-slate-900">
                      {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>IVA Trasladado (19%)</span>
                    <span className="font-mono font-bold text-slate-900">
                      {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(tax)}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-slate-200 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Total a Pagar</p>
                      <p className="text-3xl font-black text-primary tracking-tighter">
                        {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(total)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Trust */}
            <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-success" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pago Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-success" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">24 Meses Garantía</span>
                </div>
              </div>
              <p className="text-[10px] font-mono text-slate-400">
                Documento generado electrónicamente por AgroQuote Pro CPQ System.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
