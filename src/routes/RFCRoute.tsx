import React from 'react';
import { Route, Navigate } from 'react-router-dom';

type Middleware = () => JSX.Element | null;

interface MiddlewareRouteProps {
  element: React.ReactElement;  // The component to render
  middlewares?: Middleware[];   // Array of middleware functions
  path: string;                 // Path is required
}

const RFCRoute: React.FC<MiddlewareRouteProps> = ({ element, middlewares = [], path }) => {
  const renderWithMiddleware = (): JSX.Element | null => {
    // Execute each middleware
    for (const middleware of middlewares) {
      const result = middleware();
      if (result !== null) {
        return result; // If middleware fails, return its result (e.g., redirect)
      }
    }

    // If all middleware pass, return the element
    return element; // element is guaranteed to be a ReactElement
  };

  return (
    <Route
      path={path}
      element={renderWithMiddleware() ?? <Navigate to="/" />} // Fallback to a Navigate component if null
    />
  );
};

export default RFCRoute;
