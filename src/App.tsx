import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from './routes';
import Home from './routes/Home';
import Login from './routes/Login';

const App: React.FC = () => {
  const [isAuthenticated, setAuth] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>
        <ProtectedRoute path="/home" isAuthenticated={isAuthenticated}>
          <Home />
        </ProtectedRoute>
        <Route path="/login">
          <Login setAuth={setAuth} isAuthenticated={isAuthenticated} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
