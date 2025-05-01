import React from 'react';
import { NavLink } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-40 pt-16 bg-white">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex flex-col space-y-6">
          <NavLink
            to="/category/pulseras"
            className={({ isActive }) =>
              `text-xl font-medium ${isActive ? 'text-pink-500' : 'text-black'}`
            }
          >
            Pulseras
          </NavLink>
          <NavLink
            to="/category/collares"
            className={({ isActive }) =>
              `text-xl font-medium ${isActive ? 'text-pink-500' : 'text-black'}`
            }
          >
            Collares
          </NavLink>
          <NavLink
            to="/category/anillos"
            className={({ isActive }) =>
              `text-xl font-medium ${isActive ? 'text-pink-500' : 'text-black'}`
            }
          >
            Anillos
          </NavLink>
          
          <div className="pt-6 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Filtrar por:</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-medium mb-2">Género</h4>
                <ul className="space-y-2 pl-2">
                  <li>
                    <NavLink to="/filter/gender/mujer" className="text-gray-600 hover:text-pink-500">
                      Mujer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/filter/gender/hombre" className="text-gray-600 hover:text-pink-500">
                      Hombre
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/filter/gender/unisex" className="text-gray-600 hover:text-pink-500">
                      Unisex
                    </NavLink>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-medium mb-2">Edad</h4>
                <ul className="space-y-2 pl-2">
                  <li>
                    <NavLink to="/filter/age/niños" className="text-gray-600 hover:text-pink-500">
                      Niños
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/filter/age/adolescentes" className="text-gray-600 hover:text-pink-500">
                      Adolescentes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/filter/age/adultos" className="text-gray-600 hover:text-pink-500">
                      Adultos
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;