import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import Button from './Button';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <Link to={`/product/${product.id}`} className="block overflow-hidden group relative">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {product.newArrival && (
          <div className="absolute top-2 left-2 bg-pink-300 text-black text-xs font-bold px-2 py-1 rounded-full">
            ¡Nuevo!
          </div>
        )}
        
        {product.bestseller && (
          <div className="absolute top-2 right-2 bg-purple-200 text-black text-xs font-bold px-2 py-1 rounded-full">
            Más Vendido
          </div>
        )}
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2 flex-grow">
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="text-lg font-medium text-gray-900 hover:text-pink-500 transition-colors duration-200">
              {product.name}
            </h3>
          </Link>
          <div className="flex justify-between items-center mt-1">
            <p className="text-gray-600 text-sm capitalize">{product.category}</p>
            <p className="text-gray-600 text-sm capitalize">
              {product.gender === 'mujer' ? 'Mujer' : 
               product.gender === 'hombre' ? 'Hombre' : 'Unisex'}
            </p>
          </div>
        </div>
        
        <div className="mt-2 flex items-end justify-between">
          <span className="text-lg font-bold text-black">${product.price.toFixed(2)}</span>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1);
            }}
          >
            Añadir
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;