import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Route from './RFCRoute';
import HomePage from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';

const AppRoute: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/dashboard" element={<Dashboard />} middlewares={[authMiddleware]} /> */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
};

export default AppRoute;
