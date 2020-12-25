import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../redux';

const Hero: React.FC = () => {
  const user = useSelector((state: AppState) => state.user.data);
  return (
    <div className="justify-self-center flex items-center space-x-4">
      {user?.isAdmin && <span>admin</span>}
      <div className="overflow-hidden rounded-full w-8 h-8">
        <img src={user?.avatar_url} alt="user avatar" />
      </div>
      <span>{user?.username}</span>
    </div>
  );
}

export default Hero;