import React, { useEffect, useState } from 'react';
import truncate from '../../utils/truncate';

interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [userData, setUserData] = useState<post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      setUserData(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="grid w-full place-items-center p-6">
      <h1>POSTS PAGE</h1>
      <ul className="w-full mt-4">
        {userData.map((post) => {
          return (
            <li className="grid grid-cols-3 items-start p-2" key={post.id}>
              <div>
                <p>user id:</p>
                <p>{post.userId}</p>
              </div>
              <div>
                <p>title:</p>
                <p>{truncate(post.title)}</p>
              </div>
              <div>
                <p>content:</p>
                <p>{truncate(post.body)}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
