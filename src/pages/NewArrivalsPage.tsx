import React from 'react';
import { getNewArrivals } from '../data/products';
import ProductGrid from '../components/shop/ProductGrid';

const NewArrivalsPage: React.FC = () => {
  const newProducts = getNewArrivals();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Nuevos Productos</h1>
      <ProductGrid products={newProducts} />
    </div>
  );
};

export default NewArrivalsPage;
