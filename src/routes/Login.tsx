import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppState, userActions } from '../redux';

const Login: React.FC = () => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const { loggedIn, hasError } = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    return setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userActions.initLogin(formState));
    setFormState({ username: '', password: '' });
  };

  const renderErrors = () => {
    return (
      <h1 className="absolute top-2 text-red-500 text-xs text-center">
        username or password is incorrect, try again
      </h1>
    );
  };

  const renderForm = () => {
    const { username, password } = formState;
    const fieldErrorCls = hasError && 'shadow-err';
    const BtnDisabledConditions = username.length < 1 || password.length < 1;

    return (
      <div className="relative h-64 w-40 grid place-items-center shadow-md">
        {hasError && renderErrors()}
        <form
          action="#"
          className="grid place-items-center gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="username"
            className={`bg-transparent p-2 w-40 bg-white shadow-inner text-black ${fieldErrorCls}`}
            placeholder="Username..."
            autoComplete="username"
            value={username}
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            autoComplete="current-password"
            placeholder="Password..."
            className={`bg-transparent p-2 w-40 bg-white  text-black ${fieldErrorCls}`}
            value={password}
            onChange={handleChange}
          />
          <button
            type="submit"
            disabled={BtnDisabledConditions}
            className="bg-black uppercase text-xs w-40 px-4 py-2 text-white font-mono disabled:opacity-50"
          >
            log in
          </button>
        </form>
        <p className="absolute bottom-2 opacity-25 text-black text-sm">
          try 'user'
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
