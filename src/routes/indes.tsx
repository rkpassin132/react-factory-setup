import React from 'react';
import { Navigate, BrowserRouter as Router, Routes } from 'react-router-dom';
import RFCRoute from './RFCRoute';
import HomePage from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <RFCRoute path="/" element={<HomePage />} />
        {/* <RFCRoute path="/dashboard" element={<Dashboard />} middlewares={[authMiddleware]} /> */}
        <RFCRoute path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
};

export default App;
