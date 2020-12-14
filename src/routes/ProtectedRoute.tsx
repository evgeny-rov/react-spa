import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { AppState } from '../redux';

const ProtectedRoute: React.FC<RouteProps> = ({ component, ...routeProps }) => {
  const { loggedIn } = useSelector((state: AppState) => state.user);
  if (loggedIn) {
    return <Route {...routeProps} component={component} />;
  }
  return (
    <Route {...routeProps}>
      <Redirect to="/login" />
    </Route>
  );
};

export default ProtectedRoute;
