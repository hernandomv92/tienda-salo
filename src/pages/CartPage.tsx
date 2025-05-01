import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import CartItem from '../components/ui/CartItem';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/ui/Button';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { items } = useCart();
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto px-4 py-12 pt-24">
      <h1 className="text-3xl font-bold mb-8">Tu Carrito</h1>
      
      {items.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Tu carrito está vacío</h2>
          <p className="text-gray-500 mb-6">Parece que aún no has agregado productos a tu carrito.</p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/')}
          >
            Continuar Comprando
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-6">
                {items.map(item => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Cart Summary */}
          <div>
            <CartSummary onCheckout={() => navigate('/checkout')} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;