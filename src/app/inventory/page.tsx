'use client';

import React, { useState } from 'react';
import { Shell } from '@/components/ui/Shell';
import { mockProducts, Product } from '@/lib/mock-data';
import { 
  Search, 
  Filter, 
  Plus, 
  Package, 
  TrendingUp, 
  AlertTriangle,
  ArrowRight,
  Eye
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  'Todos',
  'Maquinaria Agrícola',
  'Viveros e Invernaderos',
  'Riego y Automatización',
  'Servicios Técnicos'
];

export default function InventoryPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = mockProducts.filter(p => {
    const matchesCategory = activeCategory === 'Todos' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.sku.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { label: 'Productos Totales', value: mockProducts.length, icon: Package, color: 'text-blue-600' },
    { label: 'Valor de Inventario', value: '$' + mockProducts.reduce((acc, p) => acc + (p.price * p.stock), 0).toLocaleString(), icon: TrendingUp, color: 'text-emerald-600' },
    { label: 'Stock Crítico', value: mockProducts.filter(p => p.stock < 10).length, icon: AlertTriangle, color: 'text-amber-600' },
  ];

  return (
    <Shell>
      <div className="space-y-8 animate-in fade-in duration-500">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Catálogo de Productos</h1>
            <p className="text-slate-500 mt-1">Gestión centralizada de maquinaria y soluciones tecnológicas.</p>
          </div>
          <button className="inline-flex items-center gap-2 bg-[#004D40] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#003d33] transition-colors shadow-sm active:scale-95">
            <Plus className="w-4 h-4" />
            Nuevo Producto
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                </div>
                <div className={cn("p-3 rounded-lg bg-slate-50", stat.color)}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                  activeCategory === cat 
                    ? "bg-[#004D40] text-white shadow-sm" 
                    : "text-slate-600 hover:bg-slate-100"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por nombre o SKU..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#004D40] focus:border-transparent outline-none text-sm transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#004D40] hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Product Image Area */}
              <div className="relative aspect-square overflow-hidden bg-slate-50">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-[10px] font-mono font-bold text-slate-600 px-2 py-1 rounded border border-slate-200 shadow-sm">
                    {product.sku}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <Link 
                    href={`/inventory/${product.id}`}
                    className="p-3 bg-white text-[#004D40] rounded-full hover:scale-110 transition-transform shadow-lg"
                  >
                    <Eye className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#004D40] bg-emerald-50 px-2 py-0.5 rounded">
                    {product.category}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-[#004D40] transition-colors leading-tight mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-1">
                  {product.description}
                </p>
                
                <div className="flex items-end justify-between pt-4 border-t border-slate-100">
                  <div>
                    <p className="text-[10px] font-medium text-slate-400 uppercase">Precio Base</p>
                    <p className="text-xl font-bold text-slate-900">
                      ${product.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-medium text-slate-400 uppercase">Stock</p>
                    <p className={cn(
                      "text-sm font-bold",
                      product.stock < 10 ? "text-amber-600" : "text-slate-700"
                    )}>
                      {product.stock} un.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900">No se encontraron productos</h3>
            <p className="text-slate-500 mt-1">Prueba ajustando los filtros o la búsqueda.</p>
          </div>
        )}
      </div>
    </Shell>
  );
}
