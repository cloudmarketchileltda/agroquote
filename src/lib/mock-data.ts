export interface Quote {
  id: string;
  client: string;
  project: string;
  total: number;
  status: 'draft' | 'sent' | 'approved' | 'rejected';
  date: string;
  items: QuoteItem[];
}

export interface QuoteItem {
  id: string;
  name: string;
  sku: string;
  quantity: number;
  price: number;
  category: string;
}

export interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  status: 'active' | 'lead' | 'inactive';
  lastActivity: string;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  type: string;
  progress: number;
  status: 'on-track' | 'at-risk' | 'completed';
  dueDate: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: 'Maquinaria Agrícola' | 'Viveros e Invernaderos' | 'Riego y Automatización' | 'Servicios Técnicos';
  price: number;
  stock: number;
  image: string;
  description: string;
  longDescription: string;
  specs: Record<string, string>;
  features: string[];
}

export const mockQuotes: Quote[] = [
  {
    id: 'QT-2024-001',
    client: 'Agrícola Los Olivos',
    project: 'Sistema de Riego Tecnificado - Sector B',
    total: 12540.50,
    status: 'approved',
    date: '2024-05-10',
    items: [
      { id: '1', name: 'Bomba Centrifuga 5HP', sku: 'PMP-5HP-01', quantity: 2, price: 1200, category: 'Riego y Automatización' },
      { id: '2', name: 'Tubería PVC 110mm', sku: 'PIPE-110-PVC', quantity: 50, price: 15.50, category: 'Viveros e Invernaderos' },
    ]
  },
  {
    id: 'QT-2024-002',
    client: 'Viveros del Valle',
    project: 'Automatización Invernadero 4',
    total: 8900.00,
    status: 'sent',
    date: '2024-05-12',
    items: [
      { id: '3', name: 'Controlador IoT Agro', sku: 'CTRL-IOT-04', quantity: 1, price: 2500, category: 'Riego y Automatización' },
    ]
  },
  {
    id: 'QT-2024-003',
    client: 'Cooperativa Frutícola',
    project: 'Ampliación Cámara Frío',
    total: 45600.00,
    status: 'draft',
    date: '2024-05-13',
    items: []
  },
  {
    id: 'QT-2024-004',
    client: 'Hacienda El Roble',
    project: 'Mantenimiento Tractores John Deere',
    total: 3200.00,
    status: 'rejected',
    date: '2024-05-08',
    items: []
  }
];

export const mockClients: Client[] = [
  { id: 'CL-001', name: 'Francisco Valenzuela', company: 'Agrícola FV', email: 'fvalenzuela@agricolafv.cl', phone: '+56 9 1234 5678', location: 'Rancagua, Chile', status: 'active', lastActivity: '2h ago' },
  { id: 'CL-002', name: 'María Ignacia Rivas', company: 'Viveros del Sur', email: 'mrivas@viverosdelsur.cl', phone: '+56 9 8765 4321', location: 'Talca, Chile', status: 'active', lastActivity: '1d ago' },
  { id: 'CL-003', name: 'Roberto Méndez', company: 'Frutos del Maipo', email: 'rmendez@frutosmaipo.cl', phone: '+56 9 5555 4444', location: 'Buin, Chile', status: 'lead', lastActivity: '3d ago' },
];

export const mockProjects: Project[] = [
  { id: 'PRJ-001', name: 'Instalación Riego Sector Norte', client: 'Agrícola Los Olivos', type: 'Infraestructura', progress: 75, status: 'on-track', dueDate: '2024-06-15' },
  { id: 'PRJ-002', name: 'Modernización Packings', client: 'Frutícola Santa Inés', type: 'Tecnología', progress: 30, status: 'at-risk', dueDate: '2024-07-01' },
  { id: 'PRJ-003', name: 'Certificación ISO 14001', client: 'Exportadora Green', type: 'Consultoría', progress: 100, status: 'completed', dueDate: '2024-05-01' },
];

export const mockProducts: Product[] = [
  {
    id: 'P-001',
    name: 'Tractor Industrial Aurora-X',
    sku: 'TRA-AUR-X1',
    category: 'Maquinaria Agrícola',
    price: 85400,
    stock: 5,
    image: '/products/tractor.png',
    description: 'Tractor de alta potencia con sistema de guiado autónomo.',
    longDescription: 'El Aurora-X redefine la eficiencia en el campo. Equipado con un motor de última generación y sistemas de inteligencia artificial para optimización de rutas y consumo de combustible.',
    specs: { Potencia: '250 HP', Tracción: '4x4', Transmisión: 'CVT Auto' },
    features: ['GPS Integrado', 'Cabina Climatizada', 'Telemetría Real-time']
  },
  {
    id: 'P-002',
    name: 'Invernadero Automatizado Pro-V8',
    sku: 'INV-PRO-V8',
    category: 'Viveros e Invernaderos',
    price: 12500,
    stock: 12,
    image: '/products/greenhouse.png',
    description: 'Estructura de acero galvanizado con control climático total.',
    longDescription: 'Invernadero de grado industrial diseñado para cultivos de alta densidad. Incluye sensores de temperatura, humedad e iluminación controlados por el sistema central AgroQuote.',
    specs: { Superficie: '500 m2', Altura: '4.5 m', Material: 'Acero Galv.' },
    features: ['Riego Automático', 'Sensores IoT', 'Ventilación Forzada']
  },
  {
    id: 'P-003',
    name: 'Estación de Bombeo Smart-Flow',
    sku: 'RI-SFLOW-01',
    category: 'Riego y Automatización',
    price: 3450,
    stock: 8,
    image: '/products/irrigation.png',
    description: 'Sistema de bombeo con variador de frecuencia inteligente.',
    longDescription: 'Optimiza el uso de energía y agua con nuestra estación de bombeo de alta precisión. Compatible con protocolos de automatización industrial.',
    specs: { Caudal: '45 m3/h', Presión: '6 Bar', Consumo: '7.5 kW' },
    features: ['Variador de Frecuencia', 'Protección IP65', 'Filtro Automático']
  },
  {
    id: 'P-004',
    name: 'Sensor Foliar Agri-Sense Pro',
    sku: 'AUT-ASPRO-X',
    category: 'Riego y Automatización',
    price: 450,
    stock: 150,
    image: '/products/automation.png',
    description: 'Monitorización multiespectral de salud foliar.',
    longDescription: 'El sensor más avanzado para la detección temprana de estrés hídrico y carencias nutricionales en cultivos de exportación.',
    specs: { Rango: 'Multiespectral', Conexión: 'LoRaWAN', Batería: '5 años' },
    features: ['Detección de Estrés', 'Instalación Plug&Play', 'Cloud Analytics']
  }
];

