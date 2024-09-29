/** @format */

import React from 'react';
import { Navigate, RouteProps, Outlet } from 'react-router-dom';

type MiddlewareWrapperProps = RouteProps & {
  children?: React.ReactNode;
  middlewares?: Array<() => boolean>;
};

const MiddlewareWrapper: React.FC<MiddlewareWrapperProps> = ({
  middlewares = [],
  ...rest
}): React.ReactElement | null => {
  // Middleware execution
  const runMiddlewares = () => {
    for (const middleware of middlewares) {
      if (!middleware()) {
        return false;
      }
    }
    return true;
  };

  if (!runMiddlewares()) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default MiddlewareWrapper;
