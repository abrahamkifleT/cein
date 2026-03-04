import React from 'react';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import AppRoutes from './app/routes';
import AppProvider from './providers/AppProvider';

function App() {
  return (
    <AppProvider>
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
    </AppProvider>
  );
}

export default App;
