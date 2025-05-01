import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import { Product } from '../../types';

interface FeaturedProductsProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ 
  title, 
  products,
  viewAllLink
}) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-black">{title}</h2>
          {viewAllLink && (
            <Link 
              to={viewAllLink} 
              className="text-pink-500 font-medium hover:text-pink-600 transition-colors flex items-center"
            >
              Ver todo
              <span className="ml-1">→</span>
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;