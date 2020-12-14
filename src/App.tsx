import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from './redux';
import ProtectedRoute from './routes/ProtectedRoute';
import Home from './routes/Home';
import Login from './routes/Login';

const App: React.FC = () => {
  const { loggedIn } = useSelector((state: AppState) => state.user);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>
        <ProtectedRoute path="/home" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
