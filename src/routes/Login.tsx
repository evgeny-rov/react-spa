import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppState, logIn } from '../redux';

const Login: React.FC = () => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { loggedIn } = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    return setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setTimeout(() => {
      setLoading(false);
      if (formState.username === 'user' && formState.password === 'user') {
        setFormState({ username: '', password: '' });
        dispatch(logIn());
      } else {
        setError(true);
      }
    }, 2000);
  };

  const renderErrors = () => {
    return (
      <h1 className="absolute top-12 text-red-500">
        username or password is incorrect, try again
      </h1>
    );
  };

  const renderLoading = () => {
    return (
      <div className="absolute h-full w-full grid place-items-center text-black">
        <p>Loading...</p>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <form
        action="#"
        className="grid place-items-center gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="username"
          className={`bg-transparent p-2 w-40 border-2 text-black ${
            hasError ? 'border-red-500' : 'border-black'
          }`}
          placeholder="Username..."
          autoComplete="username"
          value={formState.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          autoComplete="current-password"
          placeholder="Password..."
          className={`bg-transparent p-2 w-40 border-2 text-black ${
            hasError ? 'border-red-500' : 'border-black'
          }`}
          value={formState.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-black uppercase text-xs w-40 px-4 py-2 text-white font-mono"
        >
          log in
        </button>
      </form>
    );
  };

  if (loggedIn) return <Redirect to="/" />;

  return (
    <div className="min-h-screen w-full grid place-items-center">
      <div className="relative w-96 h-96 grid place-items-center shadow-md">
        {hasError && renderErrors()}
        {isLoading ? renderLoading() : renderForm()}
        <p className="absolute bottom-4 opacity-25 text-black">try 'user'</p>
      </div>
    </div>
  );
};

export default Login;
