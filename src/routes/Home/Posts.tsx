import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, postsActions } from '../../redux';

const Posts: React.FC = () => {
  const { posts } = useSelector((state: AppState) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsActions.startFetching());
  }, [dispatch]);

  return (
    <div className="grid w-full place-items-center p-4">
      <h1>POSTS PAGE</h1>
      <ul className="w-full mt-4 flex flex-wrap justify-evenly">
        {posts.map((post) => {
          return (
            <li
              className="grid gap-4 w-full max-w-lg m-2 items-start p-4 rounded-lg bg-white shadow-md"
              key={post.id}
            >
              <div className="flex justify-between border-b-2">
                <span className="italic">user id:</span>
                <span>{post.userId}</span>
              </div>
              <div className="text-center">
                <p>{post.title}</p>
              </div>
              <div className="text-center truncate">
                <span>{post.body}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
