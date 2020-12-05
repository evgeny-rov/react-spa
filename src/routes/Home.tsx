import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

const UserProfile: React.FC = () => {
  return (
    <div className="grid place-items-center">
      <h1>PROFILE PAGE</h1>
    </div>
  );
};

const Messages: React.FC = () => {
  return (
    <div className="grid place-items-center">
      <h1>MESSAGES PAGE</h1>
    </div>
  );
};

const Home: React.FC = () => {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <nav className="flex items-center space-x-4 w-full h-16 p-6 bg-yellow-100">
        <Link to={`${url}/profile`}>profile</Link>
        <Link to={`${url}/msg`}>messages</Link>
      </nav>
      <Switch>
        <Route exact path={`${path}/profile`}>
          <UserProfile />
        </Route>
        <Route exact path={`${path}/msg`}>
          <Messages />
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
