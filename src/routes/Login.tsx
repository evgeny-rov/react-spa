import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';

interface props {
  setAuth: any;
  isAuthenticated: boolean;
}

const Login: React.FC<props> = ({ setAuth, isAuthenticated }) => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    return setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (formState.username === 'user' && formState.password === 'user') {
        setFormState({ username: '', password: '' });
        setAuth(true);
      } else {
        setError(true);
      }
    }, 1000);
  };

  const renderLoading = () => {
    return (
      <div className="absolute h-full w-full rounded-xl bg-black opacity-50 z-50 grid place-items-center text-white">
        <p>Loading...</p>
      </div>
    );
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="min-h-screen w-full grid place-items-center">
      <div className="relative w-96 h-96 grid place-items-center border-2 border-white">
        {hasError && (
          <h1 className="absolute top-12 text-red-500">
            username or password is incorrect, try again
          </h1>
        )}
        {isLoading && renderLoading()}
        <form
          action="#"
          className="grid place-items-center gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="username"
            className={`bg-transparent p-2 w-40 border-2 text-white ${
              hasError ? 'border-red-500' : 'border-gray-300'
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
            className={`bg-transparent p-2 w-40 border-2 text-white ${
              hasError ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formState.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white uppercase text-xs w-40 px-4 py-2 text-black font-mono"
          >
            log in
          </button>
        </form>
        <p className="absolute bottom-4 opacity-25 text-white">try 'user'</p>
      </div>
    </div>
  );
};

export default Login;
