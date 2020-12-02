import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';

interface props {
  setAuth: any;
  isAuthenticated: boolean;
}

const Login: React.FC<props> = ({ setAuth, isAuthenticated }) => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [hasError, setError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    return setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (formState.username === 'ass' && formState.password === '070ass') {
      setFormState({ username: '', password: '' });
      setError(false);
      setAuth(true);
    } else {
      setError(true);
    }
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="min-h-screen w-full grid place-items-center bg-gray-300">
      <div className="relative w-96 h-96 grid place-items-center bg-white rounded-xl shadow-md">
        {hasError && <h1 className="absolute top-12 text-red-500">username or password is incorrect, try again</h1>}
        <form
          action="#"
          className="grid place-items-center gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="username"
            className={`bg-gray-200 p-2 w-40 rounded-md border-2 ${hasError ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Username..."
            autoComplete="username"
            value={formState.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Password..."
            className={`bg-gray-200 p-2 w-40 rounded-md border-2 ${hasError ? 'border-red-500' : 'border-gray-300'}`}
            value={formState.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-yellow-100 uppercase text-xs rounded-md w-40 px-4 py-2 text-gray-800 font-mono"
          >
            log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
