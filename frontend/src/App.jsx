import React from 'react';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import AppRoutes from './app/routes';
import AppProvider from './providers/AppProvider';
import Footer from './components/home/Footer/Footer';

function App() {
  return (
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
  );
}

export default App;
