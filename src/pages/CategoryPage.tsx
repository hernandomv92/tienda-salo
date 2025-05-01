import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FilterSection from '../components/ui/FilterSection';
import ProductGrid from '../components/shop/ProductGrid';
import { products } from '../data/products';
import { Gender, AgeGroup, Product, ProductCategory } from '../types';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroup | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      let filtered = [...products];
      
      // Filter by category
      if (category) {
        filtered = filtered.filter(product => product.category === category);
      }
      
      // Filter by gender
      if (selectedGender) {
        filtered = filtered.filter(product => product.gender === selectedGender);
      }
      
      // Filter by age group
      if (selectedAgeGroup) {
        filtered = filtered.filter(product => product.ageGroup === selectedAgeGroup);
      }
      
      setFilteredProducts(filtered);
      setLoading(false);
    }, 300); // Simulating loading time
  }, [category, selectedGender, selectedAgeGroup]);
  
  // Get category display name
  const getCategoryName = () => {
    switch (category) {
      case 'pulseras': return 'Pulseras';
      case 'collares': return 'Collares';
      case 'anillos': return 'Anillos';
      default: return 'Productos';
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12 pt-24">
      <h1 className="text-3xl font-bold mb-8">{getCategoryName()}</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters (sidebar) */}
        <div className="md:w-64 flex-shrink-0">
          <FilterSection
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            selectedAgeGroup={selectedAgeGroup}
            setSelectedAgeGroup={setSelectedAgeGroup}
          />
        </div>
        
        {/* Products */}
        <div className="flex-1">
          <ProductGrid products={filteredProducts} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;