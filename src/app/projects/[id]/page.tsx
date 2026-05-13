import React from 'react';
import { Shell } from '@/components/ui/Shell';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  MapPin, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  BarChart3,
  MessageSquare,
  Paperclip,
  Zap,
  MoreVertical
} from 'lucide-react';
import { MOCK_PROJECTS, MOCK_CLIENTS } from '@/lib/data/mock-data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = MOCK_PROJECTS.find(p => p.id === params.id);
  const client = project ? MOCK_CLIENTS.find(c => c.id === project.clientId) : null;

  if (!project) {
    notFound();
  }

  const statusStyles: any = {
    active: 'bg-primary text-white border-primary/20',
    completed: 'bg-success text-primary border-success/20',
    on_hold: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  };

  const statusLabels: any = {
    active: 'En Ejecución',
    completed: 'Completado',
    on_hold: 'En Pausa',
  };

  return (
    <Shell>
      <div className="space-y-8 pb-12">
        {/* Navigation & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link 
              href="/projects" 
              className="w-10 h-10 rounded-xl border border-industrial-border flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-all bg-surface shadow-sm"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-primary tracking-tight">{project.title}</h2>
                <span className={cn(
                  "text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest border",
                  statusStyles[project.status]
                )}>
                  {statusLabels[project.status]}
                </span>
              </div>
              <p className="text-secondary text-sm mt-1 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-primary" /> Proyecto ID: {project.id}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold border border-industrial-border rounded-xl text-primary hover:bg-background transition-all">
               Actualizar Progreso
            </button>
            <button className="bg-primary text-white px-5 py-2.5 rounded-xl flex items-center gap-2 font-bold hover:bg-primary-container transition-all shadow-lg shadow-primary/20">
              <MoreVertical className="w-4 h-4" /> Acciones
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Project Overview & Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Info Card */}
            <div className="bg-surface rounded-2xl border border-industrial-border p-8 industrial-shadow space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-industrial-border">
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Cliente Principal</p>
                  <p className="text-lg font-bold text-primary">{project.clientName}</p>
                  <p className="text-xs text-secondary flex items-center gap-1.5">
                    <User className="w-3 h-3" /> {client?.name}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Ubicación</p>
                  <p className="text-base font-bold text-primary">{client?.location || 'Región Metropolitana, Chile'}</p>
                  <p className="text-xs text-secondary flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" /> Instalación Planta A
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Fecha Inicio</p>
                  <p className="text-base font-bold text-primary">15 de Marzo, 2024</p>
                  <p className="text-xs text-secondary flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" /> Est. Finalización: Oct 2024
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-primary">Progreso de Implementación</h3>
                  <span className="text-2xl font-black text-primary">{project.progress}%</span>
                </div>
                <div className="h-4 w-full bg-background rounded-full overflow-hidden p-1 border border-industrial-border">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 shadow-lg shadow-primary/20" 
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-2">
                  {['Planificación', 'Diseño', 'Instalación', 'Pruebas'].map((step, idx) => (
                    <div key={step} className="space-y-2 text-center">
                      <div className={cn(
                        "h-1 rounded-full",
                        idx < 2 ? "bg-primary" : idx === 2 ? "bg-primary/30 animate-pulse" : "bg-background"
                      )} />
                      <p className="text-[9px] font-black uppercase text-secondary tracking-widest">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Tasks/Milestones */}
            <div className="bg-surface rounded-2xl border border-industrial-border p-8 industrial-shadow">
              <h3 className="font-bold text-primary mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" /> Hitos del Proyecto
              </h3>
              <div className="space-y-6">
                {[
                  { title: 'Levantamiento técnico de terreno', date: '20 Mar', status: 'completed' },
                  { title: 'Aprobación de planos de automatización', date: '05 Abr', status: 'completed' },
                  { title: 'Llegada de componentes hidráulicos', date: '12 May', status: 'active' },
                  { title: 'Configuración de software de control', date: '25 May', status: 'upcoming' },
                ].map((task, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="mt-1">
                      {task.status === 'completed' ? (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      ) : task.status === 'active' ? (
                        <Clock className="w-5 h-5 text-primary" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-industrial-border" />
                      )}
                    </div>
                    <div className="flex-1 pb-6 border-b border-industrial-border group-last:border-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className={cn(
                            "text-sm font-bold",
                            task.status === 'completed' ? "text-secondary line-through opacity-50" : "text-primary"
                          )}>{task.title}</p>
                          <p className="text-xs text-secondary mt-1">{task.date}</p>
                        </div>
                        {task.status === 'active' && (
                          <span className="text-[9px] font-black text-primary bg-primary/5 px-2 py-1 rounded uppercase tracking-widest border border-primary/20">
                            En proceso
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quick Stats & Resources */}
          <div className="space-y-8">
            <div className="bg-primary rounded-2xl p-8 text-white industrial-shadow relative overflow-hidden">
               <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-success-lime" />
                  <h3 className="font-bold text-lg">Métricas Clave</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-black text-white/50 uppercase tracking-widest">Presupuesto Ejecutado</p>
                    <p className="text-2xl font-bold">$12,450 / $18,000</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/50 uppercase tracking-widest">Horas de Ingeniería</p>
                    <p className="text-2xl font-bold">142h <span className="text-sm font-normal text-white/60">de 200h</span></p>
                  </div>
                </div>
               </div>
               <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="bg-surface rounded-2xl border border-industrial-border p-6 industrial-shadow space-y-6">
              <h4 className="font-bold text-primary flex items-center gap-2">
                <Paperclip className="w-4 h-4" /> Documentos Técnicos
              </h4>
              <div className="space-y-3">
                {['planos_finales.pdf', 'especificaciones_v3.xlsx', 'permisos_municipales.zip'].map(file => (
                  <button key={file} className="w-full flex items-center justify-between p-3 rounded-xl bg-background border border-industrial-border hover:border-primary transition-all group">
                    <span className="text-xs font-medium text-secondary group-hover:text-primary transition-colors">{file}</span>
                    <Clock className="w-4 h-4 text-secondary/30" />
                  </button>
                ))}
              </div>
            </div>

             <div className="bg-surface rounded-2xl border border-industrial-border p-6 industrial-shadow space-y-6">
              <h4 className="font-bold text-primary flex items-center gap-2">
                <MessageSquare className="w-4 h-4" /> Notas de Campo
              </h4>
              <div className="p-4 bg-background rounded-xl border-l-4 border-primary italic text-xs text-secondary leading-relaxed">
                "Se requiere validación de presión en el sector C antes de finalizar la fase de instalación hidráulica."
                <p className="mt-2 font-bold text-primary not-italic">— Ing. R. Toro, 12 Mayo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
