import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { getProductById } from '../../data/products';
import Button from '../ui/Button';
import { useCart } from '../../contexts/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const product = id ? getProductById(id) : null;
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
        <p className="mb-6">Lo sentimos, no pudimos encontrar el producto que buscas.</p>
        <Button onClick={() => navigate(-1)}>Volver</Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    
    // Reset added to cart status after 3 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };
  
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, Math.min(newQuantity, product.stock)));
  };

  return (
    <div className="container mx-auto px-4 py-12 mt-12">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-pink-500 transition-colors mb-6"
      >
        <ArrowLeft size={18} className="mr-2" />
        Volver
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                    currentImageIndex === index ? 'border-pink-400' : 'border-transparent'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} - imagen ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold text-black">${product.price.toFixed(2)}</p>
            
            <div className="flex items-center space-x-4 mt-4">
              <div className="capitalize text-sm px-3 py-1 bg-gray-100 rounded-full">
                {product.category}
              </div>
              <div className="capitalize text-sm px-3 py-1 bg-gray-100 rounded-full">
                {product.gender}
              </div>
              <div className="capitalize text-sm px-3 py-1 bg-gray-100 rounded-full">
                {product.ageGroup}
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-2">Descripción</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Cantidad</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-200 rounded-md">
                <button
                  type="button"
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  aria-label="Disminuir cantidad"
                >
                  −
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button
                  type="button"
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  aria-label="Aumentar cantidad"
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
              </div>
              <span className="text-sm text-gray-500">
                {product.stock} disponibles
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={handleAddToCart}
              disabled={addedToCart}
              className="group"
            >
              {addedToCart ? (
                <span className="flex items-center justify-center">
                  <Check size={18} className="mr-2" />
                  ¡Añadido al carrito!
                </span>
              ) : (
                'Añadir al carrito'
              )}
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              fullWidth
              onClick={() => {
                handleAddToCart();
                navigate('/cart');
              }}
            >
              ¡Comprar ahora!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;