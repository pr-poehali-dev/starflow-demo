export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewsCount: number;
  category: string;
  brand: string;
  description: string;
  features: string[];
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
}

export const categories: Category[] = [
  { id: '1', name: 'Смартфоны', icon: 'Smartphone', productCount: 156 },
  { id: '2', name: 'Наушники', icon: 'Headphones', productCount: 89 },
  { id: '3', name: 'Умные часы', icon: 'Watch', productCount: 45 },
  { id: '4', name: 'Ноутбуки', icon: 'Laptop', productCount: 78 },
  { id: '5', name: 'Планшеты', icon: 'Tablet', productCount: 34 },
  { id: '6', name: 'Телевизоры', icon: 'Tv', productCount: 67 },
];

export const products: Product[] = [
  {
    id: '1',
    title: 'StarPhone Pro Max 256GB',
    price: 89990,
    originalPrice: 99990,
    image: '/img/bb36984b-6b38-46bc-87c2-49e47d43a28b.jpg',
    rating: 4.8,
    reviewsCount: 1247,
    category: 'Смартфоны',
    brand: 'StarTech',
    description: 'Флагманский смартфон с революционной камерой и мощным процессором. Идеальное сочетание стиля и производительности.',
    features: [
      'Дисплей 6.7" OLED ProMotion 120Hz',
      'Тройная камера 48+12+12 МП',
      'Процессор A17 Pro',
      'Беспроводная зарядка 25W',
      'Face ID и Touch ID',
    ],
    inStock: true,
  },
  {
    id: '2',
    title: 'GameMaster Wireless Pro',
    price: 15990,
    originalPrice: 19990,
    image: '/img/b6bd2c81-0f40-4c88-a47f-07f40b5247eb.jpg',
    rating: 4.7,
    reviewsCount: 892,
    category: 'Наушники',
    brand: 'GameMaster',
    description: 'Профессиональные игровые наушники с RGB подсветкой и объемным звуком 7.1. Создай атмосферу победы!',
    features: [
      'Объемный звук 7.1',
      'RGB подсветка с синхронизацией',
      'Микрофон с шумоподавлением',
      'Время работы до 30 часов',
      'Беспроводное подключение',
    ],
    inStock: true,
  },
  {
    id: '3',
    title: 'SmartWatch Elite Purple',
    price: 24990,
    originalPrice: 29990,
    image: '/img/c7bd5041-5666-4a6d-b257-4d6d32bbdca0.jpg',
    rating: 4.6,
    reviewsCount: 543,
    category: 'Умные часы',
    brand: 'SmartTech',
    description: 'Элегантные умные часы с мониторингом здоровья и премиальным дизайном. Ваш персональный ассистент на запястье.',
    features: [
      'ЭКГ и SpO2 мониторинг',
      'GPS и NFC платежи',
      'Водонепроницаемость IP68',
      'Время работы до 7 дней',
      'AMOLED дисплей Always-On',
    ],
    inStock: true,
  },
  {
    id: '4',
    title: 'UltraBook Pro 15"',
    price: 129990,
    originalPrice: 149990,
    image: '/img/bb36984b-6b38-46bc-87c2-49e47d43a28b.jpg',
    rating: 4.9,
    reviewsCount: 234,
    category: 'Ноутбуки',
    brand: 'UltraTech',
    description: 'Мощный ноутбук для профессионалов с 16-ядерным процессором и графикой нового поколения.',
    features: [
      'Процессор Intel Core i9',
      'NVIDIA RTX 4080',
      '32GB RAM DDR5',
      '1TB SSD NVMe',
      'Дисплей 4K OLED',
    ],
    inStock: true,
  },
  {
    id: '5',
    title: 'Tablet Studio 12.9"',
    price: 79990,
    image: '/img/c7bd5041-5666-4a6d-b257-4d6d32bbdca0.jpg',
    rating: 4.7,
    reviewsCount: 678,
    category: 'Планшеты',
    brand: 'CreativeTech',
    description: 'Профессиональный планшет для творчества с поддержкой стилуса и мощной графикой.',
    features: [
      'Дисплей 12.9" Liquid Retina',
      'Процессор M2',
      'Поддержка Apple Pencil',
      '256GB встроенной памяти',
      'Камера 12MP с LiDAR',
    ],
    inStock: true,
  },
  {
    id: '6',
    title: 'Smart TV OLED 65"',
    price: 159990,
    originalPrice: 179990,
    image: '/img/b6bd2c81-0f40-4c88-a47f-07f40b5247eb.jpg',
    rating: 4.8,
    reviewsCount: 432,
    category: 'Телевизоры',
    brand: 'VisionTech',
    description: 'Премиальный OLED телевизор с технологией HDR10+ и умной операционной системой.',
    features: [
      'OLED дисплей 65"',
      'HDR10+ и Dolby Vision',
      'Smart OS с голосовым управлением',
      'Игровой режим 120Hz',
      'Dolby Atmos звук',
    ],
    inStock: false,
  },
];

export const banners = [
  {
    id: '1',
    title: 'Черная пятница',
    subtitle: 'Скидки до 70% на технику',
    buttonText: 'Успеть купить',
    image: '/img/bb36984b-6b38-46bc-87c2-49e47d43a28b.jpg',
    gradient: 'from-starflow-purple to-starflow-pink',
  },
  {
    id: '2',
    title: 'Новые поступления',
    subtitle: 'Последние модели смартфонов',
    buttonText: 'Посмотреть',
    image: '/img/c7bd5041-5666-4a6d-b257-4d6d32bbdca0.jpg',
    gradient: 'from-starflow-pink to-purple-600',
  },
];