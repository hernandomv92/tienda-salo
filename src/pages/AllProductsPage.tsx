import React from 'react';
import { products } from '../data/products';
import ProductGrid from '../components/shop/ProductGrid';

const AllProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Todos los Productos</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default AllProductsPage;
