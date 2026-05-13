export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  basePrice: number;
  specs: Record<string, string>;
  image: string;
  stock?: number;
  status?: 'available' | 'low_stock' | 'out_of_stock';
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Tractor Industrial AG-9000',
    category: 'Maquinaria Pesada',
    description: 'Tractor de alta potencia para proyectos de gran escala, optimizado para terrenos difíciles con sistema de guiado por GPS avanzado.',
    basePrice: 125000,
    stock: 5,
    status: 'available',
    specs: {
      'Potencia': '450 HP',
      'Transmisión': 'Automática de 12 marchas',
      'Capacidad Hidráulica': '150 L/min',
      'Motor': '6 cilindros Turbo',
      'Peso': '14.500 kg'
    },
    image: 'https://images.unsplash.com/photo-1592910129881-892b7b392355?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Sistema Automatizado de Riego V2',
    category: 'Automatización',
    description: 'Controlador inteligente con sensores de humedad y clima integrados para invernaderos y cultivos abiertos.',
    basePrice: 4500,
    stock: 24,
    status: 'available',
    specs: {
      'Sensores': 'Humedad, Temperatura, CO2',
      'Conectividad': 'WiFi / LoRaWAN / 4G',
      'Zonas': 'Hasta 16',
      'Voltaje': '220V / Solar 24V'
    },
    image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Invernadero Modular Industrial',
    category: 'Estructuras',
    description: 'Estructura de acero galvanizado con cobertura de policarbonato de alta resistencia y sistema de ventilación lateral.',
    basePrice: 85000,
    stock: 3,
    status: 'low_stock',
    specs: {
      'Dimensiones': '100m x 20m',
      'Material': 'Acero Galvanizado G90',
      'Resistencia Viento': '120 km/h',
      'Altura Cenital': '6.5m'
    },
    image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Dron de Fumigación AeroCrop X4',
    category: 'Maquinaria Pesada',
    description: 'Dron industrial para aplicación de fertilizantes y pesticidas con precisión centimétrica.',
    basePrice: 18500,
    stock: 12,
    status: 'available',
    specs: {
      'Capacidad': '30 Litros',
      'Autonomía': '25 min por batería',
      'Ancho de Aspersión': '9 metros',
      'Sensores': 'Radar Obstáculos 360°'
    },
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Cosechadora Automática de Frutos',
    category: 'Maquinaria Pesada',
    description: 'Sistema robótico de recolección selectiva mediante IA y visión computacional.',
    basePrice: 210000,
    stock: 1,
    status: 'low_stock',
    specs: {
      'IA': 'Neural Engine v4',
      'Velocidad': '1.2 ton/hora',
      'Precisión': '98% detección madurez',
      'Peso': '3.200 kg'
    },
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop'
  }
];

export interface Client {
  id: string;
  name: string;
  company: string;
  industry: string;
  email: string;
  phone: string;
  status: 'active' | 'prospect' | 'inactive';
  location: string;
}

export const MOCK_CLIENTS: Client[] = [
  {
    id: 'c1',
    name: 'Juan Pérez',
    company: 'Agroexportadora Los Andes',
    industry: 'Frutícola',
    email: 'juan.perez@losandes.cl',
    phone: '+56 9 1234 5678',
    status: 'active',
    location: 'Rancagua, Chile'
  },
  {
    id: 'c2',
    name: 'María García',
    company: 'Viveros del Norte',
    industry: 'Viveros',
    email: 'mgarcia@viverosnorte.cl',
    phone: '+56 9 8765 4321',
    status: 'prospect',
    location: 'La Serena, Chile'
  },
  {
    id: 'c3',
    name: 'Ricardo Soto',
    company: 'Agrícola San José',
    industry: 'Cereales',
    email: 'rsoto@sanjose.cl',
    phone: '+56 9 5555 4444',
    status: 'active',
    location: 'Curicó, Chile'
  },
  {
    id: 'c4',
    name: 'Elena Fuentes',
    company: 'Frutícola El Sol',
    industry: 'Frutícola',
    email: 'efuentes@elsol.cl',
    phone: '+56 9 1111 2222',
    status: 'inactive',
    location: 'Angol, Chile'
  }
];

export interface Project {
  id: string;
  name: string;
  client: string;
  status: 'in_progress' | 'completed' | 'delayed' | 'pending';
  progress: number;
  dueDate: string;
  type: string;
  description?: string;
}

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'PRJ-001',
    name: 'Instalación Invernaderos Los Andes',
    client: 'Agroexportadora Los Andes',
    status: 'in_progress',
    progress: 65,
    dueDate: '2024-06-15',
    type: 'Estructuras'
  },
  {
    id: 'PRJ-002',
    name: 'Automatización Riego Viveros Norte',
    client: 'Viveros del Norte',
    status: 'completed',
    progress: 100,
    dueDate: '2024-05-20',
    type: 'Automatización'
  },
  {
    id: 'PRJ-003',
    name: 'Mantenimiento Preventivo Zona Sur',
    client: 'Frutícola El Sol',
    status: 'delayed',
    progress: 40,
    dueDate: '2024-05-30',
    type: 'Servicios'
  },
  {
    id: 'PRJ-004',
    name: 'Implementación Drones San José',
    client: 'Agrícola San José',
    status: 'pending',
    progress: 0,
    dueDate: '2024-07-01',
    type: 'Maquinaria'
  }
];

export interface Quote {
  id: string;
  clientId: string;
  clientName: string;
  title: string;
  total: number;
  status: 'draft' | 'sent' | 'approved' | 'rejected';
  date: string;
  items: {
    productId: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }[];
}

export const MOCK_QUOTES: Quote[] = [
  {
    id: 'Q-2024-001',
    clientId: 'c1',
    clientName: 'Agroexportadora Los Andes',
    title: 'Modernización de Riego - Sector A',
    total: 12500,
    status: 'approved',
    date: '2024-05-10',
    items: [
      { productId: '2', productName: 'Sistema Automatizado de Riego V2', quantity: 2, unitPrice: 4500, total: 9000 },
      { productId: 'service-1', productName: 'Instalación Técnica', quantity: 1, unitPrice: 3500, total: 3500 }
    ]
  },
  {
    id: 'Q-2024-002',
    clientId: 'c2',
    clientName: 'Viveros del Norte',
    title: 'Proyecto Invernadero Automático',
    total: 95000,
    status: 'sent',
    date: '2024-05-12',
    items: [
      { productId: '3', productName: 'Invernadero Modular Industrial', quantity: 1, unitPrice: 85000, total: 85000 },
      { productId: '2', productName: 'Sistema Automatizado de Riego V2', quantity: 2, unitPrice: 5000, total: 10000 }
    ]
  },
  {
    id: 'Q-2024-003',
    clientId: 'c3',
    clientName: 'Agrícola San José',
    title: 'Adquisición Maquinaria Pesada',
    total: 335000,
    status: 'draft',
    date: '2024-05-14',
    items: [
      { productId: '1', productName: 'Tractor Industrial AG-9000', quantity: 2, unitPrice: 125000, total: 250000 },
      { productId: '5', productName: 'Cosechadora Automática de Frutos', quantity: 1, unitPrice: 85000, total: 85000 }
    ]
  }
];
