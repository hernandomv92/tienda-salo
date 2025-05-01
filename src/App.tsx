import AllProductsPage from './pages/AllProductsPage';
import NewArrivalsPage from './pages/NewArrivalsPage';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          
          <main className="flex-grow bg-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/nuevos-productos" element={<NewArrivalsPage />} />
              <Route path="/todos-los-productos" element={<AllProductsPage />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
        
        <WhatsAppButton />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;