import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ShoppingBag } from 'lucide-react';
import CartItem from '../ui/CartItem';
import Button from '../ui/Button';
import { useCart } from '../../contexts/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Cart Panel */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-black">Tu Carrito</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-700">Tu carrito está vacío</h3>
                <p className="text-gray-500 mt-2 mb-6">¡Añade algunos productos para empezar!</p>
                <Button 
                  variant="primary" 
                  onClick={() => {
                    onClose();
                    navigate('/');
                  }}
                >
                  Continuar Comprando
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(item => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            )}
          </div>
          
          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              
              <Button 
                variant="primary" 
                size="lg" 
                fullWidth
                onClick={() => {
                  onClose();
                  navigate('/checkout');
                }}
              >
                Proceder al pago
              </Button>
              
              <div className="flex justify-between">
                <button
                  className="text-sm text-gray-500 hover:text-pink-500 transition-colors"
                  onClick={clearCart}
                >
                  Vaciar carrito
                </button>
                <button
                  className="text-sm text-gray-500 hover:text-pink-500 transition-colors"
                  onClick={onClose}
                >
                  Seguir comprando
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;