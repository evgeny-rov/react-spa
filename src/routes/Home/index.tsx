import React from 'react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Posts from './Posts';
import Users from './Users';

const Home: React.FC = () => {
  const { url, path } = useRouteMatch();

  return (
    <div className="w-full h-full">
      <nav className="sticky top-0 flex items-center space-x-4 w-full h-8 p-6 uppercase bg-white shadow-md">
        <Link to={`${url}/users`}>users</Link>
        <Link to={`${url}/posts`}>posts</Link>
      </nav>
      <Switch>
        <Route exact path={`${path}/users`}>
          <Users />
        </Route>
        <Route exact path={`${path}/posts`}>
          <Posts />
        </Route>
        <Route path={path}>
          <Redirect to={`${path}/posts`} />
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
