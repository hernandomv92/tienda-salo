import React from 'react';
import Banner from '../components/home/Banner';
import FeaturedProducts from '../components/home/FeaturedProducts';
import { getFeaturedProducts, getNewArrivals, getBestsellers } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const bestsellers = getBestsellers();
  
  return (
    <div className="pt-16"> {/* Padding for header */}
      <Banner />
      
      <FeaturedProducts 
        title="Nuevos Productos" 
        products={newArrivals}
        viewAllLink="/new-arrivals"
      />
      
      <div className="bg-gray-50 py-12">
        <FeaturedProducts 
          title="Los Más Vendidos" 
          products={bestsellers}
          viewAllLink="/bestsellers"
        />
      </div>
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-pink-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Envío Gratis</h3>
              <p className="text-gray-600">En compras superiores a $50</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Hecho a Mano</h3>
              <p className="text-gray-600">Cada pieza es única y personal</p>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Garantía</h3>
              <p className="text-gray-600">Satisfacción garantizada</p>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProducts 
        title="Te Puede Gustar" 
        products={featuredProducts.slice(0, 4)}
        viewAllLink="/featured"
      />
    </div>
  );
};

export default Home;