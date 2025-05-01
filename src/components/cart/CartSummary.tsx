import React from 'react';
import { useCart } from '../../contexts/CartContext';
import Button from '../ui/Button';

interface CartSummaryProps {
  onCheckout?: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ onCheckout }) => {
  const { items, cartTotal } = useCart();
  
  const subtotal = cartTotal;
  const shipping = subtotal > 50 ? 0 : 4.99;
  const total = subtotal + shipping;
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 pb-4 border-b border-gray-100">
        Resumen de Compra
      </h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Envío</span>
          <span>
            {shipping === 0 ? 'Gratis' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        
        {shipping > 0 && (
          <div className="text-xs text-gray-500 pt-1">
            Envío gratis en compras de más de $50
          </div>
        )}
        
        <div className="pt-3 border-t border-gray-100 flex justify-between font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      
      <Button
        variant="primary"
        size="lg"
        fullWidth
        onClick={onCheckout}
        disabled={items.length === 0}
      >
        Proceder al Pago
      </Button>
      
      <div className="mt-4 text-center text-xs text-gray-500">
        <p>Pagos seguros garantizados</p>
        <div className="flex justify-center space-x-2 mt-2">
          <span className="px-2 py-1 bg-gray-100 rounded">Visa</span>
          <span className="px-2 py-1 bg-gray-100 rounded">Mastercard</span>
          <span className="px-2 py-1 bg-gray-100 rounded">PayPal</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;