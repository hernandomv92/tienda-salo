import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../contexts/CartContext';
import { Trash } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex py-4 border-b border-gray-100 last:border-0">
      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      <div className="ml-4 flex-1 flex flex-col">
        <div className="flex justify-between">
          <div>
            <Link 
              to={`/product/${product.id}`}
              className="font-medium text-black hover:text-pink-500 transition-colors"
            >
              {product.name}
            </Link>
            <p className="mt-1 text-sm text-gray-500 capitalize">
              {product.gender} • {product.ageGroup}
            </p>
          </div>
          <p className="font-medium">${product.price.toFixed(2)}</p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center border border-gray-200 rounded-md">
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black"
              onClick={() => updateQuantity(product.id, quantity - 1)}
              aria-label="Disminuir cantidad"
            >
              −
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black"
              onClick={() => updateQuantity(product.id, quantity + 1)}
              aria-label="Aumentar cantidad"
              disabled={quantity >= product.stock}
            >
              +
            </button>
          </div>
          
          <button
            type="button"
            className="text-gray-400 hover:text-red-500 transition-colors"
            onClick={() => removeFromCart(product.id)}
            aria-label="Eliminar"
          >
            <Trash size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;