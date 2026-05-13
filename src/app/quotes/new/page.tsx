'use client';

import React, { useState, useMemo } from 'react';
import { Shell } from '@/components/ui/Shell';
import { mockProducts, mockClients, Product } from '@/lib/mock-data';
import { 
  ChevronRight,
  Search,
  Bell,
  Moon,
  HelpCircle,
  Users,
  Settings2,
  Zap,
  Info,
  CheckCircle2,
  ArrowRight,
  FileText,
  Clock,
  Edit2
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function NewQuotePage() {
  const [selectedClient, setSelectedClient] = useState(mockClients[0]);
  const [length, setLength] = useState(100);
  const [zones, setZones] = useState(4);
  const [includeSensors, setIncludeSensors] = useState(true);
  const [remoteAutomation, setRemoteAutomation] = useState(false);

  const costs = useMemo(() => {
    const base = 12450.00;
    const config = (length * 15) + (zones * 200);
    const sensors = includeSensors ? 1200.00 : 0;
    const logistics = 850.00;
    return {
      base,
      config,
      logistics,
      sensors,
      subtotal: base + config + logistics + sensors,
      discount: 5, // 5%
    };
  }, [length, zones, includeSensors]);

  const totalUSD = costs.subtotal * (1 - costs.discount / 100);
  const totalCLP = totalUSD * 950; // Mock exchange rate

  return (
    <Shell>
      <div className="max-w-[1600px] mx-auto pb-20">
        {/* Header Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <Link href="/quotes" className="hover:text-primary transition-colors">Cotizaciones</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-slate-600">Nuevo Proyecto</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Constructor CPQ Industrial</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                const btn = document.getElementById('save-draft-btn');
                if (btn) {
                  btn.innerHTML = '<span class="flex items-center gap-2">✔ Guardado</span>';
                  btn.classList.add('bg-emerald-50', 'text-emerald-600', 'border-emerald-200');
                  setTimeout(() => {
                    btn.innerHTML = 'Guardar Borrador';
                    btn.classList.remove('bg-emerald-50', 'text-emerald-600', 'border-emerald-200');
                  }, 2000);
                }
              }}
              id="save-draft-btn"
              className="px-6 py-2.5 bg-white text-slate-700 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 transition-all text-sm shadow-sm"
            >
              Guardar Borrador
            </button>
            <Link 
              href="/quotes/Q-2034/preview"
              className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all flex items-center gap-2 text-sm"
            >
              <FileText className="w-4 h-4" />
              Generar Cotización y PDF
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Configuration */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* 1. Cliente */}
            <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-800">Selección de Cliente</h3>
                </div>
                <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border border-emerald-100">
                  Validado
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Razón Social</p>
                  <p className="text-base font-black text-slate-900">{selectedClient.company}</p>
                  <p className="text-xs text-slate-500">{selectedClient.id === '1' ? 'RUT: 76.453.221-K' : 'RUT: 77.123.456-7'}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ubicación de Proyecto</p>
                  <p className="text-base font-bold text-slate-900">Curicó, Región del Maule</p>
                  <p className="text-xs text-slate-500">Predio El Manzano, Lote 4</p>
                </div>
              </div>
            </div>

            {/* 2. Configuración */}
            <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-primary p-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <Settings2 className="w-4 h-4 text-success" />
                  <span className="text-sm font-bold">Configuración de Producto: <span className="text-success uppercase">IRM04</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Status:</span>
                  <span className="bg-success text-primary px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider">Activo</span>
                </div>
              </div>

              <div className="p-8 space-y-10">
                <div className="grid grid-cols-2 gap-12">
                  {/* Largo del riel */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-slate-800">Largo de riel (m)</p>
                      <Info className="w-3.5 h-3.5 text-slate-300" />
                    </div>
                    <div className="flex gap-2">
                      {[50, 100, 200].map(m => (
                        <button 
                          key={m}
                          onClick={() => setLength(m)}
                          className={cn(
                            "flex-1 py-2.5 rounded-xl border font-bold text-sm transition-all",
                            length === m 
                              ? "bg-white border-primary text-primary shadow-md ring-2 ring-primary/5" 
                              : "bg-slate-50 border-slate-200 text-slate-400 hover:border-slate-300"
                          )}
                        >
                          {m}m {length === m && <CheckCircle2 className="w-3 h-3 inline ml-1" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Cantidad de zonas */}
                  <div className="space-y-4">
                    <p className="text-sm font-bold text-slate-800">Cantidad de zonas de riego</p>
                    <div className="flex items-center gap-6">
                      <input 
                        type="range" 
                        min="1" 
                        max="8" 
                        value={zones}
                        onChange={(e) => setZones(parseInt(e.target.value))}
                        className="flex-1 h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary" 
                      />
                      <div className="w-12 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-black text-sm">
                        {zones.toString().padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Optional Packs */}
                <div className="grid grid-cols-2 gap-6">
                  <div 
                    onClick={() => setIncludeSensors(!includeSensors)}
                    className={cn(
                      "p-6 rounded-2xl border-2 transition-all cursor-pointer flex gap-4",
                      includeSensors ? "border-primary bg-white shadow-lg" : "border-slate-100 bg-slate-50 opacity-60"
                    )}
                  >
                    <div className={cn("w-6 h-6 rounded-md flex items-center justify-center border", includeSensors ? "bg-primary border-primary text-white" : "bg-white border-slate-200")}>
                      {includeSensors && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-black text-slate-900 leading-tight">Pack Sensores Climáticos Pro</p>
                        <p className="text-success font-black text-sm">+$1,200.00</p>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Incluye anemómetro, sensor de humedad de suelo y radiación solar.
                      </p>
                    </div>
                  </div>

                  <div 
                    className={cn(
                      "p-6 rounded-2xl border-2 transition-all flex gap-4",
                      remoteAutomation ? "border-primary bg-white shadow-lg" : "border-slate-100 bg-slate-50"
                    )}
                  >
                    <div className="flex-1">
                      <p className="font-black text-slate-900 mb-2">Automatización Remota Pro</p>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Control vía app satelital 24/7.
                      </p>
                    </div>
                    <button 
                      onClick={() => setRemoteAutomation(!remoteAutomation)}
                      className={cn(
                        "w-12 h-6 rounded-full p-1 transition-all",
                        remoteAutomation ? "bg-primary" : "bg-slate-300"
                      )}
                    >
                      <div className={cn("w-4 h-4 bg-white rounded-full transition-all", remoteAutomation ? "translate-x-6" : "translate-x-0")} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Rendering */}
            <div className="space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Vista Previa Técnica (Rendering)</h3>
              <div className="relative rounded-[24px] overflow-hidden border border-slate-200 shadow-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                  alt="Industrial Machine Rendering" 
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white">
                  <div className="flex gap-10">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Longitud Total</p>
                      <p className="text-xl font-black">{length}.00m</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Boquillas</p>
                      <p className="text-xl font-black">{zones * 6}</p>
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-success/20 backdrop-blur-md border border-success/30 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-success animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Summary & History */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Cost Summary */}
            <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex items-center gap-3">
                <Edit2 className="w-4 h-4 text-slate-400" />
                <h3 className="font-bold text-slate-800">Resumen de Costos</h3>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Precio Base (IRM04)</span>
                  <span className="font-bold text-slate-900 font-mono">${costs.base.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Extras Configuración</span>
                  <span className="font-bold text-slate-900 font-mono">${costs.config.toLocaleString()}</span>
                </div>
                {includeSensors && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Pack Sensores Pro</span>
                    <span className="font-bold text-slate-900 font-mono">${costs.sensors.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm pb-4 border-b border-slate-100">
                  <span className="text-slate-500">Instalación & Logística</span>
                  <span className="font-bold text-slate-900 font-mono">${costs.logistics.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-bold text-slate-800">Descuento Comercial</span>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:text-primary"><Edit2 className="w-3 h-3" /></button>
                    <div className="bg-slate-50 border border-slate-200 rounded px-2 py-0.5 text-xs font-bold text-rose-500">
                      {costs.discount}%
                    </div>
                  </div>
                </div>
                <p className="text-[10px] text-right text-rose-500 font-bold -mt-2 font-mono">-${(costs.subtotal * 0.05).toLocaleString()} USD</p>

                {/* Final Total Box */}
                <div className="mt-6 bg-primary rounded-2xl p-6 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-10">
                    <Zap className="w-12 h-12" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-4">Total Final Estimado</p>
                    <div className="flex items-end justify-between gap-4">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-success uppercase">USD</p>
                        <p className="text-2xl font-black font-mono">${totalUSD.toLocaleString()}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="text-[10px] font-bold text-white/40 uppercase">CLP approx.</p>
                        <p className="text-xl font-black font-mono text-white/90">${Math.round(totalCLP).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[9px] text-slate-400 italic leading-tight text-center mt-4">
                  * Los precios no incluyen IVA. Sujeto a validación técnica de terreno por Ingeniero de Proyecto.
                </p>

                <Link 
                  href="/quotes/Q-2034/preview" 
                  className="w-full bg-success text-primary py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg shadow-success/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <FileText className="w-4 h-4" />
                  Generar Cotización y PDF
                </Link>
              </div>
            </div>

            {/* Revision History */}
            <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm p-6">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Historial de Revisiones</h3>
              <div className="space-y-6">
                <div className="flex gap-4 relative">
                  <div className="absolute left-[7px] top-4 bottom-0 w-[2px] bg-slate-100" />
                  <div className="w-4 h-4 rounded-full bg-success ring-4 ring-success/20 shrink-0 relative z-10" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Configuración Inicial</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Hoy, 09:12 AM</p>
                  </div>
                </div>
                <div className="flex gap-4 relative">
                  <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 shrink-0 relative z-10" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Cambio de cliente: Agroviveros SPA</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Hoy, 10:45 AM</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Shell>
  );
}
