import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  if (props.isAuthenticated) {
    return <Route>{props.children}</Route>;
  } else {
    return (
      <Route>
        <Redirect to="/login" />
      </Route>
    );
  }
};

export default ProtectedRoute;
