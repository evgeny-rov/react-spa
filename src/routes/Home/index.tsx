import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Hero from '../../components/Hero';
import { userActions } from '../../redux';
import Posts from './Posts';
import Users from './Users';

const Home: React.FC = () => {
  const { url, path } = useRouteMatch();
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full">
      <nav className="sticky top-0 px-6 grid grid-cols-3 items-center w-full h-10 bg-white shadow-md">
        <div className="space-x-4 uppercase">
          <Link to={`${url}/users`}>users</Link>
          <Link to={`${url}/posts`}>posts</Link>
        </div>
        <Hero />
        <button className="justify-self-end" onClick={() => dispatch(userActions.logOut())}>LOG OUT</button>
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
