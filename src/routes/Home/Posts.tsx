import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, postsActions } from '../../redux';
import { Post } from '../../redux/posts';
import { filterPostsByString } from '../../utils';

const PostItem: React.FC<Post> = ({ id, userId, title, body }) => {
  return (
    <li
      className="grid gap-4 w-full max-w-lg m-2 items-start p-4 rounded-lg bg-white shadow-md"
      key={id}
    >
      <div className="flex justify-between border-b-2">
        <span className="italic">user id:</span>
        <span>{userId}</span>
      </div>
      <div className="text-center">
        <p>{title}</p>
      </div>
      <div className="text-center truncate">
        <span>{body}</span>
      </div>
    </li>
  );
};

const Posts: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const posts = useSelector((state: AppState) =>
    filterPostsByString(state.posts.data, searchQuery)
  );
  const userIsAdmin = useSelector(
    (state: AppState) => state.user.data?.isAdmin
  );

  useEffect(() => {
    dispatch(postsActions.startFetching());
  }, [dispatch]);

  const renderAdminContent = () => {
    return (
      <div className="w-full mt-2 px-2 max-w-lg">
        <input
          className="bg-white w-full rounded-full px-4 py-1 shadow-md"
          type="text"
          placeholder="Search post..."
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    );
  };

  return (
    <div className="grid w-full place-items-center p-4">
      <h1>POSTS PAGE</h1>
      {userIsAdmin && renderAdminContent()}
      <ul className="w-full mt-6 flex flex-wrap justify-evenly">
        {posts.map(PostItem)}
      </ul>
    </div>
  );
};

export default Posts;
