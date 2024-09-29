import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import MiddlewareWrapper from './MiddlewareWrapper';
import HomePage from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';

const AppRoute: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        {/* <Route path="/admin/" element={<MiddlewareWrapper middlewares={[]} />} >
          <Route index path="dashboard" element={<DashboardPage />} />
        </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
