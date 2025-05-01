import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Pulsera Arcoíris',
    price: 12.99,
    images: [
      'https://i.imgur.com/zNeusy1.jpeg',
      'https://i.imgur.com/zNeusy1.jpeg',
      'https://i.imgur.com/8IwwIKH.jpeg'
    ],
    category: 'pulseras',
    gender: 'mujer',
    ageGroup: 'adolescentes',
    featured: true,
    newArrival: true,
    bestseller: false,
    description: '¡Dale color a tus días! 🌈Nuestra Pulsera Arcoíris está hecha a mano con amor, combinando perlitas brillantes y tonos vibrantes que van con todo.',
    stock: 15
  },
  {
    id: '2',
    name: 'Collar Mariposa',
    price: 15.99,
    images: [
      'https://images.pexels.com/photos/9428822/pexels-photo-9428822.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/9428834/pexels-photo-9428834.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'collares',
    gender: 'mujer',
    ageGroup: 'adolescentes',
    featured: true,
    newArrival: false,
    bestseller: true,
    description: 'Delicado collar con dije de mariposa bañado en plata. Un accesorio perfecto para añadir un toque de elegancia a cualquier conjunto.',
    stock: 10
  },
  {
    id: '3',
    name: 'Anillo Estrella',
    price: 9.99,
    images: [
      'https://images.pexels.com/photos/9873920/pexels-photo-9873920.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/9873895/pexels-photo-9873895.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'anillos',
    gender: 'unisex',
    ageGroup: 'niños',
    featured: false,
    newArrival: true,
    bestseller: false,
    description: 'Anillo ajustable con forma de estrella. Ideal para niños y diseñado para brindar comodidad mientras se luce un estilo único.',
    stock: 20
  },
  {
    id: '4',
    name: 'Pulsera Amistad',
    price: 8.99,
    images: [
      'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/9428824/pexels-photo-9428824.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'pulseras',
    gender: 'unisex',
    ageGroup: 'adolescentes',
    featured: true,
    newArrival: false,
    bestseller: true,
    description: 'Pulsera de la amistad tejida a mano con hilos de colores vibrantes. Un regalo perfecto para compartir con amigos especiales.',
    stock: 25
  },
  {
    id: '5',
    name: 'Collar Surfero',
    price: 11.99,
    images: [
      'https://images.pexels.com/photos/10986673/pexels-photo-10986673.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5370705/pexels-photo-5370705.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'collares',
    gender: 'hombre',
    ageGroup: 'adolescentes',
    featured: false,
    newArrival: true,
    bestseller: false,
    description: 'Collar estilo surfero con cuentas de madera y conchas marinas. Perfecto para un look relajado y veraniego.',
    stock: 12
  },
  {
    id: '6',
    name: 'Anillo Flor',
    price: 7.99,
    images: [
      'https://images.pexels.com/photos/10179285/pexels-photo-10179285.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/10179293/pexels-photo-10179293.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'anillos',
    gender: 'mujer',
    ageGroup: 'niños',
    featured: true,
    newArrival: false,
    bestseller: true,
    description: 'Anillo infantil con diseño de flor en colores pastel. Ajustable y cómodo para las manos pequeñas.',
    stock: 18
  },
  {
    id: '7',
    name: 'Pulsera Cuero',
    price: 14.99,
    images: [
      'https://images.pexels.com/photos/10986677/pexels-photo-10986677.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/10986678/pexels-photo-10986678.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'pulseras',
    gender: 'hombre',
    ageGroup: 'adultos',
    featured: true,
    newArrival: false,
    bestseller: false,
    description: 'Pulsera de cuero trenzado con detalles metálicos. Un accesorio masculino elegante y duradero.',
    stock: 8
  },
  {
    id: '8',
    name: 'Collar Corazón',
    price: 18.99,
    images: [
      'https://images.pexels.com/photos/6045788/pexels-photo-6045788.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6045787/pexels-photo-6045787.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'collares',
    gender: 'mujer',
    ageGroup: 'adultos',
    featured: true,
    newArrival: true,
    bestseller: true,
    description: 'Delicado collar con dije de corazón decorado con pequeños cristales. El regalo perfecto para ocasiones especiales.',
    stock: 5
  },
  {
    id: '9',
    name: 'Anillo Trenzado',
    price: 13.99,
    images: [
      'https://images.pexels.com/photos/9428858/pexels-photo-9428858.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/9428859/pexels-photo-9428859.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'anillos',
    gender: 'unisex',
    ageGroup: 'adultos',
    featured: false,
    newArrival: true,
    bestseller: false,
    description: 'Anillo trenzado de hilos metálicos en tonos plateados y dorados. Una pieza única que combina con cualquier estilo.',
    stock: 15
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getNewArrivals = () => {
  return products.filter(product => product.newArrival);
};

export const getBestsellers = () => {
  return products.filter(product => product.bestseller);
};