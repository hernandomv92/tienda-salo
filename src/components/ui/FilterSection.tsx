import React from 'react';
import { Gender, AgeGroup } from '../../types';

interface FilterSectionProps {
  selectedGender: Gender | null;
  setSelectedGender: (gender: Gender | null) => void;
  selectedAgeGroup: AgeGroup | null;
  setSelectedAgeGroup: (ageGroup: AgeGroup | null) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  selectedGender,
  setSelectedGender,
  selectedAgeGroup,
  setSelectedAgeGroup
}) => {
  const handleGenderChange = (gender: Gender | null) => {
    setSelectedGender(selectedGender === gender ? null : gender);
  };

  const handleAgeGroupChange = (ageGroup: AgeGroup | null) => {
    setSelectedAgeGroup(selectedAgeGroup === ageGroup ? null : ageGroup);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <h3 className="text-lg font-semibold mb-4">Filtros</h3>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Género</h4>
        <div className="space-y-2">
          <button
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              selectedGender === 'mujer' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'
            }`}
            onClick={() => handleGenderChange('mujer')}
          >
            Mujer
          </button>
          <button
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              selectedGender === 'hombre' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'
            }`}
            onClick={() => handleGenderChange('hombre')}
          >
            Hombre
          </button>
          <button
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              selectedGender === 'unisex' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'
            }`}
            onClick={() => handleGenderChange('unisex')}
          >
            Unisex
          </button>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-2">Edad</h4>
        <div className="space-y-2">
          <button
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              selectedAgeGroup === 'niños' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'
            }`}
            onClick={() => handleAgeGroupChange('niños')}
          >
            Niños
          </button>
          <button
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              selectedAgeGroup === 'adolescentes' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'
            }`}
            onClick={() => handleAgeGroupChange('adolescentes')}
          >
            Adolescentes
          </button>
          <button
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              selectedAgeGroup === 'adultos' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'
            }`}
            onClick={() => handleAgeGroupChange('adultos')}
          >
            Adultos
          </button>
        </div>
      </div>
      
      {(selectedGender || selectedAgeGroup) && (
        <button
          className="w-full mt-4 py-2 text-sm text-gray-600 hover:text-pink-600 transition-colors"
          onClick={() => {
            setSelectedGender(null);
            setSelectedAgeGroup(null);
          }}
        >
          Limpiar filtros
        </button>
      )}
    </div>
  );
};

export default FilterSection;