import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Banner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-pink-50 to-purple-50 py-16 md:py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            Pulseras hechas a mano con amor – ¡Descubre tu favorita hoy!
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Cada pieza es única y creada con dedicación para que brilles con un estilo auténtico y personal.
          </p>
          <div className="space-x-4">
           
            <Link
              to="/nuevos-productos"
              className="inline-block border border-black px-6 py-3 text-black rounded-md hover:bg-pink-100 transition"
            >
              Ver Nuevos Productos
            </Link>

          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-12 right-0 w-64 h-64 bg-pink-200 rounded-full opacity-30"></div>
      <div className="absolute top-12 right-12 w-32 h-32 bg-purple-200 rounded-full opacity-30"></div>
      <div className="absolute -left-16 top-24 w-48 h-48 bg-teal-200 rounded-full opacity-30"></div>
    </div>
  );
};

export default Banner;