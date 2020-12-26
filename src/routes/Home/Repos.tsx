import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, reposActions } from '../../redux';
import { Repo } from '../../redux/repos';

const RepoItem: React.FC<Repo> = ({ name, description, created_at }) => {
  return (
    <li className="grid grid-cols-3 p-2 shadow-md bg-white rounded-md space-x-2" key={name}>
      <div>
        <p className="opacity-50 underline">Repository name:</p>
        <p>{name}</p>
      </div>
      <div>
        <p className="truncate opacity-50 underline">Description:</p>
        <p>{description}</p>
      </div>
      <div>
        <p className="opacity-50 underline">Created at:</p>
        <p>{new Date(created_at).toLocaleString()}</p>
      </div>
    </li>
  );
};

const Repos: React.FC = () => {
  const repos = useSelector((state: AppState) => state.repos.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reposActions.startFetching());
  }, [dispatch]);

  return <ul className="grid gap-2 w-full p-4">{repos.map(RepoItem)}</ul>;
};

export default Repos;
