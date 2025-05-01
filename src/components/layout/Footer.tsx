import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and description */}
          <div>
            <Link to="/" className="text-xl font-bold text-black mb-4 block">
              <span className="text-pink-400">Joyas</span>Mágicas
            </Link>
            <p className="text-gray-600 mb-4">
              Joyería artesanal hecha a mano con amor y dedicación por una joven emprendedora.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/@pokenando23" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/pulseras" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Pulseras
                </Link>
              </li>
              <li>
                <Link to="/category/collares" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Collares
                </Link>
              </li>
              <li>
                <Link to="/category/anillos" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Anillos
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-pink-400" />
                <a 
                  href="mailto:info@joyasmagicas.com" 
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  info@joyasmagicas.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-pink-400" />
                <a 
                  href="tel:+123456789" 
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} JoyasMágicas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;