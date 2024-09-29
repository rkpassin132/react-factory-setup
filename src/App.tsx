import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRoute from './routes';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <AppRoute />
      <Footer />
    </div>
  );
};

export default App;
