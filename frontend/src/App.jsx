import React from 'react';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import AppRoutes from './app/routes';
import { ProductContextProvider } from './context/product.context';

function App() {
  return (
    <ProductContextProvider>
      <div className="app">
      <Header />
      <Navbar />
      <main>
        <AppRoutes />
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 EVERLANE. For demonstration purposes.</p>
        </div>
      </footer>
    </div>
    </ProductContextProvider>
  );
}

export default App;
