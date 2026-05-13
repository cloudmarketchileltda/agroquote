'use client';

import React from 'react';
import { Shell } from '@/components/ui/Shell';
import { 
  Users, 
  ArrowLeft, 
  Save, 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Hash,
  Globe,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const FormField = ({ label, icon: Icon, type = "text", placeholder, defaultValue }: any) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{label}</label>
    <div className="relative group">
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors">
        <Icon className="w-4 h-4" />
      </div>
      <input 
        type={type} 
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all placeholder:text-slate-300" 
      />
    </div>
  </div>
);

export default function NewClientPage() {
  return (
    <Shell>
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
        {/* Navigation */}
        <Link 
          href="/clients" 
          className="inline-flex items-center gap-2 text-xs font-black text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a Clientes
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-success/10 flex items-center justify-center text-success border border-success/20">
                <Users className="w-6 h-6" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight">Nuevo Cliente</h1>
            </div>
            <p className="text-slate-500 font-medium">Registra una nueva entidad comercial en tu cartera de AgroQuote Pro.</p>
          </div>
        </div>

        {/* Form Container */}
        <div className="grid grid-cols-1 gap-8">
          {/* General Info */}
          <div className="bg-white rounded-[40px] border border-slate-200 p-10 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-0" />
             
             <div className="relative z-10 space-y-10">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                   <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black text-xs">01</div>
                   <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">Datos de la Empresa</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <FormField label="Nombre Comercial" icon={Building2} placeholder="Ej: Frutícola Los Andes S.A." />
                   <FormField label="RUT de Empresa" icon={Hash} placeholder="Ej: 76.543.210-K" />
                   <FormField label="Sitio Web" icon={Globe} placeholder="www.empresa.cl" />
                   <FormField label="Giro Comercial" icon={Briefcase} placeholder="Ej: Producción Agrícola" />
                </div>
             </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-[40px] border border-slate-200 p-10 shadow-sm relative overflow-hidden">
             <div className="relative z-10 space-y-10">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                   <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black text-xs">02</div>
                   <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">Contacto Principal</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <FormField label="Nombre del Contacto" icon={Users} placeholder="Ej: Juan Pérez" />
                   <FormField label="Cargo" icon={Briefcase} placeholder="Ej: Gerente de Operaciones" />
                   <FormField label="Email Corporativo" icon={Mail} placeholder="juan.perez@empresa.cl" />
                   <FormField label="Teléfono de Contacto" icon={Phone} placeholder="+56 9 1234 5678" />
                </div>
             </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-[40px] border border-slate-200 p-10 shadow-sm relative overflow-hidden">
             <div className="relative z-10 space-y-10">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                   <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black text-xs">03</div>
                   <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">Ubicación y Facturación</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="md:col-span-2">
                     <FormField label="Dirección Matriz" icon={MapPin} placeholder="Ej: Av. Las Industrias 450, Curicó" />
                   </div>
                   <FormField label="Región" icon={Globe} placeholder="Ej: Maule" />
                   <FormField label="Comuna" icon={MapPin} placeholder="Ej: Curicó" />
                </div>
             </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-4 pt-6">
           <Link 
            href="/clients"
            className="px-8 py-4 text-xs font-black text-slate-400 hover:text-slate-600 uppercase tracking-widest transition-colors"
           >
             Descartar
           </Link>
           <button className="bg-[#003920] text-white px-12 py-4 rounded-2xl font-black text-xs hover:bg-emerald-950 transition-all shadow-xl shadow-emerald-950/20 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3">
              <Save className="w-4 h-4" />
              Guardar Cliente Industrial
           </button>
        </div>
      </div>
    </Shell>
  );
}
