import React from 'react';
import { Shell } from '@/components/ui/Shell';
import { Package, Search, Filter, Plus, ShoppingCart, Zap } from 'lucide-react';
import { MOCK_PRODUCTS } from '@/lib/data/mock-data';
import Image from 'next/image';

export default function CatalogPage() {
  return (
    <Shell>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-primary tracking-tight">Catálogo Industrial</h2>
            <p className="text-secondary mt-1">Maquinaria, invernaderos y soluciones de automatización.</p>
          </div>
          <button className="bg-primary text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-semibold hover:bg-primary-container transition-all industrial-shadow">
            <Plus className="w-5 h-5" />
            Añadir Producto
          </button>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-surface p-4 rounded-xl border border-industrial-border industrial-shadow">
          <div className="flex items-center gap-4 flex-1 w-full">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
              <input 
                type="text" 
                placeholder="Buscar por nombre, SKU o categoría..." 
                className="w-full bg-background border border-industrial-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-industrial-border rounded-lg text-sm font-semibold text-primary hover:bg-background transition-all">
              <Filter className="w-4 h-4" />
              Filtros
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            {['Todos', 'Maquinaria', 'Automatización', 'Estructuras'].map((cat) => (
              <button 
                key={cat}
                className="px-4 py-1.5 rounded-full text-xs font-bold border border-industrial-border hover:bg-primary hover:text-white transition-all text-secondary"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PRODUCTS.map((product) => (
            <div key={product.id} className="bg-surface rounded-xl border border-industrial-border overflow-hidden group hover:translate-y-[-4px] transition-all duration-300 industrial-shadow">
              <div className="relative h-48 bg-background overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest border border-industrial-border">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-primary-container transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-secondary line-clamp-2 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between text-xs">
                      <span className="text-secondary font-medium">{key}</span>
                      <span className="text-primary font-mono font-bold uppercase">{value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-industrial-border">
                  <div>
                    <p className="text-[10px] text-secondary uppercase font-mono tracking-wider">Precio Base</p>
                    <p className="text-xl font-bold text-primary">${product.basePrice.toLocaleString()}</p>
                  </div>
                  <button className="p-3 bg-background border border-industrial-border rounded-lg text-primary hover:bg-primary hover:text-white transition-all group/btn">
                    <Zap className="w-5 h-5 group-hover/btn:fill-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}
