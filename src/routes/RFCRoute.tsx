/** @format */

import React from "react";
import { Route as DefaultRoute, Navigate, RouteProps } from "react-router-dom";

type RFCRouteProps = RouteProps & {
  children?: React.ReactNode;
  middlewares?: Array<() => boolean>;
}

const Route: React.FC<RFCRouteProps>  = ({
  middlewares = [],
  ...rest
}) => {
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
    return <Navigate to="/access-denied" />;
  }

  return <DefaultRoute {...rest} />;
};

export default Route;
