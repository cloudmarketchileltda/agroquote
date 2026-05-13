'use client';

import React from 'react';
import { Shell } from '@/components/ui/Shell';
import { 
  FileText, 
  Download, 
  Share2, 
  Printer, 
  ChevronLeft,
  CheckCircle2,
  Building2,
  Mail,
  MapPin,
  Calendar,
  Zap,
  Info
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function QuotePreviewPage() {
  const params = useParams();
  const id = params.id as string;

  return (
    <Shell>
      <div className="max-w-[1200px] mx-auto pb-20">
        {/* Actions Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link 
              href="/quotes/new"
              className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-primary transition-all shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">Vista Previa de Cotización</h1>
              <p className="text-xs text-slate-500 mt-0.5">Documento ID: {id}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all shadow-sm">
              <Printer className="w-4 h-4" />
              Imprimir
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all shadow-sm">
              <Share2 className="w-4 h-4" />
              Compartir
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
              <Download className="w-4 h-4" />
              Descargar PDF
            </button>
          </div>
        </div>

        {/* Paper Container (Simulated PDF) */}
        <div className="bg-slate-100 p-12 rounded-[40px] border border-slate-200 shadow-inner flex justify-center">
          <div className="w-full max-w-[800px] bg-white shadow-2xl min-h-[1100px] p-16 font-sans text-slate-800">
            
            {/* Header / Brand */}
            <div className="flex justify-between items-start mb-16 border-b-4 border-primary pb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                    <Zap className="w-8 h-8" />
                  </div>
                  <div className="font-black text-2xl tracking-tighter text-primary italic">
                    AgroQuote <span className="text-success">Pro</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900">Francisco Valenzuela</h2>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Industrial Solutions & Heavy Machinery</p>
                </div>
              </div>

              <div className="text-right">
                <div className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-black text-xl mb-4">
                  COTIZACIÓN
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-400">Nro: <span className="text-slate-900">{id}</span></p>
                  <p className="text-sm font-bold text-slate-400">Fecha: <span className="text-slate-900">{new Date().toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric' })}</span></p>
                </div>
              </div>
            </div>

            {/* Client & Provider Grid */}
            <div className="grid grid-cols-2 gap-12 mb-16">
              <div className="space-y-4">
                <h3 className="text-xs font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  CLIENTE
                </h3>
                <div className="space-y-2">
                  <p className="text-lg font-black text-slate-900">Agroviveros SPA</p>
                  <p className="text-xs font-bold text-slate-500">RUT: 76.453.221-K</p>
                  <div className="flex gap-2 items-start mt-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-300 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Av. Las Industrias 4050, Galpón 4<br />
                      Los Ángeles, Región del Biobío, Chile
                    </p>
                  </div>
                  <div className="flex gap-2 items-center mt-2">
                    <Mail className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                    <p className="text-xs text-slate-500">Contacto: Ing. Roberto Méndez</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-black text-success uppercase tracking-[0.2em] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-success" />
                  PROVEEDOR
                </h3>
                <div className="space-y-2">
                  <p className="text-lg font-black text-slate-900">FV Solutions Ltd.</p>
                  <p className="text-xs font-bold text-slate-500">RUT: 18.293.444-5</p>
                  <div className="flex gap-2 items-start mt-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-300 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Panamericana Norte KM 15<br />
                      Santiago, Región Metropolitana, Chile
                    </p>
                  </div>
                  <div className="flex gap-2 items-center mt-2">
                    <Mail className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                    <p className="text-xs text-slate-500">Email: ventas@fv-solutions.cl</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Items Table */}
            <div className="mb-16">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-primary text-white border-b-2 border-primary">
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">DESCRIPCIÓN TÉCNICA</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-center">CANT.</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-right">UNITARIO</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-right">TOTAL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-6 py-6">
                      <p className="text-sm font-black text-slate-900">Configurador Industrial IRM04</p>
                      <ul className="text-[10px] text-slate-500 mt-2 space-y-1 list-disc list-inside">
                        <li>Longitud de riel: 100 metros lineales</li>
                        <li>Zonas de riego: 04 sectores independientes</li>
                        <li>Tracción industrial reforzada</li>
                      </ul>
                    </td>
                    <td className="px-6 py-6 text-center font-bold text-sm">01</td>
                    <td className="px-6 py-6 text-right font-mono text-sm">$12.450,00</td>
                    <td className="px-6 py-6 text-right font-mono text-sm font-black">$12.450,00</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-6 font-bold text-sm">Pack Sensores Climáticos Pro</td>
                    <td className="px-6 py-6 text-center font-bold text-sm">01</td>
                    <td className="px-6 py-6 text-right font-mono text-sm">$1.200,00</td>
                    <td className="px-6 py-6 text-right font-mono text-sm font-black">$1.200,00</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={2} />
                    <td className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase tracking-widest">Subtotal USD</td>
                    <td className="px-6 py-4 text-right font-mono text-base font-black">$13.650,00</td>
                  </tr>
                  <tr>
                    <td colSpan={2} />
                    <td className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase tracking-widest text-success">Descuento (5%)</td>
                    <td className="px-6 py-4 text-right font-mono text-base font-black text-success">-$682,50</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td colSpan={2} />
                    <td className="px-6 py-6 text-right text-xs font-black text-primary uppercase tracking-[0.2em]">TOTAL NETO USD</td>
                    <td className="px-6 py-6 text-right font-mono text-2xl font-black text-primary">$12.967,50</td>
                  </tr>
                </tfoot>
              </table>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-right mt-2 px-6">
                VALOR APROXIMADO EN CLP: $12.319.125
              </p>
            </div>

            {/* Commercial Conditions */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mb-16">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" />
                CONDICIONES COMERCIALES
              </h3>
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {[
                  "Validez de la oferta: 15 días calendario.",
                  "Tiempo de entrega: 4 semanas post orden de compra.",
                  "Garantía: 24 meses por defectos de fabricación.",
                  "Forma de pago: 50% anticipo, 50% contra entrega."
                ].map((condition, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    <p className="text-xs font-medium text-slate-600 leading-tight">{condition}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Signatures */}
            <div className="pt-16 border-t border-slate-100 flex justify-between items-end">
              <div className="text-center w-64 space-y-4">
                <div className="h-20 flex items-end justify-center">
                  <p className="text-xs text-slate-300 italic">Digital Signature Verified</p>
                </div>
                <div className="border-t border-slate-900 pt-4">
                  <p className="text-sm font-black text-slate-900 uppercase tracking-widest">Francisco Valenzuela</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Director General de Ingeniería</p>
                </div>
              </div>
              
              <div className="text-right space-y-2 opacity-30">
                <div className="flex items-center justify-end gap-2">
                  <Zap className="w-4 h-4" />
                  <span className="font-black text-sm italic">AgroQuote Pro</span>
                </div>
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Technological Agriculture Solutions v2.4</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Shell>
  );
}
