'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Shell } from '@/components/ui/Shell';
import { mockProducts } from '@/lib/mock-data';
import { 
  ArrowLeft, 
  ShoppingCart, 
  Settings2, 
  Truck, 
  ShieldCheck, 
  ChevronRight,
  BarChart2,
  Box,
  CheckCircle2,
  Package,
  Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const product = mockProducts.find(p => p.id === params.id);

  if (!product) {
    return (
      <Shell>
        <div className="flex flex-col items-center justify-center h-[70vh]">
          <Package className="w-20 h-20 text-slate-200 mb-6" />
          <h1 className="text-2xl font-bold text-slate-900">Producto no encontrado</h1>
          <button onClick={() => router.back()} className="mt-4 text-primary font-bold hover:underline">
            Volver al catálogo
          </button>
        </div>
      </Shell>
    );
  }

  const technicalSpecs = [
    { label: 'Modelo', value: product.sku.split('-')[1] || 'S/M' },
    { label: 'Marca', value: 'Valenzuela Industrial' },
    { label: 'Origen', value: 'Chile / Germany' },
    { label: 'Garantía', value: '24 Meses' },
    { label: 'Certificación', value: 'ISO 9001 / Agritech' },
    { label: 'Mantenimiento', value: 'Semestral' }
  ];

  return (
    <Shell>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <button onClick={() => router.push('/inventory')} className="hover:text-primary transition-colors">Catálogo</button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-600 font-medium truncate max-w-[200px]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Visuals */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-[40px] border border-slate-200 p-2 shadow-2xl relative overflow-hidden group">
              <div className="aspect-[4/3] rounded-[34px] overflow-hidden bg-slate-50 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="bg-white/90 backdrop-blur text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-2xl shadow-sm border border-slate-200 text-slate-600">
                    SKU: {product.sku}
                  </span>
                  <span className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-2xl shadow-sm border border-primary/20">
                    Industrial Grade
                  </span>
                </div>
              </div>
            </div>

            {/* Gallery Thumbnails (Simulation) */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-3xl border-2 border-slate-100 bg-white overflow-hidden hover:border-primary transition-colors cursor-pointer">
                  <img src={product.image} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Info & Actions */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-success/10 text-success text-[10px] font-black uppercase tracking-widest rounded-full">
                  {product.category}
                </span>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span className="text-xs font-bold">En Stock (Chile)</span>
                </div>
              </div>
              <h1 className="text-4xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                {product.name}
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                {product.description}
              </p>
            </div>

            <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-200">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em]">Inversión Estimada</span>
              </div>
              <div className="flex items-end justify-between">
                <div className="text-4xl font-black text-primary tracking-tighter">
                  ${product.price.toLocaleString()}
                  <span className="text-base font-bold text-slate-400 ml-2">+ IVA</span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900">{product.stock}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Unidades Disponibles</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Despacho</p>
                  <p className="text-xs font-bold text-slate-700">7-10 Días Hábiles</p>
                </div>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Garantía</p>
                  <p className="text-xs font-bold text-slate-700">Premium 2 Años</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-primary text-white py-5 rounded-[24px] font-black text-lg shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group">
                <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                Crear Cotización
              </button>
              <button className="w-16 h-16 bg-white border border-slate-200 rounded-[24px] flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                <Settings2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Technical Data Tabs Section */}
        <div className="mt-12">
          <div className="bg-white border border-slate-200 rounded-[40px] overflow-hidden shadow-sm">
            <div className="flex border-b border-slate-100">
              <button className="px-12 py-6 border-b-4 border-primary font-black text-slate-900">Especificaciones Técnicas</button>
              <button className="px-12 py-6 text-slate-400 font-bold hover:bg-slate-50 transition-colors">Plan de Mantenimiento</button>
              <button className="px-12 py-6 text-slate-400 font-bold hover:bg-slate-50 transition-colors">Certificaciones</button>
            </div>
            <div className="p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
                {technicalSpecs.map((spec, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-slate-50">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{spec.label}</span>
                    <span className="font-black text-slate-900">{spec.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-dashed border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary">
                    <BarChart2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Ficha Técnica PDF</h3>
                    <p className="text-slate-500 font-medium">Documento detallado para ingeniería y proyectos.</p>
                  </div>
                </div>
                <button className="px-8 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-700 hover:bg-slate-100 transition-all flex items-center gap-2">
                  <Box className="w-4 h-4" />
                  Descargar (4.2 MB)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
