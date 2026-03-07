import React from 'react';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import AppRoutes from './app/routes';
import AppProvider from './providers/AppProvider';
import Footer from './components/home/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <AppProvider>
      <div className="app">
      <Header />
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
    </AppProvider>
    </BrowserRouter>
  );
}

export default App;
