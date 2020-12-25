import React, { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppState, userActions } from '../redux';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const { loggedIn, hasError } = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userActions.initLogin(username));
    setUsername('');
  };

  const renderErrors = () => {
    return (
      <h1 className="absolute top-4 text-red-500 text-xs text-center">
        user is not found.
      </h1>
    );
  };

  const renderForm = () => {
    const fieldErrorCls = hasError && 'shadow-err';

    return (
      <div className="relative h-48 w-60 grid place-items-center">
        {hasError && renderErrors()}
        <form
          action="#"
          className="grid place-items-center w-full"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="username"
            className={`bg-transparent p-2 w-full h-10 bg-white shadow-inner rounded-t-md text-black ${fieldErrorCls}`}
            placeholder="Your GitHub Username..."
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target?.value)}
          />
          <button
            type="submit"
            disabled={username.length < 1}
            className="bg-black uppercase text-xs w-full h-10 rounded-b-md text-white font-mono disabled:opacity-50"
          >
            log in
          </button>
        </form>
        <p className="absolute bottom-2 opacity-25 text-black text-sm text-center">
          put '*' in front of your username to login as admin.
        </p>
      </div>
    );
  };

  if (loggedIn) return <Redirect to="/" />;

  return (
    <div className="min-h-screen w-full grid place-items-center">
      {renderForm()}
    </div>
  );
};

export default Login;
